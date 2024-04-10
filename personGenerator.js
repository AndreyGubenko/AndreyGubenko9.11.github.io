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
        "count": 10,
        "list": {     
            "id_1": "Елена",
            "id_2": "Ольга",
            "id_3": "Ксения",
            "id_4": "Анастасия",
            "id_5": "Светлана",
            "id_6": "Валерия",
            "id_7": "Арина",
            "id_8": "Наталья",
            "id_9": "Дарья",
            "id_10": "Александра"
        }
    }`,

    secondNameJson: `{
        "count": 10,
        "list": {
            "id_1": "Алексеев",
            "id_2": "Андреев",
            "id_3": "Викторов",
            "id_4": "Сергеев",
            "id_5": "Иванов",
            "id_6": "Дмитриев",
            "id_7": "Александров",
            "id_8": "Егоров",
            "id_9": "Михайлов",
            "id_10": "Максимов"
        }
    }`,

    jobMaleJson: `{
        "count": 10,
        "list": {
            "id_1": "Столяр",
            "id_2": "Сварщик",
            "id_3": "Военнослужащий",
            "id_4": "Шахтер",
            "id_5": "Слесарь",
            "id_6": "Водитель",
            "id_7": "Машинист",
            "id_8": "Техник",
            "id_9": "Охранник",
            "id_10": "Полицейский"
        }
    }`,

    jobFemaleJson: `{
        "count": 10,
        "list": {
            "id_1": "Парикмахер",
            "id_2": "Госслужащая",
            "id_3": "Повар",
            "id_4": "Актриса",
            "id_5": "Стилист",
            "id_6": "Косметолог",
            "id_7": "Визажист",
            "id_8": "Певица",
            "id_9": "Переводчик",
            "id_10": "Дизайнер"
        }
    }`,

    monthJson: `{
        "count": 12,
        "list": {
            "id_1": "января",
            "id_2": "февраля",
            "id_3": "марта",
            "id_4": "апреля",
            "id_5": "мая",
            "id_6": "июня",
            "id_7": "июля",
            "id_8": "августа",
            "id_9": "сентября",
            "id_10": "октября",
            "id_11": "ноября",
            "id_12": "декабря"
        }
    }`,


    genderMale: 'Мужчина',
    genderFemale: 'Женщина',
    gender: 'Default',
    year: 0,
    day: 0,
    month: "",

    
    randomIntNumber: (max = 1, min = 0) => Math.floor(Math.random() * (max - min + 1) + min),

    randomGender: function() {
        gender = this.randomIntNumber(1, 0) == 1 ? this.genderMale : this.genderFemale;
        return gender;
    },

    randomValue: function (json) {
        const obj = JSON.parse(json);
        const prop = `id_${this.randomIntNumber(obj.count, 1)}`;
        return obj.list[prop];
    },

    randomSecondName: function() {
        if (gender === this.genderMale) {
            return this.randomValue(this.secondNameJson) + "ич";
        } else {
            return this.randomValue(this.secondNameJson) + "на";
        }
    },

    randomFirstName: function() {
        if (gender === this.genderMale) {
            return this.randomValue(this.firstNameMaleJson);
        } else {
            return this.randomValue(this.firstNameFemaleJson);
        }
    },

    randomSurname: function() {
        if (gender === this.genderMale) {
            return this.randomValue(this.surnameJson);
        } else {
            return this.randomValue(this.surnameJson) + "а";
        }
    },

    randomDay: function() {
        day = this.randomIntNumber(1, 31);
        return day;
    },

    randomMonth: function() {
        return this.randomValue(this.monthJson);
    },

    randomYear: function() {
        year = this.randomIntNumber(1970, 2001);
        return year;
    },


    randomJob: function() {
        if (gender === this.genderMale) {
            return this.randomValue(this.jobMaleJson);
        } else {
            return this.randomValue(this.jobFemaleJson);
        }
    },

   



    getPerson: function () {
        this.person = {};
        this.person.gender = this.randomGender();
        this.person.secondName = this.randomSecondName();
        this.person.firstName = this.randomFirstName();
        this.person.surname = this.randomSurname();
        this.person.day = this.randomDay();
        this.person.month = this.randomMonth();
        this.person.year = this.randomYear();
        this.person.job = this.randomJob();
        return this.person;
    }
};
