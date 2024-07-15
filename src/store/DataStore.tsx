import { createContext, useState, useContext } from 'react';


// Create the context
const NewsContext = createContext();

// Create the provider component
export const NewsProvider = ({ children }:any) => {
  const [newsData, setNewsData] = useState<any>([]);

  return (
    <NewsContext.Provider value={{ newsData, setNewsData }}>
      {children}
    </NewsContext.Provider>
  );
};


export const useNews = () => useContext(NewsContext);
