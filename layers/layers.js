var wms_layers = [];


        var lyr_GoogleHybrid_0 = new ol.layer.Tile({
            'title': 'Google Hybrid',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' &middot; <a href="https://www.google.at/permissions/geoguidelines/attr-guide.html">Map data ©2015 Google</a>',
                url: 'https://mt1.google.com/vt/lyrs=y&x={x}&y={y}&z={z}'
            })
        });
var format_marca2021_1 = new ol.format.GeoJSON();
var features_marca2021_1 = format_marca2021_1.readFeatures(json_marca2021_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_marca2021_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_marca2021_1.addFeatures(features_marca2021_1);
var lyr_marca2021_1 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_marca2021_1, 
                style: style_marca2021_1,
                interactive: true,
    title: 'marca2021<br />\
    <img src="styles/legend/marca2021_1_0.png" /> Agropro<br />\
    <img src="styles/legend/marca2021_1_1.png" /> Agrusa<br />\
    <img src="styles/legend/marca2021_1_2.png" /> Batlle<br />\
    <img src="styles/legend/marca2021_1_3.png" /> BLANCO<br />\
    <img src="styles/legend/marca2021_1_4.png" /> Borges<br />\
    <img src="styles/legend/marca2021_1_5.png" /> Cargill<br />\
    <img src="styles/legend/marca2021_1_6.png" /> Caussade<br />\
    <img src="styles/legend/marca2021_1_7.png" /> Cecosa<br />\
    <img src="styles/legend/marca2021_1_8.png" /> Desconocido<br />\
    <img src="styles/legend/marca2021_1_9.png" /> Euralis<br />\
    <img src="styles/legend/marca2021_1_10.png" /> Fito<br />\
    <img src="styles/legend/marca2021_1_11.png" /> Hibrisol<br />\
    <img src="styles/legend/marca2021_1_12.png" /> Koipesol<br />\
    <img src="styles/legend/marca2021_1_13.png" /> KWS<br />\
    <img src="styles/legend/marca2021_1_14.png" /> Limagrain<br />\
    <img src="styles/legend/marca2021_1_15.png" /> Maisadour<br />\
    <img src="styles/legend/marca2021_1_16.png" /> Pioneer<br />\
    <img src="styles/legend/marca2021_1_17.png" /> Ragt<br />\
    <img src="styles/legend/marca2021_1_18.png" /> Strube<br />\
    <img src="styles/legend/marca2021_1_19.png" /> Syngenta<br />\
    <img src="styles/legend/marca2021_1_20.png" /> varias<br />\
    <img src="styles/legend/marca2021_1_21.png" /> <br />'
        });
var format_MarketShare_2 = new ol.format.GeoJSON();
var features_MarketShare_2 = format_MarketShare_2.readFeatures(json_MarketShare_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_MarketShare_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_MarketShare_2.addFeatures(features_MarketShare_2);
var lyr_MarketShare_2 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_MarketShare_2, 
                style: style_MarketShare_2,
                interactive: true,
    title: 'MarketShare %<br />\
    <img src="styles/legend/MarketShare_2_0.png" /> 0 - 0.1 <br />\
    <img src="styles/legend/MarketShare_2_1.png" /> 0.1 - 0.2 <br />\
    <img src="styles/legend/MarketShare_2_2.png" /> 0.2 - 0.3 <br />\
    <img src="styles/legend/MarketShare_2_3.png" /> 0.3 - 0.4 <br />\
    <img src="styles/legend/MarketShare_2_4.png" /> 0.4 - 0.5 <br />\
    <img src="styles/legend/MarketShare_2_5.png" /> 0.5 - 0.6 <br />\
    <img src="styles/legend/MarketShare_2_6.png" /> 0.6 - 0.7 <br />\
    <img src="styles/legend/MarketShare_2_7.png" /> 0.7 - 0.8 <br />\
    <img src="styles/legend/MarketShare_2_8.png" /> 0.8 - 0.9 <br />\
    <img src="styles/legend/MarketShare_2_9.png" /> 0.9 - 1 <br />'
        });
