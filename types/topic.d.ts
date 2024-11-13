interface TopicProps {
    id:string;
    topic: string;
    icon: IconType;
    status: string;
    start_date: string;
    end_date: string;
    description: string;
    weeks: Week[];
}

interface Week {
    week: string;
    status: string;
    range: string;
    mentor: string;
    title: string;
    description: string;
    main: Main;
    homeworks: Homeworks;
}

interface Main {
    title: string;
    repeat: string;
    start_time: string;
    end_time: string;
    subtitle: string;
    lessons: Lesson[];
    tasks: Task[];
}

interface Lesson {
    lesson: string;
    title: string;
    description: string;
}

interface Task {
    task: string;
    title: string;
    description: string;
}

interface Homeworks {
    title: string;
    description: string;
    days: Day[];
}

interface Day {
    day: string;
    title: string;
    tasks: Task[];
}