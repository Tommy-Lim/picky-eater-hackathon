var models = require('../models/schemas');
var mongoose = require('mongoose');
mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost/pickyeater');

var listName1 = "beef"
var listName2 = "default"

var user1 = {
    email: "user1@email.com",
    password: "password"
}

var user2 = {
    email: "user2@email.com",
    password: "password"
}

// EXAMPLE RECIPE OBJECTS

var belgianBeefRecipe = {
    "uri": "http://www.edamam.com/ontologies/edamam.owl#recipe_6b9577e69eac956ff0ba4ae1738a7bda",
    "label": "Belgian Beer and Onion Beef",
    "image": "https://www.edamam.com/web-img/469/469470001db7c4dac371c3711a3e712c.jpg",
    "source": "Williams-Sonoma",
    "url": "http://www.williams-sonoma.com/recipe/belgian-beer-and-onion-beef.html",
    "shareAs": "http://www.edamam.com/recipe/belgian-beer-and-onion-beef-6b9577e69eac956ff0ba4ae1738a7bda/-",
    "yield": 4.0,
    "dietLabels": [
        "High-Protein",
        "Low-Carb"
    ],
    "healthLabels": [
        "Dairy-Free",
        "Gluten-Free",
        "Egg-Free",
        "Peanut-Free",
        "Tree-Nut-Free",
        "Soy-Free",
        "Fish-Free",
        "Shellfish-Free"
    ],
    "cautions": [

    ],
    "ingredientLines": [
        "3 1/2 to 4 lb. beef chuck, cut into 1-inch cubes, or 1 chicken, 4 to 5 lb., cut into 10 pieces",
        "Salt and freshly ground pepper, to taste",
        "1 tbs. vegetable oil",
        "1 jar belgian beer and onion braising base"
    ],
    "ingredients": [{
        "text": "3 1/2 to 4 lb. beef chuck, cut into 1-inch cubes, or 1 chicken, 4 to 5 lb., cut into 10 pieces",
        "weight": 2041.165665
    }, {
        "text": "Salt and freshly ground pepper, to taste",
        "weight": 13.08099399
    }, {
        "text": "Salt and freshly ground pepper, to taste",
        "weight": 6.540496995
    }, {
        "text": "1 tbs. vegetable oil",
        "weight": 14.0
    }, {
        "text": "1 jar belgian beer and onion braising base",
        "weight": 125.0
    }],
    "calories": 2843.69201195745,
    "totalWeight": 2199.787155985,
    "totalNutrients": {
        "ENERC_KCAL": {
            "label": "Energy",
            "quantity": 2843.69201195745,
            "unit": "kcal"
        },
        "FAT": {
            "label": "Fat",
            "quantity": 112.51828868853698,
            "unit": "g"
        },
        "FASAT": {
            "label": "Saturated",
            "quantity": 41.6334571383704,
            "unit": "g"
        },
        "FATRN": {
            "label": "Trans",
            "quantity": 5.2102941625,
            "unit": "g"
        },
        "FAMS": {
            "label": "Monounsaturated",
            "quantity": 61.37658246429305,
            "unit": "g"
        },
        "FAPU": {
            "label": "Polyunsaturated",
            "quantity": 8.807857721510102,
            "unit": "g"
        },
        "CHOCDF": {
            "label": "Carbs",
            "quantity": 18.3070466263025,
            "unit": "g"
        },
        "FIBTG": {
            "label": "Fiber",
            "quantity": 3.779745739735,
            "unit": "g"
        },
        "SUGAR": {
            "label": "Sugars",
            "quantity": 5.341859180768001,
            "unit": "g"
        },
        "PROCNT": {
            "label": "Protein",
            "quantity": 443.7628075437805,
            "unit": "g"
        },
        "CHOLE": {
            "label": "Cholesterol",
            "quantity": 1285.9343689500001,
            "unit": "mg"
        },
        "NA": {
            "label": "Sodium",
            "quantity": 6688.7606253932,
            "unit": "mg"
        },
        "CA": {
            "label": "Calcium",
            "quantity": 326.21537669545,
            "unit": "mg"
        },
        "MG": {
            "label": "Magnesium",
            "quantity": 452.45984945135,
            "unit": "mg"
        },
        "K": {
            "label": "Potassium",
            "quantity": 7884.017615032751,
            "unit": "mg"
        },
        "FE": {
            "label": "Iron",
            "quantity": 43.6011119368815,
            "unit": "mg"
        },
        "ZN": {
            "label": "Zinc",
            "quantity": 110.73047538473052,
            "unit": "mg"
        },
        "P": {
            "label": "Phosphorus",
            "quantity": 4475.913478302101,
            "unit": "mg"
        },
        "VITA_RAE": {
            "label": "Vitamin A",
            "quantity": 42.58924748865,
            "unit": "µg"
        },
        "VITC": {
            "label": "Vitamin C",
            "quantity": 9.25,
            "unit": "mg"
        },
        "THIA": {
            "label": "Thiamin (B1)",
            "quantity": 1.6974962687546,
            "unit": "mg"
        },
        "RIBF": {
            "label": "Riboflavin (B2)",
            "quantity": 3.5155045250910004,
            "unit": "mg"
        },
        "NIA": {
            "label": "Niacin (B3)",
            "quantity": 99.97152392920285,
            "unit": "mg"
        },
        "VITB6A": {
            "label": "Vitamin B6",
            "quantity": 11.762853823455451,
            "unit": "mg"
        },
        "FOLDFE": {
            "label": "Folate (Equivalent)",
            "quantity": 86.09685443915001,
            "unit": "µg"
        },
        "VITB12": {
            "label": "Vitamin B12",
            "quantity": 46.334460595500005,
            "unit": "µg"
        },
        "VITD": {
            "label": "Vitamin D",
            "quantity": 2.0411656650000003,
            "unit": "µg"
        },
        "TOCPHA": {
            "label": "Vitamin E",
            "quantity": 6.819119365748001,
            "unit": "mg"
        },
        "VITK1": {
            "label": "Vitamin K",
            "quantity": 41.824278555815,
            "unit": "µg"
        }
    },
    "totalDaily": {
        "ENERC_KCAL": {
            "label": "Energy",
            "quantity": 142.1846005978725,
            "unit": "%"
        },
        "FAT": {
            "label": "Fat",
            "quantity": 173.10505952082613,
            "unit": "%"
        },
        "FASAT": {
            "label": "Saturated",
            "quantity": 208.16728569185202,
            "unit": "%"
        },
        "CHOCDF": {
            "label": "Carbs",
            "quantity": 6.102348875434167,
            "unit": "%"
        },
        "FIBTG": {
            "label": "Fiber",
            "quantity": 15.11898295894,
            "unit": "%"
        },
        "PROCNT": {
            "label": "Protein",
            "quantity": 887.525615087561,
            "unit": "%"
        },
        "CHOLE": {
            "label": "Cholesterol",
            "quantity": 428.64478965000006,
            "unit": "%"
        },
        "NA": {
            "label": "Sodium",
            "quantity": 278.69835939138335,
            "unit": "%"
        },
        "CA": {
            "label": "Calcium",
            "quantity": 32.621537669545,
            "unit": "%"
        },
        "MG": {
            "label": "Magnesium",
            "quantity": 113.1149623628375,
            "unit": "%"
        },
        "K": {
            "label": "Potassium",
            "quantity": 225.25764614379287,
            "unit": "%"
        },
        "FE": {
            "label": "Iron",
            "quantity": 242.22839964934167,
            "unit": "%"
        },
        "ZN": {
            "label": "Zinc",
            "quantity": 738.2031692315369,
            "unit": "%"
        },
        "P": {
            "label": "Phosphorus",
            "quantity": 639.4162111860145,
            "unit": "%"
        },
        "VITA_RAE": {
            "label": "Vitamin A",
            "quantity": 4.73213860985,
            "unit": "%"
        },
        "VITC": {
            "label": "Vitamin C",
            "quantity": 15.416666666666666,
            "unit": "%"
        },
        "THIA": {
            "label": "Thiamin (B1)",
            "quantity": 113.16641791697333,
            "unit": "%"
        },
        "RIBF": {
            "label": "Riboflavin (B2)",
            "quantity": 206.7943838288824,
            "unit": "%"
        },
        "NIA": {
            "label": "Niacin (B3)",
            "quantity": 499.85761964601426,
            "unit": "%"
        },
        "VITB6A": {
            "label": "Vitamin B6",
            "quantity": 588.1426911727725,
            "unit": "%"
        },
        "FOLDFE": {
            "label": "Folate (Equivalent)",
            "quantity": 21.524213609787502,
            "unit": "%"
        },
        "VITB12": {
            "label": "Vitamin B12",
            "quantity": 772.2410099250001,
            "unit": "%"
        },
        "VITD": {
            "label": "Vitamin D",
            "quantity": 0.5102914162500001,
            "unit": "%"
        },
        "TOCPHA": {
            "label": "Vitamin E",
            "quantity": 34.09559682874001,
            "unit": "%"
        },
        "VITK1": {
            "label": "Vitamin K",
            "quantity": 52.28034819476875,
            "unit": "%"
        }
    },
    "digest": [{
        "label": "Fat",
        "tag": "FAT",
        "schemaOrgTag": "fatContent",
        "total": 112.51828868853698,
        "hasRDI": true,
        "daily": 173.10505952082613,
        "unit": "g",
        "sub": [{
            "label": "Saturated",
            "tag": "FASAT",
            "schemaOrgTag": "saturatedFatContent",
            "total": 41.6334571383704,
            "hasRDI": true,
            "daily": 208.16728569185202,
            "unit": "g"
        }, {
            "label": "Trans",
            "tag": "FATRN",
            "schemaOrgTag": "transFatContent",
            "total": 5.2102941625,
            "hasRDI": false,
            "daily": 0.0,
            "unit": "g"
        }, {
            "label": "Monounsaturated",
            "tag": "FAMS",
            "schemaOrgTag": null,
            "total": 61.37658246429305,
            "hasRDI": false,
            "daily": 0.0,
            "unit": "g"
        }, {
            "label": "Polyunsaturated",
            "tag": "FAPU",
            "schemaOrgTag": null,
            "total": 8.807857721510102,
            "hasRDI": false,
            "daily": 0.0,
            "unit": "g"
        }]
    }, {
        "label": "Carbs",
        "tag": "CHOCDF",
        "schemaOrgTag": "carbohydrateContent",
        "total": 18.3070466263025,
        "hasRDI": true,
        "daily": 6.102348875434167,
        "unit": "g",
        "sub": [{
            "label": "Carbs (net)",
            "tag": "CHOCDF.net",
            "schemaOrgTag": null,
            "total": 14.5273008865675,
            "hasRDI": false,
            "daily": 0.0,
            "unit": "g"
        }, {
            "label": "Fiber",
            "tag": "FIBTG",
            "schemaOrgTag": "fiberContent",
            "total": 3.779745739735,
            "hasRDI": true,
            "daily": 15.11898295894,
            "unit": "g"
        }, {
            "label": "Sugars",
            "tag": "SUGAR",
            "schemaOrgTag": "sugarContent",
            "total": 5.341859180768001,
            "hasRDI": false,
            "daily": 0.0,
            "unit": "g"
        }]
    }, {
        "label": "Protein",
        "tag": "PROCNT",
        "schemaOrgTag": "proteinContent",
        "total": 443.7628075437805,
        "hasRDI": true,
        "daily": 887.525615087561,
        "unit": "g"
    }, {
        "label": "Cholesterol",
        "tag": "CHOLE",
        "schemaOrgTag": "cholesterolContent",
        "total": 1285.9343689500001,
        "hasRDI": true,
        "daily": 428.64478965000006,
        "unit": "mg"
    }, {
        "label": "Sodium",
        "tag": "NA",
        "schemaOrgTag": "sodiumContent",
        "total": 6688.7606253932,
        "hasRDI": true,
        "daily": 278.69835939138335,
        "unit": "mg"
    }, {
        "label": "Calcium",
        "tag": "CA",
        "schemaOrgTag": null,
        "total": 326.21537669545,
        "hasRDI": true,
        "daily": 32.621537669545,
        "unit": "mg"
    }, {
        "label": "Magnesium",
        "tag": "MG",
        "schemaOrgTag": null,
        "total": 452.45984945135,
        "hasRDI": true,
        "daily": 113.1149623628375,
        "unit": "mg"
    }, {
        "label": "Potassium",
        "tag": "K",
        "schemaOrgTag": null,
        "total": 7884.017615032751,
        "hasRDI": true,
        "daily": 225.25764614379287,
        "unit": "mg"
    }, {
        "label": "Iron",
        "tag": "FE",
        "schemaOrgTag": null,
        "total": 43.6011119368815,
        "hasRDI": true,
        "daily": 242.22839964934167,
        "unit": "mg"
    }, {
        "label": "Zinc",
        "tag": "ZN",
        "schemaOrgTag": null,
        "total": 110.73047538473052,
        "hasRDI": true,
        "daily": 738.2031692315369,
        "unit": "mg"
    }, {
        "label": "Phosphorus",
        "tag": "P",
        "schemaOrgTag": null,
        "total": 4475.913478302101,
        "hasRDI": true,
        "daily": 639.4162111860145,
        "unit": "mg"
    }, {
        "label": "Vitamin A",
        "tag": "VITA_RAE",
        "schemaOrgTag": null,
        "total": 42.58924748865,
        "hasRDI": true,
        "daily": 4.73213860985,
        "unit": "µg"
    }, {
        "label": "Vitamin C",
        "tag": "VITC",
        "schemaOrgTag": null,
        "total": 9.25,
        "hasRDI": true,
        "daily": 15.416666666666666,
        "unit": "mg"
    }, {
        "label": "Thiamin (B1)",
        "tag": "THIA",
        "schemaOrgTag": null,
        "total": 1.6974962687546,
        "hasRDI": true,
        "daily": 113.16641791697333,
        "unit": "mg"
    }, {
        "label": "Riboflavin (B2)",
        "tag": "RIBF",
        "schemaOrgTag": null,
        "total": 3.5155045250910004,
        "hasRDI": true,
        "daily": 206.7943838288824,
        "unit": "mg"
    }, {
        "label": "Niacin (B3)",
        "tag": "NIA",
        "schemaOrgTag": null,
        "total": 99.97152392920285,
        "hasRDI": true,
        "daily": 499.85761964601426,
        "unit": "mg"
    }, {
        "label": "Vitamin B6",
        "tag": "VITB6A",
        "schemaOrgTag": null,
        "total": 11.762853823455451,
        "hasRDI": true,
        "daily": 588.1426911727725,
        "unit": "mg"
    }, {
        "label": "Folate (Equivalent)",
        "tag": "FOLDFE",
        "schemaOrgTag": null,
        "total": 86.09685443915001,
        "hasRDI": true,
        "daily": 21.524213609787502,
        "unit": "µg"
    }, {
        "label": "Vitamin B12",
        "tag": "VITB12",
        "schemaOrgTag": null,
        "total": 46.334460595500005,
        "hasRDI": true,
        "daily": 772.2410099250001,
        "unit": "µg"
    }, {
        "label": "Vitamin D",
        "tag": "VITD",
        "schemaOrgTag": null,
        "total": 2.0411656650000003,
        "hasRDI": true,
        "daily": 0.5102914162500001,
        "unit": "µg"
    }, {
        "label": "Vitamin E",
        "tag": "TOCPHA",
        "schemaOrgTag": null,
        "total": 6.819119365748001,
        "hasRDI": true,
        "daily": 34.09559682874001,
        "unit": "mg"
    }, {
        "label": "Vitamin K",
        "tag": "VITK1",
        "schemaOrgTag": null,
        "total": 41.824278555815,
        "hasRDI": true,
        "daily": 52.28034819476875,
        "unit": "µg"
    }]
}