var format_Superficieha_3 = new ol.format.GeoJSON();
var features_Superficieha_3 = format_Superficieha_3.readFeatures(json_Superficieha_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Superficieha_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Superficieha_3.addFeatures(features_Superficieha_3);
var lyr_Superficieha_3 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Superficieha_3, 
                style: style_Superficieha_3,
                interactive: true,
    title: 'Superficie (ha)<br />\
    <img src="styles/legend/Superficieha_3_0.png" /> 0.2 - 9.5 <br />\
    <img src="styles/legend/Superficieha_3_1.png" /> 9.5 - 19.2 <br />\
    <img src="styles/legend/Superficieha_3_2.png" /> 19.2 - 31.7 <br />\
    <img src="styles/legend/Superficieha_3_3.png" /> 31.7 - 49.6 <br />\
    <img src="styles/legend/Superficieha_3_4.png" /> 49.6 - 73.7 <br />\
    <img src="styles/legend/Superficieha_3_5.png" /> 73.7 - 102.2 <br />\
    <img src="styles/legend/Superficieha_3_6.png" /> 102.2 - 135.8 <br />\
    <img src="styles/legend/Superficieha_3_7.png" /> 135.8 - 197.8 <br />\
    <img src="styles/legend/Superficieha_3_8.png" /> 197.8 - 360.4 <br />\
    <img src="styles/legend/Superficieha_3_9.png" /> 360.4 - 1675.3 <br />'
        });
var format_TSS2021_4 = new ol.format.GeoJSON();
var features_TSS2021_4 = format_TSS2021_4.readFeatures(json_TSS2021_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_TSS2021_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_TSS2021_4.addFeatures(features_TSS2021_4);
var lyr_TSS2021_4 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_TSS2021_4, 
                style: style_TSS2021_4,
                interactive: true,
    title: 'TSS2021<br />\
    <img src="styles/legend/TSS2021_4_0.png" /> #N/A<br />\
    <img src="styles/legend/TSS2021_4_1.png" /> aovie<br />\
    <img src="styles/legend/TSS2021_4_2.png" /> fabri<br />\
    <img src="styles/legend/TSS2021_4_3.png" /> jcest<br />\
    <img src="styles/legend/TSS2021_4_4.png" /> jgóme<br />\
    <img src="styles/legend/TSS2021_4_5.png" /> jrodrfe<br />\
    <img src="styles/legend/TSS2021_4_6.png" /> jsant<br />\
    <img src="styles/legend/TSS2021_4_7.png" /> lmadr<br />\
    <img src="styles/legend/TSS2021_4_8.png" /> mcast<br />\
    <img src="styles/legend/TSS2021_4_9.png" /> msuár<br />\
    <img src="styles/legend/TSS2021_4_10.png" /> nalij<br />\
    <img src="styles/legend/TSS2021_4_11.png" /> odelg<br />\
    <img src="styles/legend/TSS2021_4_12.png" /> pgom<br />\
    <img src="styles/legend/TSS2021_4_13.png" /> pparr<br />\
    <img src="styles/legend/TSS2021_4_14.png" /> rberc<br />\
    <img src="styles/legend/TSS2021_4_15.png" /> Sin TSS<br />\
    <img src="styles/legend/TSS2021_4_16.png" /> <br />'
        });

lyr_GoogleHybrid_0.setVisible(true);lyr_marca2021_1.setVisible(true);lyr_MarketShare_2.setVisible(true);lyr_Superficieha_3.setVisible(true);lyr_TSS2021_4.setVisible(true);
var layersList = [lyr_GoogleHybrid_0,lyr_marca2021_1,lyr_MarketShare_2,lyr_Superficieha_3,lyr_TSS2021_4];
lyr_marca2021_1.set('fieldAliases', {'geoLider': 'geoLider', });
lyr_MarketShare_2.set('fieldAliases', {'geo%MS': 'geo%MS', });
lyr_Superficieha_3.set('fieldAliases', {'geoHas.': 'geoHas.', });
lyr_TSS2021_4.set('fieldAliases', {'geoTSS': 'geoTSS', });
lyr_marca2021_1.set('fieldImages', {'geoLider': 'TextEdit', });
lyr_MarketShare_2.set('fieldImages', {'geo%MS': 'TextEdit', });
lyr_Superficieha_3.set('fieldImages', {'geoHas.': 'TextEdit', });
lyr_TSS2021_4.set('fieldImages', {'geoTSS': 'TextEdit', });
lyr_marca2021_1.set('fieldLabels', {'geoLider': 'header label', });
lyr_MarketShare_2.set('fieldLabels', {'geo%MS': 'header label', });
lyr_Superficieha_3.set('fieldLabels', {'geoHas.': 'header label', });
lyr_TSS2021_4.set('fieldLabels', {'geoTSS': 'header label', });
lyr_TSS2021_4.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});