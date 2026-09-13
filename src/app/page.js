import MainLogo from "@/components/shared/MainLogo";
import PlayerSearch from "@/components/shared/PlayerSearch";

export default function Home() {
  return (
    <div className="flex  items-start">
      <PlayerSearch />
      <MainLogo />
    </div>
  );
}