var beefDumplingsRecipe = {
    "uri": "http://www.edamam.com/ontologies/edamam.owl#recipe_93362b8cfeee9ce5fd59e67125b49903",
    "label": "Beef and Ginger Jiaozi Dumplings",
    "image": "https://www.edamam.com/web-img/852/852d2ca352e83dcbe5ba2a9a336d2d78.jpg",
    "source": "Honest Cooking",
    "url": "http://honestcooking.com/beef-ginger-dumplings-recipe/",
    "shareAs": "http://www.edamam.com/recipe/beef-and-ginger-jiaozi-dumplings-93362b8cfeee9ce5fd59e67125b49903/-",
    "yield": 2.0,
    "dietLabels": [

    ],
    "healthLabels": [
        "Dairy-Free",
        "Peanut-Free",
        "Tree-Nut-Free",
        "Fish-Free",
        "Shellfish-Free"
    ],
    "cautions": [

    ],
    "ingredientLines": [
        "30 round dumpling wrappers",
        "250g minced beef",
        "1 shallot, finely chopped",
        "1 clove garlic, finely chopped",
        "2 teaspoons finely chopped fresh ginger",
        "1 tablespoon freshly chopped coriander",
        "1 tablespoon soy sauce",
        "1 tablespoon sesame oil",
        "1 tablespoon rice wine",
        "25g sugar",
        "1oo ml vinegar",
        "25ml soy sauce",
        "2 peeled slices of ginger",
        "1 clove garlic, sliced",
        "2 slices of fresh red chili"
    ],
    "ingredients": [{
        "text": "30 round dumpling wrappers",
        "weight": 240.0
    }, {
        "text": "250g minced beef",
        "weight": 250.0
    }, {
        "text": "1 shallot, finely chopped",
        "weight": 59.111111111111114
    }, {
        "text": "1 clove garlic, finely chopped",
        "weight": 3.0
    }, {
        "text": "2 teaspoons finely chopped fresh ginger",
        "weight": 4.0
    }, {
        "text": "1 tablespoon freshly chopped coriander",
        "weight": 5.0
    }, {
        "text": "1 tablespoon soy sauce",
        "weight": 16.0
    }, {
        "text": "1 tablespoon sesame oil",
        "weight": 13.6
    }, {
        "text": "1 tablespoon rice wine",
        "weight": 14.9
    }, {
        "text": "25g sugar",
        "weight": 25.0
    }, {
        "text": "1oo ml vinegar",
        "weight": 1.0059671753798292
    }, {
        "text": "25ml soy sauce",
        "weight": 26.945549340531137
    }, {
        "text": "2 peeled slices of ginger",
        "weight": 4.4
    }, {
        "text": "1 clove garlic, sliced",
        "weight": 3.0
    }, {
        "text": "2 slices of fresh red chili",
        "weight": 4.0
    }],
    "calories": 1358.00221524205,
    "totalWeight": 669.962627627022,
    "totalNutrients": {
        "ENERC_KCAL": {
            "label": "Energy",
            "quantity": 1358.00221524205,
            "unit": "kcal"
        },
        "FAT": {
            "label": "Fat",
            "quantity": 30.52800074235214,
            "unit": "g"
        },
        "FASAT": {
            "label": "Saturated",
            "quantity": 7.647371139907476,
            "unit": "g"
        },
        "FATRN": {
            "label": "Trans",
            "quantity": 0.625,
            "unit": "g"
        },
        "FAMS": {
            "label": "Monounsaturated",
            "quantity": 12.881823638975224,
            "unit": "g"
        },
        "FAPU": {
            "label": "Polyunsaturated",
            "quantity": 8.17113612809893,
            "unit": "g"
        },
        "CHOCDF": {
            "label": "Carbs",
            "quantity": 183.62646463602505,
            "unit": "g"
        },
        "FIBTG": {
            "label": "Fiber",
            "quantity": 9.004119950279804,
            "unit": "g"
        },
        "SUGAR": {
            "label": "Sugars",
            "quantity": 30.18902902867672,
            "unit": "g"
        },
        "PROCNT": {
            "label": "Protein",
            "quantity": 83.895825494097,
            "unit": "g"
        },
        "CHOLE": {
            "label": "Cholesterol",
            "quantity": 179.1,
            "unit": "mg"
        },
        "NA": {
            "label": "Sodium",
            "quantity": 3941.1824779522167,
            "unit": "mg"
        },
        "CA": {
            "label": "Calcium",
            "quantity": 230.61250042400923,
            "unit": "mg"
        },
        "MG": {
            "label": "Magnesium",
            "quantity": 168.12909951708016,
            "unit": "mg"
        },
        "K": {
            "label": "Potassium",
            "quantity": 1652.9393700859289,
            "unit": "mg"
        },
        "FE": {
            "label": "Iron",
            "quantity": 15.658345588923648,
            "unit": "mg"
        },
        "ZN": {
            "label": "Zinc",
            "quantity": 16.188211320424603,
            "unit": "mg"
        },
        "P": {
            "label": "Phosphorus",
            "quantity": 878.7965172589637,
            "unit": "mg"
        },
        "VITA_RAE": {
            "label": "Vitamin A",
            "quantity": 16.52,
            "unit": "µg"
        },
        "VITC": {
            "label": "Vitamin C",
            "quantity": 13.818888888888887,
            "unit": "mg"
        },
        "THIA": {
            "label": "Thiamin (B1)",
            "quantity": 1.5241686979490419,
            "unit": "mg"
        },
        "RIBF": {
            "label": "Riboflavin (B2)",
            "quantity": 1.4470283786340987,
            "unit": "mg"
        },
        "NIA": {
            "label": "Niacin (B3)",
            "quantity": 26.557666485740288,
            "unit": "mg"
        },
        "VITB6A": {
            "label": "Vitamin B6",
            "quantity": 1.8672727463573193,
            "unit": "mg"
        },
        "FOLDFE": {
            "label": "Folate (Equivalent)",
            "quantity": 357.23415468545204,
            "unit": "µg"
        },
        "VITB12": {
            "label": "Vitamin B12",
            "quantity": 5.723,
            "unit": "µg"
        },
        "VITD": {
            "label": "Vitamin D",
            "quantity": 0.25,
            "unit": "µg"
        },
        "TOCPHA": {
            "label": "Vitamin E",
            "quantity": 0.7182844444444444,
            "unit": "mg"
        },
        "VITK1": {
            "label": "Vitamin K",
            "quantity": 6.74288888888889,
            "unit": "µg"
        }
    },
    "totalDaily": {
        "ENERC_KCAL": {
            "label": "Energy",
            "quantity": 67.9001107621025,
            "unit": "%"
        },
        "FAT": {
            "label": "Fat",
            "quantity": 46.96615498823407,
            "unit": "%"
        },
        "FASAT": {
            "label": "Saturated",
            "quantity": 38.23685569953738,
            "unit": "%"
        },
        "CHOCDF": {
            "label": "Carbs",
            "quantity": 61.208821545341685,
            "unit": "%"
        },
        "FIBTG": {
            "label": "Fiber",
            "quantity": 36.01647980111922,
            "unit": "%"
        },
        "PROCNT": {
            "label": "Protein",
            "quantity": 167.79165098819396,
            "unit": "%"
        },
        "CHOLE": {
            "label": "Cholesterol",
            "quantity": 59.7,
            "unit": "%"
        },
        "NA": {
            "label": "Sodium",
            "quantity": 164.21593658134236,
            "unit": "%"
        },
        "CA": {
            "label": "Calcium",
            "quantity": 23.061250042400925,
            "unit": "%"
        },
        "MG": {
            "label": "Magnesium",
            "quantity": 42.03227487927004,
            "unit": "%"
        },
        "K": {
            "label": "Potassium",
            "quantity": 47.226839145312255,
            "unit": "%"
        },
        "FE": {
            "label": "Iron",
            "quantity": 86.9908088273536,
            "unit": "%"
        },
        "ZN": {
            "label": "Zinc",
            "quantity": 107.92140880283068,
            "unit": "%"
        },
        "P": {
            "label": "Phosphorus",
            "quantity": 125.54235960842338,
            "unit": "%"
        },
        "VITA_RAE": {
            "label": "Vitamin A",
            "quantity": 1.8355555555555556,
            "unit": "%"
        },
        "VITC": {
            "label": "Vitamin C",
            "quantity": 23.031481481481478,
            "unit": "%"
        },
        "THIA": {
            "label": "Thiamin (B1)",
            "quantity": 101.61124652993612,
            "unit": "%"
        },
        "RIBF": {
            "label": "Riboflavin (B2)",
            "quantity": 85.11931639024111,
            "unit": "%"
        },
        "NIA": {
            "label": "Niacin (B3)",
            "quantity": 132.78833242870144,
            "unit": "%"
        },
        "VITB6A": {
            "label": "Vitamin B6",
            "quantity": 93.36363731786597,
            "unit": "%"
        },
        "FOLDFE": {
            "label": "Folate (Equivalent)",
            "quantity": 89.30853867136301,
            "unit": "%"
        },
        "VITB12": {
            "label": "Vitamin B12",
            "quantity": 95.38333333333333,
            "unit": "%"
        },
        "VITD": {
            "label": "Vitamin D",
            "quantity": 0.0625,
            "unit": "%"
        },
        "TOCPHA": {
            "label": "Vitamin E",
            "quantity": 3.591422222222222,
            "unit": "%"
        },
        "VITK1": {
            "label": "Vitamin K",
            "quantity": 8.428611111111113,
            "unit": "%"
        }
    },
    "digest": [{
        "label": "Fat",
        "tag": "FAT",
        "schemaOrgTag": "fatContent",
        "total": 30.52800074235214,
        "hasRDI": true,
        "daily": 46.96615498823407,
        "unit": "g",
        "sub": [{
            "label": "Saturated",
            "tag": "FASAT",
            "schemaOrgTag": "saturatedFatContent",
            "total": 7.647371139907476,
            "hasRDI": true,
            "daily": 38.23685569953738,
            "unit": "g"
        }, {
            "label": "Trans",
            "tag": "FATRN",
            "schemaOrgTag": "transFatContent",
            "total": 0.625,
            "hasRDI": false,
            "daily": 0.0,
            "unit": "g"
        }, {
            "label": "Monounsaturated",
            "tag": "FAMS",
            "schemaOrgTag": null,
            "total": 12.881823638975224,
            "hasRDI": false,
            "daily": 0.0,
            "unit": "g"
        }, {
            "label": "Polyunsaturated",
            "tag": "FAPU",
            "schemaOrgTag": null,
            "total": 8.17113612809893,
            "hasRDI": false,
            "daily": 0.0,
            "unit": "g"
        }]
    }, {
        "label": "Carbs",
        "tag": "CHOCDF",
        "schemaOrgTag": "carbohydrateContent",
        "total": 183.62646463602505,
        "hasRDI": true,
        "daily": 61.208821545341685,
        "unit": "g",
        "sub": [{
            "label": "Carbs (net)",
            "tag": "CHOCDF.net",
            "schemaOrgTag": null,
            "total": 174.62234468574525,
            "hasRDI": false,
            "daily": 0.0,
            "unit": "g"
        }, {
            "label": "Fiber",
            "tag": "FIBTG",
            "schemaOrgTag": "fiberContent",
            "total": 9.004119950279804,
            "hasRDI": true,
            "daily": 36.01647980111922,
            "unit": "g"
        }, {
            "label": "Sugars",
            "tag": "SUGAR",
            "schemaOrgTag": "sugarContent",
            "total": 30.18902902867672,
            "hasRDI": false,
            "daily": 0.0,
            "unit": "g"
        }]
    }, {
        "label": "Protein",
        "tag": "PROCNT",
        "schemaOrgTag": "proteinContent",
        "total": 83.895825494097,
        "hasRDI": true,
        "daily": 167.79165098819396,
        "unit": "g"
    }, {
        "label": "Cholesterol",
        "tag": "CHOLE",
        "schemaOrgTag": "cholesterolContent",
        "total": 179.1,
        "hasRDI": true,
        "daily": 59.7,
        "unit": "mg"
    }, {
        "label": "Sodium",
        "tag": "NA",
        "schemaOrgTag": "sodiumContent",
        "total": 3941.1824779522167,
        "hasRDI": true,
        "daily": 164.21593658134236,
        "unit": "mg"
    }, {
        "label": "Calcium",
        "tag": "CA",
        "schemaOrgTag": null,
        "total": 230.61250042400923,
        "hasRDI": true,
        "daily": 23.061250042400925,
        "unit": "mg"
    }, {
        "label": "Magnesium",
        "tag": "MG",
        "schemaOrgTag": null,
        "total": 168.12909951708016,
        "hasRDI": true,
        "daily": 42.03227487927004,
        "unit": "mg"
    }, {
        "label": "Potassium",
        "tag": "K",
        "schemaOrgTag": null,
        "total": 1652.9393700859289,
        "hasRDI": true,
        "daily": 47.226839145312255,
        "unit": "mg"
    }, {
        "label": "Iron",
        "tag": "FE",
        "schemaOrgTag": null,
        "total": 15.658345588923648,
        "hasRDI": true,
        "daily": 86.9908088273536,
        "unit": "mg"
    }, {
        "label": "Zinc",
        "tag": "ZN",
        "schemaOrgTag": null,
        "total": 16.188211320424603,
        "hasRDI": true,
        "daily": 107.92140880283068,
        "unit": "mg"
    }, {
        "label": "Phosphorus",
        "tag": "P",
        "schemaOrgTag": null,
        "total": 878.7965172589637,
        "hasRDI": true,
        "daily": 125.54235960842338,
        "unit": "mg"
    }, {
        "label": "Vitamin A",
        "tag": "VITA_RAE",
        "schemaOrgTag": null,
        "total": 16.52,
        "hasRDI": true,
        "daily": 1.8355555555555556,
        "unit": "µg"
    }, {
        "label": "Vitamin C",
        "tag": "VITC",
        "schemaOrgTag": null,
        "total": 13.818888888888887,
        "hasRDI": true,
        "daily": 23.031481481481478,
        "unit": "mg"
    }, {
        "label": "Thiamin (B1)",
        "tag": "THIA",
        "schemaOrgTag": null,
        "total": 1.5241686979490419,
        "hasRDI": true,
        "daily": 101.61124652993612,
        "unit": "mg"
    }, {
        "label": "Riboflavin (B2)",
        "tag": "RIBF",
        "schemaOrgTag": null,
        "total": 1.4470283786340987,
        "hasRDI": true,
        "daily": 85.11931639024111,
        "unit": "mg"
    }, {
        "label": "Niacin (B3)",
        "tag": "NIA",
        "schemaOrgTag": null,
        "total": 26.557666485740288,
        "hasRDI": true,
        "daily": 132.78833242870144,
        "unit": "mg"
    }, {
        "label": "Vitamin B6",
        "tag": "VITB6A",
        "schemaOrgTag": null,
        "total": 1.8672727463573193,
        "hasRDI": true,
        "daily": 93.36363731786597,
        "unit": "mg"
    }, {
        "label": "Folate (Equivalent)",
        "tag": "FOLDFE",
        "schemaOrgTag": null,
        "total": 357.23415468545204,
        "hasRDI": true,
        "daily": 89.30853867136301,
        "unit": "µg"
    }, {
        "label": "Vitamin B12",
        "tag": "VITB12",
        "schemaOrgTag": null,
        "total": 5.723,
        "hasRDI": true,
        "daily": 95.38333333333333,
        "unit": "µg"
    }, {
        "label": "Vitamin D",
        "tag": "VITD",
        "schemaOrgTag": null,
        "total": 0.25,
        "hasRDI": true,
        "daily": 0.0625,
        "unit": "µg"
    }, {
        "label": "Vitamin E",
        "tag": "TOCPHA",
        "schemaOrgTag": null,
        "total": 0.7182844444444444,
        "hasRDI": true,
        "daily": 3.591422222222222,
        "unit": "mg"
    }, {
        "label": "Vitamin K",
        "tag": "VITK1",
        "schemaOrgTag": null,
        "total": 6.74288888888889,
        "hasRDI": true,
        "daily": 8.428611111111113,
        "unit": "µg"
    }]
}

// ADD RECIPE TO LIST

function addRecipe(newRecipe, list) {
    models.List.findOne({ // look for the list
            'userEmail': list.userEmail,
            'listName': list.listName
        }),
        function(err, List) {
            console.log("err: ", err);
            console.log("List: ", List);
            if (!List) { // if the list does not exist
                createList(list); // use the previous function to create it
            } else { // if the list does exist
                console.log("List found: ", list.ListName);
                models.Recipe.findOne({ // see if the newRecipe already exists
                    uri: newRecipe.uri
                }, function(err, recipe) {
                    console.log("err: ", err);
                    console.log("recipe: ", recipe);
                    if (!recipe) { // if the newRecipe does not exist
                        list.recipeList.push(recipe); // push the recipe object to the list
                        list.save(); // save that list
                    } else {
                        console.log("recipe found: ", recipe.label);
                    }
                });
            }
        }
    }

    addRecipe(belgianBeefRecipe, list1);
    addRecipe(beefDumplingsRecipe, list2);
