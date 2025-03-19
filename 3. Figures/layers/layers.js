var wms_layers = [];


        var lyr_ESRISatellite_0 = new ol.layer.Tile({
            'title': 'ESRI Satellite',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}'
            })
        });
var format_CountryOutlineOuter_1 = new ol.format.GeoJSON();
var features_CountryOutlineOuter_1 = format_CountryOutlineOuter_1.readFeatures(json_CountryOutlineOuter_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_CountryOutlineOuter_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_CountryOutlineOuter_1.addFeatures(features_CountryOutlineOuter_1);
var lyr_CountryOutlineOuter_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_CountryOutlineOuter_1, 
                style: style_CountryOutlineOuter_1,
                popuplayertitle: 'Country Outline Outer',
                interactive: true,
                title: '<img src="styles/legend/CountryOutlineOuter_1.png" /> Country Outline Outer'
            });
var format_CountryOutlineMiddle_2 = new ol.format.GeoJSON();
var features_CountryOutlineMiddle_2 = format_CountryOutlineMiddle_2.readFeatures(json_CountryOutlineMiddle_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_CountryOutlineMiddle_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_CountryOutlineMiddle_2.addFeatures(features_CountryOutlineMiddle_2);
var lyr_CountryOutlineMiddle_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_CountryOutlineMiddle_2, 
                style: style_CountryOutlineMiddle_2,
                popuplayertitle: 'Country Outline Middle',
                interactive: true,
                title: '<img src="styles/legend/CountryOutlineMiddle_2.png" /> Country Outline Middle'
            });
var format_CountryOutlineInner_3 = new ol.format.GeoJSON();
var features_CountryOutlineInner_3 = format_CountryOutlineInner_3.readFeatures(json_CountryOutlineInner_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_CountryOutlineInner_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_CountryOutlineInner_3.addFeatures(features_CountryOutlineInner_3);
var lyr_CountryOutlineInner_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_CountryOutlineInner_3, 
                style: style_CountryOutlineInner_3,
                popuplayertitle: 'Country Outline Inner',
                interactive: true,
                title: '<img src="styles/legend/CountryOutlineInner_3.png" /> Country Outline Inner'
            });
var format_CNTR_RG_01M_2024_4326_4 = new ol.format.GeoJSON();
var features_CNTR_RG_01M_2024_4326_4 = format_CNTR_RG_01M_2024_4326_4.readFeatures(json_CNTR_RG_01M_2024_4326_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_CNTR_RG_01M_2024_4326_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_CNTR_RG_01M_2024_4326_4.addFeatures(features_CNTR_RG_01M_2024_4326_4);
var lyr_CNTR_RG_01M_2024_4326_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_CNTR_RG_01M_2024_4326_4, 
                style: style_CNTR_RG_01M_2024_4326_4,
                popuplayertitle: 'CNTR_RG_01M_2024_4326',
                interactive: true,
                title: '<img src="styles/legend/CNTR_RG_01M_2024_4326_4.png" /> CNTR_RG_01M_2024_4326'
            });
var lyr_1ModernClimateEBTRASTERvOVERLAP_5 = new ol.layer.Image({
        opacity: 1,
        
    title: '1. Modern Climate - EBT (RASTER) vOVERLAP<br />\
    <img src="styles/legend/1ModernClimateEBTRASTERvOVERLAP_5_0.png" /> 0.0000<br />\
    <img src="styles/legend/1ModernClimateEBTRASTERvOVERLAP_5_1.png" /> 0.1865<br />\
    <img src="styles/legend/1ModernClimateEBTRASTERvOVERLAP_5_2.png" /> 0.3729<br />\
    <img src="styles/legend/1ModernClimateEBTRASTERvOVERLAP_5_3.png" /> 0.5594<br />\
    <img src="styles/legend/1ModernClimateEBTRASTERvOVERLAP_5_4.png" /> 0.7459<br />\
    <img src="styles/legend/1ModernClimateEBTRASTERvOVERLAP_5_5.png" /> 0.9324<br />' ,
        
        
        source: new ol.source.ImageStatic({
            url: "./layers/1ModernClimateEBTRASTERvOVERLAP_5.png",
            attributions: ' ',
            projection: 'EPSG:3857',
            alwaysInRange: true,
            imageExtent: [-20037508.342789, -44927335.427097, 20037508.342789, 44927335.427097]
        })
    });
