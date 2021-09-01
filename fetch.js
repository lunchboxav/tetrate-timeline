let timeline_url = "";
let timeline_json = {};

(function checkUrl() {
  var params = new URLSearchParams(window.location.search);
  if (params.get("lang") === "zh-hans") {
    // Chinese timeline translation.
    timeline_url = "https://raw.githubusercontent.com/lunchboxav/tetrate-timeline/main/timeline-zh.json";
  } else {
    timeline_url = "https://raw.githubusercontent.com/lunchboxav/tetrate-timeline/main/timeline.json";
  }
})();

fetch(timeline_url)
  .then((response) => response.json())
  .then(function (data) {
    timeline_json = data;
    console.log(data);
    window.timeline = new TL.Timeline("timeline-embed", timeline_json, options);
  });
