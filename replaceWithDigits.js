String.prototype.replaceWithDigits = function(){
    
    if(lang == "de"){
        
        var number = ["Neunundneunzig","Neunundachtzig","Neunundsiebzig","Neunundsechzig","Neunundfünfzig","Neunundvierzig","Neununddreiβig","Neunundzwanzig","Neunzehn",
            "Achtundneunzig","Achtundachtzig","Achtundsiebzig","Achtundsechzig","Achtundfünfzig","Achtundvierzig","Achtunddreiβig","Achtundzwanzig","Achtzehn",
            "Siebenundneunzig","Siebenundachtzig","Siebenundsiebzig","Siebenundsechzig","Siebenundfünfzig","Siebenundvierzig","Siebenunddreiβig","Siebenundzwanzig","Siebzehn",
            "Sechsundneunzig","Sechsundachtzig","Sechsundsiebzig","Sechsundsechzig","Sechsundfünfzig","Sechsundvierzig","Sechsunddreiβig","Sechsundzwanzig","Sechzehn",
            "Fünfundneunzig","Fünfundachtzig","Fünfundsiebzig","Fünfundsechzig","Fünfundfünfzig","Fünfundvierzig","Fünfunddreiβig","Fünfundzwanzig","Fünfzehn",
            "Vierundneunzig","Vierundachtzig","Vierundsiebzig","Vierundsechzig","Vierundfünfzig","Vierundvierzig","Vierunddreiβig","Vierundzwanzig","Vierzehn",
            "Dreiundneunzig","Dreiundachtzig","Dreiundsiebzig","Dreiundsechzig","Dreiundfünfzig","Dreiundvierzig","Dreiunddreiβig","Dreiundzwanzig","Dreizehn",
            "Zweiundneunzig","Zweiundachtzig","Zweiundsiebzig","Zweiundsechzig","Zweiundfünfzig","Zweiundvierzig","Zweiunddreiβig","Zweiundzwanzig","Zwölf",
            "Einundneunzig","Einundachtzig","Einundsiebzig","Einundsechzig","Einundfünfzig","Einundvierzig","Einunddreiβig","Einundzwanzig","Elf",
            "Einhundert","Neunzig","Achtzig","Siebzig","Sechzig","Fünfzig","Vierzig","Dreiβig","Zwanzig","Zehn","Neun","Acht","Sieben","Sechs","Fünf","Vier","Drei","Zwei","Eins"
        ];

        
    }else if(lang == "fr"){
        
        var number = ["Quatre-vingt-dix-neuf","Quatre-vingt-neuf","Soixante-dix-neuf ","Soixante-neuf","Cinquante-neuf","Quarante-neuf"," Trente-neuf "," Vingt-neuf ","Dix-neuf",
            "Quatre-vingt-dix-huit","Quatre-vingt-huit", "Soixante-dix-huit"," Soixante-huit","Cinquante-huit","Quarante-huit","Trente-huit","Vingt-huit","Dix-huit",
            "Quatre-vingt-dix-sept","Quatre-vingt-sept","Soixante-dix-sept","Soixante-sept","Cinquante-sept","Quarante-sept","Trente-sept","Vingt-sept","Dix-sept",
            "Quatre-vingt-seize","Quatre-vingt-six","Soixante-six","Soixante-six","Cinquante-six","Quarante-six","Trente-six","Vingt-six","Seize",
            "Quatre-vingt-quinze","Quatre-vingt-cinq","Soixante-quinze","Soixante-cinq","Cinquante-cinq","Quarante-cinq","Trente-cinq","Vingt-cinq","Quinze",
            "Quatre-vingt-quatorze","Quatre-vingt-quatre","Soixante-quatorze","Soixante-quatre","Cinquante-quatre","Quarante-quatre","Trente-quatre","Vingt-quatre","Quatorze",
            "Quatre-vingt-treize","Quatre-vingt-trois","Soixante-treize","Soixante-trois","Cinquante-trois","Quarante-trois","Trente-trois","Vingt-trois","Treize",
            "Quatre-vingt-douze","Quatre-vingt-deux","Soixante-douze","Soixante-deux","Cinquante-deux","Quarante-deux","Trente-deux","Vingt-deux","Douze",
            "Quatre-vingt-onze","Quatre-vingt-un","Soixante et onze","Soixante et un","Cinquante et un","Quarante et un","Trente et un","Vingt et un","Onze",
            "Cent","Quatre-vingt-dix","Quatre-vingt","Soixante-dix","Soixante","Cinquante","Quarante","Trente","Vingt","Dix",
            "Neuf","Huit","Sept","Six","Cinq","Quatre","Trois","Deux","Un"
        ];
        
    }else{
        
        var number = ["Ninety-nine","Eighty-nine","Seventy-nine","Sixty-nine","Fifty-nine","Forty-nine","Thirty-nine","Twenty-nine","Nineteen",
            "Ninety-eight","Eighty-eight","Seventy-eight","Sixty-eight","Fifty-eight","Forty-eight","Thirty-eight","Twenty-eight","Eighteen",
            "Ninety-seven","Eighty-seven","Seventy-seven","Sixty-seven","Fifty-seven","Forty-seven","Thirty-seven","Twenty-seven","Seventeen",
            "Ninety-six","Eighty-six","Seventy-six","Sixty-six","Fifty-six","Forty-six","Thirty-six","Twenty-six","Sixteen",
            "Ninety-five","Eighty-five","Seventy-five","Sixty-five","Fifty-five","Forty-five","Thirty-five","Twenty-five","Fifteen",
            "Ninety-four","Eighty-four","Seventy-four","Sixty-four","Fifty-four","Forty-four","Thirty-four","Twenty-four","Fourteen",
            "Ninety-three","Eighty-three","Seventy-three","Sixty-three","Fifty-three","Forty-three","Thirty-three","Twenty-three","Thirteen",
            "Ninety-two","Eighty-two","Seventy-two","Sixty-two","Fifty-two","Forty-two","Thirty-two","Twenty-two","Twelve",
            "Ninety-one","Eighty-one","Seventy-one","Sixty-one","Fifty-one","Forty-one","Thirty-one","Twenty-one","Eleven",
            "One Hundred","Ninety","Eighty","Seventy","Sixty","Fifty","Forty","Thirty","Twenty","Ten",
            "Nine","Eight","Seven","Six","Five","Four","Three","Two","One"
        ];
        
    }
    
    var digit = ["99","89","79","69","59","49","39","29","19",
        "98","88","78","68","58","48","38","28","18",
        "97","87","77","67","57","47","37","27","17",
        "96","86","76","66","56","46","36","26","16",
        "95","85","75","65","55","45","35","25","15",
        "94","84","74","64","54","44","34","24","14",
        "93","83","73","63","53","43","33","23","13",
        "92","82","72","62","52","42","32","22","12",
        "91","81","71","61","51","41","31","21","11",
        "100","90","80","70","60","50","40","30","20","10",
        "9","8","7","6","5","4","3","2","1"
    ];
    
    var str = this;
    for(var i = 0; i < number.length; i++){
        str = str.replace(number[i].toLowerCase().trim(), digit[i]);
    }
     
    return str;
}
