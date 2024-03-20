import { createContext, useState } from 'react';

type User = {
  avatar_url: string;
  name: string;
  html_url: string;
  bio: string;
  login: string;
  company: string;
  followers: number;
}

type IssueList = {
  id: number;
  title: string;
  body: string;
  created_at: string;
  html_url: string;
  comments: number;
  user: User;
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