import { ExcerciseFourToDoEntity } from "excercises/Excercise-4-adding-page-objects-and-entities/excercise-4-to-do-entity";

export const getExcerciseFiveTasks = (): ExcerciseFourToDoEntity[] => {
    return [
        { taskName: "First one", isCompleted: false },
        { taskName: "Second one", isCompleted: false },
        { taskName: "Third one", isCompleted: false }
    ]
};