var lyr_7FutureClimateYBSGlobalSucReprodRASTERvOVERLAP_6 = new ol.layer.Image({
        opacity: 1,
        
    title: '7. Future Climate - YBS Global SucReprod (RASTER) vOVERLAP<br />\
    <img src="styles/legend/7FutureClimateYBSGlobalSucReprodRASTERvOVERLAP_6_0.png" /> 0.0000<br />\
    <img src="styles/legend/7FutureClimateYBSGlobalSucReprodRASTERvOVERLAP_6_1.png" /> 0.1831<br />\
    <img src="styles/legend/7FutureClimateYBSGlobalSucReprodRASTERvOVERLAP_6_2.png" /> 0.3663<br />\
    <img src="styles/legend/7FutureClimateYBSGlobalSucReprodRASTERvOVERLAP_6_3.png" /> 0.5494<br />\
    <img src="styles/legend/7FutureClimateYBSGlobalSucReprodRASTERvOVERLAP_6_4.png" /> 0.7326<br />\
    <img src="styles/legend/7FutureClimateYBSGlobalSucReprodRASTERvOVERLAP_6_5.png" /> 0.9157<br />' ,
        
        
        source: new ol.source.ImageStatic({
            url: "./layers/7FutureClimateYBSGlobalSucReprodRASTERvOVERLAP_6.png",
            attributions: ' ',
            projection: 'EPSG:3857',
            alwaysInRange: true,
            imageExtent: [-20037508.342789, -44927335.427097, 20037508.342789, 44927335.427097]
        })
    });

