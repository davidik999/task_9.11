const personGenerator = {

    surnameJson: `{  
        "count": 15,
        "list": {
            "id_1": "Иванов",
            "id_2": "Смирнов",
            "id_3": "Кузнецов",
            "id_4": "Васильев",
            "id_5": "Петров",
            "id_6": "Михайлов",
            "id_7": "Новиков",
            "id_8": "Федоров",
            "id_9": "Кравцов",
            "id_10": "Николаев",
            "id_11": "Семёнов",
            "id_12": "Славин",
            "id_13": "Степанов",
            "id_14": "Павлов",
            "id_15": "Александров",
            "id_16": "Морозов"
        }
    }`,

    firstNameMaleJson: `{
        "count": 10,
        "list": {     
            "id_1": "Александр",
            "id_2": "Максим",
            "id_3": "Иван",
            "id_4": "Артем",
            "id_5": "Дмитрий",
            "id_6": "Никита",
            "id_7": "Михаил",
            "id_8": "Даниил",
            "id_9": "Егор",
            "id_10": "Андрей"
        }
    }`,

    firstNameFemaleJson: `{
        "count": 15,
        "list": {     
            "id_1": "Ксения",
            "id_2": "Жанна",
            "id_3": "Анжела",
            "id_4": "Анастасия",
            "id_5": "Светлана",
            "id_6": "Диана",
            "id_7": "Изабелла",
            "id_8": "Юлия",
            "id_9": "Кристина",
            "id_10": "Елизавета",
            "id_11": "Cоня",
            "id_12": "Дарья",
            "id_13": "Мария",
            "id_14": "Ольга",
            "id_15": "Наталья"
        }
    }`,
    profession: `{
        "count": 15,
        "list": {     
            "id_1": "Грузчик",
            "id_2": "Военный",
            "id_3": "Библиотекарь",
            "id_4": "Бизнесмен",
            "id_5": "Учитель",
            "id_6": "Слесарь",
            "id_7": "Пилот",
            "id_8": "Шеф-Повар",
            "id_9": "Дальнобойщик",
            "id_10": "Пограничник",
            "id_11": "Судья",
            "id_12": "Инспектор ДПС",
            "id_13": "Депутат",
            "id_14": "Безработный",
            "id_15": "Альфонс"
        }
    }`,

    GENDER_MALE: 'Мужчина',
    GENDER_FEMALE: 'Женщина',

    randomGender: function () {
        return this.randomIntNumber() ? this.GENDER_FEMALE : this.GENDER_MALE;
    },

    randomIntNumber: (max = 1, min = 0) => Math.floor(Math.random() * (max - min + 1) + min),


    randomValue: function (json) {
        const obj = JSON.parse(json);
        const prop = `id_${this.randomIntNumber(obj.count, 1)}`; 
        return obj.list[prop];
    },

    randomPatronimic: function (gender) {
        let name = this.randomValue(this.firstNameMaleJson);
        if (gender == "Женщина") {
            if (name[name.length - 1] == 'й') {
                name = name.substring(0, name.length - 1);
                return name + 'евна';
            } else if (name[name.length - 1] == 'а') {
                name = name.substring(0, name.length - 1);
                return name + 'овна';
            } else {
                return name + 'овна';
            }
        } else {
            if (name[name.length - 1] == 'й') {
                name = name.substring(0, name.length - 1);
                return name + 'евич';
            } else if (name[name.length - 1] == 'а') {
                name = name.substring(0, name.length - 1);
                return name + 'ович';
            } else {
                return name + 'ович';
            }
        }
    },

    randomFirstName: function (gender) {
        if (gender == "Женщина") {
            return (this.randomValue(this.firstNameFemaleJson));
        } else {
            return (this.randomValue(this.firstNameMaleJson));
        }

    },


    randomSurname: function (gender) {
        if (gender == "Женщина") {
            return ((this.randomValue(this.surnameJson)) + "а");
        } else {
            return (this.randomValue(this.surnameJson));
        }
    },

    randomProfession: function (gender) {
        if (gender == "Женщина") {
            const forbiden = ["Грузчик", "Военный", "Слесарь", "Дальнобойщик", "Безработный", "Альфонс"];
            let prof = this.randomValue(this.profession);
            while (forbiden.includes(prof))
                prof = this.randomValue(this.profession);
            return prof;
        } else {
            return (this.randomValue(this.profession));
        }

    },

    randomDate: function (year) {
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
        person.patronymic = this.randomPatronimic(person.gender);
        let year = this.randomIntNumber(1960, 2000);
        let date = this.randomDate(year);
        person.year = date.getDate() + " " + months[date.getMonth()] + " " + date.getFullYear();
        person.profession = this.randomProfession(person.gender);
        return person;
    },
};
