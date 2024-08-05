window.adobeDataLayer = window.adobeDataLayer || [];
let analyticsPageDetails = JSON.parse("{\"page-be0899545d\":{\"siteRegion\":\"latam\",\"previousPage\":\"pb > \",\"articleName\":\"\",\"contentSubcategory\":\"o\",\"articleId\":\"/latam/latam/pt/o/wealth-planning-latam\",\"siteName\":\"privatebank.jpmorgan.com\",\"language\":\"pt\",\"pagePath\":\"/latam/pt/o/wealth-planning-latam\",\"queryString\":\"?gad_source=1&gclid=EAIaIQobChMIxa_N1rndhwMVT2FIAB1ofSw1EAAYAyAAEgJTfvD_BwE&gclsrc=aw.ds\",\"pageName\":\"pb > wealth-planning-latam\",\"contentCategory\":\"pt\",\"taxonomyTags\":null,\"siteProtocol\":\"https\",\"pageUrl\":\"https://privatebank.jpmorgan.com/latam/pt/o/wealth-planning-latam?gad_source=1&gclid=EAIaIQobChMIxa_N1rndhwMVT2FIAB1ofSw1EAAYAyAAEgJTfvD_BwE&gclsrc=aw.ds\",\"contentType\":\"wm-common-page-template\",\"cleanUrl\":\"https://privatebank.jpmorgan.com/latam/pt/o/wealth-planning-latam\"}}");
let updatedAnalyticsPageDetailsObj = Object.assign({}, analyticsPageDetails);
if (Object.keys(updatedAnalyticsPageDetailsObj).length > 0) {
  let key = Object.keys(updatedAnalyticsPageDetailsObj);
  updatedAnalyticsPageDetailsObj[key].pageUrl = window.location.href;
}
adobeDataLayer.push({
  page: updatedAnalyticsPageDetailsObj,
  event: 'cmp:show',
  eventInfo: {
    path: 'page.page-be0899545d'
  }
});
(function() {
  if (document.getElementById('globalNavScriptTag') === null) {
    var script = document.createElement('script');
    script.id = 'globalNavScriptTag';
    script.type = 'text/javascript';
    script.src = '/content/dam/jpm-wm-aem/jpm-wm-content-blocks/global-nav/jpm-wm-nav.js';
    document.body.appendChild(script);
  }
})();
