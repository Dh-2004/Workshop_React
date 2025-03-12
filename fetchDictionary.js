export const fetchWordDefinition = (word, setData, setError) => {
  if (!word) return;

  fetch(`https://api.dictionaryapi.dev/api/v2/entries/en/${word}`)
    .then((response) => {
      if (!response.ok) {
        throw new Error("Word not found!");
      }
      return response.json();
    })
    .then((result) => {
      setData(result[0]); 
      setError(""); 
    })
    .catch((error) => {
      setError(error.message);
      setData(null);
    });
};
