const personGenerator = {
    personData: {
        surnameJson: {  
            "count": 15,
            "list": [
                "Иванов",
                "Смирнов",
                "Кузнецов",
                "Васильев",
                "Петров",
                "Михайлов",
                "Новиков",
                "Федоров",
                "Кравцов",
                "Николаев",
                "Семёнов",
                "Славин",
                "Степанов",
                "Павлов",
                "Александров",
                "Морозов"
            ]
        },

        patronimicJson: {
            "count": 10,
            "list": [    
                "Александро",
                "Максимо",
                "Ивано",
                "Артемо",
                "Дмитрие",
                "Никито",
                "Михаило",
                "Даниило",
                "Егоро",
                "Андрее"
            ]
        },

        firstNameMaleJson: {
            "count": 10,
            "list": [    
                "Александр",
                "Максим",
                "Иван",
                "Артем",
                "Дмитрий",
                "Никита",
                "Михаил",
                "Даниил",
                "Егор",
                "Андрей"
            ]
        },

        firstNameFemaleJson: {
            "count": 15,
            "list": [    
                "Ксения",
                "Жанна",
                "Анжела",
                "Анастасия",
                "Светлана",
                "Диана",
                "Изабелла",
                "Юлия",
                "Кристина",
                "Елизавета",
                "Cоня",
                "Дарья",
                "Мария",
                "Ольга",
                "Наталья",
            ]
        },
        profession_male: {
            "count": 15,
            "list": [    
                "Грузчик",
                "Военный",
                "Библиотекарь",
                "Бизнесмен",
                "Учитель",
                "Слесарь",
                "Пилот",
                "Шеф-Повар",
                "Дальнобойщик",
                "Пограничник",
                "Судья",
                "Инспектор ДПС",
                "Депутат",
                "Безработный",
                "Альфонс"
            ]
        },
        profession_female: {
            "count": 15,
            "list": [    
                "Грузчица",
                "Военная",
                "Библиотекарша",
                "Бизнесменша",
                "Учительница",
                "Пилотесса",
                "Повариха",
                "Дальнобойщица",
                "Пограничница",
                "Судья",
                "Инспекторша ДПС",
                "Депутатша",
                "Безработная",
                "Содержанка"
            ]
        },
    },

    GENDER_MALE: 'Мужчина',
    GENDER_FEMALE: 'Женщина',
    
    randomGender: function (){
         return this.randomIntNumber () ? this.GENDER_FEMALE : this.GENDER_MALE;
    },

    randomIntNumber: (max = 1, min = 0) => Math.floor(Math.random() * (max - min + 1) + min),

    randomPatronimic: function (json, gender) {
        const obj = JSON.parse(json);
        let patr = this.randomValue(obj.patronimicJson);
        if (gender == "Женщина") {
           return  patr + 'вна';
        } else {
           return patr + 'вич';
        }
    },

    randomValue: function(items){
        return items.list[Math.floor(Math.random()*items.list.length)];
    },

    randomFirstName: function(gender) {
      if (gender == "Женщина") {
           return (this.randomValue(this.personData.firstNameFemaleJson));
        } else {
           return (this.randomValue(this.personData.firstNameMaleJson));
      }
      
    },
       

    randomSurname: function(gender) {
         if (gender == "Женщина") {
           return ((this.randomValue(this.personData.surnameJson)) + "а");
        } else {
           return (this.randomValue(this.personData.surnameJson));
      }
    },

    randomProfession: function(gender) {
      if (gender == "Женщина") {
           return (this.randomValue(this.personData.profession_female));
        } else {
           return (this.randomValue(this.personData.profession_male));
      }
      
    },

    randomDate:function(year) {
        let start = new Date(year, 0, 1);
        let end = new Date(year, 11, 31);
        return new Date(start.getTime() + Math.random() * (end.getTime() - start.getTime()));
    },


    getPerson: function () {
        const months = [
           'Января',
           'Февраля',
           'Марта',
           'Апреля',
           'Мая',
           'Июня',
           'Июля',
           'Августа',
           'Сентября',
           'Октября',
           'Ноября',
           'Декабря',
        ];
        person = {};
        person.gender = this.randomGender();
        person.firstName = this.randomFirstName(person.gender);
        person.surname = this.randomSurname(person.gender);
        person.patronymic = this.randomPatronimic(JSON.stringify(this.personData), person.gender);
        let year = this.randomIntNumber(1960, 2000);
        let date = this.randomDate(year);
        person.year = date.getDate() + " " + months[date.getMonth()] + " " + date.getFullYear();
        person.profession = this.randomProfession(person.gender);
        return person;
    },
};
