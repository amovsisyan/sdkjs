/*
 * (c) Copyright Ascensio System SIA 2010-2024
 *
 * This program is a free software product. You can redistribute it and/or
 * modify it under the terms of the GNU Affero General Public License (AGPL)
 * version 3 as published by the Free Software Foundation. In accordance with
 * Section 7(a) of the GNU AGPL its Section 15 shall be amended to the effect
 * that Ascensio System SIA expressly excludes the warranty of non-infringement
 * of any third-party rights.
 *
 * This program is distributed WITHOUT ANY WARRANTY; without even the implied
 * warranty of MERCHANTABILITY or FITNESS FOR A PARTICULAR  PURPOSE. For
 * details, see the GNU AGPL at: http://www.gnu.org/licenses/agpl-3.0.html
 *
 * You can contact Ascensio System SIA at 20A-6 Ernesta Birznieka-Upish
 * street, Riga, Latvia, EU, LV-1050.
 *
 * The  interactive user interfaces in modified source and object code versions
 * of the Program must display Appropriate Legal Notices, as required under
 * Section 5 of the GNU AGPL version 3.
 *
 * Pursuant to Section 7(b) of the License you must retain the original Product
 * logo when distributing the program. Pursuant to Section 7(e) we decline to
 * grant you any rights under trademark law for use of our trademarks.
 *
 * All the Product's GUI elements, including illustrations and icon sets, as
 * well as technical writing content are licensed under the terms of the
 * Creative Commons Attribution-ShareAlike 4.0 International. See the License
 * terms at http://creativecommons.org/licenses/by-sa/4.0/legalcode
 *
 */

"use strict";

