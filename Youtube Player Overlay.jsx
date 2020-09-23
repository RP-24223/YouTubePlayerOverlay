// Created using compCode v1.2.1

createYouTubePlayerOverlay();
function createYouTubePlayerOverlay() {

app.beginUndoGroup("YouTube Player Overlay");

try {

// CREATE FOLDER HIERARCHY START
	var socialMediaUi_folder_properties = {"name":"Social Media UI","label":2,"comment":"","itemIsFolderItem":{"type":"function","arguments":["item"],"body":"return item instanceof FolderItem;"}};
	var socialMediaUi_folder = findProjectItem(app.project.rootFolder, false, socialMediaUi_folder_properties);
	if (socialMediaUi_folder === null) {
		socialMediaUi_folder = app.project.items.addFolder(socialMediaUi_folder_properties.name);
		socialMediaUi_folder.label = socialMediaUi_folder_properties.label;
	}
	var youtube_folder_properties = {"name":"Youtube","label":2,"comment":"","itemIsFolderItem":{"type":"function","arguments":["item"],"body":"return item instanceof FolderItem;"}};
	var youtube_folder = findProjectItem(socialMediaUi_folder, false, youtube_folder_properties);
	if (youtube_folder === null) {
		youtube_folder = app.project.items.addFolder(youtube_folder_properties.name);
		youtube_folder.label = youtube_folder_properties.label;
		youtube_folder.parentFolder = socialMediaUi_folder;
	}
// CREATE FOLDER HIERARCHY END

// CREATE COMPOSITIONS START
	var youtubePlayerOverlay_comp_properties = {"name":"YouTube Player Overlay","label":15,"comment":"","height":1080,"width":1920,"pixelAspect":1,"bgColor":[1,1,1],"duration":10.0517183850517,"numLayers":13,"frameRate":23.9759979248047,"itemIsCompItem":{"type":"function","arguments":["item"],"body":"return item instanceof CompItem;"}};
	var youtubePlayerOverlay_comp = app.project.items.addComp(youtubePlayerOverlay_comp_properties.name, youtubePlayerOverlay_comp_properties.width, youtubePlayerOverlay_comp_properties.height, youtubePlayerOverlay_comp_properties.pixelAspect, youtubePlayerOverlay_comp_properties.duration, youtubePlayerOverlay_comp_properties.frameRate);
		youtubePlayerOverlay_comp.time = 1.54320987654321;
		youtubePlayerOverlay_comp.bgColor = youtubePlayerOverlay_comp_properties.bgColor;
		youtubePlayerOverlay_comp.resolutionFactor = [1, 1];
		youtubePlayerOverlay_comp.parentFolder = youtube_folder;
// CREATE COMPOSITIONS END

// Working with comp "YouTube Player Overlay", varName "youtubePlayerOverlay_comp";
	youtubePlayerOverlay_comp.openInViewer();
	var timecode = youtubePlayerOverlay_comp.layers.addBoxText([290.499877929688,17.2499847412109], "00:01 / 0:10");
		timecode.name = "Timecode";
		timecode.moveToEnd();
		var timecode_marker1 = new MarkerValue("Set comp + layers to desired length of time");
			timecode_marker1.label = 0;
			timecode.property("ADBE Marker").setValueAtTime(0, timecode_marker1);
		var timecode_TextProp = timecode.property("ADBE Text Properties").property("ADBE Text Document");
		var timecode_TextDocument = timecode_TextProp.value;
			timecode_TextDocument.font = "Helvetica";
			timecode_TextDocument.fontSize = 20;
			timecode_TextDocument.applyFill = true;
			timecode_TextDocument.fillColor = [0.90975999832153,0.90975999832153,0.90584999322891];
			timecode_TextDocument.applyStroke = false;
			timecode_TextDocument.justification = ParagraphJustification.LEFT_JUSTIFY;
			timecode_TextDocument.tracking = 6;
			if (parseFloat(app.version) >= 13.2 ) {
				timecode_TextDocument.verticalScale = 1;
				timecode_TextDocument.horizontalScale = 1;
				timecode_TextDocument.baselineShift = 0;
				timecode_TextDocument.tsume = 0;
				// These values are read-only. You have to set them manually in the comp.
				// timecode_TextDocument.fauxBold = false;
				// timecode_TextDocument.fauxItalic = false;
				// timecode_TextDocument.allCaps = false;
				// timecode_TextDocument.smallCaps = false;
				// timecode_TextDocument.superscript = false;
				// timecode_TextDocument.subscript = false;
			}
			if (parseFloat(app.version) >= 13.6 ) {
				timecode_TextDocument.leading = 24;
				timecode_TextDocument.autoLeading = true;
			}
			timecode_TextProp.setValue(timecode_TextDocument);
		timecode.property("ADBE Transform Group").property("ADBE Anchor Point").setValue([-61.125,-1.6025390625,0]);
		timecode.property("ADBE Transform Group").property("ADBE Position").setValue([199.875,1053.375,0]);
		timecode.selected = false;
	// Add Shape Layer "Playbar (Playhead)", varName "playbarPlayhead";
	var playbarPlayhead = youtubePlayerOverlay_comp.layers.addShape();
		playbarPlayhead.name = "Playbar (Playhead)";
		playbarPlayhead.label = 11;
		playbarPlayhead.moveToEnd();
		var playbarPlayhead_marker1 = new MarkerValue("Move second keyframe to end of of comp");
			playbarPlayhead_marker1.label = 0;
			playbarPlayhead.property("ADBE Marker").setValueAtTime(0, playbarPlayhead_marker1);
		playbarPlayhead.property("ADBE Root Vectors Group").addProperty("ADBE Vector Shape - Group");
		playbarPlayhead.property("ADBE Root Vectors Group").property(1).name = "Path 1";
		var playbarPlayheadPath = playbarPlayhead.property("ADBE Root Vectors Group").property(1).property("ADBE Vector Shape");
		var playbarPlayheadPath_newShape = new Shape();
			playbarPlayheadPath_newShape.vertices = [[-944.421875, 484.259643554688], [940.52734375, 484.259643554688]];
			playbarPlayheadPath_newShape.closed = false;
		playbarPlayheadPath.setValue(playbarPlayheadPath_newShape);
		playbarPlayhead.property("ADBE Root Vectors Group").addProperty("ADBE Vector Graphic - Stroke");
		playbarPlayhead.property("ADBE Root Vectors Group").property(2).name = "Stroke 1";
		playbarPlayhead.property("ADBE Root Vectors Group").property(2).property("ADBE Vector Stroke Color").setValue([0.80392158031464,0.12549020349979,0.12156862765551,1]);
		playbarPlayhead.property("ADBE Root Vectors Group").property(2).property("ADBE Vector Stroke Width").setValue(4);
		playbarPlayhead.property("ADBE Root Vectors Group").property(2).property("ADBE Vector Stroke Line Cap").setValue(2);
		playbarPlayhead.property("ADBE Root Vectors Group").addProperty("ADBE Vector Filter - Trim");
		playbarPlayhead.property("ADBE Root Vectors Group").property(3).name = "Trim Paths 1";
		var playbarPlayheadEnd = playbarPlayhead.property("ADBE Root Vectors Group").property(3).property("ADBE Vector Trim End");
			var playbarPlayheadEnd_keyTimesArray = [0,10.01001001001];
			var playbarPlayheadEnd_valuesArray = [0,100];
			playbarPlayheadEnd.setValuesAtTimes(playbarPlayheadEnd_keyTimesArray, playbarPlayheadEnd_valuesArray);
		playbarPlayhead.property("ADBE Transform Group").property("ADBE Position").setValue([960,542,0]);
		playbarPlayhead.selected = false;
	// Add Shape Layer "Playbar (Loaded)", varName "playbarLoaded";
	var playbarLoaded = youtubePlayerOverlay_comp.layers.addShape();
		playbarLoaded.name = "Playbar (Loaded)";
		playbarLoaded.label = 11;
		playbarLoaded.moveToEnd();
		playbarLoaded.property("ADBE Root Vectors Group").addProperty("ADBE Vector Shape - Group");
		playbarLoaded.property("ADBE Root Vectors Group").property(1).name = "Path 1";
		var playbarLoadedPath = playbarLoaded.property("ADBE Root Vectors Group").property(1).property("ADBE Vector Shape");
		var playbarLoadedPath_newShape = new Shape();
			playbarLoadedPath_newShape.vertices = [[-944.421875, 484.259643554688], [940.52734375, 484.259643554688]];
			playbarLoadedPath_newShape.closed = false;
		playbarLoadedPath.setValue(playbarLoadedPath_newShape);
		playbarLoaded.property("ADBE Root Vectors Group").addProperty("ADBE Vector Graphic - Stroke");
		playbarLoaded.property("ADBE Root Vectors Group").property(2).name = "Stroke 1";
		playbarLoaded.property("ADBE Root Vectors Group").property(2).property("ADBE Vector Stroke Color").setValue([0.3306884765625,0.33566284179688,0.33566284179688,1]);
		playbarLoaded.property("ADBE Root Vectors Group").property(2).property("ADBE Vector Stroke Width").setValue(4);
		playbarLoaded.property("ADBE Root Vectors Group").property(2).property("ADBE Vector Stroke Line Cap").setValue(2);
		playbarLoaded.property("ADBE Root Vectors Group").addProperty("ADBE Vector Filter - Trim");
		playbarLoaded.property("ADBE Root Vectors Group").property(3).name = "Trim Paths 1";
		var playbarLoadedEnd = playbarLoaded.property("ADBE Root Vectors Group").property(3).property("ADBE Vector Trim End");
			var playbarLoadedEnd_keyTimesArray = [0,1.54320987654321];
			var playbarLoadedEnd_valuesArray = [36,100];
			playbarLoadedEnd.setValuesAtTimes(playbarLoadedEnd_keyTimesArray, playbarLoadedEnd_valuesArray);
		playbarLoaded.property("ADBE Transform Group").property("ADBE Position").setValue([960,542,0]);
		playbarLoaded.selected = false;
	// Add Shape Layer "Playbar (Static)", varName "playbarStatic";
	var playbarStatic = youtubePlayerOverlay_comp.layers.addShape();
		playbarStatic.name = "Playbar (Static)";
		playbarStatic.label = 11;
		playbarStatic.moveToEnd();
		playbarStatic.property("ADBE Root Vectors Group").addProperty("ADBE Vector Shape - Group");
		playbarStatic.property("ADBE Root Vectors Group").property(1).name = "Path 1";
		var playbarStaticPath = playbarStatic.property("ADBE Root Vectors Group").property(1).property("ADBE Vector Shape");
		var playbarStaticPath_newShape = new Shape();
			playbarStaticPath_newShape.vertices = [[-944.421875, 484.259643554688], [940.52734375, 484.259643554688]];
			playbarStaticPath_newShape.closed = false;
		playbarStaticPath.setValue(playbarStaticPath_newShape);
		playbarStatic.property("ADBE Root Vectors Group").addProperty("ADBE Vector Graphic - Stroke");
		playbarStatic.property("ADBE Root Vectors Group").property(2).name = "Stroke 1";
		playbarStatic.property("ADBE Root Vectors Group").property(2).property("ADBE Vector Stroke Color").setValue([0.3306884765625,0.33566284179688,0.33566284179688,1]);
		playbarStatic.property("ADBE Root Vectors Group").property(2).property("ADBE Vector Stroke Opacity").setValue(50);
		playbarStatic.property("ADBE Root Vectors Group").property(2).property("ADBE Vector Stroke Width").setValue(4);
		playbarStatic.property("ADBE Root Vectors Group").property(2).property("ADBE Vector Stroke Line Cap").setValue(2);
		playbarStatic.property("ADBE Transform Group").property("ADBE Position").setValue([960,542,0]);
		playbarStatic.selected = false;
	// Add Shape Layer "Full Screen", varName "fullScreen";
	var fullScreen = youtubePlayerOverlay_comp.layers.addShape();
		fullScreen.name = "Full Screen";
		fullScreen.moveToEnd();
		fullScreen.property("ADBE Root Vectors Group").addProperty("ADBE Vector Group");
		fullScreen.property("ADBE Root Vectors Group").property(1).name = "Rectangle 1";
		fullScreen.property("ADBE Root Vectors Group").property(1).property(2).addProperty("ADBE Vector Shape - Rect");
		fullScreen.property("ADBE Root Vectors Group").property(1).property(2).property(1).name = "Rectangle Path 1";
		fullScreen.property("ADBE Root Vectors Group").property(1).property(2).property(1).property("ADBE Vector Rect Size").setValue([21,21]);
		fullScreen.property("ADBE Root Vectors Group").property(1).property(2).addProperty("ADBE Vector Graphic - Stroke");
		fullScreen.property("ADBE Root Vectors Group").property(1).property(2).property(2).name = "Stroke 1";
		fullScreen.property("ADBE Root Vectors Group").property(1).property(2).property(2).property("ADBE Vector Stroke Dashes").addProperty("ADBE Vector Stroke Dash 1");
		fullScreen.property("ADBE Root Vectors Group").property(1).property(2).property(2).property("ADBE Vector Stroke Dashes").addProperty("ADBE Vector Stroke Offset");
		fullScreen.property("ADBE Root Vectors Group").property(1).property(2).property(2).property("ADBE Vector Stroke Dashes").addProperty("ADBE Vector Stroke Gap 1");
		fullScreen.property("ADBE Root Vectors Group").property(1).property(2).property(2).property("ADBE Vector Stroke Color").setValue([0.90194702148438,0.90194702148438,0.90194702148438,1]);
		fullScreen.property("ADBE Root Vectors Group").property(1).property(2).property(2).property("ADBE Vector Stroke Width").setValue(3.5);
		fullScreen.property("ADBE Root Vectors Group").property(1).property(2).property(2).property(9).property("ADBE Vector Stroke Dash 1").setValue(14);
		fullScreen.property("ADBE Root Vectors Group").property(1).property(2).property(2).property(9).property("ADBE Vector Stroke Gap 1").setValue(7);
		fullScreen.property("ADBE Root Vectors Group").property(1).property(2).property(2).property(9).property("ADBE Vector Stroke Offset").setValue(7);
		fullScreen.property("ADBE Transform Group").property("ADBE Position").setValue([1875,1053.375,0]);
		fullScreen.selected = false;
	// Add Shape Layer "Theatre Mode", varName "theatreMode";
	var theatreMode = youtubePlayerOverlay_comp.layers.addShape();
		theatreMode.name = "Theatre Mode";
		theatreMode.moveToEnd();
		theatreMode.property("ADBE Root Vectors Group").addProperty("ADBE Vector Group");
		theatreMode.property("ADBE Root Vectors Group").property(1).name = "Rectangle 1";
		theatreMode.property("ADBE Root Vectors Group").property(1).property(2).addProperty("ADBE Vector Shape - Rect");
		theatreMode.property("ADBE Root Vectors Group").property(1).property(2).property(1).name = "Rectangle Path 1";
		theatreMode.property("ADBE Root Vectors Group").property(1).property(2).property(1).property("ADBE Vector Rect Size").setValue([27,19]);
		theatreMode.property("ADBE Root Vectors Group").property(1).property(2).addProperty("ADBE Vector Graphic - Stroke");
		theatreMode.property("ADBE Root Vectors Group").property(1).property(2).property(2).name = "Stroke 1";
		theatreMode.property("ADBE Root Vectors Group").property(1).property(2).property(2).property("ADBE Vector Stroke Color").setValue([0.90194702148438,0.90194702148438,0.90194702148438,1]);
		theatreMode.property("ADBE Root Vectors Group").property(1).property(2).property(2).property("ADBE Vector Stroke Width").setValue(3.5);
		theatreMode.property("ADBE Transform Group").property("ADBE Position").setValue([1820.75,1053.375,0]);
		theatreMode.selected = false;
	// Add Shape Layer "Mini Player", varName "miniPlayer";
	var miniPlayer = youtubePlayerOverlay_comp.layers.addShape();
		miniPlayer.name = "Mini Player";
		miniPlayer.moveToEnd();
		miniPlayer.property("ADBE Root Vectors Group").addProperty("ADBE Vector Group");
		miniPlayer.property("ADBE Root Vectors Group").property(1).name = "Rectangle 1";
		miniPlayer.property("ADBE Root Vectors Group").property(1).property(2).addProperty("ADBE Vector Shape - Rect");
		miniPlayer.property("ADBE Root Vectors Group").property(1).property(2).property(1).name = "Rectangle Path 1";
		miniPlayer.property("ADBE Root Vectors Group").property(1).property(2).property(1).property("ADBE Vector Rect Size").setValue([31,25]);
		miniPlayer.property("ADBE Root Vectors Group").property(1).property(2).property(1).property("ADBE Vector Rect Roundness").setValue(3);
		miniPlayer.property("ADBE Root Vectors Group").property(1).property(2).addProperty("ADBE Vector Graphic - Stroke");
		miniPlayer.property("ADBE Root Vectors Group").property(1).property(2).property(2).name = "Stroke 1";
		miniPlayer.property("ADBE Root Vectors Group").property(1).property(2).property(2).property("ADBE Vector Stroke Color").setValue([0.90194702148438,0.90194702148438,0.90194702148438,1]);
		miniPlayer.property("ADBE Root Vectors Group").property(1).property(2).property(2).property("ADBE Vector Stroke Width").setValue(3.5);
		miniPlayer.property("ADBE Root Vectors Group").addProperty("ADBE Vector Group");
		miniPlayer.property("ADBE Root Vectors Group").property(2).name = "Group 1";
		miniPlayer.property("ADBE Root Vectors Group").property(2).property(2).addProperty("ADBE Vector Shape - Rect");
		miniPlayer.property("ADBE Root Vectors Group").property(2).property(2).property(1).name = "Rectangle Path 1";
		miniPlayer.property("ADBE Root Vectors Group").property(2).property(2).property(1).property("ADBE Vector Rect Size").setValue([12,9]);
		miniPlayer.property("ADBE Root Vectors Group").property(2).property(2).property(1).property("ADBE Vector Rect Position").setValue([4,3]);
		miniPlayer.property("ADBE Root Vectors Group").property(2).property(2).addProperty("ADBE Vector Graphic - Fill");
		miniPlayer.property("ADBE Root Vectors Group").property(2).property(2).property(2).name = "Fill 1";
		miniPlayer.property("ADBE Root Vectors Group").property(2).property(2).property(2).property("ADBE Vector Fill Color").setValue([0.90194702148438,0.90194702148438,0.90194702148438,1]);
		miniPlayer.property("ADBE Transform Group").property("ADBE Position").setValue([1767,1053.375,0]);
		miniPlayer.selected = false;
	var hd = youtubePlayerOverlay_comp.layers.addText("HD");
		hd.name = "HD";
		hd.label = 8;
		hd.moveToEnd();
		var hd_TextProp = hd.property("ADBE Text Properties").property("ADBE Text Document");
		var hd_TextDocument = hd_TextProp.value;
			hd_TextDocument.font = "Helvetica-Bold";
			hd_TextDocument.fontSize = 10;
			hd_TextDocument.applyFill = true;
			hd_TextDocument.fillColor = [0.90975999832153,0.90975999832153,0.90584999322891];
			hd_TextDocument.applyStroke = false;
			hd_TextDocument.justification = ParagraphJustification.LEFT_JUSTIFY;
			hd_TextDocument.tracking = 6;
			if (parseFloat(app.version) >= 13.2 ) {
				hd_TextDocument.verticalScale = 1;
				hd_TextDocument.horizontalScale = 1;
				hd_TextDocument.baselineShift = 0;
				hd_TextDocument.tsume = 0;
				// These values are read-only. You have to set them manually in the comp.
				// hd_TextDocument.fauxBold = false;
				// hd_TextDocument.fauxItalic = false;
				// hd_TextDocument.allCaps = false;
				// hd_TextDocument.smallCaps = false;
				// hd_TextDocument.superscript = false;
				// hd_TextDocument.subscript = false;
			}
			if (parseFloat(app.version) >= 13.6 ) {
				hd_TextDocument.leading = 12;
				hd_TextDocument.autoLeading = true;
			}
			hd_TextProp.setValue(hd_TextDocument);
		hd.property("ADBE Effect Parade").addProperty("ADBE Drop Shadow");
		hd.property("ADBE Effect Parade").property(1).name = "Drop Shadow";
		hd.property("ADBE Effect Parade").property(1).property("ADBE Drop Shadow-0002").setValue(126);
		hd.property("ADBE Effect Parade").property(1).property("ADBE Drop Shadow-0003").setValue(130);
		hd.property("ADBE Effect Parade").property(1).property("ADBE Drop Shadow-0004").setValue(1);
		hd.property("ADBE Transform Group").property("ADBE Anchor Point").setValue([7.49650692939758,-3.58642576634884,0]);
		hd.property("ADBE Transform Group").property("ADBE Position").setValue([10.2762794494629,-5.25,0]);
		hd.selected = false;
	// Add Shape Layer "Settings", varName "settings";
	var settings = youtubePlayerOverlay_comp.layers.addShape();
		settings.name = "Settings";
		settings.moveToEnd();
		settings.property("ADBE Root Vectors Group").addProperty("ADBE Vector Group");
		settings.property("ADBE Root Vectors Group").property(1).name = "Group 1";
		settings.property("ADBE Root Vectors Group").property(1).property(2).addProperty("ADBE Vector Shape - Rect");
		settings.property("ADBE Root Vectors Group").property(1).property(2).property(1).name = "Rectangle Path 1";
		settings.property("ADBE Root Vectors Group").property(1).property(2).property(1).property("ADBE Vector Rect Size").setValue([19,13]);
		settings.property("ADBE Root Vectors Group").property(1).property(2).property(1).property("ADBE Vector Rect Position").setValue([10,-5]);
		settings.property("ADBE Root Vectors Group").property(1).property(2).addProperty("ADBE Vector Graphic - Fill");
		settings.property("ADBE Root Vectors Group").property(1).property(2).property(2).name = "Fill 1";
		settings.property("ADBE Root Vectors Group").property(1).property(2).property(2).property("ADBE Vector Fill Color").setValue([0.81961059570312,0.184326171875,0.12548828125,1]);
		settings.property("ADBE Root Vectors Group").addProperty("ADBE Vector Group");
		settings.property("ADBE Root Vectors Group").property(2).name = "Polystar 1";
		settings.property("ADBE Root Vectors Group").property(2).property(2).addProperty("ADBE Vector Shape - Star");
		settings.property("ADBE Root Vectors Group").property(2).property(2).property(1).name = "Polystar Path 1";
		settings.property("ADBE Root Vectors Group").property(2).property(2).property(1).property("ADBE Vector Star Points").setValue(6);
		settings.property("ADBE Root Vectors Group").property(2).property(2).property(1).property("ADBE Vector Star Inner Radius").setValue(5);
		settings.property("ADBE Root Vectors Group").property(2).property(2).property(1).property("ADBE Vector Star Outer Radius").setValue(11);
		settings.property("ADBE Root Vectors Group").property(2).property(2).addProperty("ADBE Vector Graphic - Stroke");
		settings.property("ADBE Root Vectors Group").property(2).property(2).property(2).name = "Stroke 1";
		settings.property("ADBE Root Vectors Group").property(2).property(2).property(2).property("ADBE Vector Stroke Color").setValue([0.90191650390625,0.90191650390625,0.90191650390625,1]);
		settings.property("ADBE Root Vectors Group").property(2).property(2).property(2).property("ADBE Vector Stroke Width").setValue(5);
		settings.property("ADBE Root Vectors Group").property(2).property(2).property(2).property("ADBE Vector Stroke Line Cap").setValue(3);
		settings.property("ADBE Root Vectors Group").property(2).property(2).property(2).property("ADBE Vector Stroke Line Join").setValue(3);
		settings.property("ADBE Transform Group").property("ADBE Position").setValue([1712.5,1053.375,0]);
		settings.selected = false;
	// Add Shape Layer "Volume", varName "volume";
	var volume = youtubePlayerOverlay_comp.layers.addShape();
		volume.name = "Volume";
		volume.moveToEnd();
		volume.property("ADBE Root Vectors Group").addProperty("ADBE Vector Group");
		volume.property("ADBE Root Vectors Group").property(1).name = "Shape 1";
		volume.property("ADBE Root Vectors Group").property(1).property(2).addProperty("ADBE Vector Shape - Group");
		volume.property("ADBE Root Vectors Group").property(1).property(2).property(1).name = "Path 1";
		var volumePath = volume.property("ADBE Root Vectors Group").property(1).property(2).property(1).property("ADBE Vector Shape");
		var volumePath_newShape = new Shape();
			volumePath_newShape.vertices = [[-792.75, 507.625], [-792.875, 519.75], [-788.875, 513.375]];
			volumePath_newShape.inTangents = [[0, 0], [0, 0], [0, 4.25]];
			volumePath_newShape.outTangents = [[0, 0], [0, 0], [0, -3.75]];
			volumePath_newShape.closed = true;
		volumePath.setValue(volumePath_newShape);
		volume.property("ADBE Root Vectors Group").addProperty("ADBE Vector Shape - Group");
		volume.property("ADBE Root Vectors Group").property(2).name = "Path 1";
		var volumePath3 = volume.property("ADBE Root Vectors Group").property(2).property("ADBE Vector Shape");
		var volumePath3_newShape = new Shape();
			volumePath3_newShape.vertices = [[-796.125, 501.75], [-802.875, 508.859375], [-809.375, 508.8125], [-809.375, 518.125], [-802.75, 518.125], [-796, 524.875]];
			volumePath3_newShape.closed = true;
		volumePath3.setValue(volumePath3_newShape);
		volume.property("ADBE Root Vectors Group").addProperty("ADBE Vector Graphic - Fill");
		volume.property("ADBE Root Vectors Group").property(3).name = "Fill 1";
		volume.property("ADBE Root Vectors Group").property(3).property("ADBE Vector Fill Color").setValue([0.9058837890625,0.9058837890625,0.90194702148438,1]);
		volume.selected = false;
	// Add Shape Layer "Next", varName "next";
	var next = youtubePlayerOverlay_comp.layers.addShape();
		next.name = "Next";
		next.moveToEnd();
		next.property("ADBE Root Vectors Group").addProperty("ADBE Vector Group");
		next.property("ADBE Root Vectors Group").property(1).name = "Polystar 1";
		next.property("ADBE Root Vectors Group").property(1).property(2).addProperty("ADBE Vector Shape - Star");
		next.property("ADBE Root Vectors Group").property(1).property(2).property(1).name = "Polystar Path 1";
		next.property("ADBE Root Vectors Group").property(1).property(2).property(1).property("ADBE Vector Star Type").setValue(2);
		next.property("ADBE Root Vectors Group").property(1).property(2).property(1).property("ADBE Vector Star Points").setValue(3);
		next.property("ADBE Root Vectors Group").property(1).property(2).property(1).property("ADBE Vector Star Rotation").setValue(90);
		next.property("ADBE Root Vectors Group").property(1).property(2).property(1).property("ADBE Vector Star Outer Radius").setValue(10);
		next.property("ADBE Root Vectors Group").property(1).property(2).addProperty("ADBE Vector Shape - Rect");
		next.property("ADBE Root Vectors Group").property(1).property(2).property(2).name = "Rectangle Path 1";
		next.property("ADBE Root Vectors Group").property(1).property(2).property(2).property("ADBE Vector Rect Size").setValue([4,18]);
		next.property("ADBE Root Vectors Group").property(1).property(2).property(2).property("ADBE Vector Rect Position").setValue([16,0]);
		next.property("ADBE Root Vectors Group").property(1).property(2).addProperty("ADBE Vector Graphic - Fill");
		next.property("ADBE Root Vectors Group").property(1).property(2).property(3).name = "Fill 1";
		next.property("ADBE Root Vectors Group").property(1).property(2).property(3).property("ADBE Vector Fill Color").setValue([0.9097900390625,0.9097900390625,0.9058837890625,1]);
		next.property("ADBE Root Vectors Group").property(1).property(3).property("ADBE Vector Position").setValue([-0.875,0]);
		next.property("ADBE Root Vectors Group").property(1).property(3).property("ADBE Vector Scale").setValue([80,100]);
		next.property("ADBE Transform Group").property("ADBE Position").setValue([107.875,1053.375,0]);
		next.selected = false;
	// Add Shape Layer "Play", varName "play";
	var play = youtubePlayerOverlay_comp.layers.addShape();
		play.name = "Play";
		play.moveToEnd();
		play.property("ADBE Root Vectors Group").addProperty("ADBE Vector Group");
		play.property("ADBE Root Vectors Group").property(1).name = "Polystar 1";
		play.property("ADBE Root Vectors Group").property(1).property(2).addProperty("ADBE Vector Shape - Star");
		play.property("ADBE Root Vectors Group").property(1).property(2).property(1).name = "Polystar Path 1";
		play.property("ADBE Root Vectors Group").property(1).property(2).property(1).property("ADBE Vector Star Type").setValue(2);
		play.property("ADBE Root Vectors Group").property(1).property(2).property(1).property("ADBE Vector Star Points").setValue(3);
		play.property("ADBE Root Vectors Group").property(1).property(2).property(1).property("ADBE Vector Star Rotation").setValue(90);
		play.property("ADBE Root Vectors Group").property(1).property(2).property(1).property("ADBE Vector Star Outer Radius").setValue(13);
		play.property("ADBE Root Vectors Group").property(1).property(2).addProperty("ADBE Vector Graphic - Fill");
		play.property("ADBE Root Vectors Group").property(1).property(2).property(2).name = "Fill 1";
		play.property("ADBE Root Vectors Group").property(1).property(2).property(2).property("ADBE Vector Fill Color").setValue([0.9097900390625,0.9097900390625,0.9058837890625,1]);
		play.property("ADBE Root Vectors Group").property(1).property(3).property("ADBE Vector Scale").setValue([100,100]);
		play.property("ADBE Transform Group").property("ADBE Position").setValue([48.5,1053.5,0]);
		play.selected = false;
	// Add Shape Layer "Lower Gradient Shadow", varName "lowerGradientShadow";
	var lowerGradientShadow = youtubePlayerOverlay_comp.layers.addShape();
		lowerGradientShadow.name = "Lower Gradient Shadow";
		lowerGradientShadow.label = 9;
		lowerGradientShadow.blendingMode = BlendingMode.SCREEN;
		lowerGradientShadow.moveToEnd();
		lowerGradientShadow.property("ADBE Root Vectors Group").addProperty("ADBE Vector Group");
		lowerGradientShadow.property("ADBE Root Vectors Group").property(1).name = "Rectangle 1";
		lowerGradientShadow.property("ADBE Root Vectors Group").property(1).property(2).addProperty("ADBE Vector Shape - Rect");
		lowerGradientShadow.property("ADBE Root Vectors Group").property(1).property(2).property(1).name = "Rectangle Path 1";
		lowerGradientShadow.property("ADBE Root Vectors Group").property(1).property(2).property(1).property("ADBE Vector Rect Size").setValue([1785.390625,183.625]);
		lowerGradientShadow.property("ADBE Root Vectors Group").property(1).property(3).property("ADBE Vector Position").setValue([4.1953125,493.1875]);
		lowerGradientShadow.property("ADBE Root Vectors Group").addProperty("ADBE Vector Graphic - Fill");
		lowerGradientShadow.property("ADBE Root Vectors Group").property(2).name = "Fill 1";
		lowerGradientShadow.property("ADBE Root Vectors Group").property(2).property("ADBE Vector Fill Color").setValue([0,0,0,1]);
		lowerGradientShadow.property("ADBE Mask Parade").addProperty("ADBE Mask Atom");
		lowerGradientShadow.property("ADBE Mask Parade").property(1).name = "Mask 1";
		lowerGradientShadow.property("ADBE Mask Parade").property(1).color = [0.65882352941176, 0.58823529411765, 0.46666666666667];
		var lowerGradientShadowMaskPath = lowerGradientShadow.property("ADBE Mask Parade").property(1).property("ADBE Mask Shape");
		var lowerGradientShadowMaskPath_newShape = new Shape();
			lowerGradientShadowMaskPath_newShape.vertices = [[-987.953491210938, 504.966674804688], [-988, 552], [996.390625, 552], [996.437133789062, 504.966674804688]];
			lowerGradientShadowMaskPath_newShape.closed = true;
		lowerGradientShadowMaskPath.setValue(lowerGradientShadowMaskPath_newShape);
		lowerGradientShadow.property("ADBE Mask Parade").property(1).property("ADBE Mask Feather").setValue([90,90]);
		lowerGradientShadow.property("ADBE Transform Group").property("ADBE Anchor Point").setValue([4.1953125,493.1875,0]);
		lowerGradientShadow.property("ADBE Transform Group").property("ADBE Position").setValue([964.1953125,1041.1875,0]);
		lowerGradientShadow.property("ADBE Transform Group").property("ADBE Scale").setValue([150.159404888417,150.159404888417,100]);
		lowerGradientShadow.selected = false;
	// Apply parents
		hd.setParentWithJump(settings);

	// Lock Layers
		playbarLoaded.locked = true;
		playbarStatic.locked = true;
		fullScreen.locked = true;
		theatreMode.locked = true;
		miniPlayer.locked = true;
		hd.locked = true;
		settings.locked = true;
		volume.locked = true;
		next.locked = true;
		play.locked = true;
		lowerGradientShadow.locked = true;



	// Apply expressions to properties
		try {
			timecode.property("ADBE Text Properties").property("ADBE Text Document").expression = "{// GET CURRENT TIME" + "\n" + 
				"h1=0;m1=0;s1=0;f1=+1;" + "\n" + 
				"f1+=timeToFrames(t1 = time + thisComp.displayStartTime, fps = (23.976/24) / thisComp.frameDuration, isDuration = false);" + "\n" + 
				"s1+=Math.floor(f1*thisComp.frameDuration);" + "\n" + 
				"m1+=Math.floor(s1/60);" + "\n" + 
				"h1+=Math.floor(m1/60);" + "\n" + 
				"f1=f1%(1/thisComp.frameDuration);" + "\n" + 
				"s1=s1%60;" + "\n" + 
				"m1=m1%60;" + "\n" + 
				"if(f1<10) {f1=\"0\"+f1}" + "\n" + 
				"if(s1<10) {s1=\"0\"+s1}" + "\n" + 
				"if(m1<10) {m1=\"0\"+m1}" + "\n" + 
				"if(m1>59) {h1=(m1/60)+\":\"}" + "\n" + 
				"if(h1>0) {h1=h1+\":\"}" + "\n" + 
				"if(h1<1) {h1=\"\"}" + "\n" + 
				"var currentTime = h1+m1+\":\"+s1" + "\n" + 
				"}" + "\n" + 
				"" + "\n" + 
				"{// GET TOTAL TIME" + "\n" + 
				"T2=timeToFrames(thisComp.duration);" + "\n" + 
				"outPoint = framesToTime(T2, fps / thisComp.frameDuration);" + "\n" + 
				"h2=0;m2=0;s2=0;f2=0;" + "\n" + 
				"f2+=outPoint;" + "\n" + 
				"s2+=Math.floor((T2*thisComp.frameDuration)*(23.976/24));" + "\n" + 
				"m2+=Math.floor(s2/60);" + "\n" + 
				"h2+=Math.floor(m2/60);" + "\n" + 
				"f2=f2%(1/f2);" + "\n" + 
				"s2=s2%60;" + "\n" + 
				"m2=m2%60;" + "\n" + 
				"if(f2<10) {f2=\"0\"+f2}" + "\n" + 
				"if(s2<10) {s2=\"0\"+s2}" + "\n" + 
				"if(m2>59) {h2=(m2/60)+\":\"}" + "\n" + 
				"if(h2>0) {h2=h2+\":\"}" + "\n" + 
				"if(h2<1) {h2=\"\"}" + "\n" + 
				"var totalTime = h2+m2+\":\"+s2;" + "\n" + 
				"}" + "\n" + 
				"" + "\n" + 
				"// DISPLAY TEXT" + "\n" + 
				"currentTime+\" / \"+totalTime";
		} catch (err) {}

youtubePlayerOverlay_comp.openInViewer();

return {
	compItem : youtubePlayerOverlay_comp
};

} catch (e) {
	alert (e.toString() + "\nScript File: " + File.decode(e.fileName).replace(/^.*[\|\/]/, '') + 
		"\nFunction: " + arguments.callee.name + 
		"\nError on Line: " + e.line.toString());
}
app.endUndoGroup();


function findProjectItem(searchFolder, recursion, userData) {
	var folderItem;
	for (var i = 1, il = searchFolder.items.length; i <= il; i++) {
		folderItem = searchFolder.items[i];
		if (propertiesMatch(folderItem, userData)) {
			return folderItem;
		} else if (recursion === true && folderItem instanceof FolderItem && folderItem.numItems > 0) {
			var item = findProjectItem(folderItem, recursion, userData);
			if (item !== null) return item;
		}
	}
	return null;
}

function propertiesMatch(projectItem, userData) {
	if (typeof userData === 'undefined') return true;

	for (var propertyName in userData) {
		if (!userData.hasOwnProperty(propertyName)) continue;

		if (isFunctionObject(userData[propertyName])) {
			var functionConstructor = new Function(
				userData[propertyName].arguments,
				userData[propertyName].body);
			if (!functionConstructor(projectItem)) {
				return false;
			}
		} else {
			if (typeof userData[propertyName] !== typeof projectItem[propertyName]) {
				return false;
			}

			if (isArray(userData[propertyName]) && isArray(projectItem[propertyName])) {
				if (userData[propertyName].toString() !== projectItem[propertyName].toString()) {
					return false;
				}
			} else if (isObject(userData[propertyName]) && isObject(projectItem[propertyName])) {
				if (!propertiesMatch(projectItem[propertyName], userData[propertyName])) {
					return false;
				}
			} else if (projectItem[propertyName] !== userData[propertyName]) {
				return false;
			}
		}
	}
	return true;

	function isFunctionObject(object) {
		// Object needs to be of Object type;
		if (!isObject(object)) return false;

		// Object needs to have a 'type' property equal to string 'function';
		if (!object.hasOwnProperty('type') || !isString(object.type) || object.type !== 'function') {
			return false;
		}

		// Object needs to have an 'arguments' property of Array type;
		if (!object.hasOwnProperty('arguments') || !isArray(object.arguments)) {
			return false;
		}

		// Object needs to have a 'body' property of String type;
		if (!object.hasOwnProperty('body') || !isString(object.body)) {
			return false;
		}

		return true;
	}
}

function isArray(object) {
	return Object.prototype.toString.apply(object) === '[object Array]';
}

function isObject(object) {
	return typeof object === 'object';
}

function isString(value) {
	return typeof value === 'string' || value instanceof String;
}

}

