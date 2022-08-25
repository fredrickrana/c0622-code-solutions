select "countries"."name",
      count("cities"."name") as numberOfCities
from "countries"
join "cities" using ("countryId")
group by "countries"."countryId";
