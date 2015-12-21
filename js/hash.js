//(function (console) { "use strict";
var Sha512 = function() { };
Sha512.sha384 = function(message) {
	return Sha512.sha(message,384);
};
Sha512.sha512_256 = function(message) {
	return Sha512.sha(message,256);
};
Sha512.sha512_224 = function(message) {
	return Sha512.sha(message,224);
};
Sha512.sha512 = function(message) {
	return Sha512.sha(message,512);
};
Sha512.sha = function(message,bits) {
	var h0h;
	var h0l;
	var h1h;
	var h1l;
	var h2h;
	var h2l;
	var h3h;
	var h3l;
	var h4h;
	var h4l;
	var h5h;
	var h5l;
	var h6h;
	var h6l;
	var h7h;
	var h7l;
	var block;
	var code;
	var end = false;
	var i;
	var j;
	var index = 0;
	var start = 0;
	var bytes = 0;
	var length = message.length;
	var s0h;
	var s0l;
	var s1h;
	var s1l;
	var c1;
	var c2;
	var c3;
	var c4;
	var abh;
	var abl;
	var dah;
	var dal;
	var cdh;
	var cdl;
	var bch;
	var bcl;
	var majh;
	var majl;
	var t1h;
	var t1l;
	var t2h;
	var t2l;
	var chh;
	var chl;
	if(bits == 384) {
		h0h = -876896931;
		h0l = -1056596264;
		h1h = 1654270250;
		h1l = 914150663;
		h2h = -1856437926;
		h2l = 812702999;
		h3h = 355462360;
		h3l = -150054599;
		h4h = 1731405415;
		h4l = -4191439;
		h5h = -1900787065;
		h5l = 1750603025;
		h6h = -619958771;
		h6l = 1694076839;
		h7h = 1203062813;
		h7l = -1090891868;
	} else if(bits == 256) {
		h0h = 573645204;
		h0l = -64227540;
		h1h = -1621794909;
		h1l = -934517566;
		h2h = 596883563;
		h2l = 1867755857;
		h3h = -1774684391;
		h3l = 1497426621;
		h4h = -1775747358;
		h4l = -1467023389;
		h5h = -1101128155;
		h5l = 1401305490;
		h6h = 721525244;
		h6l = 746961066;
		h7h = 246885852;
		h7l = -2117784414;
	} else if(bits == 224) {
		h0h = -1942145080;
		h0l = 424955298;
		h1h = 1944164710;
		h1l = -1982016298;
		h2h = 502970286;
		h2l = 855612546;
		h3h = 1738396948;
		h3l = 1479516111;
		h4h = 258812777;
		h4l = 2077511080;
		h5h = 2011393907;
		h5l = 79989058;
		h6h = 1067287976;
		h6l = 1780299464;
		h7h = 286451373;
		h7l = -1848208735;
	} else {
		h0h = 1779033703;
		h0l = -205731576;
		h1h = -1150833019;
		h1l = -2067093701;
		h2h = 1013904242;
		h2l = -23791573;
		h3h = -1521486534;
		h3l = 1595750129;
		h4h = 1359893119;
		h4l = -1377402159;
		h5h = -1694144372;
		h5l = 725511199;
		h6h = 528734635;
		h6l = -79577749;
		h7h = 1541459225;
		h7l = 327033209;
		bits = 512;
	}
	block = 0;
	do {
		Sha512.blocks[0] = block;
		Sha512.blocks[1] = Sha512.blocks[2] = Sha512.blocks[3] = Sha512.blocks[4] = Sha512.blocks[5] = Sha512.blocks[6] = Sha512.blocks[7] = Sha512.blocks[8] = Sha512.blocks[9] = Sha512.blocks[10] = Sha512.blocks[11] = Sha512.blocks[12] = Sha512.blocks[13] = Sha512.blocks[14] = Sha512.blocks[15] = Sha512.blocks[16] = Sha512.blocks[17] = Sha512.blocks[18] = Sha512.blocks[19] = Sha512.blocks[20] = Sha512.blocks[21] = Sha512.blocks[22] = Sha512.blocks[23] = Sha512.blocks[24] = Sha512.blocks[25] = Sha512.blocks[26] = Sha512.blocks[27] = Sha512.blocks[28] = Sha512.blocks[29] = Sha512.blocks[30] = Sha512.blocks[31] = Sha512.blocks[32] = 0;
		i = start;
		while(index < length && i < 128) {
			code = HxOverrides.cca(message,index);
			if(code < 128) Sha512.blocks[i >> 2] |= code << Sha512.SHIFT[i++ & 3]; else if(code < 2048) {
				Sha512.blocks[i >> 2] |= (192 | code >> 6) << Sha512.SHIFT[i++ & 3];
				Sha512.blocks[i >> 2] |= (128 | code & 63) << Sha512.SHIFT[i++ & 3];
			} else if(code < 55296 || code >= 57344) {
				Sha512.blocks[i >> 2] |= (224 | code >> 12) << Sha512.SHIFT[i++ & 3];
				Sha512.blocks[i >> 2] |= (128 | code >> 6 & 63) << Sha512.SHIFT[i++ & 3];
				Sha512.blocks[i >> 2] |= (128 | code & 63) << Sha512.SHIFT[i++ & 3];
			} else {
				code = 65536 + ((code & 1023) << 10 | (function($this) {
					var $r;
					var index1 = ++index;
					$r = HxOverrides.cca(message,index1);
					return $r;
				}(this)) & 1023);
				Sha512.blocks[i >> 2] |= (240 | code >> 18) << Sha512.SHIFT[i++ & 3];
				Sha512.blocks[i >> 2] |= (128 | code >> 12 & 63) << Sha512.SHIFT[i++ & 3];
				Sha512.blocks[i >> 2] |= (128 | code >> 6 & 63) << Sha512.SHIFT[i++ & 3];
				Sha512.blocks[i >> 2] |= (128 | code & 63) << Sha512.SHIFT[i++ & 3];
			}
			++index;
		}
		bytes += i - start;
		start = i - 128;
		if(index == length) {
			Sha512.blocks[i >> 2] |= Sha512.EXTRA[i & 3];
			++index;
		}
		block = Sha512.blocks[32];
		if(index > length && i < 112) {
			Sha512.blocks[31] = bytes << 3;
			end = true;
		}
		j = 32;
		while(j < 160) {
			t1h = Sha512.blocks[j - 30];
			t1l = Sha512.blocks[j - 29];
			s0h = (t1h >>> 1 | t1l << 31) ^ (t1h >>> 8 | t1l << 24) ^ t1h >>> 7;
			s0l = (t1l >>> 1 | t1h << 31) ^ (t1l >>> 8 | t1h << 24) ^ (t1l >>> 7 | t1h << 25);
			t1h = Sha512.blocks[j - 4];
			t1l = Sha512.blocks[j - 3];
			s1h = (t1h >>> 19 | t1l << 13) ^ (t1l >>> 29 | t1h << 3) ^ t1h >>> 6;
			s1l = (t1l >>> 19 | t1h << 13) ^ (t1h >>> 29 | t1l << 3) ^ (t1l >>> 6 | t1h << 26);
			t1h = Sha512.blocks[j - 32];
			t1l = Sha512.blocks[j - 31];
			t2h = Sha512.blocks[j - 14];
			t2l = Sha512.blocks[j - 13];
			c1 = (t2l & 65535) + (t1l & 65535) + (s0l & 65535) + (s1l & 65535);
			c2 = (t2l >>> 16) + (t1l >>> 16) + (s0l >>> 16) + (s1l >>> 16) + (c1 >>> 16);
			c3 = (t2h & 65535) + (t1h & 65535) + (s0h & 65535) + (s1h & 65535) + (c2 >>> 16);
			c4 = (t2h >>> 16) + (t1h >>> 16) + (s0h >>> 16) + (s1h >>> 16) + (c3 >>> 16);
			Sha512.blocks[j] = c4 << 16 | c3 & 65535;
			Sha512.blocks[j + 1] = c2 << 16 | c1 & 65535;
			j += 2;
		}
		var ah = h0h;
		var al = h0l;
		var bh = h1h;
		var bl = h1l;
		var ch = h2h;
		var cl = h2l;
		var dh = h3h;
		var dl = h3l;
		var eh = h4h;
		var el = h4l;
		var fh = h5h;
		var fl = h5l;
		var gh = h6h;
		var gl = h6l;
		var hh = h7h;
		var hl = h7l;
		bch = bh & ch;
		bcl = bl & cl;
		j = 0;
		while(j < 160) {
			s0h = (ah >>> 28 | al << 4) ^ (al >>> 2 | ah << 30) ^ (al >>> 7 | ah << 25);
			s0l = (al >>> 28 | ah << 4) ^ (ah >>> 2 | al << 30) ^ (ah >>> 7 | al << 25);
			s1h = (eh >>> 14 | el << 18) ^ (eh >>> 18 | el << 14) ^ (el >>> 9 | eh << 23);
			s1l = (el >>> 14 | eh << 18) ^ (el >>> 18 | eh << 14) ^ (eh >>> 9 | el << 23);
			abh = ah & bh;
			abl = al & bl;
			majh = abh ^ ah & ch ^ bch;
			majl = abl ^ al & cl ^ bcl;
			chh = eh & fh ^ ~eh & gh;
			chl = el & fl ^ ~el & gl;
			t1h = Sha512.blocks[j];
			t1l = Sha512.blocks[j + 1];
			t2h = Sha512.K[j];
			t2l = Sha512.K[j + 1];
			c1 = (t2l & 65535) + (t1l & 65535) + (chl & 65535) + (s1l & 65535) + (hl & 65535);
			c2 = (t2l >>> 16) + (t1l >>> 16) + (chl >>> 16) + (s1l >>> 16) + (hl >>> 16) + (c1 >>> 16);
			c3 = (t2h & 65535) + (t1h & 65535) + (chh & 65535) + (s1h & 65535) + (hh & 65535) + (c2 >>> 16);
			c4 = (t2h >>> 16) + (t1h >>> 16) + (chh >>> 16) + (s1h >>> 16) + (hh >>> 16) + (c3 >>> 16);
			t1h = c4 << 16 | c3 & 65535;
			t1l = c2 << 16 | c1 & 65535;
			c1 = (majl & 65535) + (s0l & 65535);
			c2 = (majl >>> 16) + (s0l >>> 16) + (c1 >>> 16);
			c3 = (majh & 65535) + (s0h & 65535) + (c2 >>> 16);
			c4 = (majh >>> 16) + (s0h >>> 16) + (c3 >>> 16);
			t2h = c4 << 16 | c3 & 65535;
			t2l = c2 << 16 | c1 & 65535;
			c1 = (dl & 65535) + (t1l & 65535);
			c2 = (dl >>> 16) + (t1l >>> 16) + (c1 >>> 16);
			c3 = (dh & 65535) + (t1h & 65535) + (c2 >>> 16);
			c4 = (dh >>> 16) + (t1h >>> 16) + (c3 >>> 16);
			hh = c4 << 16 | c3 & 65535;
			hl = c2 << 16 | c1 & 65535;
			c1 = (t2l & 65535) + (t1l & 65535);
			c2 = (t2l >>> 16) + (t1l >>> 16) + (c1 >>> 16);
			c3 = (t2h & 65535) + (t1h & 65535) + (c2 >>> 16);
			c4 = (t2h >>> 16) + (t1h >>> 16) + (c3 >>> 16);
			dh = c4 << 16 | c3 & 65535;
			dl = c2 << 16 | c1 & 65535;
			s0h = (dh >>> 28 | dl << 4) ^ (dl >>> 2 | dh << 30) ^ (dl >>> 7 | dh << 25);
			s0l = (dl >>> 28 | dh << 4) ^ (dh >>> 2 | dl << 30) ^ (dh >>> 7 | dl << 25);
			s1h = (hh >>> 14 | hl << 18) ^ (hh >>> 18 | hl << 14) ^ (hl >>> 9 | hh << 23);
			s1l = (hl >>> 14 | hh << 18) ^ (hl >>> 18 | hh << 14) ^ (hh >>> 9 | hl << 23);
			dah = dh & ah;
			dal = dl & al;
			majh = dah ^ dh & bh ^ abh;
			majl = dal ^ dl & bl ^ abl;
			chh = hh & eh ^ ~hh & fh;
			chl = hl & el ^ ~hl & fl;
			t1h = Sha512.blocks[j + 2];
			t1l = Sha512.blocks[j + 3];
			t2h = Sha512.K[j + 2];
			t2l = Sha512.K[j + 3];
			c1 = (t2l & 65535) + (t1l & 65535) + (chl & 65535) + (s1l & 65535) + (gl & 65535);
			c2 = (t2l >>> 16) + (t1l >>> 16) + (chl >>> 16) + (s1l >>> 16) + (gl >>> 16) + (c1 >>> 16);
			c3 = (t2h & 65535) + (t1h & 65535) + (chh & 65535) + (s1h & 65535) + (gh & 65535) + (c2 >>> 16);
			c4 = (t2h >>> 16) + (t1h >>> 16) + (chh >>> 16) + (s1h >>> 16) + (gh >>> 16) + (c3 >>> 16);
			t1h = c4 << 16 | c3 & 65535;
			t1l = c2 << 16 | c1 & 65535;
			c1 = (majl & 65535) + (s0l & 65535);
			c2 = (majl >>> 16) + (s0l >>> 16) + (c1 >>> 16);
			c3 = (majh & 65535) + (s0h & 65535) + (c2 >>> 16);
			c4 = (majh >>> 16) + (s0h >>> 16) + (c3 >>> 16);
			t2h = c4 << 16 | c3 & 65535;
			t2l = c2 << 16 | c1 & 65535;
			c1 = (cl & 65535) + (t1l & 65535);
			c2 = (cl >>> 16) + (t1l >>> 16) + (c1 >>> 16);
			c3 = (ch & 65535) + (t1h & 65535) + (c2 >>> 16);
			c4 = (ch >>> 16) + (t1h >>> 16) + (c3 >>> 16);
			gh = c4 << 16 | c3 & 65535;
			gl = c2 << 16 | c1 & 65535;
			c1 = (t2l & 65535) + (t1l & 65535);
			c2 = (t2l >>> 16) + (t1l >>> 16) + (c1 >>> 16);
			c3 = (t2h & 65535) + (t1h & 65535) + (c2 >>> 16);
			c4 = (t2h >>> 16) + (t1h >>> 16) + (c3 >>> 16);
			ch = c4 << 16 | c3 & 65535;
			cl = c2 << 16 | c1 & 65535;
			s0h = (ch >>> 28 | cl << 4) ^ (cl >>> 2 | ch << 30) ^ (cl >>> 7 | ch << 25);
			s0l = (cl >>> 28 | ch << 4) ^ (ch >>> 2 | cl << 30) ^ (ch >>> 7 | cl << 25);
			s1h = (gh >>> 14 | gl << 18) ^ (gh >>> 18 | gl << 14) ^ (gl >>> 9 | gh << 23);
			s1l = (gl >>> 14 | gh << 18) ^ (gl >>> 18 | gh << 14) ^ (gh >>> 9 | gl << 23);
			cdh = ch & dh;
			cdl = cl & dl;
			majh = cdh ^ ch & ah ^ dah;
			majl = cdl ^ cl & al ^ dal;
			chh = gh & hh ^ ~gh & eh;
			chl = gl & hl ^ ~gl & el;
			t1h = Sha512.blocks[j + 4];
			t1l = Sha512.blocks[j + 5];
			t2h = Sha512.K[j + 4];
			t2l = Sha512.K[j + 5];
			c1 = (t2l & 65535) + (t1l & 65535) + (chl & 65535) + (s1l & 65535) + (fl & 65535);
			c2 = (t2l >>> 16) + (t1l >>> 16) + (chl >>> 16) + (s1l >>> 16) + (fl >>> 16) + (c1 >>> 16);
			c3 = (t2h & 65535) + (t1h & 65535) + (chh & 65535) + (s1h & 65535) + (fh & 65535) + (c2 >>> 16);
			c4 = (t2h >>> 16) + (t1h >>> 16) + (chh >>> 16) + (s1h >>> 16) + (fh >>> 16) + (c3 >>> 16);
			t1h = c4 << 16 | c3 & 65535;
			t1l = c2 << 16 | c1 & 65535;
			c1 = (majl & 65535) + (s0l & 65535);
			c2 = (majl >>> 16) + (s0l >>> 16) + (c1 >>> 16);
			c3 = (majh & 65535) + (s0h & 65535) + (c2 >>> 16);
			c4 = (majh >>> 16) + (s0h >>> 16) + (c3 >>> 16);
			t2h = c4 << 16 | c3 & 65535;
			t2l = c2 << 16 | c1 & 65535;
			c1 = (bl & 65535) + (t1l & 65535);
			c2 = (bl >>> 16) + (t1l >>> 16) + (c1 >>> 16);
			c3 = (bh & 65535) + (t1h & 65535) + (c2 >>> 16);
			c4 = (bh >>> 16) + (t1h >>> 16) + (c3 >>> 16);
			fh = c4 << 16 | c3 & 65535;
			fl = c2 << 16 | c1 & 65535;
			c1 = (t2l & 65535) + (t1l & 65535);
			c2 = (t2l >>> 16) + (t1l >>> 16) + (c1 >>> 16);
			c3 = (t2h & 65535) + (t1h & 65535) + (c2 >>> 16);
			c4 = (t2h >>> 16) + (t1h >>> 16) + (c3 >>> 16);
			bh = c4 << 16 | c3 & 65535;
			bl = c2 << 16 | c1 & 65535;
			s0h = (bh >>> 28 | bl << 4) ^ (bl >>> 2 | bh << 30) ^ (bl >>> 7 | bh << 25);
			s0l = (bl >>> 28 | bh << 4) ^ (bh >>> 2 | bl << 30) ^ (bh >>> 7 | bl << 25);
			s1h = (fh >>> 14 | fl << 18) ^ (fh >>> 18 | fl << 14) ^ (fl >>> 9 | fh << 23);
			s1l = (fl >>> 14 | fh << 18) ^ (fl >>> 18 | fh << 14) ^ (fh >>> 9 | fl << 23);
			bch = bh & ch;
			bcl = bl & cl;
			majh = bch ^ bh & dh ^ cdh;
			majl = bcl ^ bl & dl ^ cdl;
			chh = fh & gh ^ ~fh & hh;
			chl = fl & gl ^ ~fl & hl;
			t1h = Sha512.blocks[j + 6];
			t1l = Sha512.blocks[j + 7];
			t2h = Sha512.K[j + 6];
			t2l = Sha512.K[j + 7];
			c1 = (t2l & 65535) + (t1l & 65535) + (chl & 65535) + (s1l & 65535) + (el & 65535);
			c2 = (t2l >>> 16) + (t1l >>> 16) + (chl >>> 16) + (s1l >>> 16) + (el >>> 16) + (c1 >>> 16);
			c3 = (t2h & 65535) + (t1h & 65535) + (chh & 65535) + (s1h & 65535) + (eh & 65535) + (c2 >>> 16);
			c4 = (t2h >>> 16) + (t1h >>> 16) + (chh >>> 16) + (s1h >>> 16) + (eh >>> 16) + (c3 >>> 16);
			t1h = c4 << 16 | c3 & 65535;
			t1l = c2 << 16 | c1 & 65535;
			c1 = (majl & 65535) + (s0l & 65535);
			c2 = (majl >>> 16) + (s0l >>> 16) + (c1 >>> 16);
			c3 = (majh & 65535) + (s0h & 65535) + (c2 >>> 16);
			c4 = (majh >>> 16) + (s0h >>> 16) + (c3 >>> 16);
			t2h = c4 << 16 | c3 & 65535;
			t2l = c2 << 16 | c1 & 65535;
			c1 = (al & 65535) + (t1l & 65535);
			c2 = (al >>> 16) + (t1l >>> 16) + (c1 >>> 16);
			c3 = (ah & 65535) + (t1h & 65535) + (c2 >>> 16);
			c4 = (ah >>> 16) + (t1h >>> 16) + (c3 >>> 16);
			eh = c4 << 16 | c3 & 65535;
			el = c2 << 16 | c1 & 65535;
			c1 = (t2l & 65535) + (t1l & 65535);
			c2 = (t2l >>> 16) + (t1l >>> 16) + (c1 >>> 16);
			c3 = (t2h & 65535) + (t1h & 65535) + (c2 >>> 16);
			c4 = (t2h >>> 16) + (t1h >>> 16) + (c3 >>> 16);
			ah = c4 << 16 | c3 & 65535;
			al = c2 << 16 | c1 & 65535;
			j += 8;
		}
		c1 = (h0l & 65535) + (al & 65535);
		c2 = (h0l >>> 16) + (al >>> 16) + (c1 >>> 16);
		c3 = (h0h & 65535) + (ah & 65535) + (c2 >>> 16);
		c4 = (h0h >>> 16) + (ah >>> 16) + (c3 >>> 16);
		h0h = c4 << 16 | c3 & 65535;
		h0l = c2 << 16 | c1 & 65535;
		c1 = (h1l & 65535) + (bl & 65535);
		c2 = (h1l >>> 16) + (bl >>> 16) + (c1 >>> 16);
		c3 = (h1h & 65535) + (bh & 65535) + (c2 >>> 16);
		c4 = (h1h >>> 16) + (bh >>> 16) + (c3 >>> 16);
		h1h = c4 << 16 | c3 & 65535;
		h1l = c2 << 16 | c1 & 65535;
		c1 = (h2l & 65535) + (cl & 65535);
		c2 = (h2l >>> 16) + (cl >>> 16) + (c1 >>> 16);
		c3 = (h2h & 65535) + (ch & 65535) + (c2 >>> 16);
		c4 = (h2h >>> 16) + (ch >>> 16) + (c3 >>> 16);
		h2h = c4 << 16 | c3 & 65535;
		h2l = c2 << 16 | c1 & 65535;
		c1 = (h3l & 65535) + (dl & 65535);
		c2 = (h3l >>> 16) + (dl >>> 16) + (c1 >>> 16);
		c3 = (h3h & 65535) + (dh & 65535) + (c2 >>> 16);
		c4 = (h3h >>> 16) + (dh >>> 16) + (c3 >>> 16);
		h3h = c4 << 16 | c3 & 65535;
		h3l = c2 << 16 | c1 & 65535;
		c1 = (h4l & 65535) + (el & 65535);
		c2 = (h4l >>> 16) + (el >>> 16) + (c1 >>> 16);
		c3 = (h4h & 65535) + (eh & 65535) + (c2 >>> 16);
		c4 = (h4h >>> 16) + (eh >>> 16) + (c3 >>> 16);
		h4h = c4 << 16 | c3 & 65535;
		h4l = c2 << 16 | c1 & 65535;
		c1 = (h5l & 65535) + (fl & 65535);
		c2 = (h5l >>> 16) + (fl >>> 16) + (c1 >>> 16);
		c3 = (h5h & 65535) + (fh & 65535) + (c2 >>> 16);
		c4 = (h5h >>> 16) + (fh >>> 16) + (c3 >>> 16);
		h5h = c4 << 16 | c3 & 65535;
		h5l = c2 << 16 | c1 & 65535;
		c1 = (h6l & 65535) + (gl & 65535);
		c2 = (h6l >>> 16) + (gl >>> 16) + (c1 >>> 16);
		c3 = (h6h & 65535) + (gh & 65535) + (c2 >>> 16);
		c4 = (h6h >>> 16) + (gh >>> 16) + (c3 >>> 16);
		h6h = c4 << 16 | c3 & 65535;
		h6l = c2 << 16 | c1 & 65535;
		c1 = (h7l & 65535) + (hl & 65535);
		c2 = (h7l >>> 16) + (hl >>> 16) + (c1 >>> 16);
		c3 = (h7h & 65535) + (hh & 65535) + (c2 >>> 16);
		c4 = (h7h >>> 16) + (hh >>> 16) + (c3 >>> 16);
		h7h = c4 << 16 | c3 & 65535;
		h7l = c2 << 16 | c1 & 65535;
	} while(!end);
	var hex = Sha512.HEX_CHARS[h0h >> 28 & 15] + Sha512.HEX_CHARS[h0h >> 24 & 15] + Sha512.HEX_CHARS[h0h >> 20 & 15] + Sha512.HEX_CHARS[h0h >> 16 & 15] + Sha512.HEX_CHARS[h0h >> 12 & 15] + Sha512.HEX_CHARS[h0h >> 8 & 15] + Sha512.HEX_CHARS[h0h >> 4 & 15] + Sha512.HEX_CHARS[h0h & 15] + Sha512.HEX_CHARS[h0l >> 28 & 15] + Sha512.HEX_CHARS[h0l >> 24 & 15] + Sha512.HEX_CHARS[h0l >> 20 & 15] + Sha512.HEX_CHARS[h0l >> 16 & 15] + Sha512.HEX_CHARS[h0l >> 12 & 15] + Sha512.HEX_CHARS[h0l >> 8 & 15] + Sha512.HEX_CHARS[h0l >> 4 & 15] + Sha512.HEX_CHARS[h0l & 15] + Sha512.HEX_CHARS[h1h >> 28 & 15] + Sha512.HEX_CHARS[h1h >> 24 & 15] + Sha512.HEX_CHARS[h1h >> 20 & 15] + Sha512.HEX_CHARS[h1h >> 16 & 15] + Sha512.HEX_CHARS[h1h >> 12 & 15] + Sha512.HEX_CHARS[h1h >> 8 & 15] + Sha512.HEX_CHARS[h1h >> 4 & 15] + Sha512.HEX_CHARS[h1h & 15] + Sha512.HEX_CHARS[h1l >> 28 & 15] + Sha512.HEX_CHARS[h1l >> 24 & 15] + Sha512.HEX_CHARS[h1l >> 20 & 15] + Sha512.HEX_CHARS[h1l >> 16 & 15] + Sha512.HEX_CHARS[h1l >> 12 & 15] + Sha512.HEX_CHARS[h1l >> 8 & 15] + Sha512.HEX_CHARS[h1l >> 4 & 15] + Sha512.HEX_CHARS[h1l & 15] + Sha512.HEX_CHARS[h2h >> 28 & 15] + Sha512.HEX_CHARS[h2h >> 24 & 15] + Sha512.HEX_CHARS[h2h >> 20 & 15] + Sha512.HEX_CHARS[h2h >> 16 & 15] + Sha512.HEX_CHARS[h2h >> 12 & 15] + Sha512.HEX_CHARS[h2h >> 8 & 15] + Sha512.HEX_CHARS[h2h >> 4 & 15] + Sha512.HEX_CHARS[h2h & 15] + Sha512.HEX_CHARS[h2l >> 28 & 15] + Sha512.HEX_CHARS[h2l >> 24 & 15] + Sha512.HEX_CHARS[h2l >> 20 & 15] + Sha512.HEX_CHARS[h2l >> 16 & 15] + Sha512.HEX_CHARS[h2l >> 12 & 15] + Sha512.HEX_CHARS[h2l >> 8 & 15] + Sha512.HEX_CHARS[h2l >> 4 & 15] + Sha512.HEX_CHARS[h2l & 15] + Sha512.HEX_CHARS[h3h >> 28 & 15] + Sha512.HEX_CHARS[h3h >> 24 & 15] + Sha512.HEX_CHARS[h3h >> 20 & 15] + Sha512.HEX_CHARS[h3h >> 16 & 15] + Sha512.HEX_CHARS[h3h >> 12 & 15] + Sha512.HEX_CHARS[h3h >> 8 & 15] + Sha512.HEX_CHARS[h3h >> 4 & 15] + Sha512.HEX_CHARS[h3h & 15];
	if(bits >= 256) hex += Sha512.HEX_CHARS[h3l >> 28 & 15] + Sha512.HEX_CHARS[h3l >> 24 & 15] + Sha512.HEX_CHARS[h3l >> 20 & 15] + Sha512.HEX_CHARS[h3l >> 16 & 15] + Sha512.HEX_CHARS[h3l >> 12 & 15] + Sha512.HEX_CHARS[h3l >> 8 & 15] + Sha512.HEX_CHARS[h3l >> 4 & 15] + Sha512.HEX_CHARS[h3l & 15];
	if(bits >= 384) hex += Sha512.HEX_CHARS[h4h >> 28 & 15] + Sha512.HEX_CHARS[h4h >> 24 & 15] + Sha512.HEX_CHARS[h4h >> 20 & 15] + Sha512.HEX_CHARS[h4h >> 16 & 15] + Sha512.HEX_CHARS[h4h >> 12 & 15] + Sha512.HEX_CHARS[h4h >> 8 & 15] + Sha512.HEX_CHARS[h4h >> 4 & 15] + Sha512.HEX_CHARS[h4h & 15] + Sha512.HEX_CHARS[h4l >> 28 & 15] + Sha512.HEX_CHARS[h4l >> 24 & 15] + Sha512.HEX_CHARS[h4l >> 20 & 15] + Sha512.HEX_CHARS[h4l >> 16 & 15] + Sha512.HEX_CHARS[h4l >> 12 & 15] + Sha512.HEX_CHARS[h4l >> 8 & 15] + Sha512.HEX_CHARS[h4l >> 4 & 15] + Sha512.HEX_CHARS[h4l & 15] + Sha512.HEX_CHARS[h5h >> 28 & 15] + Sha512.HEX_CHARS[h5h >> 24 & 15] + Sha512.HEX_CHARS[h5h >> 20 & 15] + Sha512.HEX_CHARS[h5h >> 16 & 15] + Sha512.HEX_CHARS[h5h >> 12 & 15] + Sha512.HEX_CHARS[h5h >> 8 & 15] + Sha512.HEX_CHARS[h5h >> 4 & 15] + Sha512.HEX_CHARS[h5h & 15] + Sha512.HEX_CHARS[h5l >> 28 & 15] + Sha512.HEX_CHARS[h5l >> 24 & 15] + Sha512.HEX_CHARS[h5l >> 20 & 15] + Sha512.HEX_CHARS[h5l >> 16 & 15] + Sha512.HEX_CHARS[h5l >> 12 & 15] + Sha512.HEX_CHARS[h5l >> 8 & 15] + Sha512.HEX_CHARS[h5l >> 4 & 15] + Sha512.HEX_CHARS[h5l & 15];
	if(bits == 512) hex += Sha512.HEX_CHARS[h6h >> 28 & 15] + Sha512.HEX_CHARS[h6h >> 24 & 15] + Sha512.HEX_CHARS[h6h >> 20 & 15] + Sha512.HEX_CHARS[h6h >> 16 & 15] + Sha512.HEX_CHARS[h6h >> 12 & 15] + Sha512.HEX_CHARS[h6h >> 8 & 15] + Sha512.HEX_CHARS[h6h >> 4 & 15] + Sha512.HEX_CHARS[h6h & 15] + Sha512.HEX_CHARS[h6l >> 28 & 15] + Sha512.HEX_CHARS[h6l >> 24 & 15] + Sha512.HEX_CHARS[h6l >> 20 & 15] + Sha512.HEX_CHARS[h6l >> 16 & 15] + Sha512.HEX_CHARS[h6l >> 12 & 15] + Sha512.HEX_CHARS[h6l >> 8 & 15] + Sha512.HEX_CHARS[h6l >> 4 & 15] + Sha512.HEX_CHARS[h6l & 15] + Sha512.HEX_CHARS[h7h >> 28 & 15] + Sha512.HEX_CHARS[h7h >> 24 & 15] + Sha512.HEX_CHARS[h7h >> 20 & 15] + Sha512.HEX_CHARS[h7h >> 16 & 15] + Sha512.HEX_CHARS[h7h >> 12 & 15] + Sha512.HEX_CHARS[h7h >> 8 & 15] + Sha512.HEX_CHARS[h7h >> 4 & 15] + Sha512.HEX_CHARS[h7h & 15] + Sha512.HEX_CHARS[h7l >> 28 & 15] + Sha512.HEX_CHARS[h7l >> 24 & 15] + Sha512.HEX_CHARS[h7l >> 20 & 15] + Sha512.HEX_CHARS[h7l >> 16 & 15] + Sha512.HEX_CHARS[h7l >> 12 & 15] + Sha512.HEX_CHARS[h7l >> 8 & 15] + Sha512.HEX_CHARS[h7l >> 4 & 15] + Sha512.HEX_CHARS[h7l & 15];
	return hex;
};


