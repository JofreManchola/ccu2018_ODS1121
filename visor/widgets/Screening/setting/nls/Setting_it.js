// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See http://js.arcgis.com/3.15/esri/copyright.txt and http://www.arcgis.com/apps/webappbuilder/copyright.txt for details.
//>>built
define({"widgets/Screening/setting/nls/strings":{units:{feetUnit:"Piedi / Piedi quadrati",milesUnit:"Miglia / Acri",metersUnit:"Metri / Metri quadrati",kilometersUnit:"Chilometri / Chilometri quadrati",hectaresUnit:"Chilometri / Ettari"},analysisTab:{analysisTabLabel:"Analisi",selectAnalysisLayerLabel:"Seleziona il layer di analisi",addLayerLabel:"Aggiungi layer",noValidLayersForAnalysis:"Nessun layer valido trovato nella mappa Web selezionata.",noValidFieldsForAnalysis:"Nessun campo valido trovato nella mappa Web selezionata. Rimuovere il layer selezionato.",
addLayersHintText:"Suggerimento: selezionare layer e campi da analizzare e visualizzare nel report",addLayerNameTitle:"Nome layer",addFieldsLabel:"Aggiungi campo",addFieldsPopupTitle:"Seleziona campi",addFieldsNameTitle:"Nomi campi",aoiToolsLegendLabel:"Strumenti AOI",aoiToolsDescriptionLabel:"Abilita gli strumenti per creare aree di interesse e specificarne le etichette",placenameLabel:"Toponimo",drawToolsLabel:"Strumenti di disegno",uploadShapeFileLabel:"Carica uno shapefile",coordinatesLabel:"Coordinate",
coordinatesDrpDwnHintText:"Suggerimento: selezionare l'unit\u00e0 per visualizzare le traverse inserite",coordinatesBearingDrpDwnHintText:"Suggerimento: selezionare il rilevamento per visualizzare le traverse inserite",allowShapefilesUploadLabel:"Consenti il caricamento degli shapefile per l'analisi",allowShapefilesUploadLabelHintText:"Suggerimento: mostra 'Carica shapefile in analisi' nella scheda Report",allowVisibleLayerAnalysisLabel:"Non analizzare o riportare i risultati per i layer che non sono visibili",
allowVisibleLayerAnalysisHintText:"Suggerimento: i layer che sono stati disattivati o che non sono visibili a causa di impostazioni di visibilit\u00e0 in scala non saranno analizzati o inclusi nei risultati stampati o scaricati.",areaUnitsLabel:"Mostra risultati di analisi in",maxFeatureForAnalysisLabel:"Feature max per analisi",maxFeatureForAnalysisHintText:"Suggerimento: impostare il numero massimo di feature per l'analisi",searchToleranceLabelText:"Tolleranza di ricerca",searchToleranceHint:"Suggerimento: impiegata solo per l'analisi di input di punti e linee",
placenameButtonText:"Toponimo",drawToolsButtonText:"Disegna",shapefileButtonText:"Shapefile",coordinatesButtonText:"Coordinate",invalidLayerErrorMsg:"Configurare i campi per"},downloadTab:{downloadLegend:"Impostazioni di download",reportLegend:"Impostazioni report",downloadTabLabel:"Scarica",syncEnableOptionLabel:"Feature layer",syncEnableOptionHint:"Suggerimento: impiegati per scaricare informazioni su feature che intersecano l'aera di interesse nei formati indicati.",syncEnableOptionNote:"Nota: per le opzioni File Geodatabase e Shapefile sono richiesti i Feature Service abilitati per la sincronizzazione . Il formato shapefile \u00e8 supportato solo con Feature L in hosting in ArcGIS Online.",
extractDataTaskOptionLabel:"Servizio di geoprocessing Estrai attivit\u00e0 dati",extractDataTaskOptionHint:"Suggerimento: impiegare un servizio di geoprocessing Estrai attivit\u00e0 dati per scaricare feature che intersecano l'area di interesse in formati Geodatabase file o Shapefile.",cannotDownloadOptionLabel:"Disabilita download",syncEnableTableHeaderTitle:{layerNameLabel:"Nome layer",csvFileFormatLabel:"CSV",fileGDBFormatLabel:"File geodatabase",ShapefileFormatLabel:"Shapefile",allowDownloadLabel:"Consenti download"},
setButtonLabel:"Imposta",GPTaskLabel:"Specificare l'url che rimanda al servizio di geoprocessing",printGPServiceLabel:"URL servizio di stampa",setGPTaskTitle:"Specificare l'URL richiesto al servizio di geoprocessing",logoLabel:"Logo",logoChooserHint:"Suggerimento: fare clic sull'icona dell'immagine per modificare l'immagine",footnoteLabel:"Nota a pi\u00e8 di pagina",columnTitleColorPickerLabel:"Colore per titoli colonne",reportTitleLabel:"Titolo report",errorMessages:{invalidGPTaskURL:"Servizio di geoprocessing non valido. Selezionare il servizio di geoprocessing contenente Estrai attivit\u00e0 dati.",
noExtractDataTaskURL:"Selezionare un servizio di geoprocessing qualsiasi contenente Estrai attivit\u00e0 dati.",duplicateCustomOption:"Elemento duplicato per ${duplicateValueSizeName}.",invalidLayoutWidth:"Larghezza non valida per ${customLayoutOptionValue}.",invalidLayoutHeight:"Altezza non valida per ${customLayoutOptionValue}.",invalidLayoutPageUnits:"Unit\u00e0 di pagina non valida selezionata per ${customLayoutOptionValue}.",failtofetchbuddyTaskDimension:"Errore durante il recupero delle informazioni dimensionali del progetto. Riprovare.",
failtofetchbuddyTaskName:"Errore durante il recupero del nome del progetto. Riprovare.",failtofetchChoiceList:"Errore durante il recupero dell'elenco di opzioni dal servizio di stampa. Riprovare.",invalidWidth:"Larghezza non valida.",invalidHeight:"Altezza non valida."},addCustomLayoutTitle:"Aggiungi layout personalizzato",customLayoutOptionHint:"Suggerimento: aggiungi un'opzione di layout personalizzata dal tuo servizio di stampa alle opzioni di stampa.",reportDefaultOptionLabel:"Layout predefinito",
pageSizeUnits:{millimeters:"Millimetri",points:"Punti"}},generalTab:{generalTabLabel:"Generale",tabLabelsLegend:"Etichette pannello",tabLabelsHint:"Suggerimento: specificare le etichette",AOITabLabel:"Pannello area di interesse",ReportTabLabel:"Pannello report",bufferSettingsLegend:"Impostazioni buffer",defaultBufferDistanceLabel:"Distanza predefinita del buffer",defaultBufferUnitsLabel:"Unit\u00e0 buffer",generalBufferSymbologyHint:"Suggerimento: impostare la simbologia da impiegare per mostrare i buffer sulle aree di interesse definite",
aoiGraphicsSymbologyLegend:"Simbologia grafici AOI",aoiGraphicsSymbologyHint:"Suggerimento: impostare la simbologia da impiegare per definire aree di interesse di punti, linee e poligoni",pointSymbologyLabel:"Punto",previewLabel:"Anteprima",lineSymbologyLabel:"Linea",polygonSymbologyLabel:"Poligono",aoiBufferSymbologyLabel:"Simbologia buffer",pointSymbolChooserPopupTitle:"Simbolo indirizzo o posizione",polygonSymbolChooserPopupTitle:"Seleziona simbolo per evidenziare poligono",lineSymbolChooserPopupTitle:"Seleziona simbolo per evidenziare linea",
aoiSymbolChooserPopupTitle:"Imposta simbolo buffer",aoiTabText:"AOI",reportTabText:"Report",invalidSymbolValue:"Valore del simbolo non valido."},searchSourceSetting:{searchSourceSettingTabTitle:"Cerca impostazioni origine",searchSourceSettingTitle:"Cerca impostazioni origine",searchSourceSettingTitleHintText:"Aggiungere e configurare servizi di geocodifica o feature layer come fonti di ricerca. Queste fonti specificate determinano ci\u00f2 che \u00e8 possibile cercare nella casella di ricerca",addSearchSourceLabel:"Aggiungi fonte di ricerca",
featureLayerLabel:"Feature layer",geocoderLabel:"Geocodificatore",generalSettingLabel:"Impostazioni generali",allPlaceholderLabel:"Testo segnaposto per la ricerca in tutti:",allPlaceholderHintText:"Suggerimento: immettere il testo da visualizzare come segnaposto durante la ricerca di tutti i layer e geocodificatore",generalSettingCheckboxLabel:"Mostra popup per la feature o la posizione trovata",countryCode:"Codici paesi o regioni",countryCodeEg:"es. ",countryCodeHint:"Se si lascia vuoto questo campo, la ricerca verr\u00e0 effettuata in tutti i paesi e le regioni",
questionMark:"?",searchInCurrentMapExtent:"Esegui la ricerca nell'estensione mappa corrente",zoomScale:"Scala zoom",locatorUrl:"URL geocodificatore",locatorName:"Nome geocodificatore",locatorExample:"Esempio",locatorWarning:"Questa versione del servizio di geocodifica non \u00e8 supportata. Il widget supporta il servizio di geocodifica 10.0 e versioni successive.",locatorTips:"I suggerimenti non sono disponibili perch\u00e9 il servizio di geocodifica non supporta tale funzionalit\u00e0.",layerSource:"Origine del layer",
setLayerSource:"Imposta layer di origine",setGeocoderURL:"Imposta URL geocodificatore",searchLayerTips:"I suggerimenti non sono disponibili perch\u00e9 il feature service non supporta la funzionalit\u00e0 di paginazione.",placeholder:"Testo segnaposto",searchFields:"Campi di ricerca",displayField:"Campo visualizzazione",exactMatch:"Corrispondenza esatta",maxSuggestions:"Suggerimenti massimi",maxResults:"Risultati massimi",enableLocalSearch:"Abilita ricerca locale",minScale:"Scala Minima",minScaleHint:"Quando la scala della mappa \u00e8 pi\u00f9 grande di questa scala, verr\u00e0 applicata la ricerca locale",
radius:"Raggio",radiusHint:"Specifica il raggio di un'area intorno al centro della mappa corrente che viene utilizzato per assegnare la priorit\u00e0 alla classificazione dei candidati di geocodifica in modo che i canditati pi\u00f9 vicini alla posizione vengano restituiti per primi",setSearchFields:"Imposta campi di ricerca",set:"Imposta",invalidUrlTip:"URL ${URL} non valido o non accessibile.",invalidSearchSources:"Impostazioni fonte di ricerca non valide"},errorMsg:{textboxFieldsEmptyErrorMsg:"Compilare i campi obbligatori",
bufferDistanceFieldsErrorMsg:"Immettere dei valori validi",invalidSearchToleranceErrorMsg:"Immettere un valore valido per la tolleranza di ricerca",atLeastOneCheckboxCheckedErrorMsg:"Configurazione non valida: \u00e8 necessario almeno uno strumento AOI.",noLayerAvailableErrorMsg:"Layer non disponibili",layerNotSupportedErrorMsg:"Non supportato ",noFieldSelected:"Impiegare l'azione Modifica per selezionare i campi per l'analisi.",duplicateFieldsLabels:'Etichetta duplicata "${labelText}" aggiunta per: "${itemNames}"',
noLayerSelected:"Selezionare almeno un layer per l'analisi",errorInSelectingLayer:"Disabilitare completare l'operazione di selezione del layer. Riprovare.",errorInMaxFeatureCount:"Inserire il numero valido max di feature per l'analisi."},_localized:{}}});