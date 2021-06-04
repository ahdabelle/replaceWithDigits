String.prototype.replaceWithDigits = function(){
    
    if(lang == "de"){
        
        var number = ["Eins", "Elf", "Einundzwanzig", "Einunddreiβig", "Einundvierzig", "Einundfünfzig", "Einundsechzig", "Einundsiebzig", "Einundachtzig", "Einundneunzig",
            "Zwei", "Zwölf", "Zweiundzwanzig", "Zweiunddreiβig", "Zweiundvierzig", "Zweiundfünfzig", "Zweiundsechzig", "Zweiundsiebzig", "Zweiundachtzig", "Zweiundneunzig",
            "Drei", "Dreizehn", "Dreiundzwanzig", "Dreiunddreiβig", "Dreiundvierzig", "Dreiundfünfzig", "Dreiundsechzig", "Dreiundsiebzig", "Dreiundachtzig", "Dreiundneunzig",
            "Vier", "Vierzehn", "Vierundzwanzig", "Vierunddreiβig", "Vierundvierzig", "Vierundfünfzig", "Vierundsechzig", "Vierundsiebzig", "Vierundachtzig", "Vierundneunzig",
            "Fünf", "Fünfzehn", "Fünfundzwanzig", "Fünfunddreiβig", "Fünfundvierzig", "Fünfundfünfzig", "Fünfundsechzig", "Fünfundsiebzig", "Fünfundachtzig", "Fünfundneunzig",
            "Sechs", "Sechzehn", "Sechsundzwanzig", "Sechsunddreiβig", "Sechsundvierzig", "Sechsundfünfzig", "Sechsundsechzig", "Sechsundsiebzig", "Sechsundachtzig", "Sechsundneunzig",
            "Sieben", "Siebzehn", "Siebenundzwanzig", "Siebenunddreiβig", "Siebenundvierzig", "Siebenundfünfzig", "Siebenundsechzig", "Siebenundsiebzig", "Siebenundachtzig", "Siebenundneunzig",
            "Acht", "Achtzehn", "Achtundzwanzig", "Achtunddreiβig", "Achtundvierzig", "Achtundfünfzig", "Achtundsechzig", "Achtundsiebzig", "Achtundachtzig", "Achtundneunzig",
            "Neun", "Neunzehn", "Neunundzwanzig", "Neununddreiβig", "Neunundvierzig", "Neunundfünfzig", "Neunundsechzig", "Neunundsiebzig", "Neunundachtzig", "Neunundneunzig",
            "Zehn", "Zwanzig", "Dreiβig", "Vierzig", "Fünfzig", "Sechzig", "Siebzig", "Achtzig", "Neunzig", "Einhundert"
        ];
        
    }else if(lang == "fr"){
        
        var number = ["Un", "Onze", "Vingt et un", "Trente et un", "Quarante et un", "Cinquante et un", "Soixante et un", "Soixante et onze", "Quatre-vingt-un", "Quatre-vingt-onze", 
            "Deux", "Douze", "Vingt-deux", "Trente-deux", "Quarante-deux", "Cinquante-deux", "Soixante-deux", "Soixante-douze", "Quatre-vingt-deux", "Quatre-vingt-douze", 
            "Trois", "Treize", "Vingt-trois", "Trente-trois", "Quarante-trois", "Cinquante-trois", "Soixante-trois", "Soixante-treize", "Quatre-vingt-trois", "Quatre-vingt-treize", 
            "Quatre", "Quatorze", "Vingt-quatre", "Trente-quatre", "Quarante-quatre", "Cinquante-quatre", "Soixante-quatre", "Soixante-quatorze", "Quatre-vingt-quatre", "Quatre-vingt-quatorze", 
            "Cinq", "Quinze", "Vingt-cinq", "Trente-cinq", "Quarante-cinq", "Cinquante-cinq", "Soixante-cinq", "Soixante-quinze", "Quatre-vingt-cinq", "Quatre-vingt-quinze", 
            "Six", "Seize", "Vingt-six", "Trente-six", "Quarante-six", "Cinquante-six", "Soixante-six", "Soixante-six", "Quatre-vingt-six", "Quatre-vingt-seize", 
            "Sept", "Dix-sept", "Vingt-sept", "Trente-sept", "Quarante-sept", "Cinquante-sept", "Soixante-sept", "Soixante-dix-sept", "Quatre-vingt-sept", "Quatre-vingt-dix-sept", 
            "Huit", "Dix-huit", "Vingt-huit", "Trente-huit", "Fo rty-huit","Cinquante-huit"," Soixante-huit","Soixante-dix-huit","Quatre-vingt-huit"," Quatre-vingt-dix-huit",
            "Neuf","Dix-neuf"," Vingt-neuf "," Trente-neuf ", "Quarante-neuf","Cinquante-neuf","Soixante-neuf","Soixante-dix-neuf ","Quatre-vingt-neuf"," Quatre-vingt-dix-neuf",
            "Dix","Vingt","Trente","Quarante","Cinquante","Soixante","Soixante-dix","Quatre-vingt","Quatre-vingt-dix","Cent"
        ];
        
        
    }else{
        
        var number = ["One", "Eleven", "Twenty-one", "Thirty-one", "Forty-one", "Fifty-one", "Sixty-one", "Seventy-one", "Eighty-one", "Ninety-one",
            "Two", "Twelve", "Twenty-two", "Thirty-two", "Forty-two", "Fifty-two", "Sixty-two", "Seventy-two", "Eighty-two", "Ninety-two",
            "Three", "Thirteen", "Twenty-three", "Thirty-three", "Forty-three", "Fifty-three", "Sixty-three", "Seventy-three", "Eighty-three", "Ninety-three",
            "Four", "Fourteen", "Twenty-four", "Thirty-four", "Forty-four", "Fifty-four", "Sixty-four", "Seventy-four", "Eighty-four", "Ninety-four",
            "Five", "Fifteen", "Twenty-five", "Thirty-five", "Forty-five", "Fifty-five", "Sixty-five", "Seventy-five", "Eighty-five", "Ninety-five",
            "Six", "Sixteen", "Twenty-six", "Thirty-six", "Forty-six", "Fifty-six", "Sixty-six", "Seventy-six", "Eighty-six", "Ninety-six",
            "Seven", "Seventeen", "Twenty-seven", "Thirty-seven", "Forty-seven", "Fifty-seven", "Sixty-seven", "Seventy-seven", "Eighty-seven", "Ninety-seven",
            "Eight", "Eighteen", "Twenty-eight", "Thirty-eight", "Forty-eight", "Fifty-eight", "Sixty-eight", "Seventy-eight", "Eighty-eight", "Ninety-eight",
            "Nine", "Nineteen", "Twenty-nine", "Thirty-nine", "Forty-nine", "Fifty-nine", "Sixty-nine", "Seventy-nine", "Eighty-nine", "Ninety-nine",
            "Ten", "Twenty", "Thirty", "Forty", "Fifty", "Sixty", "Seventy", "Eighty", "Ninety", "One Hundred"
        ];

        
    }
    
    var digit = ["1", "11", "21", "31", "41", "51", "61", "71", "81", "91",
            "2", "12", "22", "32", "42", "52", "62", "72", "82", "92",
            "3", "13", "23", "33", "43", "53", "63", "73", "83", "93",
            "4", "14", "24", "34", "44", "54", "64", "74", "84", "94",
            "5", "15", "25", "35", "45", "55", "65", "75", "85", "95",
            "6", "16", "26", "36", "46", "56", "66", "76", "86", "96",
            "7", "17", "27", "37", "47", "57", "67", "77", "87", "97",
            "8", "18", "28", "38", "48", "58", "68", "78", "88", "98",
            "9", "19", "29", "39", "49", "59", "69", "79", "89", "99",
        	"10", "20", "30", "40", "50", "60", "70", "80", "90", "100"
        ];
    
    var str = this;
    for(var i = 0; i < number.length; i++){
        str = str.replace(number[i].toLowerCase().trim(), digit[i]);
    }
     
    return str;
}