var Hash = function() { };
function password_itoa64() {
	return "./0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
}


function password_get_count_log2(setting) {
	var itoa64 = password_itoa64();
	return itoa64.indexOf(setting.charAt(3));
}

 function password_base64_encode(input,count) {
	var output = "";
	var i = 0;
	var itoa64 = password_itoa64();
	do {
		var value;
		var _this = input.charAt(i++);
		value = HxOverrides.cca(_this,0);
		output += itoa64.charAt(value & 63);
		if(i < count) value |= (function($this) {
			var $r;
			var _this1 = input.charAt(i);
			$r = HxOverrides.cca(_this1,0);
			return $r;
		}(this)) << 8;
		output += itoa64.charAt(value >> 6 & 63);
		if(i++ >= count) break;
		if(i < count) value |= (function($this) {
			var $r;
			var _this2 = input.charAt(i);
			$r = HxOverrides.cca(_this2,0);
			return $r;
		}(this)) << 16;
		output += itoa64.charAt(value >> 12 & 63);
		if(i++ >= count) break;
		output += itoa64.charAt(value >> 18 & 63);
	} while(i < count);
	return output;
}


function password_crypt(password,salt,count) {
	var hash = Sha512.sha512(salt + password);
	do hash = Sha512.sha512(hash + password); while(--count > 0);
	var len = hash.length;
	var output = password_base64_encode(hash,len);
	return HxOverrides.substr(output,0,55);
}


