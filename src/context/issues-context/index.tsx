import { createContext, useState } from 'react';

type IssueList = {
  id: number;
  title: string;
  body: string;
  created_at: string;
};

type Issues = {
  items: IssueList[];
  total_count: number;
};

type IssuesContextType = {
  issues: Issues;
  updateIssues: (issues: Issues) => void;
};

export const IssuesContext = createContext({} as IssuesContextType);

export function IssuesProvider({ children }: { children: React.ReactNode }) {
  const [issues, setIssue] = useState({} as Issues);

  const updateIssues = (issue: Issues) => {
    setIssue(issue);
  };

  return (
    <IssuesContext.Provider value={{ issues, updateIssues }}>
      {children}
    </IssuesContext.Provider>
  );
}