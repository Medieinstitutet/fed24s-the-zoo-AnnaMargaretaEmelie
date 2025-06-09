import "./App.scss";

export function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="animals" element={<AnimalList />} />
          <Route path="animals/:id" element={<AnimalDetail />} />
          <Route path="*" element={<p>Sidan kunde inte hittas</p>} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
