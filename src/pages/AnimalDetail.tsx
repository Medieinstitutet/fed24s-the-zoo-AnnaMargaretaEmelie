import { useParams } from "react-router";
import { useFetch } from "../hooks/useFetch";
import type { IAnimal } from "../models/Animal";
import { useEffect, useState } from "react";

export const AnimalDetail = () => {
  const { id } = useParams();
  const {
    loading,
    data: animal,
    error,
  } = useFetch<IAnimal>(`https://animals.azurewebsites.net/api/animals/${id}`);

  const [lastFed, setLastFed] = useState<Date | null>(null);
  const [now, setNow] = useState<Date>(new Date());

  useEffect(() => {
    const stored = localStorage.getItem(`fed-${id}`);
    if (stored) {
      setLastFed(new Date(stored));
    }
    const interval = setInterval(() => {
      setNow(new Date());
    }, 60000);
    return () => clearInterval(interval);
  }, [id]);

  const handleFeed = () => {
    const fedTime = new Date();
    setLastFed(fedTime);
    localStorage.setItem(`fed-${id}`, fedTime.toISOString());
  };
  const getStatus = () => {
    if (!lastFed) return "Hungrig";
    const diff = now.getTime() - lastFed.getTime();
    const hours = diff / (1000 * 60 * 60);
    if (hours < 3) return "Mätt";
    if (hours < 4) return "Snart hungrig";
    return "Hungrig";
  };

  const isFeedable = () => {
    if (!lastFed) return true;
    const diff = now.getTime() - lastFed.getTime();
    return diff >= 4 * 60 * 60 * 1000;
  };

  if (loading) return <p>Laddar ditt valda djur.</p>;
  if (error || !animal) return <p>Kunde inte hämta djuret.</p>;
  return (
    <>
      <div className="animal-detail">
        <h2>{animal.name}</h2>
        <img
          src={animal.imageUrl}
          alt={animal.name}
          onError={(e) => (e.currentTarget.src = "/fallback.png")}
        />
        <p>
          {animal.longDescription ||
            "Ingen ytterligare information är tillgänglig."}
        </p>
        <p>Status: {getStatus()}</p>
        <button onClick={handleFeed} disabled={!isFeedable()}>
          {isFeedable() ? "Mata" : "Inte hungrig"}
        </button>
      </div>
    </>
  );
};
