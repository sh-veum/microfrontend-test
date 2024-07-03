import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Eye } from "lucide-react";

const ViewsCard = ({ views }: { views: number }) => {
  return (
    <Card className="min-w-64 h-min">
      <CardHeader>
        <div className="flex justify-between">
          <p className="text-sm font-bold">Views this month</p>
          <p>
            <Eye />
          </p>
        </div>
        <CardTitle>{views}</CardTitle>
        <CardDescription>+10% from last month</CardDescription>
      </CardHeader>
    </Card>
  );
};

export default ViewsCard;
