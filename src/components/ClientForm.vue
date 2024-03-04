<template>
  <div class="container">
    <form class="form" @submit.prevent="submitForm">
      <div class="form-section">
        <h2>Форма Клиета</h2>
        <div class="form-group">
          <label for="surname">Фамилия<span>*</span></label>
          <input
            type="text"
            id="surname"
            v-model.trim="form.surname"
            :class="$v.form.surname.$error ? 'is-invalid' : ''"
          />
          <p
            v-if="$v.form.surname.$dirty && !$v.form.surname.required"
            class="invalid-feedback"
          >
            Обязательное поле
          </p>
        </div>
        <div class="form-group">
          <label for="name">Имя<span>*</span></label>
          <input
            type="text"
            id="name"
            v-model.trim="form.name"
            :class="$v.form.name.$error ? 'is-invalid' : ''"
          />
          <p
            v-if="$v.form.name.$dirty && !$v.form.name.required"
            class="invalid-feedback"
          >
            Обязательное поле
          </p>
        </div>
        <div class="form-group">
          <label for="patronymic">Отчество</label>
          <input type="text" id="patronymic" v-model.trim="form.patronymic" />
        </div>
        <div class="form-group">
          <label for="dob">Дата рождения<span>*</span></label>
          <input
            type="date"
            id="dob"
            v-model.trim="form.dob"
            :class="$v.form.dob.$error ? 'is-invalid' : ''"
          />
          <p
            v-if="$v.form.dob.$dirty && !$v.form.dob.required"
            class="invalid-feedback"
          >
            Обязательное поле
          </p>
        </div>
        <div class="form-group">
          <label for="phone">Номер телефона<span>*</span></label>
          <input
            type="tel"
            id="phone"
            v-model.trim="form.phone"
            :class="$v.form.phone.$error ? 'is-invalid' : ''"
          />
          <p
            v-if="$v.form.phone.$dirty && !$v.form.phone.minLength"
            class="invalid-feedback"
          >
            Здесь должно быть 11 цифр
          </p>
          <p
            v-if="$v.form.phone.$dirty && !$v.form.phone.pattern"
            class="invalid-feedback"
          >
            Неправильный формат номера
          </p>
          <p
            v-if="$v.form.phone.$dirty && !$v.form.phone.required"
            class="invalid-feedback"
          >
            Обязательное поле
          </p>
        </div>
        <div class="form-group">
          <label for="gender">Пол</label>
          <select id="gender" v-model="form.gender">
            <option
              v-for="(gender, index) in genderies"
              :value="gender.value"
              :key="index"
            >
              {{ gender.label }}
            </option>
          </select>
        </div>
        <div class="form-group">
          <label for="clientGroup">Группа клиентов<span>*</span></label>
          <select
            id="clientGroup"
            :class="$v.form.clientGroups.$error ? 'is-invalid' : ''"
            v-model="form.clientGroups"
            multiple
          >
            <option
              v-for="(clientGroup, index) in clientGroup"
              :value="clientGroup.value"
              :key="index"
            >
              {{ clientGroup.label }}
            </option>
          </select>
          <p
            v-if="$v.form.clientGroups.$dirty && !$v.form.clientGroups.maxCount"
            class="invalid-feedback"
          >
            Не больше 1 пункта
          </p>
        </div>
        <div class="form-group">
          <label for="doctor">Лечащий врач</label>
          <select id="doctor" v-model="form.doctor">
            <option
              v-for="(doctor, index) in doctors"
              :value="doctor.value"
              :key="index"
            >
              {{ doctor.label }}
            </option>
          </select>
        </div>
      </div>
      <div class="form-section">
        <h2>Адрес</h2>
        <div class="form-group">
          <label for="index">Индекс</label>
          <input type="text" id="index" v-model.trim="form.index" />
        </div>
        <div class="form-group">
          <label for="country">Страна</label>
          <input type="text" id="country" v-model.trim="form.country" />
        </div>
        <div class="form-group">
          <label for="region">Область</label>
          <input type="text" id="region" v-model.trim="form.region" />
        </div>
        <div class="form-group">
          <label for="city">Город<span>*</span></label>
          <input
            type="text"
            id="city"
            v-model.trim="form.city"
            :class="$v.form.city.$error ? 'is-invalid' : ''"
          />
          <p
            v-if="$v.form.city.$dirty && !$v.form.city.required"
            class="invalid-feedback"
          >
            Обязательное поле
          </p>
        </div>
        <div class="form-group">
          <label for="street">Улица</label>
          <input type="text" id="street" v-model.trim="form.street" />
        </div>
        <div class="form-group">
          <label for="house">Дом</label>
          <input type="text" id="house" v-model.trim="form.house" />
        </div>
      </div>
      <div class="form-section">
        <h2>Паспорт</h2>
        <div class="form-group">
          <label for="documentType">Тип документа<span>*</span></label>
          <select
            id="documentType"
            v-model="form.documentType"
            :class="$v.form.documentType.$error ? 'is-invalid' : ''"
          >
            <option
              v-for="(documentType, index) in documentTypes"
              :value="documentType.value"
              :key="index"
            >
              {{ documentType.label }}
            </option>
          </select>
          <p
            v-if="$v.form.documentType.$dirty && !$v.form.documentType.required"
            class="invalid-feedback"
          >
            Обязательное поле
          </p>
        </div>
        <div class="form-group">
          <label for="series">Серия</label>
          <input type="text" id="series" v-model.trim="form.series" />
        </div>
        <div class="form-group">
          <label for="number">Номер</label>
          <input type="text" id="number" v-model.trim="form.number" />
        </div>
        <div class="form-group">
          <label for="issuedBy">Кем выдан</label>
          <input type="text" id="issuedBy" v-model.trim="form.issuedBy" />
        </div>
        <div class="form-group">
          <label for="issueDate">Дата выдачи<span>*</span></label>
          <input
            type="date"
            id="issueDate"
            v-model.trim="form.issueDate"
            :class="$v.form.issueDate.$error ? 'is-invalid' : ''"
          />
          <p
            v-if="$v.form.issueDate.$dirty && !$v.form.issueDate.required"
            class="invalid-feedback"
          >
            Обязательное поле
          </p>
        </div>
      </div>
      <div class="form-section">
        <div class="checkbox">
          <input type="checkbox" id="noSms" v-model="form.noSms" />
          <label for="noSms">Не отправлять СМС</label>
        </div>
        <button type="submit">Создать клиента</button>
      </div>
    </form>
    <div v-if="showPopup" class="popup">
      <p>Новый клиент успешно создан!</p>
      <button @click="closePopup">Закрыть</button>
    </div>
    <div v-if="showErrorPopup" class="popup">
      <p>Форма содержит ошибки. Пожалуйста, исправьте их.</p>
      <button @click="closeErrorPopup">Закрыть</button>
    </div>
  </div>
