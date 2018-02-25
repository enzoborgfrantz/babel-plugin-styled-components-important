import template from 'babel-template';

export default function({ types: t }) {
  return {
    visitor: {
      TaggedTemplateExpression: {
        enter(path, state) {
          console.log(path, state);
        },
      },
    },
  };
}
