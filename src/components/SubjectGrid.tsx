import { motion } from "motion/react";
import { Subject } from "../types";
import { Card, CardContent } from "@/components/ui/card";
import * as Icons from "lucide-react";

interface SubjectGridProps {
  subjects: Subject[];
  onSelect: (subjectId: string) => void;
}

export default function SubjectGrid({ subjects, onSelect }: SubjectGridProps) {
  return (
    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
      {subjects.map((subject, idx) => {
        // @ts-ignore
        const Icon = Icons[subject.icon] || Icons.Book;
        
        return (
          <motion.div
            key={subject.id}
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: idx * 0.1 }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Card 
              className={`cursor-pointer border-none shadow-lg hover:shadow-xl transition-all duration-300 ${subject.color}`}
              onClick={() => onSelect(subject.id)}
            >
              <CardContent className="p-6 flex flex-col items-center justify-center aspect-square text-white">
                <div className="p-4 bg-white/20 rounded-2xl mb-4">
                  <Icon size={48} strokeWidth={1.5} />
                </div>
                <h3 className="font-bold text-lg text-center leading-tight">
                  {subject.name}
                </h3>
                <p className="text-sm opacity-80 font-medium">
                  {subject.jawiName}
                </p>
              </CardContent>
            </Card>
          </motion.div>
        );
      })}
    </div>
  );
}