function hashPassword(password) {
	return password_crypt(password,"1b9233784d8d350dca9b7ac54f281295",42);
}


function main() {
	hashPassword("test");
}


var HxOverrides = function() { };
HxOverrides.cca = function(s,index) {
	var x = s.charCodeAt(index);
	if(x != x) return undefined;
	return x;
};
HxOverrides.substr = function(s,pos,len) {
	if(pos != null && pos != 0 && len != null && len < 0) return "";
	if(len == null) len = s.length;
	if(pos < 0) {
		pos = s.length + pos;
		if(pos < 0) pos = 0;
	} else if(len < 0) len = s.length + len - pos;
	return s.substr(pos,len);
};
Sha512.HEX_CHARS = "0123456789abcdef".split("");
Sha512.EXTRA = [-2147483648,8388608,32768,128];
Sha512.SHIFT = [24,16,8,0];
Sha512.K = [1116352408,-685199838,1899447441,602891725,-1245643825,-330482897,-373957723,-2121671748,961987163,-213338824,1508970993,-1241133031,-1841331548,-1357295717,-1424204075,-630357736,-670586216,-1560083902,310598401,1164996542,607225278,1323610764,1426881987,-704662302,1925078388,-226784913,-2132889090,991336113,-1680079193,633803317,-1046744716,-815192428,-459576895,-1628353838,-272742522,944711139,264347078,-1953704523,604807628,2007800933,770255983,1495990901,1249150122,1856431235,1555081692,-1119749164,1996064986,-2096016459,-1740746414,-295247957,-1473132947,766784016,-1341970488,-1728372417,-1084653625,-1091629340,-958395405,1034457026,-710438585,-1828018395,113926993,-536640913,338241895,168717936,666307205,1188179964,773529912,1546045734,1294757372,1522805485,1396182291,-1651133473,1695183700,-1951439906,1986661051,1014477480,-2117940946,1206759142,-1838011259,344077627,-1564481375,1290863460,-1474664885,-1136513023,-1035236496,-789014639,-949202525,106217008,-778901479,-688958952,-694614492,1432725776,-200395387,1467031594,275423344,851169720,430227734,-1194143544,506948616,1363258195,659060556,-544281703,883997877,-509917016,958139571,-976659869,1322822218,-482243893,1537002063,2003034995,1747873779,-692930397,1955562222,1575990012,2024104815,1125592928,-2067236844,-1578062990,-1933114872,442776044,-1866530822,593698344,-1538233109,-561857047,-1090935817,-1295615723,-965641998,-479046869,-903397682,-366583396,-779700025,566280711,-354779690,-840897762,-176337025,-294727304,116418474,1914138554,174292421,-1563912026,289380356,-1090974290,460393269,320620315,685471733,587496836,852142971,1086792851,1017036298,365543100,1126000580,-1676669620,1288033470,-885112138,1501505948,-60457430,1607167915,987167468,1816402316,1246189591];
Sha512.blocks = [];
Hash.MIN_HASH_COUNT = 7;
Hash.MAX_HASH_COUNT = 30;
Hash.HASH_LENGTH = 55;
Hash.FALSE = "";
Hash.main();
//})(typeof console != "undefined" ? console : {log:function(){}});