lyr_ESRISatellite_0.setVisible(true);lyr_CountryOutlineOuter_1.setVisible(true);lyr_CountryOutlineMiddle_2.setVisible(true);lyr_CountryOutlineInner_3.setVisible(true);lyr_CNTR_RG_01M_2024_4326_4.setVisible(true);lyr_1ModernClimateEBTRASTERvOVERLAP_5.setVisible(true);lyr_7FutureClimateYBSGlobalSucReprodRASTERvOVERLAP_6.setVisible(true);
var layersList = [lyr_ESRISatellite_0,lyr_CountryOutlineOuter_1,lyr_CountryOutlineMiddle_2,lyr_CountryOutlineInner_3,lyr_CNTR_RG_01M_2024_4326_4,lyr_1ModernClimateEBTRASTERvOVERLAP_5,lyr_7FutureClimateYBSGlobalSucReprodRASTERvOVERLAP_6];
lyr_CountryOutlineOuter_1.set('fieldAliases', {'CNTR_ID': 'CNTR_ID', 'CNTR_NAME': 'CNTR_NAME', 'NAME_ENGL': 'NAME_ENGL', 'NAME_FREN': 'NAME_FREN', 'ISO3_CODE': 'ISO3_CODE', 'SVRG_UN': 'SVRG_UN', 'CAPT': 'CAPT', 'EU_STAT': 'EU_STAT', 'EFTA_STAT': 'EFTA_STAT', 'CC_STAT': 'CC_STAT', 'NAME_GERM': 'NAME_GERM', });
lyr_CountryOutlineMiddle_2.set('fieldAliases', {'CNTR_ID': 'CNTR_ID', 'CNTR_NAME': 'CNTR_NAME', 'NAME_ENGL': 'NAME_ENGL', 'NAME_FREN': 'NAME_FREN', 'ISO3_CODE': 'ISO3_CODE', 'SVRG_UN': 'SVRG_UN', 'CAPT': 'CAPT', 'EU_STAT': 'EU_STAT', 'EFTA_STAT': 'EFTA_STAT', 'CC_STAT': 'CC_STAT', 'NAME_GERM': 'NAME_GERM', });
lyr_CountryOutlineInner_3.set('fieldAliases', {'CNTR_ID': 'CNTR_ID', 'CNTR_NAME': 'CNTR_NAME', 'NAME_ENGL': 'NAME_ENGL', 'NAME_FREN': 'NAME_FREN', 'ISO3_CODE': 'ISO3_CODE', 'SVRG_UN': 'SVRG_UN', 'CAPT': 'CAPT', 'EU_STAT': 'EU_STAT', 'EFTA_STAT': 'EFTA_STAT', 'CC_STAT': 'CC_STAT', 'NAME_GERM': 'NAME_GERM', });
lyr_CNTR_RG_01M_2024_4326_4.set('fieldAliases', {'CNTR_ID': 'CNTR_ID', 'CNTR_NAME': 'CNTR_NAME', 'NAME_ENGL': 'NAME_ENGL', 'NAME_FREN': 'NAME_FREN', 'ISO3_CODE': 'ISO3_CODE', 'SVRG_UN': 'SVRG_UN', 'CAPT': 'CAPT', 'EU_STAT': 'EU_STAT', 'EFTA_STAT': 'EFTA_STAT', 'CC_STAT': 'CC_STAT', 'NAME_GERM': 'NAME_GERM', });
lyr_CountryOutlineOuter_1.set('fieldImages', {'CNTR_ID': 'TextEdit', 'CNTR_NAME': 'TextEdit', 'NAME_ENGL': 'TextEdit', 'NAME_FREN': 'TextEdit', 'ISO3_CODE': 'TextEdit', 'SVRG_UN': 'TextEdit', 'CAPT': 'TextEdit', 'EU_STAT': 'TextEdit', 'EFTA_STAT': 'TextEdit', 'CC_STAT': 'TextEdit', 'NAME_GERM': 'TextEdit', });
lyr_CountryOutlineMiddle_2.set('fieldImages', {'CNTR_ID': 'TextEdit', 'CNTR_NAME': 'TextEdit', 'NAME_ENGL': 'TextEdit', 'NAME_FREN': 'TextEdit', 'ISO3_CODE': 'TextEdit', 'SVRG_UN': 'TextEdit', 'CAPT': 'TextEdit', 'EU_STAT': 'TextEdit', 'EFTA_STAT': 'TextEdit', 'CC_STAT': 'TextEdit', 'NAME_GERM': 'TextEdit', });
lyr_CountryOutlineInner_3.set('fieldImages', {'CNTR_ID': 'TextEdit', 'CNTR_NAME': 'TextEdit', 'NAME_ENGL': 'TextEdit', 'NAME_FREN': 'TextEdit', 'ISO3_CODE': 'TextEdit', 'SVRG_UN': 'TextEdit', 'CAPT': 'TextEdit', 'EU_STAT': 'TextEdit', 'EFTA_STAT': 'TextEdit', 'CC_STAT': 'TextEdit', 'NAME_GERM': 'TextEdit', });
lyr_CNTR_RG_01M_2024_4326_4.set('fieldImages', {'CNTR_ID': 'TextEdit', 'CNTR_NAME': 'TextEdit', 'NAME_ENGL': 'TextEdit', 'NAME_FREN': 'TextEdit', 'ISO3_CODE': 'TextEdit', 'SVRG_UN': 'TextEdit', 'CAPT': 'TextEdit', 'EU_STAT': 'TextEdit', 'EFTA_STAT': 'TextEdit', 'CC_STAT': 'TextEdit', 'NAME_GERM': 'TextEdit', });
lyr_CountryOutlineOuter_1.set('fieldLabels', {'CNTR_ID': 'no label', 'CNTR_NAME': 'no label', 'NAME_ENGL': 'no label', 'NAME_FREN': 'no label', 'ISO3_CODE': 'no label', 'SVRG_UN': 'no label', 'CAPT': 'no label', 'EU_STAT': 'no label', 'EFTA_STAT': 'no label', 'CC_STAT': 'no label', 'NAME_GERM': 'no label', });
lyr_CountryOutlineMiddle_2.set('fieldLabels', {'CNTR_ID': 'no label', 'CNTR_NAME': 'no label', 'NAME_ENGL': 'no label', 'NAME_FREN': 'no label', 'ISO3_CODE': 'no label', 'SVRG_UN': 'no label', 'CAPT': 'no label', 'EU_STAT': 'no label', 'EFTA_STAT': 'no label', 'CC_STAT': 'no label', 'NAME_GERM': 'no label', });
lyr_CountryOutlineInner_3.set('fieldLabels', {'CNTR_ID': 'no label', 'CNTR_NAME': 'no label', 'NAME_ENGL': 'no label', 'NAME_FREN': 'no label', 'ISO3_CODE': 'no label', 'SVRG_UN': 'no label', 'CAPT': 'no label', 'EU_STAT': 'no label', 'EFTA_STAT': 'no label', 'CC_STAT': 'no label', 'NAME_GERM': 'no label', });
lyr_CNTR_RG_01M_2024_4326_4.set('fieldLabels', {'CNTR_ID': 'no label', 'CNTR_NAME': 'no label', 'NAME_ENGL': 'no label', 'NAME_FREN': 'no label', 'ISO3_CODE': 'no label', 'SVRG_UN': 'no label', 'CAPT': 'no label', 'EU_STAT': 'no label', 'EFTA_STAT': 'no label', 'CC_STAT': 'no label', 'NAME_GERM': 'no label', });
lyr_CNTR_RG_01M_2024_4326_4.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});