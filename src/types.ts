export type Exercise = {
    id: string;
    name: string;
    description: string;
    muscleGroups: MuscleGroup[];
    type: ExerciseType;
    estimated1RM: number;
}

export type ExerciseWithSets = {
    exercise: Exercise;
    sets: number;
    reps: number[];
    weight: number[];
}

export type Workout = {
    id: string;
    name: string;
    date: string;
    description: string;
    exercises: ExerciseWithSets[];
}

export enum MuscleGroup {
    Chest = 'Chest',
    Back = 'Back',
    Shoulders = 'Shoulders',
    Arms = 'Arms',
    Legs = 'Legs',
    Core = 'Core',
}

export enum ExerciseType {
    Machine = 'Machine',
    FreeWeight = 'Free Weight',
    BodyWeight = 'Body Weight',
    Cardio = 'Cardio',
    Stretching = 'Stretching',
    Other = 'Other',
}