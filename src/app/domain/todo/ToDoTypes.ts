export interface IToDo {
  id: string;
  name: string;
  category: string;
  content: string;
  created?: string;
  isArchived: boolean;
  dates?: string[];
}
