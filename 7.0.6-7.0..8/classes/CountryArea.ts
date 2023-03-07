import { MetaDataReflection } from "../decorators/reflectionUtils";

export class CountryArea {
    public name: string;
    public area: number;

    constructor(name: string, area: number) {
        this.name = name;
        this.area = area;
    }
    
    @MetaDataReflection.Validate
    public getFullInfoAboutCountry(@MetaDataReflection.Required text: string, unit: string): string {
        return `${this.name} ${text} ${this.area} [${unit}]`;
    }
}