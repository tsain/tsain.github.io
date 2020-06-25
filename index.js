miro.onReady(run)

const icon24 = '<path fill="currentColor" fill-rule="nonzero" d="M20.156 7.762c-1.351-3.746-4.672-5.297-8.838-4.61-3.9.642-7.284 3.15-7.9 5.736-1.14 4.784-.015 7.031 2.627 8.09.61.244 1.28.412 2.002.518.277.041.549.072.844.097.138.012.576.045.659.053.109.01.198.02.291.035 1.609.263 2.664 1.334 3.146 2.715 7.24-2.435 9.4-6.453 7.17-12.634zm-18.684.662C3.18 1.256 18.297-3.284 22.038 7.084c2.806 7.78-.526 13.011-9.998 15.695-.266.076-.78.173-.759-.287.062-1.296-.47-2.626-1.762-2.837-1.009-.165-10.75.124-8.047-11.23zm9.427 4.113a6.853 6.853 0 0 0 1.787.172c.223.348.442.733.79 1.366.53.967.793 1.412 1.206 2a1 1 0 1 0 1.636-1.15c-.358-.51-.593-.908-1.09-1.812-.197-.36-.358-.649-.503-.899 1.16-.573 1.916-1.605 2.005-2.909.189-2.748-2.65-4.308-6.611-3.267-.443.117-.834.44-.886 1.408-.065 1.192-.12 2.028-.25 3.825-.129 1.808-.185 2.653-.25 3.86a1 1 0 0 0 1.997.108c.05-.913.093-1.617.17-2.702zm.144-2.026c.077-1.106.124-1.82.171-2.675 2.398-.483 3.595.257 3.521 1.332-.08 1.174-1.506 1.965-3.692 1.343z"/>'
const icon48 = '<path fill="#5B00FF" fill-rule="nonzero" d="M2.5 16.5C6 1.5 37-8 44.67 13.694c5.8 16.41-1.206 27.407-20.97 32.978-.724.205-1.109-.103-1.083-.84.094-2.679-1-5.396-3.617-5.832-2.068-.345-22.044.26-16.5-23.5zm19.414 8.286c1.03.23 2.016.316 2.936.274.357.53.704 1.111 1.26 2.079.834 1.45 1.247 2.119 1.897 3a1.5 1.5 0 1 0 2.415-1.779c-.563-.764-.931-1.36-1.711-2.717-.301-.523-.547-.944-.77-1.311 1.813-.855 2.994-2.403 3.135-4.37.298-4.143-4.115-6.457-10.284-4.909-.665.168-1.262.477-1.355 2.112a282.42 282.42 0 0 1-.391 5.737c-.203 2.711-.292 3.98-.395 5.79a1.5 1.5 0 1 0 2.995.17c.079-1.375.148-2.434.268-4.076zm.226-3.033c.12-1.646.193-2.714.267-3.988 3.85-.75 5.792.382 5.677 1.982-.127 1.758-2.432 2.97-5.944 2.006z"/>'

function run() {
  miro.initialize({
    extensionPoints: {
      toolbar: {
        title: 'Update Week Canvas',
        toolbarSvgIcon: icon24,
        librarySvgIcon: icon48,
        onClick: () => {
//          miro.board.tags.get().then(checkForCanvas)
          miro.board.widgets.get().then(checkForCanvasWidgets);
        }
      }
    }
  });
}

function checkForCanvasWidgets(widgets){
  let canvasWidgets = [];
  for (let i = 0; i < widgets.length; i++){
    let widget = widgets[i];
    console.log('W ' + widget.text + ' - ' + widget.type);
    if (widget.type == "SHAPE" && widget.text){
      console.log('W ADDED');
      canvasWidgets.push(widget);
    }
  }

  updateCanvas(canvasWidgets);
}

async function updateCanvas(canvasWidgets, widgets){

  for (let i = 0; i < canvasWidgets.length; i++){
    let cw = canvasWidgets[i];
    console.log('CW ' + cw.text + ' - ' + cw.type);
    let intersectingWidgets = await miro.board.widgets.__getIntersectedObjects(cw.bounds);
    for (const iw in intersectingWidgets){
      console.log('IW ' + iw.text + ' - ' + iw.type);
    }
  }
}