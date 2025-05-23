import { Exercise, Workout, MuscleGroup, ExerciseType } from '@/types';

export const exercises: Exercise[] = [
  {
    id: 'squat',
    name: 'Barbell Back Squat',
    description: 'A compound movement targeting the legs and core.',
    muscleGroups: [MuscleGroup.Legs, MuscleGroup.Core],
    type: ExerciseType.FreeWeight,
    estimated1RM: 120,
  },
  {
    id: 'bench_press',
    name: 'Barbell Bench Press',
    description: 'A classic chest exercise focusing on strength and mass.',
    muscleGroups: [MuscleGroup.Chest],
    type: ExerciseType.FreeWeight,
    estimated1RM: 100,
  },
  {
    id: 'deadlift',
    name: 'Conventional Deadlift',
    description: 'A full-body movement emphasizing posterior chain development.',
    muscleGroups: [MuscleGroup.Legs, MuscleGroup.Back],
    type: ExerciseType.FreeWeight,
    estimated1RM: 140,
  },
  {
    id: 'pull_up',
    name: 'Pull-Up',
    description: 'A bodyweight exercise targeting the upper back and biceps.',
    muscleGroups: [MuscleGroup.Back, MuscleGroup.Arms],
    type: ExerciseType.BodyWeight,
    estimated1RM: 0,
  },
  {
    id: 'lat_pulldown',
    name: 'Lat Pulldown',
    description: 'A machine exercise focusing on the latissimus dorsi.',
    muscleGroups: [MuscleGroup.Back],
    type: ExerciseType.Machine,
    estimated1RM: 80,
  },
  {
    id: 'leg_press',
    name: 'Leg Press',
    description: 'A machine-based leg exercise targeting quadriceps and glutes.',
    muscleGroups: [MuscleGroup.Legs],
    type: ExerciseType.Machine,
    estimated1RM: 200,
  },
  {
    id: 'plank',
    name: 'Plank',
    description: 'An isometric core exercise for stability and endurance.',
    muscleGroups: [MuscleGroup.Core],
    type: ExerciseType.BodyWeight,
    estimated1RM: 0,
  },
  {
    id: 'treadmill',
    name: 'Treadmill Running',
    description: 'Cardio exercise for cardiovascular health and endurance.',
    muscleGroups: [MuscleGroup.Legs],
    type: ExerciseType.Cardio,
    estimated1RM: 0,
  },
  {
    id: 'stretching',
    name: 'Hamstring Stretch',
    description: 'A flexibility exercise for the posterior chain.',
    muscleGroups: [MuscleGroup.Legs],
    type: ExerciseType.Stretching,
    estimated1RM: 0,
  },
  {
    id: 'jump_rope',
    name: 'Jump Rope',
    description: 'Cardio exercise improving coordination and endurance.',
    muscleGroups: [MuscleGroup.Legs],
    type: ExerciseType.Cardio,
    estimated1RM: 0,
  },
];

export const workouts: Workout[] = [
  {
    id: 'leg_day',
    name: 'Leg Day Routine',
    date: '2025-05-22',
    description: 'A comprehensive leg workout focusing on strength and hypertrophy.',
    exercises: [
      {
        exercise: exercises.find(e => e.id === 'squat')!,
        sets: 4,
        reps: [6, 6, 6, 6],
        weight: [100, 100, 100, 100],
      },
      {
        exercise: exercises.find(e => e.id === 'leg_press')!,
        sets: 3,
        reps: [10, 10, 10],
        weight: [180, 180, 180],
      },
      {
        exercise: exercises.find(e => e.id === 'plank')!,
        sets: 3,
        reps: [60, 60, 60],
        weight: [0, 0, 0],
      },
    ],
  },
  {
    id: 'upper_body',
    name: 'Upper Body Strength',
    date: '2025-05-21',
    description: 'Focuses on chest, back, and arms for overall upper body strength.',
    exercises: [
      {
        exercise: exercises.find(e => e.id === 'bench_press')!,
        sets: 4,
        reps: [8, 8, 8, 8],
        weight: [90, 90, 90, 90],
      },
      {
        exercise: exercises.find(e => e.id === 'pull_up')!,
        sets: 3,
        reps: [6, 6, 6],
        weight: [0, 0, 0],
      },
      {
        exercise: exercises.find(e => e.id === 'lat_pulldown')!,
        sets: 3,
        reps: [10, 10, 10],
        weight: [70, 70, 70],
      },
    ],
  },
  {
    id: 'cardio_day',
    name: 'Cardio Session',
    date: '2025-05-20',
    description: 'A cardio-focused workout for endurance and fat loss.',
    exercises: [
      {
        exercise: exercises.find(e => e.id === 'treadmill')!,
        sets: 1,
        reps: [30],
        weight: [0],
      },
      {
        exercise: exercises.find(e => e.id === 'jump_rope')!,
        sets: 3,
        reps: [300, 300, 300],
        weight: [0, 0, 0],
      },
    ],
  },
];