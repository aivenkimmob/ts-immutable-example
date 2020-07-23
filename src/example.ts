import { Map, OrderedMap } from 'immutable';

type FieldValue = number | boolean | string | undefined;
type FormField = Map<string, FieldValue>
type AnyForm = Map<string, FormField> | OrderedMap<string, FormField>;
export function getFormErrorFields(form: AnyForm, blacklist: string[] = []): string[] {
  return form
    .filter((field) => !blacklist.includes(field.get('name') as string))
    .filter((field) => form.getIn([field.get('name'), 'valid']) !== undefined)
    .filter((field) => form.getIn([field.get('name'), 'valid']))
    .keySeq()
    .toArray();
}


const mapForm = Map({
  'connection.url': Map({
    name: 'connection.url',
    valid: false,
  }),
  'connection.class': Map({
    name: 'connection.class',
    valid: true,
  }),
  'connection.something': Map({
    name: 'connection.something',
    valid: undefined,
  })
})


const errorKeys = getFormErrorFields(mapForm);
console.log(errorKeys)


const orderedMapForm = OrderedMap({
  'connection.url': Map({
    name: 'connection.url',
    valid: false,
  }),
  'connection.class': Map({
    name: 'connection.class',
    valid: true,
  }),
  'connection.something': Map({
    name: 'connection.something',
    valid: undefined,
  })
})

const errorKeys2 = getFormErrorFields(orderedMapForm);
console.log(errorKeys2)
