import { MetaDataReflection } from "../decorators/reflectionUtils";

export class CityPopulation {
    @MetaDataReflection.FieldReclectionAnnotation("[ city name ]")
    public name: string;
    
    @MetaDataReflection.FieldReclectionAnnotation("[ city population in millions ]")
    public population: number;

    constructor(name: string, pupulation: number) {
        this.name = name;
        this.population = pupulation;
    }
}