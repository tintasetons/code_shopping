import { FieldsOptions } from "src/app/common/fields-options";

const fieldsOptions: FieldsOptions = {
  name: {
    id: 'name',
    label: 'Nome',
    validationMessage: {
      maxlength: 20
    }
  },
  active: {
    id: 'active',
    label: 'Ativo'
  }
};

export default fieldsOptions;
