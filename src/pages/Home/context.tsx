import axios from "axios";
import { createContext, useEffect, useState } from "react";
import { ToastStyle } from "../../components/Toast/ToastStyle";
import { GeneralReportInterface } from "./components/GeneralReport/interfaces";
import { GetGeneralReportService } from "./components/GeneralReport/services";
import { EntryInterface } from "./components/ListEntries/interfaces";
import { GetEntriesService, GetGoalEntriesService } from "./components/ListEntries/services";
import { GoalInterface } from "./components/ListGoals/interfaces";
import { GetAllGoalsService } from "./components/ListGoals/services";

interface HomeContextProps {
  goals: GoalInterface[];
  entries: EntryInterface[];
  generalReport: GeneralReportInterface[];
  selectedGoal: GoalInterface | null;
  totalBalance: number | undefined;

  HandleSelectGoal(goal: GoalInterface): void;
  Reload(): void;
}

interface HomeProviderProps {
  children: React.ReactNode;
}

export const HomeContext = createContext({} as HomeContextProps);

export function HomeContextProvider({ children }: HomeProviderProps) {
  const [selectedGoal, setSelectedGoal] = useState<GoalInterface | null>(null);
  const [goals, setGoals] = useState<GoalInterface[]>([]);
  const [entries, setEntries] = useState<EntryInterface[]>([]);
  const [generalReport, setGeneralReport] = useState<GeneralReportInterface[]>([]);
  const [totalBalance, setTotalBalance] = useState<number>();

  async function GetGoals() {
    try {
      const { data } = await GetAllGoalsService();
      setGoals(data);
    } catch (error) {
      if (axios.isAxiosError(error)) {
        ToastStyle({ message: error.response?.data.message, styleToast: "error" });
      }
    }
  }

  async function GetEntries() {
    try {
      const { data } = await GetEntriesService();
      setEntries(data);
    } catch (error) {
      if (axios.isAxiosError(error)) {
        ToastStyle({ message: error.response?.data.message, styleToast: "error" });
      }
    }
  }

  async function GetGoalEntries(id: string) {
    try {
      const { data } = await GetGoalEntriesService(id);
      setEntries(data);
    } catch (error) {
      if (axios.isAxiosError(error)) {
        ToastStyle({ message: error.response?.data.message, styleToast: "error" });
      }
    }
  }

  async function GetGeneralReport() {
    try {
      const { data } = await GetGeneralReportService();
      setGeneralReport(data);
    } catch (error) {
      if (axios.isAxiosError(error)) {
        ToastStyle({ message: error.response?.data.message, styleToast: "error" });
      }
    }
  }

  function HandleSelectGoal(goal: GoalInterface) {
    if (selectedGoal?.id === goal.id) {
      setSelectedGoal(null);
      GetEntries();
    } else {
      setSelectedGoal(goal);
      GetGoalEntries(goal.id);
    }
  }

  function Reload() {
    GetGoals();
    GetEntries();
    GetGeneralReport();
  }

  useEffect(() => {
    const total = entries.reduce(
      (acc, value) => Number(acc) + Number(value.income) - Number(value.outcome),
      0
    );
    setTotalBalance(total);
  }, [entries]);

  useEffect(() => {
    Reload();
  }, []);

  return (
    <HomeContext.Provider
      value={{
        goals,
        entries,
        generalReport,
        selectedGoal,
        totalBalance,
        HandleSelectGoal,
        Reload,
      }}
    >
      {children}
    </HomeContext.Provider>
  );
}
