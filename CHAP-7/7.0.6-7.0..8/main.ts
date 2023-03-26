import { CityPopulation } from "./classes/CityPopulation";
import { Converter } from "./classes/Converter";
import { CountryArea } from "./classes/CountryArea";
import { MetaDataReflection } from "./decorators/reflectionUtils";

Reflect.defineMetadata("description", "JavaScript number converter", Converter);
Reflect.defineMetadata("description", "Convert value to decimal number", Converter, "toDec");
Reflect.defineMetadata("description", "Convert value to hexadecimal number", Converter, "toHex");
Reflect.defineMetadata("description", "Convert value to octal number", Converter, "toOct");
Reflect.defineMetadata("description", "Convert value to binary number", Converter, "toBin");

MetaDataReflection.showDescriptions(Converter);

const londonPopulation = new CityPopulation("London", 8.96);
MetaDataReflection.showFieldReclectionInfo(londonPopulation);

const islandArea = new CountryArea("Island", 103125);

try {
    console.log(islandArea.getFullInfoAboutCountry("", "km2"))
} catch (e) {
    console.log(e);
}