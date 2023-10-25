import { Article } from "../../types/types.ts";
import ArticleCard from "./ArticleCard.tsx";
import FilterSelection from "./FilterSelection.tsx";

function ArticleCards(props: {
  articles: Article[];
  sports: string[];
  teams: string[];
  setSportsFilter: (filter: string) => void;
  setTeamsFilter: (filter: string) => void;
  selectedSports: string[];
  selectedTeams: string[];
}) {
  return (
    <div className="mx-12">
      <hr className="border-4 m-4  border-black w-full rounded-2xl" />
      <h1 className="text-3xl font-bold text-center text-gray-900">Articles</h1>
      <div className="flex items-center justify-center">
        <FilterSelection
          filterData={props.sports}
          title="Filter By Sports"
          setFilterCB={props.setSportsFilter}
          selectedData={props.selectedSports}
        />
      </div>
      <div className="flex items-center justify-center">
        <FilterSelection
          filterData={props.teams}
          title="Filter By Teams"
          setFilterCB={props.setTeamsFilter}
          selectedData={props.selectedTeams}
        />
      </div>
      {props.articles.map((article) => {
        return (
          <div key={article.id}>
            <ArticleCard article={article} />
          </div>
        );
      })}
    </div>
  );
}

export default ArticleCards;
