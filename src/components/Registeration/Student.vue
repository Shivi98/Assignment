<template>
  <div class="container">
    <div class="field">
      <label class="label">Full Name</label>
      <div class="control">
        <input
            name="name"
            v-validate="'required'"
            :class="{'input': true, 'is-danger': errors.has('name') }"
            type="text"
            placeholder="Enter Your Full Name"
            v-model="student.name"
        >
        <span
            v-show="errors.has('name')"
            class="help is-danger"
        >{{ errors.first('name') }}</span>
      </div>
    </div>

    <div class="field">
      <label class="label">Roll Number</label>
      <div class="control">
        <input
            name="rollNumber"
            v-validate="'required'"
            :class="{'input': true, 'is-danger': errors.has('rollNumber') }"
            type="text"
            placeholder="Enter Your Roll Number"
            v-model="student.rollNumber"
        >
        <span
            v-show="errors.has('rollNumber')"
            class="help is-danger"
        >{{ errors.first('rollNumber') }}</span>
      </div>
    </div>

    <div class="columns">
      <base-select
          :label="gender.label"
          :menuItems="gender.menuItems"
          style="display: inline-block"
          class="column"
          @selected="student.gender = $event"
      ></base-select>
      <base-select
          :label="stream.label"
          :menuItems="stream.menuItems"
          style="display: inline-block"
          class="column"
          @selected="student.stream = $event"
      ></base-select>
      <base-select
          :label="bloodGroup.label"
          :menuItems="bloodGroup.menuItems"
          style="display: inline-block"
          class="column"
          @selected="student.bloodGroup = $event"
      ></base-select>
      <div class="field column is-one-third">
        <label class="label">Admission Year</label>
        <div class="control">
          <input v-validate="'required|between:2002,2018'"
                 :class="{'input': true, 'is-danger': errors.has('year') }"
                 name="year"
                 type="text"
                 placeholder="Admission Year: 2005"
                 v-model="student.admissionYear"
          >
          <span v-show="errors.has('year')"
                class="help is-danger">
          {{ errors.first('year') }}
        </span>
        </div>
      </div>
    </div>

    <div class="columns">
      <div class="field column is-two-thirds">
        <label class="label">Email</label>
        <div class="control">
          <input v-validate="'required|email'"
                 :class="{'input': true, 'is-danger': errors.has('email') }"
                 name="email"
                 type="text"
                 placeholder="Email"
                 v-model="student.email"
          >
          <span v-show="errors.has('email')"
                class="help is-danger">
          {{ errors.first('email') }}
        </span>
        </div>
      </div>

      <div class="field column">
        <label class="label">Date of Birth</label>
        <div class="control">
          <input v-validate="'required|date_format:DD/MM/YYYY'"
                 :class="{'input': true, 'is-danger': errors.has('birth') }"
                 name="birth"
                 type="text"
                 placeholder="Date of Birth: DD/MM/YYYY"
                 v-model="student.dateOfBirth"
          >
          <span v-show="errors.has('birth')"
                class="help is-danger">
          {{ errors.first('birth') }}
        </span>
        </div>
      </div>
    </div>
    <div class="columns">
      <div class="field column is-two-thirds">
        <label class="label">Father's Name</label>
        <div class="control">
          <input v-validate="'required'"
                 :class="{'input': true, 'is-danger': errors.has('fatherName') }"
                 name="fatherName"
                 type="text"
                 placeholder="Father's Name"
                 v-model="student.fatherName"
          >
          <span v-show="errors.has('fatherName')"
                class="help is-danger">
          {{ errors.first('fatherName') }}
        </span>
        </div>
      </div>

      <div class="field column">
        <label class="label">Phone Number</label>
        <div class="control">
          <input class="input" type="text" placeholder="Enter Your Phone Number" v-model="student.phoneNUmber">
        </div>
      </div>
    </div>

    <div class="field">
      <label class="label">Address</label>
      <div class="control">
        <textarea class="textarea" placeholder="Address" v-model="student.address"></textarea>
      </div>
    </div>

    <div class="field is-grouped">
      <div class="control">
        <button class="button is-link" @click="submit">Submit</button>
      </div>
      <div class="control">
        <button class="button is-text" @click="cancel">Cancel</button>
      </div>
    </div>
  </div>
</template>

<script>
  import BaseSelect from '../Base/BaseSelect.vue';

  export default {
    name: "student",
    components: {
      'base-select': BaseSelect
    },
    data() {
      return {
        student: {
          name: '',                           //done
          rollNumber: 0,                      // done
          dateOfBirth: '',                    // done
          stream: '',                         // done
          fatherName: '',                     // done
          bloodGroup: '',                     // done
          admissionYear: 0,                   // done
          address: '',                        // done
          email: '',                          // done
          phoneNUmber: ''                     // done
        },
        gender: {
          label: 'Gender',
          menuItems: ['Male', 'Female', 'Other']
        },
        stream: {
          label: 'Stream',
          menuItems: ['CSE', 'ME', 'ECE', 'BTE']
        },
        bloodGroup: {
          label: 'Blood Group',
          menuItems: ['A+', 'A-', 'AB+', 'O+', 'O-']
        }
      };
    },
    methods: {
      submit() {
        this.$validator.validateAll().then(result => {
          console.log(result)
          if (!result) {
              return;
              }
            console.log(this.student)
            }
        );
      },
      cancel() {
        this.$router.push('/')
      }
    }
  }
</script>

<style scoped>

</style>