</template>

<script>
import { validationMixin } from "vuelidate";
import { required, minLength } from "vuelidate/lib/validators";

export default {
  mixins: [validationMixin],
  data() {
    return {
      showPopup: false,
      showErrorPopup: false,
      form: {
        surname: "",
        name: "",
        patronymic: "",
        dob: "",
        phone: "",
        index: "",
        country: "",
        region: "",
        city: "",
        street: "",
        house: "",
        series: "",
        number: "",
        issuedBy: "",
        issueDate: "",
        doctor: "Ivanov",
        gender: "Мужской",
        noSms: false,
        documentType: "",
        clientGroups: [""],
      },
      genderies: [
        {
          label: "Мужской",
          value: "Мужской",
        },
        {
          label: "Женский",
          value: "Женский",
        },
      ],
      clientGroup: [
        {
          label: "VIP",
          value: "VIP",
        },
        {
          label: "Проблемные",
          value: "problematic",
        },
        {
          label: "ОМС",
          value: "OMS",
        },
      ],
      doctors: [
        {
          label: "Иванов",
          value: "Ivanov",
        },
        {
          label: "Захаров",
          value: "Zaharov",
        },
        {
          label: "Чернышева",
          value: "Chernysheva",
        },
      ],
      documentTypes: [
        {
          label: "Паспорт",
          value: "passport",
        },
        {
          label: "Свидетельство о рождении",
          value: "birthCertificate",
        },
        {
          label: "Вод. удостоверение",
          value: "driverLicense",
        },
      ],
    };
  },

  validations: {
    form: {
      surname: { required },
      name: { required },
      dob: { required },
      phone: { required, minLength: minLength(11), pattern: /^[7][0-9]{10}$/ },
      city: { required },
      clientGroups: {
        maxCount(value) {
          return value.length <= 1;
        },
      },
      documentType: { required },
      issueDate: { required },
    },
  },
  methods: {
    submitForm() {
      this.$v.form.$touch();
      if (!this.$v.form.$error) {
        this.showPopup = true;
        console.log("Валидация прошла");
      } else {
        this.showErrorPopup = true;
        console.log("Форма содержит ошибки. Пожалуйста, исправьте их.");
      }
    },
    closePopup() {
      this.showPopup = false;
    },
    closeErrorPopup() {
      this.showErrorPopup = false;
    },
  },
};
</script>

<style lang="scss" scoped>
.error {
  border-color: red;
}
.container {
  display: flex;
  justify-content: center;
}

.form {
  width: 90%;
  max-width: 600px;
  margin-top: 20px;
}

.form-section {
  margin-bottom: 30px;
  border: 1px solid #baebdd;
  border-radius: 10px;
  padding: 20px;
  background-color: rgb(196 227 235);
  h2 {
    margin: 0;
    margin-bottom: 28px;
  }

  .form-group {
    margin-bottom: 20px;

    label {
      display: block;
      margin-bottom: 5px;
    }

    input[type="text"],
    input[type="date"],
    input[type="tel"],
    select {
      width: 100%;
      padding: 8px;
      border: 1px solid white;
      border-radius: 10px;
      box-sizing: border-box;
      box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.1);
    }

    select[multiple] {
      height: 100px;
    }

    span {
      color: red;
      margin-left: 5px;
    }
  }
}

.invalid-feedback {
  color: red;
  font-size: 0.8rem;
}

.is-invalid {
  border-color: red;
}

.popup {
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: white;
  padding: 20px;
  border: 1px solid #ccc;
  border-radius: 5px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
}

.checkbox {
  margin-bottom: 10px;

  input[type="checkbox"] {
    margin-right: 10px;
  }
}

button {
  padding: 10px 74px;
  background-color: #007bff;
  color: #fff;
  border: none;
  border-radius: 10px;
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #0056b3;
  }
}

@media screen and (max-width: 768px) {
  .form {
    width: 100%;
  }
}
</style>
