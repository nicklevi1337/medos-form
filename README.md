<template>
  <div class="container">
    <form class="form">
      <!-- Атрибуты формы -->
      <div class="form-section">
        <h2>Форма Клиета</h2>
    <!-- Фамилия -->
    <div class="form-group">
      <label for="surname">Фамилия<span>*</span></label>
      <input type="text" id="surname" required>
    </div>

    <!-- Имя -->
    <div class="form-group">
      <label for="name">Имя<span>*</span></label>
      <input type="text" id="name" required>
    </div>

    <!-- Отчество -->
    <div class="form-group">
      <label for="patronymic">Отчество</label>
      <input type="text" id="patronymic">
    </div>

    <!-- Дата рождения -->
    <div class="form-group">
      <label for="dob">Дата рождения<span>*</span></label>
      <input type="date" id="dob" required>
    </div>

    <!-- Номер телефона -->
    <div class="form-group">
      <label for="phone">Номер телефона<span>*</span></label>
      <input type="tel" id="phone" pattern="[0-9]{11}" required>
    </div>

    <!-- Пол -->
    <div class="form-group">
      <label for="gender">Пол</label>
      <select id="gender">
        <option value="male">Мужской</option>
        <option value="female">Женский</option>
      </select>
    </div>

    <!-- Группа клиентов -->
    <div class="form-group">
      <label for="clientGroup">Группа клиентов<span>*</span></label>
      <select multiple id="clientGroup" required>
        <option value="VIP">VIP</option>
        <option value="problematic">Проблемные</option>
        <option value="OMS">ОМС</option>
      </select>
    </div>

    <!-- Лечащий врач -->
    <div class="form-group">
      <label for="doctor">Лечащий врач</label>
      <select id="doctor">
        <option value="Ivanov">Иванов</option>
        <option value="Zaharov">Захаров</option>
        <option value="Chernysheva">Чернышева</option>
      </select>
    </div>

      </div>


      <!-- Адрес -->
      <div class="form-section">
        <h2>Адрес</h2>
        <div class="form-group">
      <label for="index">Индекс</label>
      <input type="text" id="index">
    </div>

    <!-- Страна -->
    <div class="form-group">
      <label for="country">Страна</label>
      <input type="text" id="country">
    </div>

    <!-- Область -->
    <div class="form-group">
      <label for="region">Область</label>
      <input type="text" id="region">
    </div>

    <!-- Город -->
    <div class="form-group">
      <label for="city">Город<span>*</span></label>
      <input type="text" id="city" required>
    </div>

    <!-- Улица -->
    <div class="form-group">
      <label for="street">Улица</label>
      <input type="text" id="street">
    </div>

    <!-- Дом -->
    <div class="form-group">
      <label for="house">Дом</label>
      <input type="text" id="house">
    </div>

      </div>

      <!-- Паспорт -->
      <div class="form-section">
        <h2>Паспорт</h2>
    
        <div class="form-group">
      <label for="documentType">Тип документа<span>*</span></label>
      <select id="documentType" required>
        <option value="">Выберите тип документа</option>
        <option value="passport">Паспорт</option>
        <option value="birthCertificate">Свидетельство о рождении</option>
        <option value="driverLicense">Вод. удостоверение</option>
      </select>
    </div>

    <!-- Серия -->
    <div class="form-group">
      <label for="series">Серия<span>*</span></label>
      <input type="text" id="series" required>
    </div>

    <!-- Номер -->
    <div class="form-group">
      <label for="number">Номер<span>*</span></label>
      <input type="text" id="number" required>
    </div>

    <!-- Кем выдан -->
    <div class="form-group">
      <label for="issuedBy">Кем выдан<span>*</span></label>
      <input type="text" id="issuedBy" required>
    </div>

    <!-- Дата выдачи -->
    <div class="form-group">
      <label for="issueDate">Дата выдачи<span>*</span></label>
      <input type="date" id="issueDate" required>
    </div>

      </div>

      <!-- Чекбокс и кнопка -->
      <div class="form-section">
        <div class="checkbox">
          <input type="checkbox" id="noSms" />
          <label for="noSms">Не отправлять СМС</label>
        </div>
        <button type="submit">Создать клиента</button>
      </div>
    </form>
  </div>
</template>

<style lang="scss" scoped>
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

  h2 {
    margin-bottom: 20px;
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
      border: 1px solid #ccc;
      border-radius: 4px;
      box-sizing: border-box;
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

.checkbox {
  margin-bottom: 10px;

  input[type="checkbox"] {
    margin-right: 10px;
  }
}

button {
  padding: 10px 20px;
  background-color: #007bff;
  color: #fff;
  border: none;
  border-radius: 4px;
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
