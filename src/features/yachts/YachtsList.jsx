import MaxWidthWrapper from "../../components/MaxWidthWrapper";
import {yachts} from "../yacht/yachtData";
import YachtItem from "./YachtItem";

async function YachtsList() {
  return (
    <MaxWidthWrapper>
      <div className="flex items-center justify-between mb-8 pb-5 border-b border-border/60">
        <div className="hidden sm:flex items-center gap-2 text-sm text-muted-foreground">
          <span className="inline-flex items-center gap-1.5">
            <span className="w-2 h-2 rounded-full bg-accent inline-block" />
            All locations
          </span>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {yachts.map((yacht) => (
          <YachtItem key={yacht.id} yacht={yacht} />
        ))}
      </div>
    </MaxWidthWrapper>
  );
}

export default YachtsList;
