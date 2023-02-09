import axios from "axios";
import { createContext, useEffect, useRef, useState } from "react";
import { ToastStyle } from "../../components/Toast/ToastStyle";
import { GeneralReportInterface } from "./components/GeneralReport/interfaces";
import { GetGeneralReportService } from "./components/GeneralReport/services";
import { GraphDetailsInterface } from "./components/Graph/components/SplineGraph/interfaces";
import { GetGraphDetailsService } from "./components/Graph/components/SplineGraph/services";
import { EntryInterface } from "./components/ListEntries/interfaces";
import {
  GetEntriesService,
  GetGoalEntriesService,
  RemoveEntryGoalService,
  RemoveEntryService,
} from "./components/ListEntries/services";
import { GoalInterface } from "./components/ListGoals/interfaces";
import { GetAllGoalsService, RemoveGoalService } from "./components/ListGoals/services";

interface HomeContextProps {
  goals: GoalInterface[];
  entries: EntryInterface[];
  generalReport: GeneralReportInterface[];
  selectedGoal: GoalInterface | null;
  totalBalance: number | undefined;
  graphDetails: GraphDetailsInterface[];
  loading: LoadingProps;

  HandleSelectGoal(goal: GoalInterface): void;
  RemoveGoal(id: string): Promise<void>;
  RemoveEntry(id: string): Promise<void>;
  RemoveEntryGoal(id: string): Promise<void>;
  Reload(): void;

  GetGoals(): Promise<void>;
  GetEntries(): Promise<void>;
  GetGeneralReport(): Promise<void>;
  GetGraph(): Promise<void>;
}

interface HomeProviderProps {
  children: React.ReactNode;
}

interface LoadingProps {
  goals: boolean;
  entries: boolean;
  generalReport: boolean;
  graph: boolean;
}

export const HomeContext = createContext({} as HomeContextProps);

export function HomeContextProvider({ children }: HomeProviderProps) {
  const firstRender = useRef(true);
  const [selectedGoal, setSelectedGoal] = useState<GoalInterface | null>(null);
  const [goals, setGoals] = useState<GoalInterface[]>([]);
  const [entries, setEntries] = useState<EntryInterface[]>([]);
  const [generalReport, setGeneralReport] = useState<GeneralReportInterface[]>([]);
  const [totalBalance, setTotalBalance] = useState<number>();
  const [graphDetails, setGraphDetails] = useState<GraphDetailsInterface[]>([]);
  const [loading, setLoading] = useState<LoadingProps>({
    entries: true,
    generalReport: true,
    goals: true,
    graph: true,
  });

  async function GetGoals() {
    setLoading((prev) => {
      return { ...prev, goals: true };
    });
    try {
      const { data } = await GetAllGoalsService();
      setGoals(data);
    } catch (error) {
      if (axios.isAxiosError(error)) {
        ToastStyle({ message: error.response?.data.message, styleToast: "error" });
      }
    } finally {
      setLoading((prev) => {
        return { ...prev, goals: false };
      });
    }
  }

  async function GetEntries() {
    setLoading((prev) => {
      return { ...prev, entries: true };
    });
    try {
      const { data } = await GetEntriesService();
      setEntries(data);
    } catch (error) {
      if (axios.isAxiosError(error)) {
        ToastStyle({ message: error.response?.data.message, styleToast: "error" });
      }
    } finally {
      setLoading((prev) => {
        return { ...prev, entries: false };
      });
    }
  }

  async function GetGoalEntries(id: string) {
    setLoading((prev) => {
      return { ...prev, entries: true };
    });
    try {
      const { data } = await GetGoalEntriesService(id);
      setEntries(data);
    } catch (error) {
      if (axios.isAxiosError(error)) {
        ToastStyle({ message: error.response?.data.message, styleToast: "error" });
      }
    } finally {
      setLoading((prev) => {
        return { ...prev, entries: false };
      });
    }
  }

  async function GetGeneralReport() {
    setLoading((prev) => {
      return { ...prev, generalReport: true };
    });
    try {
      const { data } = await GetGeneralReportService();
      setGeneralReport(data);
    } catch (error) {
      if (axios.isAxiosError(error)) {
        ToastStyle({ message: error.response?.data.message, styleToast: "error" });
      }
    } finally {
      setLoading((prev) => {
        return { ...prev, generalReport: false };
      });
    }
  }

  async function GetGraph() {
    setLoading((prev) => {
      return { ...prev, graph: true };
    });
    try {
      const { data } = await GetGraphDetailsService(selectedGoal?.id);
      setGraphDetails(data);
    } catch (error) {
      if (axios.isAxiosError(error)) {
        ToastStyle({ message: error.response?.data.message, styleToast: "error" });
      }
    } finally {
      setLoading((prev) => {
        return { ...prev, graph: false };
      });
    }
  }

  async function RemoveGoal(id: string) {
    try {
      await RemoveGoalService(id);
      setSelectedGoal(null);
      Reload();
    } catch (error) {
      if (axios.isAxiosError(error)) {
        ToastStyle({ message: error.response?.data.message, styleToast: "error" });
      }
    }
  }

  async function RemoveEntry(id: string) {
    try {
      await RemoveEntryService(id);
      Reload();
    } catch (error) {
      if (axios.isAxiosError(error)) {
        ToastStyle({ message: error.response?.data.message, styleToast: "error" });
      }
    }
  }

  async function RemoveEntryGoal(id: string) {
    try {
      await RemoveEntryGoalService(id);
      Reload();
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
    GetGraph();
  }

  useEffect(() => {
    const total = entries.reduce(
      (acc, value) => Number(acc) + Number(value.income) - Number(value.outcome),
      0
    );
    setTotalBalance(total);
  }, [entries]);

  useEffect(() => {
    if (!firstRender.current && graphDetails.length !== 0) {
      GetGraph();
    }
  }, [selectedGoal]);

  return (
    <HomeContext.Provider
      value={{
        goals,
        entries,
        generalReport,
        selectedGoal,
        totalBalance,
        graphDetails,
        loading,
        HandleSelectGoal,
        RemoveGoal,
        RemoveEntry,
        RemoveEntryGoal,
        Reload,
        GetEntries,
        GetGeneralReport,
        GetGoals,
        GetGraph,
      }}
    >
      {children}
    </HomeContext.Provider>
  );
}
