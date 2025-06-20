import { useEffect, useState } from "react";

export const useFetch = <T>(url: string): {
    loading: boolean;
    data: T | undefined;
    error: string | null;
} => {
    const [loading, setLoading] = useState(false);
    const [data, setData] = useState<T>();
    const [error, setError] = useState<string | null>(null);

    useEffect(()=>{
        const getData = async () => {
        setLoading(true);
        try {
            const response = await fetch(url);
            if(!response.ok) throw new Error("Couldn't fetch those animals");
            const json: T = await response.json();
            setData(json);
        } catch (err: any) {
            setError(err.message || "Unexpected error...");
        } finally {
            setLoading(false);
        }
    };
    getData();
    }, [url]);

    return {loading, data, error};
};