(function (window) {

	const FontMathConstants = {
		Units_Per_Em								: -1,
		ScriptPercentScaleDown						: 0,
		ScriptScriptPercentScaleDown				: 1,
		DelimitedSubFormulaMinHeight				: 2,
		DisplayOperatorMinHeight					: 3,
		MathLeading									: 4,
		AxisHeight									: 5,
		AccentBaseHeight							: 6,
		FlattenedAccentBaseHeight					: 7,
		SubscriptShiftDown							: 8,
		SubscriptTopMax								: 9,
		SubscriptBaselineDropMin					: 10,
		SuperscriptShiftUp							: 11,
		SuperscriptShiftUpCramped					: 12,
		SuperscriptBottomMin						: 13,
		SuperscriptBaselineDropMax					: 14,
		SubSuperscriptGapMin						: 15,
		SuperscriptBottomMaxWithSubscript			: 16,
		SpaceAfterScript							: 17,
		UpperLimitGapMin							: 18,
		UpperLimitBaselineRiseMin					: 19,
		LowerLimitGapMin							: 20,
		LowerLimitBaselineDropMin					: 21,
		StackTopShiftUp								: 22,
		StackTopDisplayStyleShiftUp					: 23,
		StackBottomShiftDown						: 24,
		StackBottomDisplayStyleShiftDown			: 25,
		StackGapMin									: 26,
		StackDisplayStyleGapMin						: 27,
		StretchStackTopShiftUp						: 28,
		StretchStackBottomShiftDown					: 29,
		StretchStackGapAboveMin						: 30,
		StretchStackGapBelowMin						: 31,
		FractionNumeratorShiftUp					: 32,
		FractionNumeratorDisplayStyleShiftUp		: 33,
		FractionDenominatorShiftDown				: 34,
		FractionDenominatorDisplayStyleShiftDown	: 35,
		FractionNumeratorGapMin						: 36,
		FractionNumDisplayStyleGapMin				: 37,
		FractionRuleThickness						: 38,
		FractionDenominatorGapMin					: 39,
		FractionDenomDisplayStyleGapMin				: 40,
		SkewedFractionHorizontalGap					: 41,
		SkewedFractionVerticalGap					: 42,
		OverbarVerticalGap 							: 43,
		OverbarRuleThickness						: 44,
		OverbarExtraAscender						: 45,
		UnderbarVerticalGap							: 46,
		UnderbarRuleThickness						: 47,
		UnderbarExtraDescender						: 48,
		RadicalVerticalGap							: 49,
		RadicalDisplayStyleVerticalGap				: 50,
		RadicalRuleThickness						: 51,
		RadicalExtraAscender						: 52,
		RadicalKernBeforeDegree						: 53,
		RadicalKernAfterDegree						: 54,
		RadicalDegreeBottomRaisePercent				: 55,
	};

	// Data from Cambria Math
	const DefaultMathConstants = {};
	DefaultMathConstants[FontMathConstants.ScriptPercentScaleDown]						= 73;
	DefaultMathConstants[FontMathConstants.ScriptScriptPercentScaleDown]				= 60;
	DefaultMathConstants[FontMathConstants.DelimitedSubFormulaMinHeight]				= 3000;
	DefaultMathConstants[FontMathConstants.DisplayOperatorMinHeight]					= 2500;
	DefaultMathConstants[FontMathConstants.MathLeading]									= {
		value: 300,
	};
	DefaultMathConstants[FontMathConstants.AxisHeight]									= {
		value: 585,
		deviceTable : {
			startSize: 10,
			endSize: 109,
			deltaFormat: 1,
			deltaValue: [
				1, 1, 1, 0, 1, 1, 0, 0, 1, 1,
				0, 0, 1, 0, 0, 0, 1, 0, 0, 0,
				0, 0, 0, 0, 0, 0, 0, -1, 0, 0,
				0, 0, 1, 1, 0, 0, 1, 1, 0, 0,
				1, 0, 0, 0, 1, 0, 0, 0, 0, 0,
				1, 0, 0, 1, 1, 0, 0, 0, 0, -1,
				1, 1, 0, 1, 1, 1, 0, 1, 1, 0,
				0, 1, 1, 0, 0, 1, 0, 0, 0, 1,
				1, 1, 0, 1, 0, 0, 0, 0, 0, 0,
				0, 1, 1, 1, 0, 1, 1, 0, 0, 1
			],
		}
	};
	DefaultMathConstants[FontMathConstants.AccentBaseHeight]							= {
		value: 976,
	};
	DefaultMathConstants[FontMathConstants.FlattenedAccentBaseHeight]					= {
		value: 1250,
		deviceTable : {
			startSize: 11,
			endSize: 16,
			deltaFormat: 1,
			deltaValue: [-1, 0, 0, 0, 0, -1],
		}
	};
	DefaultMathConstants[FontMathConstants.SubscriptShiftDown]							= {
		value: 418,
		deviceTable : {
			startSize: 12,
			endSize: 17,
			deltaFormat: 1,
			deltaValue: [1, 0, 0, 0, 1, 1],
		}
	};
	DefaultMathConstants[FontMathConstants.SubscriptTopMax]								= {
		value: 760,
	};
	DefaultMathConstants[FontMathConstants.SubscriptBaselineDropMin]					= {
		value: 320,
	};
	DefaultMathConstants[FontMathConstants.SuperscriptShiftUp]							= {
		value: 750,
		deviceTable : {
			startSize: 12,
			endSize: 12,
			deltaFormat: 1,
			deltaValue:[1],
		}
	};
	DefaultMathConstants[FontMathConstants.SuperscriptShiftUpCramped]					= {
		value: 615,
		deviceTable : {
			startSize: 12,
			endSize: 12,
			deltaFormat: 1,
			deltaValue:[1],
		}
	};
	DefaultMathConstants[FontMathConstants.SuperscriptBottomMin]						= {
		value: 239,
	};
	DefaultMathConstants[FontMathConstants.SuperscriptBaselineDropMax]					= {
		value: 460,
	};
	DefaultMathConstants[FontMathConstants.SubSuperscriptGapMin]						= {
		value: 300,
		deviceTable : {
			startSize: 6,
			endSize: 29,
			deltaFormat: 1,
			deltaValue:[1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 1, 0, 1],
		}
	};
	DefaultMathConstants[FontMathConstants.SuperscriptBottomMaxWithSubscript]			= {
		value: 765,
	};
	DefaultMathConstants[FontMathConstants.SpaceAfterScript]							= {
		value: 85,
	};
	DefaultMathConstants[FontMathConstants.UpperLimitGapMin]							= {
		value: 133,
		deviceTable : {
			startSize: 9,
			endSize: 12,
			deltaFormat: 1,
			deltaValue:[1, 1, 1, 1, 1],
		}
	};
	DefaultMathConstants[FontMathConstants.UpperLimitBaselineRiseMin]					= {
		value: 500,
	};
	DefaultMathConstants[FontMathConstants.LowerLimitGapMin]							= {
		value: 133,
		deviceTable : {
			startSize: 9,
			endSize: 13,
			deltaFormat: 1,
			deltaValue:[1, 1, 1, 1, 1],
		}
	};
	DefaultMathConstants[FontMathConstants.LowerLimitBaselineDropMin]					= {
		value: 1240,
	};
	DefaultMathConstants[FontMathConstants.StackTopShiftUp]								= {
		value: 940,
	};
	DefaultMathConstants[FontMathConstants.StackTopDisplayStyleShiftUp]					= {
		value: 1550,
	};
	DefaultMathConstants[FontMathConstants.StackBottomShiftDown]						= {
		value: 770,
	};
	DefaultMathConstants[FontMathConstants.StackBottomDisplayStyleShiftDown]			= {
		value: 1370,
	};
	DefaultMathConstants[FontMathConstants.StackGapMin]									= {
		value: 400,
		deviceTable : {
			startSize: 6,
			endSize: 21,
			deltaFormat: 1,
			deltaValue: [1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
		}
	};
	DefaultMathConstants[FontMathConstants.StackDisplayStyleGapMin]						= {
		value: 660,
	};
	DefaultMathConstants[FontMathConstants.StretchStackTopShiftUp]						= {
		value: 1600,
	};
	DefaultMathConstants[FontMathConstants.StretchStackBottomShiftDown]					= {
		value: 1180,
	};
	DefaultMathConstants[FontMathConstants.StretchStackGapAboveMin]						= {
		value: 133,
	};
	DefaultMathConstants[FontMathConstants.StretchStackGapBelowMin]						= {
		value: 133,
		deviceTable : {
			startSize: 6,
			endSize: 38,
			deltaFormat: 1,
			deltaValue: [1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, -1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1],
		}
	};
	DefaultMathConstants[FontMathConstants.FractionNumeratorShiftUp]					= {
		value: 1200,
		deviceTable : {
			startSize: 6,
			endSize: 7,
			deltaFormat: 1,
			deltaValue: [1, 1],
		}
	};
	DefaultMathConstants[FontMathConstants.FractionNumeratorDisplayStyleShiftUp]		= {
		value: 1550,
	};
	DefaultMathConstants[FontMathConstants.FractionDenominatorShiftDown]				= {
		value: 1030,
	};
	DefaultMathConstants[FontMathConstants.FractionDenominatorDisplayStyleShiftDown]	= {
		value: 1370,
	};
	DefaultMathConstants[FontMathConstants.FractionNumeratorGapMin]						= {
		value: 133,
		deviceTable : {
			startSize: 6,
			endSize: 38,
			deltaFormat: 1,
			deltaValue: [
				1, 1, 0, 0, 0, 0, 0, 0, 0,
				0, 0, 0, 0, 0, 0, 0, 0, 0,
				-1, 0, 0, 0, 0, 0, 0, 0, 0,
				0, 0, 0, 1, 1, 1
			]
		},
	};
	DefaultMathConstants[FontMathConstants.FractionNumDisplayStyleGapMin]				= {
		value: 260,
	};
	DefaultMathConstants[FontMathConstants.FractionRuleThickness]						= {
		value: 133,
		deviceTable: {
			startSize: 6,
			endSize: 100,
			deltaFormat: 1,
			deltaValue: [
				1, 1, 0, 0, 0, 0, 0, 0, 0, 0,
				0, 0, 0, 0, 0, 0, 0, 0, -1, 0,
				0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
				0, 0, 0, -1, -1, 0, 0, 0, 0, 0,
				0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
				0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
				0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
				0, 0, 0, 0, 0, 0, 0, 0, 0, 1
			]
		}
	};
	DefaultMathConstants[FontMathConstants.FractionDenominatorGapMin]					= {
		value: 133,
		deviceTable: {
			startSize: 6,
			endSize: 38,
			deltaFormat: 1,
			deltaValue: [1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, -1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1]
		}
	};
	DefaultMathConstants[FontMathConstants.FractionDenomDisplayStyleGapMin]				= {
		value: 260,
	};
	DefaultMathConstants[FontMathConstants.SkewedFractionHorizontalGap]					= {
		value: 800,
	};
	DefaultMathConstants[FontMathConstants.SkewedFractionVerticalGap]					= {
		value: 133,
	};
	DefaultMathConstants[FontMathConstants.OverbarVerticalGap]							= {
		value: 345,
	};
	DefaultMathConstants[FontMathConstants.OverbarRuleThickness]						= {
		value: 133,
		deviceTable: {
			startSize: 6,
			endSize: 100,
			deltaFormat: 1,
			deltaValue: [1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, -1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, -1, -1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1]
		}
	};
	DefaultMathConstants[FontMathConstants.OverbarExtraAscender]						= {
		value: 133,
	};
	DefaultMathConstants[FontMathConstants.UnderbarVerticalGap]							= {
		value: 345,
	};
	DefaultMathConstants[FontMathConstants.UnderbarRuleThickness]						= {
		value: 133,
		deviceTable: {
			startSize: 6,
			endSize: 100,
			deltaFormat: 1,
			deltaValue: [1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, -1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, -1, -1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1]
		}
	};
	DefaultMathConstants[FontMathConstants.UnderbarExtraDescender]						= {
		value: 133,
	};
	DefaultMathConstants[FontMathConstants.RadicalVerticalGap]							= {
		value: 166,
		deviceTable: {
			startSize: 18,
			endSize: 50,
			deltaFormat: 1,
			deltaValue: [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1]
		}
	};
	DefaultMathConstants[FontMathConstants.RadicalDisplayStyleVerticalGap]				= {
		value: 345,
	};
	DefaultMathConstants[FontMathConstants.RadicalRuleThickness]						= {
		value: 133,
		deviceTable: {
			startSize: 6,
			endSize: 100,
			deltaFormat: 1,
			deltaValue: [1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, -1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, -1, -1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1]
		}
	};
	DefaultMathConstants[FontMathConstants.RadicalExtraAscender]						= {
		value: 133,
	};
	DefaultMathConstants[FontMathConstants.RadicalKernBeforeDegree]						= {
		value: 133,
	};
	DefaultMathConstants[FontMathConstants.RadicalKernAfterDegree]						= {
		value: -640,
	};
	DefaultMathConstants[FontMathConstants.RadicalDegreeBottomRaisePercent]				= {
		value: 65,
	};
	DefaultMathConstants[FontMathConstants.Units_Per_Em]								= 2048;

	// Asana Math temp data
	const AsanaMath = {};
	AsanaMath[FontMathConstants.ScriptPercentScaleDown]									= 73;
	AsanaMath[FontMathConstants.ScriptScriptPercentScaleDown]							= 60;
	AsanaMath[FontMathConstants.DelimitedSubFormulaMinHeight]							= 1500;
	AsanaMath[FontMathConstants.DisplayOperatorMinHeight]								= 1330;
	AsanaMath[FontMathConstants.MathLeading]											= {
		value: 150,
	};
	AsanaMath[FontMathConstants.AxisHeight]												= {
		value: 271,
	};
	AsanaMath[FontMathConstants.AccentBaseHeight]										= {
		value: 469,
	};
	AsanaMath[FontMathConstants.FlattenedAccentBaseHeight]								= {
		value: 692,
	};
	AsanaMath[FontMathConstants.SubscriptShiftDown]										= {
		value: 210,
		deviceTable : {
			startSize: 12,
			endSize: 17,
			deltaFormat: 1,
			deltaValue: [1, 0, 0, 0, 1, 1],
		}
	};
	AsanaMath[FontMathConstants.SubscriptTopMax]										= {
		value: 366,
	};
	AsanaMath[FontMathConstants.SubscriptBaselineDropMin]								= {
		value: 222,
	};
	AsanaMath[FontMathConstants.SuperscriptShiftUp]										= {
		value: 361,
		deviceTable : {
			startSize: 12,
			endSize: 12,
			deltaFormat: 1,
			deltaValue:[1],
		}
	};
	AsanaMath[FontMathConstants.SuperscriptShiftUpCramped]								= {
		value: 296,
		deviceTable : {
			startSize: 12,
			endSize: 12,
			deltaFormat: 1,
			deltaValue:[1],
		}
	};
	AsanaMath[FontMathConstants.SuperscriptBottomMin]									= {
		value: 154,
	};
	AsanaMath[FontMathConstants.SuperscriptBaselineDropMax]								= {
		value: 230,
	};
	AsanaMath[FontMathConstants.SubSuperscriptGapMin]									= {
		value: 145,
		deviceTable : {
			startSize: 6,
			endSize: 23,
			deltaFormat: 1,
			deltaValue: [1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
		}
	};
	AsanaMath[FontMathConstants.SuperscriptBottomMaxWithSubscript]						= {
		value: 379,
	};
	AsanaMath[FontMathConstants.SpaceAfterScript]										= {
		value: 41,
	};
	AsanaMath[FontMathConstants.UpperLimitGapMin]										= {
		value: 111,
	};
	AsanaMath[FontMathConstants.UpperLimitBaselineRiseMin]								= {
		value: 200,
	};
	AsanaMath[FontMathConstants.LowerLimitGapMin]										= {
		value: 167,
	};
	AsanaMath[FontMathConstants.LowerLimitBaselineDropMin]								= {
		value: 600,
	};
	AsanaMath[FontMathConstants.StackTopShiftUp]										= {
		value: 50,
	};
	AsanaMath[FontMathConstants.StackTopDisplayStyleShiftUp]							= {
		value: 50,
	};
	AsanaMath[FontMathConstants.StackBottomShiftDown]									= {
		value: 50,
	};
	AsanaMath[FontMathConstants.StackBottomDisplayStyleShiftDown]						= {
		value: 50,
	};
	AsanaMath[FontMathConstants.StackGapMin]											= {
		value: 348,
		deviceTable : {
			startSize: 6,
			endSize: 23,
			deltaFormat: 1,
			deltaValue: [1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
		}
	};
	AsanaMath[FontMathConstants.StackDisplayStyleGapMin]								= {
		value: 812,
		deviceTable : {
			startSize: 6,
			endSize: 23,
			deltaFormat: 1,
			deltaValue: [1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
		}
	};
	AsanaMath[FontMathConstants.StretchStackTopShiftUp]									= {
		value: 50,
	};
	AsanaMath[FontMathConstants.StretchStackBottomShiftDown]							= {
		value: 80,
	};
	AsanaMath[FontMathConstants.StretchStackGapAboveMin]								= {
		value: 80,
	};
	AsanaMath[FontMathConstants.StretchStackGapBelowMin]								= {
		value: 40,
	};
	AsanaMath[FontMathConstants.FractionNumeratorShiftUp]								= {
		value: 600,
	};
	AsanaMath[FontMathConstants.FractionNumeratorDisplayStyleShiftUp]					= {
		value: 725,
	};
	AsanaMath[FontMathConstants.FractionDenominatorShiftDown]							= {
		value: 500,
	};
	AsanaMath[FontMathConstants.FractionDenominatorDisplayStyleShiftDown]				= {
		value: 710,
	};
	AsanaMath[FontMathConstants.FractionNumeratorGapMin]								= {
		value: 116,
		deviceTable : {
			startSize: 6,
			endSize: 23,
			deltaFormat: 1,
			deltaValue: [1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
		},
	};
	AsanaMath[FontMathConstants.FractionNumDisplayStyleGapMin]							= {
		value: 130,
	};
	AsanaMath[FontMathConstants.FractionRuleThickness]									= {
		value: 59,
	};
	AsanaMath[FontMathConstants.FractionDenominatorGapMin]								= {
		value: 116,
		deviceTable: {
			startSize: 6,
			endSize: 23,
			deltaFormat: 1,
			deltaValue: [1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1]
		}
	};
	AsanaMath[FontMathConstants.FractionDenomDisplayStyleGapMin]						= {
		value: 120,
	};
	AsanaMath[FontMathConstants.SkewedFractionHorizontalGap]							= {
		value: 400,
	};
	AsanaMath[FontMathConstants.SkewedFractionVerticalGap]								= {
		value: 60,
	};
	AsanaMath[FontMathConstants.OverbarVerticalGap]										= {
		value: 175,
	};
	AsanaMath[FontMathConstants.OverbarRuleThickness]									= {
		value: 75,
		deviceTable: {
			startSize: 6,
			endSize: 23,
			deltaFormat: 1,
			deltaValue: [1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1]
		}
	};
	AsanaMath[FontMathConstants.OverbarExtraAscender]									= {
		value: 75,
	};
	AsanaMath[FontMathConstants.UnderbarVerticalGap]									= {
		value: 175,
	};
	AsanaMath[FontMathConstants.UnderbarRuleThickness]									= {
		value: 75,
		deviceTable: {
			startSize: 6,
			endSize: 23,
			deltaFormat: 1,
			deltaValue: [1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1]
		}
	};
	AsanaMath[FontMathConstants.UnderbarExtraDescender]									= {
		value: 75,
	};
	AsanaMath[FontMathConstants.RadicalVerticalGap]										= {
		value: 74,
		deviceTable: {
			startSize: 18,
			endSize: 37,
			deltaFormat: 1,
			deltaValue: [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1]
		}
	};
	AsanaMath[FontMathConstants.RadicalDisplayStyleVerticalGap]							= {
		value: 174,
	};
	AsanaMath[FontMathConstants.RadicalRuleThickness]									= {
		value: 59,
		deviceTable: {
			startSize: 6,
			endSize: 40,
			deltaFormat: 1,
			deltaValue: [1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, -1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, -1, -1]
		}
	};
	AsanaMath[FontMathConstants.RadicalExtraAscender]									= {
		value: 59,
	};
	AsanaMath[FontMathConstants.RadicalKernBeforeDegree]								= {
		value: 278,
	};
	AsanaMath[FontMathConstants.RadicalKernAfterDegree]									= {
		value: -556,
	};
	AsanaMath[FontMathConstants.RadicalDegreeBottomRaisePercent]						= {
		value: 65,
	};
	AsanaMath[FontMathConstants.Units_Per_Em]											= 1024;

	/**
	 *
	 * @param nRuleType {FontMathConstants<T>}
	 * @param fontName
	 * @param fontSize
	 * @return {*}
	 * @constructor
	 */
	function CalculateAdjustedSize(nRuleType, fontName, fontSize)
	{
		let FractionRuleData;

		if (undefined !== nRuleType)
		{
			if (IsDefault(fontName))
				FractionRuleData = DefaultMathConstants[nRuleType];

			//else
				// FractionRuleData = GetMathConstantsFromFont[fontName, FontMathConstants[FractionRule]];

			//temp
			else if (fontName === "Asana Math")
				FractionRuleData = AsanaMath[nRuleType];
		}

		const value			= FractionRuleData.value;
		const deviceTable	= FractionRuleData.deviceTable;

		if (undefined === deviceTable)
			return getSize(value, fontSize, fontName);

		const startSize		= deviceTable.startSize;
		const endSize		= deviceTable.endSize;
		const deltaFormat	= deviceTable.deltaFormat;
		const deltaValue	= deviceTable.deltaValue;

		if (fontSize < startSize || fontSize > endSize)
			return getSize(value, fontSize, fontName);

		const index		= fontSize - startSize;
		let adjustment	= 0;

		switch (deltaFormat)
		{
			case 1:
				const deltaIndex1		= Math.floor(index / 8);
				const bitShift1			= (7 - (index % 8)) * 2;
				adjustment				= (deltaValue[deltaIndex1] >> bitShift1) & 0x03;
				adjustment				= (adjustment > 1) ? adjustment - 4 : adjustment;
				break;

			case 2:
				const deltaIndex2		= Math.floor(index / 4);
				adjustment				= (deltaValue[deltaIndex2] >> ((3 - (index % 4)) * 4)) & 0x0F;
				adjustment				= (adjustment > 7) ? adjustment - 16 : adjustment;
				break;

			case 3:
				const deltaIndex3		= Math.floor(index / 2);
				adjustment				= (deltaValue[deltaIndex3] >> ((1 - (index % 2)) * 8)) & 0xFF;
				adjustment				= (adjustment > 127) ? adjustment - 256 : adjustment;
				break;
		}

		return getSize(value + adjustment, fontSize, fontName);
	}

	function IsDefault(fontName)
	{
		return fontName === "Cambria Math"
			// || isFontName without MATH TABLE
	}

	function GetCurrentUnitsPerEm(strFontName)
	{
		//temp
		if (strFontName === 'Asana Math')
			return AsanaMath[FontMathConstants.Units_Per_Em];

		if (IsDefault(strFontName))
			return DefaultMathConstants[FontMathConstants.Units_Per_Em];
		//else
			//return GetUnits_Per_EmFromFont
	}

	function getSize(fUnits, fontSize, strFontName)
	{
		let nUnitePerEm = GetCurrentUnitsPerEm(strFontName);
		return fUnits / nUnitePerEm * (fontSize / 72 * 25.4)
	}

	//--------------------------------------------------------export----------------------------------------------------
	window["AscMath"]							= window["AscMath"] || {};
	window["AscMath"].CalculateAdjustedSize		= CalculateAdjustedSize;
	window["AscMath"].FontMathConstants			= FontMathConstants;

})(window);
