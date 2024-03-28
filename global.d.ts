declare global {
  namespace JSX {
    interface HtmlTag {
      ['x-on:click']: string
      ['x-data']: string
      ['x-text']: string
      ['x-model']: string
      ['x-bind:']: string
      ['x-show']: string
      ['x-if']: string
      ['x-for']: string
      ['x-transition']: string
      ['x-ref']: string
      ['x-spread']: string
      ['x-cloak']: string
      ['@click']: string
      [':class']: string
    }
  }
}
