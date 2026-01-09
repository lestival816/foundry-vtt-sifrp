import SifrpItemBase from './base-item.mjs';

export default class SifrpGear extends SifrpItemBase {

  static defineSchema() {
    const fields = foundry.data.fields;
    const schema = super.defineSchema();

    return schema;
  }

}
