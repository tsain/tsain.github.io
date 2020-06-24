miro.onReady(() => {
  miro.initialize({
    extensionPoints: {
      toolbar: {
        title: 'Update Week Canvas',
        svgIcon: '<circle cx="12" cy="12" r="9" fill="none" fill-rule="evenodd" stroke="currentColor" stroke-width="2"/>',
        onClick: () => {
          alert('Update...')
        }
      }
    }
  })
})
