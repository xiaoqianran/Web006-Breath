import {
  acceptNextEmotion,
  chooseVessel,
  circulate,
  continueAfterResult,
  createGameState,
  startNextDay,
  sellFromShelf,
  saveToStore,
  loadFromStore,
  clearSave,
  listVesselHints,
  formatHintLine,
  loadSettings,
  updateSettings,
  listEarnedUnlocks,
  listLockedUnlocks,
  formatNextUnlockLine,
  formatUnlockEncourage,
  formatUnlockBoardSummary,
  vesselAffinityLines,
  newlyEarnedUnlocks,
  HybridAudioBus,
  sfxForGameEvent,
  averageMatchScore,
  maybeAppendRevisit,
  priceLabel,
  formatWarmthPriceLine,
  formatPriceNarrative,
  firstOrderBonusHint,
  rollShopEvent,
  applyShopEvent,
  topFavoredGuests,
  formatFavorLine,
  formatFavorBoardSummary,
  favorForGuest,
  formatFavorGreeting,
  formatFavorCraftAside,
  formatNextGuestFavorHint,
  formatRevisitHint,
  computeSessionStats,
  formatStatsSummary,
  formatOrderDayEndLine,
  dayGoalProgress,
  formatDayGoalLine,
  formatDayGoalEncourage,
  phaseLabel,
  formatPhaseHintLine,
  vesselByHotkey,
  VESSEL_ORDER,
  formatRatioPercent,
  bestQualityInHistory,
  formatCodexSummary,
  formatFavoriteVesselLine,
  formatShelfLine,
  formatShelfMixLine,
  formatShelfEncourage,
  formatReputationProgress,
  reputationRankTitle,
  formatWarmthProgress,
  formatWarmthEncourage,
  warmthRankTitle,
  buildDayEndNarrative,
  formatAtmosphereLine,
  formatAtmosphereClosing,
  formatAtmosphereCraftHint,
  formatDayHeaderLine,
  atmosphereForDay,
  formatRevisitWelcome,
  formatRevisitLuggageAside,
  formatRevisitEligibilityAside,
  evaluateRevisitEligibility,
  buildGuestbookEntries,
  formatGuestbookBoardSummary,
  formatGuestbookEncourage,
  formatLanternAside,
  formatInventoryShelfAside,
  formatSpiceJarAside,
  formatInventoryEncourage,
  formatWindChimeLine,
  formatShopCatLine,
  formatAmbienceEncourage,
  formatPostcardLine,
  formatPostcardStackAside,
  formatOpenShopLine,
  formatKeyHookAside,
  formatShuttersLine,
  formatOpenEncourage,
  formatAtmosphereShort,
  formatMoonLine,
  formatMoonCraftAside,
  formatMoonClosing,
  formatCompassForEmotion,
  formatCompassAside,
  formatMapPathAside,
  formatHourLine,
  formatHourCraftAside,
  formatHourglassAside,
  formatSealForQuality,
  formatSealCountAside,
  formatMilestoneSeal,
  formatSealEncourage,
  formatTrayPlaceLine,
  formatTrayFullAside,
  formatTrayServeAside,
  formatTrayEncourage,
  formatCandleLine,
  formatCandleAside,
  formatWishTagLine,
  formatWishHangAside,
  formatCandleWishPair,
  formatCurtainLine,
  formatCurtainOpenAside,
  formatRainStickAside,
  formatCurtainEncourage,
  formatMintPotsLine,
  formatRestStoolLine,
  formatRestEncourage,
  formatHerbAside,
  formatSachetLine,
  formatDriedBouquetLine,
  formatSachetGiftAside,
  formatFragranceEncourage,
  formatSachetPair,
  formatCoatHookLine,
  formatScarfRackLine,
  formatHookAside,
  formatCoatEncourage,
  formatHookPair,
  formatReplyBoxLine,
  formatStampTrayLine,
  formatLetterAside,
  formatLetterEncourage,
  formatLetterPair,
  formatApronLine,
  formatCuffLine,
  formatApronAside,
  formatKeeperEncourage,
  formatApronPair,
  formatRadioLine,
  formatNeedleLine,
  formatRadioAside,
  formatRadioEncourage,
  formatRadioPair,
  formatInkWellLine,
  formatBlotterLine,
  formatInkAside,
  formatInkEncourage,
  formatInkPair,
  formatLaceCurtainLine,
  formatLaceLightLine,
  formatLaceAside,
  formatLaceEncourage,
  formatLacePair,
  formatMorningDewLine,
  formatWetSillLine,
  formatDewAside,
  formatDewEncourage,
  formatDewPair,
  formatBiscuitTinLine,
  formatSugarSpoonLine,
  formatBiscuitAside,
  formatBiscuitEncourage,
  formatBiscuitPair,
  formatStepLadderLine,
  formatHighShelfLine,
  formatLadderAside,
  formatLadderEncourage,
  formatLadderPair,
  formatGuestMirrorLine,
  formatSoftClothLine,
  formatMirrorAside,
  formatMirrorEncourage,
  formatMirrorPair,
  formatRibbonSpoolLine,
  formatSnipThreadLine,
  formatRibbonAside,
  formatRibbonEncourage,
  formatRibbonPair,
  formatDoorMatLine,
  formatShoeBoxLine,
  formatMatAside,
  formatMatEncourage,
  formatMatPair,
  formatHandSoapLine,
  formatSoftTowelLine,
  formatSoapAside,
  formatSoapEncourage,
  formatSoapPair,
  formatWarmKettleLine,
  formatCupLidLine,
  formatKettleAside,
  formatKettleEncourage,
  formatKettlePair,
  formatBirdSeedLine,
  formatSeedDishLine,
  formatSeedAside,
  formatSeedEncourage,
  formatSeedPair,
  formatSoftBroomLine,
  formatDustpanLine,
  formatBroomAside,
  formatBroomEncourage,
  formatBroomPair,
  formatPictureFrameLine,
  formatHangingCordLine,
  formatFrameAside,
  formatFrameEncourage,
  formatFramePair,
  formatCorkBoardLine,
  formatPushPinLine,
  formatCorkAside,
  formatCorkEncourage,
  formatCorkPair,
  formatThimbleLine,
  formatPincushionLine,
  formatThimbleAside,
  formatThimbleEncourage,
  formatThimblePair,
  formatButtonBoxLine,
  formatSoftTapeLine,
  formatButtonAside,
  formatButtonEncourage,
  formatButtonPair,
  formatThreadSpoolLine,
  formatBeeswaxBrickLine,
  formatSpoolAside,
  formatSpoolEncourage,
  formatSpoolPair,
  formatSoftShearsLine,
  formatSnipDishLine,
  formatShearsAside,
  formatShearsEncourage,
  formatShearsPair,
  formatPatternPaperLine,
  formatChalkWheelLine,
  formatPatternAside,
  formatPatternEncourage,
  formatPatternPair,
  formatSoftIronLine,
  formatPressPadLine,
  formatIronAside,
  formatIronEncourage,
  formatIronPair,
  formatDarningEggLine,
  formatNeedleBookLine,
  formatDarnAside,
  formatDarnEncourage,
  formatDarnPair,
  formatFabricClipLine,
  formatMarkingPenLine,
  formatClipAside,
  formatClipEncourage,
  formatClipPair,
  formatSeamRipperLine,
  formatEmeryBagLine,
  formatRipperAside,
  formatRipperEncourage,
  formatRipperPair,
  formatTailorHamLine,
  formatSleeveBoardLine,
  formatHamAside,
  formatHamEncourage,
  formatHamPair,
  formatStitchingAwlLine,
  formatBoneFolderLine,
  formatAwlAside,
  formatAwlEncourage,
  formatAwlPair,
  formatBookPressLine,
  formatWeightBarLine,
  formatPressAside,
  formatPressEncourage,
  formatPressPair,
  formatBindingThreadLine,
  formatSewingNeedleLine,
  formatBindingAside,
  formatBindingEncourage,
  formatBindingPair,
  formatBookclothLine,
  formatSpineStripLine,
  formatClothAside,
  formatClothEncourage,
  formatClothPair,
  formatEndpaperLine,
  formatHeadbandLine,
  formatEndpaperAside,
  formatEndpaperEncourage,
  formatEndpaperPair,
  formatPastePotLine,
  formatPasteBrushLine,
  formatGlueAside,
  formatGlueEncourage,
  formatGluePair,
  formatCuttingMatLine,
  formatStraightRulerLine,
  formatMatcutAside,
  formatMatcutEncourage,
  formatMatcutPair,
  formatCraftKnifeLine,
  formatSafetyRulerLine,
  formatKnifeAside,
  formatKnifeEncourage,
  formatKnifePair,
  formatCornerRounderLine,
  formatCornerGuardLine,
  formatCornerAside,
  formatCornerEncourage,
  formatCornerPair,
  formatEyeletLine,
  formatEyeletPunchLine,
  formatEyeletAside,
  formatEyeletEncourage,
  formatEyeletPair,
  formatSealingWaxLine,
  formatWaxSpoonLine,
  formatWaxsealAside,
  formatWaxsealEncourage,
  formatWaxsealPair,
  formatSealStampLine,
  formatInkPadLine,
  formatStampAside,
  formatStampEncourage,
  formatStampPair,
  formatBookmarkRibbonLine,
  formatPageDogearLine,
  formatRibbonmarkAside,
  formatRibbonmarkEncourage,
  formatRibbonmarkPair,
  formatShopLedgerLine,
  formatSoftPencilLine,
  formatLedgerAside,
  formatLedgerEncourage,
  formatLedgerPair,
  formatReceiptSlipLine,
  formatSoftRoundStampLine,
  formatReceiptAside,
  formatReceiptEncourage,
  formatReceiptPair,
  formatKraftBagLine,
  formatHempTwineLine,
  formatKraftAside,
  formatKraftEncourage,
  formatKraftPair,
  formatWarmTagCardLine,
  formatFineStringLine,
  formatTagcardAside,
  formatTagcardEncourage,
  formatTagcardPair,
  formatChangeDishLine,
  formatPalmKerchiefLine,
  formatFarewellAside,
  formatFarewellEncourage,
  formatFarewellPair,
  formatKeyTrayLine,
  formatClosingLampLine,
  formatDayendAside,
  formatDayendEncourage,
  formatDayendPair,
  formatMorningClothLine,
  formatSillVaseLine,
  formatReopenAside,
  formatReopenEncourage,
  formatReopenPair,
  formatUmbrellaStandLine,
  formatThresholdMatLine,
  formatEntryAside,
  formatEntryEncourage,
  formatEntryPair,
  formatGuestLogLine,
  formatSoftEraserLine,
  formatGuestlogAside,
  formatGuestlogEncourage,
  formatGuestlogPair,
  formatWaitCushionLine,
  formatWarmWaterCupLine,
  formatWaitseatAside,
  formatWaitseatEncourage,
  formatWaitseatPair,
  formatDeskCalendarLine,
  formatTodayStickerLine,
  formatDaymarkAside,
  formatDaymarkEncourage,
  formatDaymarkPair,
  formatStickyPadLine,
  formatFinePenLine,
  formatNotepenAside,
  formatNotepenEncourage,
  formatNotepenPair,
  formatPaperClipLine,
  formatMiniTrayLine,
  formatCliptrayAside,
  formatCliptrayEncourage,
  formatCliptrayPair,
  formatSmallInkBottleLine,
  formatSoftBlotSheetLine,
  formatSlowinkAside,
  formatSlowinkEncourage,
  formatSlowinkPair,
  formatWoodenBookendLine,
  formatPageWeightLine,
  formatBookendAside,
  formatBookendEncourage,
  formatBookendPair,
  formatPaperShadeLine,
  formatCordSwitchLine,
  formatLampshadeAside,
  formatLampshadeEncourage,
  formatLampshadePair,
  formatTastingSpoonLine,
  formatTastingMatLine,
  formatTeaspoonAside,
  formatTeaspoonEncourage,
  formatTeaspoonPair,
  formatJarTagLine,
  formatFineCottonLine,
  formatJarlabelAside,
  formatJarlabelEncourage,
  formatJarlabelPair,
  formatBlankPostcardLine,
  formatStampBoxLine,
  formatMailcardAside,
  formatMailcardEncourage,
  formatMailcardPair,
  formatWindowCushionLine,
  formatSheerCurtainLine,
  formatWindowseatAside,
  formatWindowseatEncourage,
  formatWindowseatPair,
  formatClayPotLine,
  formatWateringCanLine,
  formatPlantpotAside,
  formatPlantpotEncourage,
  formatPlantpotPair,
  formatCupRestLine,
  formatTeaClothLine,
  formatCuprestAside,
  formatCuprestEncourage,
  formatCuprestPair,
  formatHoneyJarLine,
  formatWoodDipperLine,
  formatHoneydipAside,
  formatHoneydipEncourage,
  formatHoneydipPair,
  formatMilkJugLine,
  formatCreamSpoonLine,
  formatMilkjugAside,
  formatMilkjugEncourage,
  formatMilkjugPair,
  formatLemonDishLine,
  formatCitrusKnifeLine,
  formatCitrusAside,
  formatCitrusEncourage,
  formatCitrusPair,
  formatNapkinRingLine,
  formatGuestNapkinLine,
  formatNapkinAside,
  formatNapkinEncourage,
  formatNapkinPair,
  formatPlaceMatLine,
  formatChopstickRestLine,
  formatPlacematAside,
  formatPlacematEncourage,
  formatPlacematPair,
  formatSoyCruetLine,
  formatVinegarDishLine,
  formatSoycruetAside,
  formatSoycruetEncourage,
  formatSoycruetPair,
  formatClayLidLine,
  formatWoodPaddleLine,
  formatHotpotlidAside,
  formatHotpotlidEncourage,
  formatHotpotlidPair,
  formatOvenMittLine,
  formatBakePadLine,
  formatOvenmittAside,
  formatOvenmittEncourage,
  formatOvenmittPair,
  formatKitchenHourglassLine,
  formatSoftTimerBellLine,
  formatTimerbellAside,
  formatTimerbellEncourage,
  formatTimerbellPair,
  formatFlourBinLine,
  formatMeasureCupLine,
  formatFlourbinAside,
  formatFlourbinEncourage,
  formatFlourbinPair,
  formatMixBowlLine,
  formatWireWhiskLine,
  formatMixbowlAside,
  formatMixbowlEncourage,
  formatMixbowlPair,
  formatRollingPinLine,
  formatDustSpoonLine,
  formatRollingpinAside,
  formatRollingpinEncourage,
  formatRollingpinPair,
  formatDoughScraperLine,
  formatBakeParchmentLine,
  formatScraperAside,
  formatScraperEncourage,
  formatScraperPair,
  formatCookieCutterLine,
  formatCoolingRackLine,
  formatCutterAside,
  formatCutterEncourage,
  formatCutterPair,
  formatIcingBagLine,
  formatSugarSieveLine,
  formatIcingAside,
  formatIcingEncourage,
  formatIcingPair,
  formatCookieTinLine,
  formatTwistTieLine,
  formatCookietinAside,
  formatCookietinEncourage,
  formatCookietinPair,
  formatRecipeCardLine,
  formatWoodClipLine,
  formatRecipecardAside,
  formatRecipecardEncourage,
  formatRecipecardPair,
  formatOvenThermoLine,
  formatTimerDialLine,
  formatOventhermoAside,
  formatOventhermoEncourage,
  formatOventhermoPair,
  formatSpiceJarLine,
  formatWoodScoopLine,
  formatSpicejarAside,
  formatSpicejarEncourage,
  formatSpicejarPair,
  formatStoneMortarLine,
  formatWoodPestleLine,
  formatMortarAside,
  formatMortarEncourage,
  formatMortarPair,
  formatHerbBundleLine,
  formatHangTwineLine,
  formatHerbhangAside,
  formatHerbhangEncourage,
  formatHerbhangPair,
  formatHerbOilBottleLine,
  formatGlassDropperLine,
  formatHerboilAside,
  formatHerboilEncourage,
  formatHerboilPair,
  formatSalveTinLine,
  formatBambooSpatulaLine,
  formatSalveAside,
  formatSalveEncourage,
  formatSalvePair,
  formatCottonPadLine,
  formatGauzeRollLine,
  formatGauzeAside,
  formatGauzeEncourage,
  formatGauzePair,
  formatRoseWaterLine,
  formatLinenClothLine,
  formatRosewaterAside,
  formatRosewaterEncourage,
  formatRosewaterPair,
  formatSoapBarLine,
  formatWoodSoapDishLine,
  formatSoapbarAside,
  formatSoapbarEncourage,
  formatSoapbarPair,
  formatLotionBottleLine,
  formatPumpCapLine,
  formatLotionAside,
  formatLotionEncourage,
  formatLotionPair,
  formatBathSaltJarLine,
  formatShellScoopLine,
  formatBathsaltAside,
  formatBathsaltEncourage,
  formatBathsaltPair,
  formatDiffuserBottleLine,
  formatRattanReedLine,
  formatDiffuserAside,
  formatDiffuserEncourage,
  formatDiffuserPair,
  formatTealightLine,
  formatSnufferLine,
  formatTealightAside,
  formatTealightEncourage,
  formatTealightPair,
  formatMatchboxLine,
  formatMatchstickLine,
  formatMatchboxAside,
  formatMatchboxEncourage,
  formatMatchboxPair,
  formatPaperLanternLine,
  formatLanternShadeLine,
  formatPaperLanternAside,
  formatPaperLanternEncourage,
  formatPaperLanternPair,
  formatSandTimerLine,
  formatFineSandLine,
  formatSandTimerAside,
  formatSandTimerEncourage,
  formatSandTimerPair,
  formatPressedMarkLine,
  formatSilkTailLine,
  formatPressmarkAside,
  formatPressmarkEncourage,
  formatPressmarkPair,
  formatCeramicPenRestLine,
  formatBlotSheetLine,
  formatPenrestAside,
  formatPenrestEncourage,
  formatPenrestPair,
  formatCreamEnvelopeLine,
  formatLetterOpenerLine,
  formatLetteropenerAside,
  formatLetteropenerEncourage,
  formatLetteropenerPair,
  formatDeskCalBlockLine,
  formatDayPageRibbonLine,
  formatDeskcalAside,
  formatDeskcalEncourage,
  formatDeskcalPair,
  formatGuestCupLine,
  formatLinenCoasterLine,
  formatGuestcupAside,
  formatGuestcupEncourage,
  formatGuestcupPair,
  formatBrassDeskBellLine,
  formatFeltMalletLine,
  formatDeskbellAside,
  formatDeskbellEncourage,
  formatDeskbellPair,
  formatSoftSignBookLine,
  formatGraphitePencilLine,
  formatSignbookAside,
  formatSignbookEncourage,
  formatSignbookPair,
  formatSoftWoolScarfLine,
  formatWoodCoatPegLine,
  formatSoftscarfAside,
  formatSoftscarfEncourage,
  formatSoftscarfPair,
  formatFoldUmbrellaLine,
  formatCeramicUmStandLine,
  formatFoldumbAside,
  formatFoldumbEncourage,
  formatFoldumbPair,
  formatSoftMittenLine,
  formatMittenBasketLine,
  formatSoftmittenAside,
  formatSoftmittenEncourage,
  formatSoftmittenPair,
  formatThermosFlaskLine,
  formatWoolSleeveLine,
  formatThermosAside,
  formatThermosEncourage,
  formatThermosPair,
  formatSoftBeanieLine,
  formatWoodHatFormLine,
  formatSoftbeanieAside,
  formatSoftbeanieEncourage,
  formatSoftbeaniePair,
  formatSoftSlipperLine,
  formatWoodShoeTrayLine,
  formatSoftslipperAside,
  formatSoftslipperEncourage,
  formatSoftslipperPair,
  formatSoftEarmuffLine,
  formatEarmuffPegLine,
  formatEarmuffAside,
  formatEarmuffEncourage,
  formatEarmuffPair,
  formatFingerlessGloveLine,
  formatGloveDishLine,
  formatFingerlessAside,
  formatFingerlessEncourage,
  formatFingerlessPair,
  formatKneeBlanketLine,
  formatBlanketBoardLine,
  formatKneeblanketAside,
  formatKneeblanketEncourage,
  formatKneeblanketPair,
  formatSoftEyeMaskLine,
  formatMaskPouchLine,
  formatEyemaskAside,
  formatEyemaskEncourage,
  formatEyemaskPair,
  formatLavenderSachetLine,
  formatSachetDishLine,
  formatLavsachetAside,
  formatLavsachetEncourage,
  formatLavsachetPair,
  formatBeeswaxTinLine,
  formatStrikeStripLine,
  formatBeeswaxAside,
  formatBeeswaxEncourage,
  formatBeeswaxPair,
  formatSoftClothTapeLine,
  formatTapeWoodClipLine,
  formatSofttapeAside,
  formatSofttapeEncourage,
  formatSofttapePair,
  formatSoftButtonTinLine,
  formatButtonScoopLine,
  formatSoftbuttonAside,
  formatSoftbuttonEncourage,
  formatSoftbuttonPair,
  formatEmbroideryHoopLine,
  formatEmbroideryFlossLine,
  formatEmbroiderAside,
  formatEmbroiderEncourage,
  formatEmbroiderPair,
  formatClothWeightLine,
  formatPaperPatternLine,
  formatPatweightAside,
  formatPatweightEncourage,
  formatPatweightPair,
  formatRotaryCutterLine,
  formatSoftCutMatLine,
  formatRotarycutAside,
  formatRotarycutEncourage,
  formatRotarycutPair,
  formatMiniSteamIronLine,
  formatSteamPressClothLine,
  formatSteampressAside,
  formatSteampressEncourage,
  formatSteampressPair,
  formatSoftTailorChalkLine,
  formatChalkTrayLine,
  formatSoftchalkAside,
  formatSoftchalkEncourage,
  formatSoftchalkPair,
  formatSoftPinCushionLine,
  formatStraightPinLine,
  formatSoftpinAside,
  formatSoftpinEncourage,
  formatSoftpinPair,
  formatEmbroSnipsLine,
  formatSnipsSheathLine,
  formatEmbrosnipsAside,
  formatEmbrosnipsEncourage,
  formatEmbrosnipsPair,
  formatMendMushroomLine,
  formatMendYarnLine,
  formatSoftmendAside,
  formatSoftmendEncourage,
  formatSoftmendPair,
  formatLaceBobbinLine,
  formatLacePillowLine,
  formatSoftlaceAside,
  formatSoftlaceEncourage,
  formatSoftlacePair,
  formatCrochetHookLine,
  formatSoftYarnBallLine,
  formatSoftcrochetAside,
  formatSoftcrochetEncourage,
  formatSoftcrochetPair,
  formatKnitNeedlesLine,
  formatStitchMarkersLine,
  formatSoftknitAside,
  formatSoftknitEncourage,
  formatSoftknitPair,
  formatYarnSwatchLine,
  formatRowCounterLine,
  formatSoftswatchAside,
  formatSoftswatchEncourage,
  formatSoftswatchPair,
  formatPomMakerLine,
  formatYarnScrapBoxLine,
  formatSoftpomAside,
  formatSoftpomEncourage,
  formatSoftpomPair,
  formatTasselBoardLine,
  formatWaxedCordLine,
  formatSofttasselAside,
  formatSofttasselEncourage,
  formatSofttasselPair,
  formatSmallLoomLine,
  formatSoftShuttleLine,
  formatSoftloomAside,
  formatSoftloomEncourage,
  formatSoftloomPair,
  formatQuiltBlockLine,
  formatBastingThreadLine,
  formatSoftblockAside,
  formatSoftblockEncourage,
  formatSoftblockPair,
  formatNeedleGaugeLine,
  formatCableNeedleLine,
  formatSoftgaugeAside,
  formatSoftgaugeEncourage,
  formatSoftgaugePair,
  formatBallWinderLine,
  formatYarnSwiftLine,
  formatSoftwinderAside,
  formatSoftwinderEncourage,
  formatSoftwinderPair,
  formatFeltingNeedleLine,
  formatWoolRovingLine,
  formatSoftfeltingAside,
  formatSoftfeltingEncourage,
  formatSoftfeltingPair,
  formatDropSpindleLine,
  formatSoftRovingLine,
  formatSoftspindleAside,
  formatSoftspindleEncourage,
  formatSoftspindlePair,
  formatCardingBrushLine,
  formatCardingPadLine,
  formatSoftcarderAside,
  formatSoftcarderEncourage,
  formatSoftcarderPair,
  formatNiddyNoddyLine,
  formatYarnSkeinLine,
  formatSoftniddyAside,
  formatSoftniddyEncourage,
  formatSoftniddyPair,
  formatFrenchKnitterLine,
  formatKnitterYarnLine,
  formatSoftknitterAside,
  formatSoftknitterEncourage,
  formatSoftknitterPair,
  formatVesselLine,
  formatVesselPickLine,
  vesselCraftHint,
  formatStreakLine,
  formatStreakEncourage,
  formatQueueStatus,
  formatMatchScoreLine,
  formatQualityLine,
  formatCraftSummary,
  formatVesselRecommendLine,
  listVesselHotkeyHints,
  formatIntensityLine,
  intensityCraftHint,
  formatTagsLine,
  formatActionLine,
  formatCirculationResultLine,
  formatMomentCardHeader,
  formatMomentCardFooter,
  announceMomentCard,
  formatSettingsSummary,
  formatSettingsEncourage,
  listTutorialStepLines,
  formatTutorialFooter,
  formatTutorialWelcome,
  formatAcceptButtonLabel,
  formatAcceptReadyHint,
  formatAcceptAriaLabel,
  formatGiftWrapLine,
  formatDisplayWrapLine,
  formatCirculationChoiceHint,
  formatGiftBoxAside,
  formatAudioBoardSummary,
  formatAudioEncourage,
  formatSaveEmptyLine,
  formatSaveReadyLine,
  formatContinueButtonLabel,
  formatSaveEncourage,
  formatAutosaveHint,
  formatOrderLine,
  formatOrderShort,
  formatOrderRewardLine,
  formatOrderEncourage,
  formatOrderMatchAside,
  ensureActiveOrder,
  ensurePendingSecondary,
  listVisibleOrders,
  vesselHelpsAnyOrder,
  announcePhaseWithHint,
  announceUnlock,
  announceViewChange,
  announceDayCompleteRich,
  announceAtmosphere,
  announceCirculation,
  announceFavorTop,
  favorRankTitle,
  guestPortraitDataAttr,
  guestPortraitAriaLabel,
  formatGuestNameLine,
  announceOrderFulfilled,
  joinAnnouncements,
  helpDialogA11y,
  type GameState,
  type PlayerSettings,
  VESSEL_LABELS,
  QUALITY_LABELS,
  DEFAULT_SETTINGS,
} from "../core";
import { describeDayOpener, freshDayQueue, goalsForDay } from "../data/emotions";
import { getDayScript } from "../data/day-scripts";
import { vesselIconHtml } from "./icons";
import { playWebAudioTone } from "./beep";
import { playHtmlSample, stopHtmlBgm } from "./sample-player";

const VESSELS = VESSEL_ORDER;

type View = "menu" | "shop" | "about" | "codex" | "settings" | "tutorial";

export class YixiApp {
  private root: HTMLElement;
  private state: GameState;
  private settings: PlayerSettings;
  private view: View = "menu";
  /** 文件采样优先，程序化 tone 回退 */
  private audio: HybridAudioBus = new HybridAudioBus(
    playHtmlSample,
    playWebAudioTone,
    stopHtmlBgm,
  );
  private toast: string | null = null;
  /** 店内/菜单帮助覆盖层 */
  private helpOpen = false;
  /** aria-live 播报队列（下一次 render 写入） */
  private liveMessage: string | null = null;
  /** 关闭帮助后恢复焦点 */
  private focusBeforeHelp: HTMLElement | null = null;

  constructor(root: HTMLElement) {
    this.root = root;
    this.state = createGameState(freshDayQueue(1));
    this.settings = this.readSettings();
    this.applyDocumentSettings();
    this.bindKeyboard();
    this.syncAudioEnabled();
    this.audio.playBgm("bgm_menu");
    this.queueAnnounce(announceViewChange("menu"));
    this.render();
  }

  /** 供测试读取最近一次读屏文案 */
  debugLiveMessage(): string | null {
    return this.liveMessage;
  }

  private queueAnnounce(msg: string | null | undefined): void {
    const t = (msg ?? "").trim();
    if (!t) return;
    this.liveMessage = this.liveMessage
      ? joinAnnouncements(this.liveMessage, t)
      : t;
  }

  private syncAudioEnabled(): void {
    // 减少动效或手动关闭音效时静音
    this.audio.setEnabled(this.settings.sfxEnabled && !this.settings.reduceMotion);
    this.audio.setVolume("master", this.settings.volumeMaster);
    this.audio.setVolume("sfx", this.settings.volumeSfx);
    this.audio.setVolume("bgm", this.settings.volumeBgm);
  }

  private syncBgmForView(view: View): void {
    if (view === "shop") this.audio.playBgm("bgm_shop");
    else this.audio.playBgm("bgm_menu");
  }

  private bindKeyboard(): void {
    document.addEventListener("keydown", (ev) => {
      if (ev.key === "?" || (ev.key === "/" && ev.shiftKey)) {
        ev.preventDefault();
        if (this.helpOpen) {
          this.closeHelp();
        } else {
          this.focusBeforeHelp =
            document.activeElement instanceof HTMLElement
              ? document.activeElement
              : null;
          this.helpOpen = true;
          this.queueAnnounce(helpDialogA11y().title);
          this.render();
        }
        return;
      }
      if (ev.key === "Escape") {
        if (this.helpOpen) {
          this.closeHelp();
          return;
        }
        if (this.view === "shop" || this.view === "codex" || this.view === "settings" || this.view === "about") {
          this.go("menu");
        }
        return;
      }
      if (this.helpOpen) return;
      // 数字 1–5 在选形态阶段快速选择（与 vesselByHotkey 同源）
      if (this.view === "shop" && this.state.phase === "awaiting_vessel") {
        const vessel = vesselByHotkey(ev.key);
        if (vessel) {
          ev.preventDefault();
          this.setState(chooseVessel(this.state, vessel));
        }
      }
      if (this.view === "shop" && this.state.phase === "awaiting_emotion" && (ev.key === "Enter" || ev.key === " ")) {
        const target = ev.target as HTMLElement | null;
        if (target && (target.tagName === "BUTTON" || target.tagName === "INPUT")) return;
        if (this.state.queue.length > 0) {
          ev.preventDefault();
          this.setState(acceptNextEmotion(this.state));
        }
      }
    });
  }

  /** 暴露只读状态，便于自动化冒烟 */
  getState(): Readonly<GameState> {
    return this.state;
  }

  getSettings(): Readonly<PlayerSettings> {
    return this.settings;
  }

  private go(view: View): void {
    this.view = view;
    this.syncBgmForView(view);
    this.queueAnnounce(announceViewChange(view));
    if (view === "shop") {
      this.queueAnnounce(announceAtmosphere(this.state.day));
    }
    this.render();
  }

  private readSettings(): PlayerSettings {
    const store = this.storage();
    return store ? loadSettings(store) : { ...DEFAULT_SETTINGS };
  }

  /**
   * @param reRender 默认 true；拖动音量滑条时 false，避免打断拖动
   */
  private patchSettings(patch: Partial<PlayerSettings>, reRender = true): void {
    const store = this.storage();
    if (store) {
      this.settings = updateSettings(store, patch);
    } else {
      this.settings = { ...this.settings, ...patch };
    }
    this.applyDocumentSettings();
    this.syncAudioEnabled();
    // 音量变更后刷新当前 BGM 音量
    if (
      "volumeMaster" in patch ||
      "volumeBgm" in patch ||
      "sfxEnabled" in patch ||
      "reduceMotion" in patch
    ) {
      this.syncBgmForView(this.view);
    }
    if (reRender) this.render();
  }

  private applyDocumentSettings(): void {
    document.documentElement.dataset.reduceMotion = this.settings.reduceMotion
      ? "true"
      : "false";
  }

  private storage(): Storage | null {
    try {
      return typeof localStorage !== "undefined" ? localStorage : null;
    } catch {
      return null;
    }
  }

  private persist(): void {
    const store = this.storage();
    if (store) saveToStore(store, this.state);
  }

  private setState(next: GameState): void {
    const prev = this.state;
    const unlocked = newlyEarnedUnlocks(prev, next);
    if (unlocked.length > 0) {
      const titles = unlocked.map((u) => u.title);
      this.toast = announceUnlock(titles);
      this.queueAnnounce(announceUnlock(titles));
      this.audio.playSfx(sfxForGameEvent("rare"));
    }
    if (next.phase === "awaiting_vessel" && prev.phase === "awaiting_emotion") {
      this.audio.playSfx(sfxForGameEvent("accept"));
    }
    if (next.phase === "awaiting_circulation" && prev.phase === "awaiting_vessel") {
      this.audio.playSfx(
        next.crafted?.quality === "rare" ? sfxForGameEvent("rare") : sfxForGameEvent("craft"),
      );
    }
    if (next.history.length > prev.history.length) {
      this.audio.playSfx(sfxForGameEvent("circulate"));
      const last = next.history[next.history.length - 1];
      if (last) {
        const q = last.item.quality;
        this.queueAnnounce(announceCirculation(QUALITY_LABELS[q] ?? q));
        if (next.lastResult) {
          this.queueAnnounce(announceMomentCard(next.lastResult));
        }
      }
      // 流通后尝试店事事件
      const ev = rollShopEvent(next);
      if (ev) {
        next = applyShopEvent(next, ev);
      }
    }
    if (next.shelf.length < prev.shelf.length) {
      this.audio.playSfx(sfxForGameEvent("sell"));
    }
    // 委托完成：读屏 + toast
    const prevFulfilled = prev.ordersFulfilled ?? 0;
    const nextFulfilled = next.ordersFulfilled ?? 0;
    if (nextFulfilled > prevFulfilled) {
      const guest =
        prev.activeOrder?.guestName ??
        next.message.match(/【委托完成】(.+?)满意/)?.[1] ??
        "客人";
      const bonus =
        prev.activeOrder?.bonusWarmth ??
        Math.max(0, next.warmth - prev.warmth);
      const line = announceOrderFulfilled(guest, bonus);
      this.toast = line;
      this.queueAnnounce(line);
      this.audio.playSfx(sfxForGameEvent("rare"));
    }
    if (next.phase === "day_complete" && prev.phase !== "day_complete") {
      this.audio.playSfx(sfxForGameEvent("day_end"));
      this.queueAnnounce(
        announceDayCompleteRich(next.day, next.warmth, {
          reputation: next.reputation,
          circulations: next.circulationsToday,
        }),
      );
      const top = topFavoredGuests(next, 1)[0];
      if (top) {
        this.queueAnnounce(
          announceFavorTop(top.name, top.favor, favorRankTitle(top.favor)),
        );
      }
    }
    if (next.phase !== prev.phase) {
      this.queueAnnounce(announcePhaseWithHint(next.phase));
    }
    this.state = next;
    this.persist();
    this.render();
  }

  private startNewGame(): void {
    const store = this.storage();
    if (store) clearSave(store);
    this.state = createGameState(freshDayQueue(1), goalsForDay(1));
    this.state = {
      ...this.state,
      message: describeDayOpener(1),
    };
    this.persist();
    if (!this.settings.tutorialSeen) {
      this.view = "tutorial";
    } else {
      this.view = "shop";
      this.queueAnnounce(announceAtmosphere(1));
    }
    this.render();
  }

  private finishTutorial(): void {
    this.patchSettings({ tutorialSeen: true });
    this.view = "shop";
    this.render();
  }

  private continueGame(): void {
    const store = this.storage();
    if (!store) {
      this.startNewGame();
      return;
    }
    try {
      const loaded = loadFromStore(store);
      if (loaded) {
        this.state = loaded;
        this.view = "shop";
        this.render();
        return;
      }
    } catch {
      clearSave(store);
    }
    this.startNewGame();
  }

  private hasSave(): boolean {
    const store = this.storage();
    if (!store) return false;
    try {
      return loadFromStore(store) !== null;
    } catch {
      return false;
    }
  }

  private render(): void {
    this.root.innerHTML = "";
    this.root.classList.toggle("shop-theme", this.view === "shop");
    this.root.classList.toggle("evening-theme", this.view === "shop" && this.state.day >= 12);
    this.root.classList.toggle("rain-theme", this.view === "shop" && ((this.state.day >= 2 && this.state.day <= 4) || this.state.day === 37));
    this.root.classList.toggle("market-theme", this.view === "shop" && this.state.day >= 27 && this.state.day <= 28);
    this.root.classList.toggle("lantern-path-theme", this.view === "shop" && this.state.day >= 39 && this.state.day <= 40);
    if (this.view === "menu") {
      this.root.appendChild(this.renderMenu());
    } else if (this.view === "about") {
      this.root.appendChild(this.renderAbout());
    } else if (this.view === "codex") {
      this.root.appendChild(this.renderCodex());
    } else if (this.view === "settings") {
      this.root.appendChild(this.renderSettings());
    } else if (this.view === "tutorial") {
      this.root.appendChild(this.renderTutorial());
    } else {
      this.root.appendChild(this.renderShop());
    }
    if (this.toast) {
      const t = document.createElement("div");
      t.className = "toast";
      t.dataset.testid = "toast";
      t.setAttribute("role", "status");
      t.setAttribute("aria-live", "polite");
      t.textContent = this.toast;
      this.root.appendChild(t);
      const msg = this.toast;
      this.toast = null;
      window.setTimeout(() => {
        const el = this.root.querySelector(`[data-testid=toast]`);
        if (el && el.textContent === msg) el.remove();
      }, 3200);
    }
    this.root.appendChild(this.renderLiveRegion());
    if (this.helpOpen) {
      this.root.appendChild(this.renderHelpOverlay());
      // 打开后聚焦关闭钮，便于键盘与读屏
      queueMicrotask(() => {
        const closeBtn = this.root.querySelector<HTMLElement>(
          "[data-testid=help-close]",
        );
        closeBtn?.focus();
      });
    }
    const foot = document.createElement("footer");
    foot.className = "site-foot";
    foot.innerHTML = '<span class="doorbell-icon" role="img" aria-label="门铃"></span> 一息 · 温柔瞬间铺 — 情绪流通，而非贩卖商品 · 按 ? 打开帮助';
    this.root.appendChild(foot);
  }

  private renderLiveRegion(): HTMLElement {
    const live = document.createElement("div");
    live.className = "sr-only";
    live.id = "a11y-live";
    live.dataset.testid = "live-region";
    live.setAttribute("role", "status");
    live.setAttribute("aria-live", "polite");
    live.setAttribute("aria-atomic", "true");
    const msg = this.liveMessage;
    // 清空内部字段，避免每帧重复拼接；读屏在本帧读到文案即可
    this.liveMessage = null;
    if (msg) {
      // 先空后写，提高部分读屏重新播报概率
      live.textContent = "";
      queueMicrotask(() => {
        const el = this.root.querySelector("#a11y-live");
        if (el) el.textContent = msg;
      });
    }
    return live;
  }

  private closeHelp(): void {
    this.helpOpen = false;
    this.render();
    queueMicrotask(() => {
      this.focusBeforeHelp?.focus?.();
      this.focusBeforeHelp = null;
    });
  }

  private renderHelpOverlay(): HTMLElement {
    const a11y = helpDialogA11y();
    const wrap = document.createElement("div");
    wrap.className = "help-overlay";
    wrap.dataset.testid = "help-overlay";
    wrap.setAttribute("role", "dialog");
    wrap.setAttribute("aria-modal", "true");
    wrap.setAttribute("aria-label", a11y.title);
    wrap.setAttribute("aria-describedby", a11y.descriptionId);
    wrap.innerHTML = `
      <div class="help-panel card">
        <h2 id="help-dialog-title">一息 · 帮助</h2>
        <ol class="tutorial-steps" id="${a11y.descriptionId}">
          <li><strong>接待</strong> — 店内「接待下一位」或 Enter</li>
          <li><strong>转化</strong> — 点选形态，或按 1–5</li>
          <li><strong>流通</strong> — 上架进货架，或赠予立即流通</li>
          <li><strong>货架</strong> — 「被买走」完成二次流通</li>
        </ol>
        <p class="muted">Esc 关闭本层或返回主菜单 · ? 切换帮助 · 设置可关音效/动效</p>
        <div class="btn-row"></div>
      </div>
    `;
    const close = this.button(a11y.closeLabel, () => this.closeHelp());
    close.dataset.testid = "help-close";
    wrap.querySelector(".btn-row")!.append(close);
    wrap.addEventListener("click", (e) => {
      if (e.target === wrap) this.closeHelp();
    });
    // 简易焦点陷阱：Tab 在对话框可聚焦控件内循环
    wrap.addEventListener("keydown", (ev) => {
      if (ev.key !== "Tab") return;
      const focusables = Array.from(
        wrap.querySelectorAll<HTMLElement>(
          'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])',
        ),
      ).filter((el) => !el.hasAttribute("disabled"));
      if (focusables.length === 0) return;
      const first = focusables[0]!;
      const last = focusables[focusables.length - 1]!;
      const active = document.activeElement as HTMLElement | null;
      if (ev.shiftKey && active === first) {
        ev.preventDefault();
        last.focus();
      } else if (!ev.shiftKey && active === last) {
        ev.preventDefault();
        first.focus();
      }
    });
    return wrap;
  }

  private renderMenu(): HTMLElement {
    const el = document.createElement("section");
    el.className = "screen active menu-center";
    const saved = this.hasSave();
    let saveLine = formatSaveEmptyLine();
    if (saved) {
      const store = this.storage();
      const loaded = store ? loadFromStore(store) : null;
      if (loaded) {
        saveLine = formatSaveReadyLine(loaded.day, loaded.warmth);
      }
    }
    el.innerHTML = `
      <div class="menu-hero" role="img" aria-label="一息小店午后橱窗插画" data-testid="menu-hero"></div>
      <div class="menu-hero-door" role="img" aria-label="小店门廊" data-testid="menu-hero-door"></div>
      <div class="season-banner" role="img" aria-label="春日店饰" data-testid="season-banner"></div>
      <div class="morning-dew-art" role="img" aria-label="晨露门铃" data-testid="morning-dew"></div>
      <div class="street-lamp-art" role="img" aria-label="巷口路灯" data-testid="street-lamp"></div>
      <div class="signpost-art" role="img" aria-label="路牌" data-testid="signpost-art"></div>
      <div class="save-drawer-art" role="img" aria-label="存档抽屉" data-testid="save-drawer-art"></div>
      <div class="shop-key-art" role="img" aria-label="店钥匙" data-testid="shop-key-art"></div>
      <div class="shutters-light-art" role="img" aria-label="百叶窗光" data-testid="shutters-light-art"></div>
      <p class="muted">Gentle Moments Shop · v0.2.6</p>
      <h1 class="logo">一息</h1>
      <p class="tagline">收集小情绪，化作花、茶、画、音乐或小物件，再轻轻流通出去。</p>
      <p class="muted" data-testid="save-line">${saveLine}</p>
      <p class="muted" data-testid="save-encourage">${formatSaveEncourage(saved)}</p>
      <p class="muted" data-testid="autosave-hint">${formatAutosaveHint()}</p>
      <p class="muted" data-testid="open-shop-line">${formatOpenShopLine(this.state.day || 1)}</p>
      <p class="muted" data-testid="key-hook-aside">${formatKeyHookAside(saved)}</p>
      <p class="muted" data-testid="shutters-line">${formatShuttersLine(formatAtmosphereShort(this.state.day || 1))}</p>
      <p class="muted" data-testid="open-encourage">${formatOpenEncourage(this.state.day || 1)}</p>
      <div class="btn-row"></div>
    `;
    const row = el.querySelector(".btn-row")!;
    row.append(
      this.button("开始今日经营", () => this.startNewGame()),
      this.button(
        formatContinueButtonLabel(saved),
        () => this.continueGame(),
        "secondary",
        !saved,
      ),
      this.button("瞬间图鉴", () => this.go("codex"), "secondary"),
      this.button("设置", () => this.go("settings"), "secondary"),
      this.button("关于", () => this.go("about"), "secondary"),
    );
    return el;
  }

  private renderTutorial(): HTMLElement {
    const el = document.createElement("section");
    el.className = "screen active";
    el.dataset.testid = "tutorial";
    const steps = listTutorialStepLines()
      .map((line) => {
        const m = line.match(/^\d+\.\s(.+?)\s—\s(.+)$/);
        if (!m) return `<li>${line}</li>`;
        return `<li><strong>${m[1]}</strong> — ${m[2]}</li>`;
      })
      .join("");
    el.innerHTML = `
      <div class="card">
        <div class="tutorial-art" role="img" aria-label="教程册页插画" data-testid="tutorial-art"></div>
        <div class="tutorial-spread-art" role="img" aria-label="教程展开页" data-testid="tutorial-spread-art"></div>
        <div class="wind-curtain-art" role="img" aria-label="风掀窗帘" data-testid="wind-curtain-art"></div>
        <h2>欢迎来到「一息」</h2>
        <p class="muted" data-testid="tutorial-welcome">${formatTutorialWelcome()}</p>
        <ol class="tutorial-steps" data-testid="tutorial-steps">${steps}</ol>
        <p class="muted" data-testid="tutorial-footer">${formatTutorialFooter()}</p>
        <div class="btn-row"></div>
      </div>
    `;
    el.querySelector(".btn-row")!.append(
      this.button("明白了，开始经营", () => this.finishTutorial()),
    );
    return el;
  }

  private renderSettings(): HTMLElement {
    const el = document.createElement("section");
    el.className = "screen active";
    el.dataset.testid = "settings";
    const s = this.settings;
    const pct = (v: number) => `${Math.round(v * 100)}%`;
    el.innerHTML = `
      <div class="card">
        <div class="half-window-art" role="img" aria-label="半开的窗" data-testid="half-window-art"></div>
        <div class="settings-knob-art" role="img" aria-label="设置旋钮" data-testid="settings-knob-art"></div>
        <div class="music-box-art" role="img" aria-label="音乐盒" data-testid="music-box-art"></div>
        <h2>设置</h2>
        <p class="muted" data-testid="settings-summary">${formatSettingsSummary(s)}</p>
        <p class="muted" data-testid="settings-encourage">${formatSettingsEncourage(s)}</p>
        <p class="muted" data-testid="audio-board">${formatAudioBoardSummary()}</p>
        <p class="muted" data-testid="audio-encourage">${formatAudioEncourage(s.sfxEnabled)}</p>
        <label class="setting-row">
          <input type="checkbox" data-key="showHints" ${s.showHints ? "checked" : ""} />
          <span>显示气息提示（弱相性）</span>
        </label>
        <label class="setting-row">
          <input type="checkbox" data-key="reduceMotion" ${s.reduceMotion ? "checked" : ""} />
          <span>减少动效</span>
        </label>
        <label class="setting-row">
          <input type="checkbox" data-key="sfxEnabled" ${s.sfxEnabled ? "checked" : ""} />
          <span>开启音效与 BGM</span>
        </label>
        <label class="setting-row volume-row">
          <span>主音量 <em data-vol-label="volumeMaster">${pct(s.volumeMaster)}</em></span>
          <input type="range" min="0" max="100" step="1" data-vol="volumeMaster"
            value="${Math.round(s.volumeMaster * 100)}" aria-label="主音量" />
        </label>
        <label class="setting-row volume-row">
          <span>音效 <em data-vol-label="volumeSfx">${pct(s.volumeSfx)}</em></span>
          <input type="range" min="0" max="100" step="1" data-vol="volumeSfx"
            value="${Math.round(s.volumeSfx * 100)}" aria-label="音效音量" />
        </label>
        <label class="setting-row volume-row">
          <span>背景音乐 <em data-vol-label="volumeBgm">${pct(s.volumeBgm)}</em></span>
          <input type="range" min="0" max="100" step="1" data-vol="volumeBgm"
            value="${Math.round(s.volumeBgm * 100)}" aria-label="背景音乐音量" />
        </label>
        <label class="setting-row">
          <input type="checkbox" data-key="tutorialSeen" ${s.tutorialSeen ? "checked" : ""} />
          <span>已阅读教程（取消勾选后下次新游戏将再次显示）</span>
        </label>
        <div class="btn-row"></div>
      </div>
    `;
    el.querySelectorAll<HTMLInputElement>("input[type=checkbox]").forEach((input) => {
      input.addEventListener("change", () => {
        const key = input.dataset.key as keyof PlayerSettings;
        this.patchSettings({ [key]: input.checked });
      });
    });
    el.querySelectorAll<HTMLInputElement>("input[type=range][data-vol]").forEach((input) => {
      const apply = () => {
        const key = input.dataset.vol as "volumeMaster" | "volumeSfx" | "volumeBgm";
        const v = Number(input.value) / 100;
        const label = el.querySelector(`[data-vol-label="${key}"]`);
        if (label) label.textContent = pct(v);
        this.patchSettings({ [key]: v }, false);
      };
      input.addEventListener("input", apply);
      input.addEventListener("change", apply);
    });
    el.querySelector(".btn-row")!.append(
      this.button("返回", () => this.go("menu"), "secondary"),
    );
    return el;
  }

  private renderCodex(): HTMLElement {
    // codex 瞬间图鉴
    const el = document.createElement("section");
    el.className = "screen active";
    el.dataset.testid = "codex";
    const list = this.state.history;
    const lanternHtml = `<div class="twin-lanterns-art" role="img" aria-label="双灯巷口" data-testid="twin-lanterns"></div>`;
    const earned = listEarnedUnlocks(this.state);
    const locked = listLockedUnlocks(this.state);
    const items =
      list.length === 0
        ? `<div class="codex-empty-art" role="img" aria-label="空白图鉴册页" data-testid="codex-empty-art"></div><p class="muted">还没有完成的流通。去店里接待一位客人吧。</p>`
        : list
            .map(
              (r, i) => `
        <article class="card" data-testid="codex-item">
          <h3>#${i + 1} ${r.item.label}</h3>
          <p class="muted" data-testid="codex-action">${formatActionLine(r.action)} · 温存 +${r.warmthGained} · ${QUALITY_LABELS[r.item.quality]}</p>
          <p class="moment-card">${r.momentCard}</p>
        </article>`,
            )
            .join("");
    const unlockHtml = `
      <div class="card" data-testid="unlocks">
        <div class="full-moon-art" role="img" aria-label="满月掌灯意象" data-testid="full-moon-art"></div>
        <div class="unlock-medal-art" role="img" aria-label="纪念徽章" data-testid="unlock-medal-art"></div>
        <div class="unlock-ribbon-art" role="img" aria-label="解锁丝带徽章" data-testid="unlock-ribbon-art"></div>
        <div class="progress-ribbon-art" role="img" aria-label="进度丝带" data-testid="progress-ribbon-art"></div>
        <h3>店面解锁</h3>
        ${
          earned.length === 0
            ? `<p class="muted">经营中积累口碑与流通，会留下纪念性解锁。</p>`
            : earned.map((u) => `<p>✓ <strong>${u.title}</strong> — ${u.description}</p>`).join("")
        }
        ${
          locked.length
            ? `<p class="muted">未解锁：${locked.map((u) => u.title).join("、")}</p>`
            : ""
        }
        <p class="muted" data-testid="unlock-board-summary">${formatUnlockBoardSummary(this.state)}</p>
        <p class="muted" data-testid="next-unlock">${formatNextUnlockLine(this.state)}</p>
        <p class="muted" data-testid="unlock-encourage">${formatUnlockEncourage(this.state)}</p>
      </div>
      <div class="card" data-testid="affinity-codex">
        <h3>形态图鉴</h3>
        ${vesselAffinityLines()
          .map((l) => `<p class="muted">${l.line}</p>`)
          .join("")}
      </div>
      <div class="card" data-testid="favor-board">
        <div class="favor-board-art" role="img" aria-label="好感留言板" data-testid="favor-board-art"></div>
        <div class="guest-book-art" role="img" aria-label="柜台留言簿" data-testid="guest-book-art"></div>
        <div class="paper-lantern-art" role="img" aria-label="纸灯" data-testid="paper-lantern-art"></div>
        <h3>客人好感</h3>
        ${
          topFavoredGuests(this.state, 5).length === 0
            ? `<p class="muted" data-testid="favor-empty">${formatFavorBoardSummary([])}</p>`
            : topFavoredGuests(this.state, 5)
                .map((g) => `<p data-testid="favor-line">${formatFavorLine(g)}</p>`)
                .join("")
        }
        ${
          (() => {
            const gb = buildGuestbookEntries(topFavoredGuests(this.state, 5), 5);
            return `<p class="muted" data-testid="guestbook-summary">${formatGuestbookBoardSummary(gb)}</p>
        <p class="muted" data-testid="guestbook-encourage">${formatGuestbookEncourage(gb.length)}</p>
        <p class="muted" data-testid="lantern-aside">${formatLanternAside(this.state.reputation)}</p>`;
          })()
        }
      </div>
      <div class="card" data-testid="session-stats">
        <div class="tip-jar-art" role="img" aria-label="温情小罐" data-testid="tip-jar-art"></div>
        <h3>本局统计</h3>
        <p data-testid="stats-summary">${formatStatsSummary(computeSessionStats(this.state))}</p>
        <p class="muted" data-testid="best-quality">历史最高品质：${(() => { const q = bestQualityInHistory(this.state.history); return q ? QUALITY_LABELS[q] : "尚无"; })()}</p>
      </div>`;
    el.innerHTML = `
      ${lanternHtml}
      <div class="codex-scrap-art" role="img" aria-label="图鉴手账" data-testid="codex-scrap-art"></div>
      <div class="codex-catalog-art" role="img" aria-label="图鉴目录" data-testid="codex-catalog-art"></div>
      <div class="codex-ribbon-art" role="img" aria-label="图鉴丝带书签" data-testid="codex-ribbon-art"></div>
      <h2>瞬间图鉴</h2>
      <p class="muted">每一次流通留下的温柔记录（本局 ${list.length} 条）</p>
      <p class="muted" data-testid="codex-summary">${formatCodexSummary(list)}</p>
      <p class="muted" data-testid="codex-favorite-vessel">${formatFavoriteVesselLine(list)}</p>
      ${unlockHtml}
      <div data-testid="codex-list">${items}</div>
      <div class="btn-row"></div>
    `;
    const row = el.querySelector(".btn-row")!;
    row.append(
      this.button("返回菜单", () => this.go("menu"), "secondary"),
      this.button("进入店内", () => this.go("shop")),
    );
    return el;
  }

  private renderAbout(): HTMLElement {
    const el = document.createElement("section");
    el.className = "screen active";
    el.innerHTML = `
      <div class="card">
        <h2>关于「一息」</h2>
        <div class="about-gallery">
          <div class="menu-hero about-cover" role="img" aria-label="一息宣传封面"></div>
          <div class="keeper-portrait" role="img" aria-label="掌灯人剪影插画" data-testid="keeper-art"></div>
        </div>
        <div class="vessels-display" role="img" aria-label="五种温柔容器展示" data-testid="vessels-display"></div>
        <div class="storybooks-art" role="img" aria-label="温柔故事书叠" data-testid="storybooks-art"></div>
        <div class="paper-cranes-art" role="img" aria-label="千纸鹤" data-testid="paper-cranes-art"></div>
        <p>这是一家经营「情绪流通」的小店。客人把说不出口的心情交给你；你选择最贴切的容器，让它变成可以被带走的温柔瞬间。</p>
        <p class="muted">毕业设计演示原型 v0.2.6 · 规则可测 · 文案向治愈体验 · 含当日委托（M2）</p>
        <p class="muted">版本与验收：npm run check · 文档见 docs/</p>
        <div class="btn-row"></div>
      </div>
    `;
    el.querySelector(".btn-row")!.append(
      this.button("返回", () => this.go("menu"), "secondary"),
    );
    return el;
  }

  private renderShop(): HTMLElement {
    const s = this.state;
    const wrap = document.createElement("section");
    wrap.className = "screen active";
    wrap.dataset.phase = s.phase;
    wrap.dataset.circulations = String(s.circulationsToday);
    wrap.dataset.warmth = String(s.warmth);
    wrap.dataset.atmosphere = atmosphereForDay(s.day).dataAttr;

    const goalP = dayGoalProgress(s);
    const hud = document.createElement("div");
    hud.className = "hud";
    hud.innerHTML = `
      <div class="day-calendar-art" role="img" aria-label="今日日历装饰" data-testid="day-calendar-art"></div>
      <div class="day-page-art" role="img" aria-label="日历页" data-testid="day-page-art"></div>
      <div class="moon-calendar-art" role="img" aria-label="月相盘" data-testid="moon-calendar-art"></div>
      <div class="twin-cups-art" role="img" aria-label="双杯茶盘" data-testid="twin-cups-art"></div>
      <span>阶段 <strong data-testid="phase-label">${phaseLabel(s.phase)}</strong></span>
      <span class="chalkboard-art" role="img" aria-label="提示板" data-testid="chalkboard-art"></span>
      <span class="muted" data-testid="phase-hint">${formatPhaseHintLine(s.phase)}</span>
      <span class="muted" data-testid="atmosphere-line">${formatAtmosphereLine(s.day)}</span>
      <span class="muted" data-testid="moon-line">${formatMoonLine(s.day)}</span>
      <span class="hourglass-art" role="img" aria-label="沙漏" data-testid="hourglass-art"></span>
      <span class="muted" data-testid="hour-line">${formatHourLine(s.day)}</span>
      <span class="muted" data-testid="hour-craft-aside">${formatHourCraftAside(s.day)}</span>
      <span class="muted" data-testid="hourglass-aside">${formatHourglassAside(s.circulationsToday)}</span>
      <span data-testid="day-header">${formatDayHeaderLine(s.day, getDayScript(s.day).title)}</span>
      <span class="muted" data-testid="atmosphere-craft-hint">${formatAtmosphereCraftHint(s.day)}</span>
      <span class="muted" data-testid="moon-craft-aside">${formatMoonCraftAside(s.day)}</span>
      <span class="wind-chime-art" role="img" aria-label="风铃" data-testid="wind-chime-art"></span>
      <span class="muted" data-testid="wind-chime-line">${formatWindChimeLine(s.day)}</span>
      <span class="shop-cat-art" role="img" aria-label="店猫" data-testid="shop-cat-art"></span>
      <span class="muted" data-testid="shop-cat-line">${formatShopCatLine(s.circulationsToday)}</span>
      <span class="muted" data-testid="ambience-encourage">${formatAmbienceEncourage(s.day)}</span>
      <span data-testid="warmth-line"><span class="warmth-jar-art warmth-jar-art--hud" role="img" aria-label="温存罐"></span>温存 <strong data-testid="warmth">${s.warmth}</strong> · ${warmthRankTitle(s.warmth)}</span>
      <span class="soft-candle-art" role="img" aria-label="柜台烛火" data-testid="soft-candle-art"></span>
      <span class="muted" data-testid="candle-line">${formatCandleLine(s.warmth)}</span>
      <span class="muted" data-testid="candle-aside">${formatCandleAside(s.warmth)}</span>
      <span class="wish-tags-art" role="img" aria-label="祈愿签" data-testid="wish-tags-art"></span>
      <span class="muted" data-testid="wish-tag-line">${formatWishTagLine(s.history.length)}</span>
      <span class="muted" data-testid="candle-wish-pair">${formatCandleWishPair(s.warmth, s.history.length)}</span>
      <span class="muted" data-testid="warmth-progress">${formatWarmthProgress(s.warmth)}</span>
      <span class="muted" data-testid="warmth-encourage">${formatWarmthEncourage(s.warmth)}</span>
      <span data-testid="reputation-line">口碑 <strong>${s.reputation}</strong> · ${reputationRankTitle(s.reputation)}</span>
      <span>今日流通 <strong data-testid="circulations">${s.circulationsToday}</strong> / 目标 ${s.config.dayGoalCirculations}</span>
      <span class="muted" data-testid="day-goal">${formatDayGoalLine(goalP)}（${formatRatioPercent(goalP.bestRatio)}）</span>
      <span class="muted" data-testid="day-goal-encourage">${formatDayGoalEncourage(goalP)}</span>
      <span class="muted" data-testid="reputation-progress">${formatReputationProgress(s.reputation)}</span>
      <span data-testid="streak-line"><span class="heart-charm-art" role="img" aria-label="连心小饰"></span>${formatStreakLine(s.qualityStreak ?? 0)}</span>
      <span class="muted" data-testid="streak-encourage">${formatStreakEncourage(s.qualityStreak ?? 0)}</span>
      <span>默契 <strong data-testid="avg-match">${averageMatchScore(s).toFixed(1)}</strong></span>
      <span data-testid="queue-status">${formatQueueStatus(s)}</span>
    `;
    wrap.appendChild(hud);

    // 当日委托告示板（主单 + 候补槽）
    let orderState = s.activeOrder ? s : ensureActiveOrder(s);
    orderState = ensurePendingSecondary(orderState);
    const visible = listVisibleOrders(orderState);
    if (visible.length > 0) {
      const board = document.createElement("div");
      board.className = "order-board card";
      board.dataset.testid = "order-board";
      const primary = visible[0]!;
      const secondary = visible[1];
      board.innerHTML = `
        <div class="order-board-art" role="img" aria-label="委托告示板插画"></div>
        <div class="order-counter-art" role="img" aria-label="委托柜台" data-testid="order-counter-art"></div>
        <div class="rain-awning-art" role="img" aria-label="雨棚" data-testid="rain-awning-art"></div>
        <h2>今日委托</h2>
        <p data-testid="order-line">${formatOrderLine(primary)}</p>
        ${
          secondary
            ? `<p class="muted" data-testid="order-secondary">候补：${formatOrderShort(secondary)} — ${secondary.blurb}</p>`
            : ""
        }
        <p class="muted" data-testid="order-reward">${formatOrderRewardLine(primary)} · 已完成委托 ${orderState.ordersFulfilled ?? 0}</p>
        <p class="muted" data-testid="order-encourage">${formatOrderEncourage(primary, orderState.ordersFulfilled ?? 0)}</p>
        <p class="kbd-hint">提示：赠予匹配形态可立即完成；上架后「被买走」也可履约（${formatOrderShort(primary)}）</p>
      `;
      wrap.appendChild(board);
    } else {
      const done = document.createElement("div");
      done.className = "order-board card order-done";
      done.dataset.testid = "order-board";
      done.innerHTML = `<h2>今日委托</h2><p class="muted">本日委托已完成，谢谢你的温柔。</p>`;
      wrap.appendChild(done);
    }

    const msg = document.createElement("p");
    msg.className = "message";
    msg.dataset.testid = "message";
    msg.textContent = s.message;
    wrap.appendChild(msg);

    const kbd = document.createElement("p");
    kbd.className = "kbd-hint";
    kbd.textContent = `键盘：Esc 回主菜单 · 接待处 Enter 接待 · 选形态 ${listVesselHotkeyHints()}`;
    wrap.appendChild(kbd);

    wrap.appendChild(this.renderPhaseCard(s));

    if (s.shelf.length > 0) {
      wrap.appendChild(this.renderShelf(s));
    }

    const nav = document.createElement("div");
    nav.className = "btn-row";
    nav.append(
      this.button("瞬间图鉴", () => this.go("codex"), "secondary"),
      this.button("回到主菜单", () => this.go("menu"), "secondary"),
    );
    wrap.appendChild(nav);
    return wrap;
  }

  private renderShelf(s: GameState): HTMLElement {
    const card = document.createElement("div");
    card.className = "card";
    card.dataset.testid = "shelf";
    card.innerHTML = `<div class="shelf-display-art" role="img" aria-label="货架陈列插画" data-testid="shelf-display-art"></div><div class="shelf-craft-art" role="img" aria-label="货架小物" data-testid="shelf-craft-art"></div><div class="spice-jars-art" role="img" aria-label="茶糖小罐" data-testid="spice-jars-art"></div><h2>货架</h2><p class="muted" data-testid="shelf-line">${formatShelfLine(s)}</p><p class="muted" data-testid="shelf-mix">${formatShelfMixLine(s)}</p><p class="muted" data-testid="inventory-aside">${formatInventoryShelfAside(s)}</p><p class="muted" data-testid="spice-jar-aside">${formatSpiceJarAside(s.circulationsToday)}</p><p class="muted" data-testid="inventory-encourage">${formatInventoryEncourage(s)}</p><p class="muted" data-testid="shelf-encourage">${formatShelfEncourage(s)}</p><p class="muted">上架的温柔在此等候知音。</p>`;
    s.shelf.forEach((item) => {
      const row = document.createElement("div");
      row.className = "btn-row";
      row.style.alignItems = "center";
      const label = document.createElement("span");
      label.textContent = `${item.crafted.label}（${QUALITY_LABELS[item.crafted.quality]}）· ${priceLabel(item.crafted)}`;
      const id = item.crafted.id;
      row.append(
        label,
        this.button(
          "被买走",
          () => {
            const idx = this.state.shelf.findIndex((x) => x.crafted.id === id);
            this.setState(sellFromShelf(this.state, idx));
          },
          "display",
        ),
      );
      card.appendChild(row);
    });
    return card;
  }

  private renderPhaseCard(s: GameState): HTMLElement {
    const card = document.createElement("div");
    card.className = "card";
    card.dataset.testid = "phase-card";

    if (s.phase === "awaiting_emotion" || (s.phase === "result" && !s.current)) {
      const nextName = s.queue[0]?.guestName ?? null;
      const favorHint = formatNextGuestFavorHint(s, nextName);
      const qLen = s.queue.length;
      card.innerHTML = `<div class="warmth-corner-art" role="img" aria-label="温存一隅" data-testid="warmth-corner-art"></div>
        <div class="umbrella-stand-art" role="img" aria-label="伞架" data-testid="umbrella-stand-art"></div>
        <div class="evening-lanterns-art" role="img" aria-label="晚市灯巷" data-testid="evening-lanterns-art"></div>
        <div class="rain-shop-awning-art" role="img" aria-label="雨棚湿街" data-testid="rain-shop-awning-art"></div>
        <div class="tea-counter-art" role="img" aria-label="茶台插画" data-testid="tea-counter-art"></div>
        <div class="tea-tray-art" role="img" aria-label="茶盘" data-testid="tea-tray-art"></div>
        <div class="tea-cup-art" role="img" aria-label="茶杯" data-testid="tea-cup-art"></div>
        <div class="sugar-bowl-art" role="img" aria-label="糖罐" data-testid="sugar-bowl-art"></div>
        <div class="welcome-bell-art" role="img" aria-label="迎客门铃" data-testid="welcome-bell-art"></div>
        <div class="welcome-doorbell-art" role="img" aria-label="门铃" data-testid="welcome-doorbell-art"></div>
        <div class="rain-curtain-art" role="img" aria-label="雨门帘" data-testid="rain-curtain-art"></div>
        <div class="steam-cup-art" role="img" aria-label="热茶杯" data-testid="steam-cup-art"></div>
        <div class="mint-pots-art" role="img" aria-label="窗台薄荷" data-testid="mint-pots-art"></div>
        <div class="rest-stool-art" role="img" aria-label="憩座" data-testid="rest-stool-art"></div>
        <div class="scent-sachet-art" role="img" aria-label="香囊" data-testid="scent-sachet-art"></div>
        <div class="dried-bouquet-art" role="img" aria-label="干花束" data-testid="dried-bouquet-art"></div>
        <div class="coat-hooks-art" role="img" aria-label="衣帽钩" data-testid="coat-hooks-art"></div>
        <div class="soft-scarves-art" role="img" aria-label="围巾架" data-testid="soft-scarves-art"></div>
        <div class="reply-box-art" role="img" aria-label="回信匣" data-testid="reply-box-art"></div>
        <div class="stamp-tray-art" role="img" aria-label="邮票托盘" data-testid="stamp-tray-art"></div>
        <div class="linen-apron-art" role="img" aria-label="店主围裙" data-testid="linen-apron-art"></div>
        <div class="soft-cuffs-art" role="img" aria-label="袖套" data-testid="soft-cuffs-art"></div>
        <div class="soft-radio-art" role="img" aria-label="软广播" data-testid="soft-radio-art"></div>
        <div class="record-needle-art" role="img" aria-label="唱针" data-testid="record-needle-art"></div>
        <div class="ink-well-art" role="img" aria-label="墨台" data-testid="ink-well-art"></div>
        <div class="blotter-stack-art" role="img" aria-label="吸墨纸" data-testid="blotter-stack-art"></div>
        <div class="lace-curtain-art" role="img" aria-label="窗纱" data-testid="lace-curtain-art"></div>
        <div class="lace-light-art" role="img" aria-label="蕾丝光" data-testid="lace-light-art"></div>
        <div class="dew-doorbell-art" role="img" aria-label="晨露门铃" data-testid="dew-doorbell-art"></div>
        <div class="wet-sill-art" role="img" aria-label="湿窗台" data-testid="wet-sill-art"></div>
        <div class="biscuit-tin-art" role="img" aria-label="饼干匣" data-testid="biscuit-tin-art"></div>
        <div class="sugar-spoon-art" role="img" aria-label="糖勺" data-testid="sugar-spoon-art"></div>
        <div class="step-ladder-art" role="img" aria-label="小木梯" data-testid="step-ladder-art"></div>
        <div class="high-shelf-art" role="img" aria-label="高架" data-testid="high-shelf-art"></div>
        <div class="guest-mirror-art" role="img" aria-label="试衣镜" data-testid="guest-mirror-art"></div>
        <div class="soft-cloth-art" role="img" aria-label="软擦布" data-testid="soft-cloth-art"></div>
        <div class="ribbon-spools-soft-art" role="img" aria-label="丝带卷" data-testid="ribbon-spools-soft-art"></div>
        <div class="snip-thread-box-art" role="img" aria-label="剪线头匣" data-testid="snip-thread-box-art"></div>
        <div class="door-mat-art" role="img" aria-label="入户软垫" data-testid="door-mat-art"></div>
        <div class="shoe-box-art" role="img" aria-label="鞋边盒" data-testid="shoe-box-art"></div>
        <div class="hand-soap-art" role="img" aria-label="洗手皂" data-testid="hand-soap-art"></div>
        <div class="soft-towel-art" role="img" aria-label="软毛巾" data-testid="soft-towel-art"></div>
        <div class="warm-kettle-art" role="img" aria-label="暖水壶" data-testid="warm-kettle-art"></div>
        <div class="cup-lid-art" role="img" aria-label="杯盖" data-testid="cup-lid-art"></div>
        <div class="bird-seed-jar-art" role="img" aria-label="鸟食罐" data-testid="bird-seed-jar-art"></div>
        <div class="seed-dish-art" role="img" aria-label="食盘" data-testid="seed-dish-art"></div>
        <div class="soft-broom-art" role="img" aria-label="软扫帚" data-testid="soft-broom-art"></div>
        <div class="dustpan-art" role="img" aria-label="簸箕" data-testid="dustpan-art"></div>
        <div class="picture-frame-art" role="img" aria-label="画框" data-testid="picture-frame-art"></div>
        <div class="hanging-cord-art" role="img" aria-label="挂绳" data-testid="hanging-cord-art"></div>
        <div class="cork-board-art" role="img" aria-label="软木板" data-testid="cork-board-art"></div>
        <div class="push-pin-tin-art" role="img" aria-label="图钉盒" data-testid="push-pin-tin-art"></div>
        <div class="copper-thimble-art" role="img" aria-label="顶针" data-testid="copper-thimble-art"></div>
        <div class="pincushion-art" role="img" aria-label="针垫" data-testid="pincushion-art"></div>
        <div class="button-box-art" role="img" aria-label="钮扣匣" data-testid="button-box-art"></div>
        <div class="soft-tape-art" role="img" aria-label="软尺" data-testid="soft-tape-art"></div>
        <div class="thread-spool-art" role="img" aria-label="线轴" data-testid="thread-spool-art"></div>
        <div class="beeswax-brick-art" role="img" aria-label="蜂蜡砖" data-testid="beeswax-brick-art"></div>
        <div class="soft-shears-art" role="img" aria-label="软剪" data-testid="soft-shears-art"></div>
        <div class="snip-dish-art" role="img" aria-label="剪线碟" data-testid="snip-dish-art"></div>
        <div class="pattern-paper-art" role="img" aria-label="裁样纸" data-testid="pattern-paper-art"></div>
        <div class="chalk-wheel-art" role="img" aria-label="划粉" data-testid="chalk-wheel-art"></div>
        <div class="soft-iron-art" role="img" aria-label="软熨斗" data-testid="soft-iron-art"></div>
        <div class="press-pad-art" role="img" aria-label="烫垫" data-testid="press-pad-art"></div>
        <div class="darning-egg-art" role="img" aria-label="补衣蛋" data-testid="darning-egg-art"></div>
        <div class="needle-book-art" role="img" aria-label="针线册" data-testid="needle-book-art"></div>
        <div class="fabric-clips-art" role="img" aria-label="布夹" data-testid="fabric-clips-art"></div>
        <div class="marking-pen-art" role="img" aria-label="划线笔" data-testid="marking-pen-art"></div>
        <div class="seam-ripper-art" role="img" aria-label="拆线器" data-testid="seam-ripper-art"></div>
        <div class="emery-bag-art" role="img" aria-label="砂囊" data-testid="emery-bag-art"></div>
        <div class="tailor-ham-art" role="img" aria-label="烫馒头" data-testid="tailor-ham-art"></div>
        <div class="sleeve-board-art" role="img" aria-label="袖烫板" data-testid="sleeve-board-art"></div>
        <div class="stitching-awl-art" role="img" aria-label="锥子" data-testid="stitching-awl-art"></div>
        <div class="bone-folder-art" role="img" aria-label="骨刀" data-testid="bone-folder-art"></div>
        <div class="book-press-art" role="img" aria-label="书压" data-testid="book-press-art"></div>
        <div class="weight-bar-art" role="img" aria-label="压条" data-testid="weight-bar-art"></div>
        <div class="binding-thread-art" role="img" aria-label="装订线" data-testid="binding-thread-art"></div>
        <div class="sewing-needle-art" role="img" aria-label="穿线针" data-testid="sewing-needle-art"></div>
        <div class="bookcloth-art" role="img" aria-label="装帧布" data-testid="bookcloth-art"></div>
        <div class="spine-strip-art" role="img" aria-label="书脊条" data-testid="spine-strip-art"></div>
        <div class="endpaper-art" role="img" aria-label="环衬" data-testid="endpaper-art"></div>
        <div class="headband-ribbon-art" role="img" aria-label="天头丝带" data-testid="headband-ribbon-art"></div>
        <div class="paste-pot-art" role="img" aria-label="浆糊盅" data-testid="paste-pot-art"></div>
        <div class="paste-brush-art" role="img" aria-label="排刷" data-testid="paste-brush-art"></div>
        <div class="cutting-mat-art" role="img" aria-label="裁切垫" data-testid="cutting-mat-art"></div>
        <div class="straight-ruler-art" role="img" aria-label="直尺" data-testid="straight-ruler-art"></div>
        <div class="craft-knife-art" role="img" aria-label="裁纸刀" data-testid="craft-knife-art"></div>
        <div class="safety-ruler-art" role="img" aria-label="安全尺" data-testid="safety-ruler-art"></div>
        <div class="corner-rounder-art" role="img" aria-label="圆角器" data-testid="corner-rounder-art"></div>
        <div class="corner-guards-art" role="img" aria-label="护角" data-testid="corner-guards-art"></div>
        <div class="eyelets-art" role="img" aria-label="气眼" data-testid="eyelets-art"></div>
        <div class="eyelet-punch-art" role="img" aria-label="打孔钳" data-testid="eyelet-punch-art"></div>
        <div class="sealing-wax-art" role="img" aria-label="火漆" data-testid="sealing-wax-art"></div>
        <div class="wax-spoon-art" role="img" aria-label="封缄勺" data-testid="wax-spoon-art"></div>
        <div class="seal-stamp-art" role="img" aria-label="印模" data-testid="seal-stamp-art"></div>
        <div class="ink-pad-art" role="img" aria-label="印泥" data-testid="ink-pad-art"></div>
        <div class="bookmark-ribbon-art" role="img" aria-label="书签丝带" data-testid="bookmark-ribbon-art"></div>
        <div class="page-dogear-art" role="img" aria-label="页角折" data-testid="page-dogear-art"></div>
        <div class="shop-ledger-art" role="img" aria-label="店账册" data-testid="shop-ledger-art"></div>
        <div class="soft-pencil-art" role="img" aria-label="软铅笔" data-testid="soft-pencil-art"></div>
        <div class="receipt-slip-art" role="img" aria-label="收据条" data-testid="receipt-slip-art"></div>
        <div class="round-stamp-art" role="img" aria-label="小圆戳" data-testid="round-stamp-art"></div>
        <div class="kraft-bag-art" role="img" aria-label="牛皮纸袋" data-testid="kraft-bag-art"></div>
        <div class="hemp-twine-art" role="img" aria-label="麻绳" data-testid="hemp-twine-art"></div>
        <div class="warm-tag-card-art" role="img" aria-label="温言小卡" data-testid="warm-tag-card-art"></div>
        <div class="fine-string-art" role="img" aria-label="细线" data-testid="fine-string-art"></div>
        <div class="change-dish-art" role="img" aria-label="找零浅碟" data-testid="change-dish-art"></div>
        <div class="palm-kerchief-art" role="img" aria-label="掌心手帕" data-testid="palm-kerchief-art"></div>
        <div class="key-tray-art" role="img" aria-label="钥匙浅盘" data-testid="key-tray-art"></div>
        <div class="closing-lamp-art" role="img" aria-label="关店小灯" data-testid="closing-lamp-art"></div>
        <div class="morning-cloth-art" role="img" aria-label="晨间抹布" data-testid="morning-cloth-art"></div>
        <div class="sill-vase-art" role="img" aria-label="窗台小瓶" data-testid="sill-vase-art"></div>
        <div class="umbrella-stand-art" role="img" aria-label="雨伞架" data-testid="umbrella-stand-art"></div>
        <div class="door-mat-art" role="img" aria-label="门口踏垫" data-testid="door-mat-art"></div>
        <div class="guest-log-art" role="img" aria-label="访客签到本" data-testid="guest-log-art"></div>
        <div class="soft-eraser-art" role="img" aria-label="软橡皮" data-testid="soft-eraser-art"></div>
        <div class="wait-cushion-art" role="img" aria-label="候座软垫" data-testid="wait-cushion-art"></div>
        <div class="warm-water-cup-art" role="img" aria-label="温水小杯" data-testid="warm-water-cup-art"></div>
        <div class="desk-calendar-art" role="img" aria-label="台历夹" data-testid="desk-calendar-art"></div>
        <div class="today-sticker-art" role="img" aria-label="今日贴纸" data-testid="today-sticker-art"></div>
        <div class="sticky-pad-art" role="img" aria-label="便签本" data-testid="sticky-pad-art"></div>
        <div class="fine-pen-art" role="img" aria-label="细钢笔" data-testid="fine-pen-art"></div>
        <div class="paper-clips-art" role="img" aria-label="回形针" data-testid="paper-clips-art"></div>
        <div class="mini-tray-art" role="img" aria-label="小托盘" data-testid="mini-tray-art"></div>
        <div class="ink-well-art" role="img" aria-label="小墨水瓶" data-testid="ink-well-art"></div>
        <div class="blotting-paper-art" role="img" aria-label="吸墨纸" data-testid="blotting-paper-art"></div>
        <div class="wooden-bookend-art" role="img" aria-label="木质书立" data-testid="wooden-bookend-art"></div>
        <div class="page-weight-art" role="img" aria-label="页镇" data-testid="page-weight-art"></div>
        <div class="paper-shade-art" role="img" aria-label="纸灯罩" data-testid="paper-shade-art"></div>
        <div class="cord-switch-art" role="img" aria-label="灯绳开关" data-testid="cord-switch-art"></div>
        <div class="tasting-spoon-art" role="img" aria-label="试茶小勺" data-testid="tasting-spoon-art"></div>
        <div class="tasting-mat-art" role="img" aria-label="品茶垫" data-testid="tasting-mat-art"></div>
        <div class="jar-tag-art" role="img" aria-label="罐口标签" data-testid="jar-tag-art"></div>
        <div class="fine-cotton-art" role="img" aria-label="细棉线" data-testid="fine-cotton-art"></div>
        <div class="blank-postcard-art" role="img" aria-label="明信片" data-testid="blank-postcard-art"></div>
        <div class="stamp-box-art" role="img" aria-label="邮票盒" data-testid="stamp-box-art"></div>
        <div class="window-cushion-art" role="img" aria-label="窗边软垫" data-testid="window-cushion-art"></div>
        <div class="sheer-curtain-art" role="img" aria-label="薄窗帘" data-testid="sheer-curtain-art"></div>
        <div class="clay-pot-art" role="img" aria-label="小陶盆" data-testid="clay-pot-art"></div>
        <div class="watering-can-art" role="img" aria-label="浇水壶" data-testid="watering-can-art"></div>
        <div class="cup-rest-art" role="img" aria-label="杯托" data-testid="cup-rest-art"></div>
        <div class="tea-cloth-art" role="img" aria-label="茶巾" data-testid="tea-cloth-art"></div>
        <div class="honey-jar-art" role="img" aria-label="小蜜罐" data-testid="honey-jar-art"></div>
        <div class="wood-dipper-art" role="img" aria-label="木蜜勺" data-testid="wood-dipper-art"></div>
        <div class="milk-jug-art" role="img" aria-label="小奶盅" data-testid="milk-jug-art"></div>
        <div class="cream-spoon-art" role="img" aria-label="奶油勺" data-testid="cream-spoon-art"></div>
        <div class="lemon-dish-art" role="img" aria-label="柠檬碟" data-testid="lemon-dish-art"></div>
        <div class="citrus-knife-art" role="img" aria-label="柑橘小刀" data-testid="citrus-knife-art"></div>
        <div class="napkin-ring-art" role="img" aria-label="餐巾环" data-testid="napkin-ring-art"></div>
        <div class="guest-napkin-art" role="img" aria-label="客人餐巾" data-testid="guest-napkin-art"></div>
        <div class="place-mat-art" role="img" aria-label="餐垫" data-testid="place-mat-art"></div>
        <div class="chopstick-rest-art" role="img" aria-label="筷枕" data-testid="chopstick-rest-art"></div>
        <div class="soy-cruet-art" role="img" aria-label="小酱油盅" data-testid="soy-cruet-art"></div>
        <div class="vinegar-dish-art" role="img" aria-label="醋碟" data-testid="vinegar-dish-art"></div>
        <div class="clay-lid-art" role="img" aria-label="小砂锅盖" data-testid="clay-lid-art"></div>
        <div class="wood-paddle-art" role="img" aria-label="木铲" data-testid="wood-paddle-art"></div>
        <div class="oven-mitt-art" role="img" aria-label="隔热手套" data-testid="oven-mitt-art"></div>
        <div class="bake-pad-art" role="img" aria-label="烤盘垫" data-testid="bake-pad-art"></div>
        <div class="kitchen-hourglass-art" role="img" aria-label="厨房沙漏" data-testid="kitchen-hourglass-art"></div>
        <div class="soft-timer-bell-art" role="img" aria-label="小铃铛" data-testid="soft-timer-bell-art"></div>
        <div class="flour-bin-art" role="img" aria-label="面粉罐" data-testid="flour-bin-art"></div>
        <div class="measure-cup-art" role="img" aria-label="量杯" data-testid="measure-cup-art"></div>
        <div class="mix-bowl-art" role="img" aria-label="搅拌盆" data-testid="mix-bowl-art"></div>
        <div class="wire-whisk-art" role="img" aria-label="打蛋器" data-testid="wire-whisk-art"></div>
        <div class="rolling-pin-art" role="img" aria-label="擀面杖" data-testid="rolling-pin-art"></div>
        <div class="dust-spoon-art" role="img" aria-label="撒粉勺" data-testid="dust-spoon-art"></div>
        <div class="dough-scraper-art" role="img" aria-label="面团刮板" data-testid="dough-scraper-art"></div>
        <div class="bake-parchment-art" role="img" aria-label="烘焙纸" data-testid="bake-parchment-art"></div>
        <div class="cookie-cutter-art" role="img" aria-label="饼干模" data-testid="cookie-cutter-art"></div>
        <div class="cooling-rack-art" role="img" aria-label="冷却架" data-testid="cooling-rack-art"></div>
        <div class="icing-bag-art" role="img" aria-label="裱花袋" data-testid="icing-bag-art"></div>
        <div class="sugar-sieve-art" role="img" aria-label="糖粉筛" data-testid="sugar-sieve-art"></div>
        <div class="cookie-tin-art" role="img" aria-label="饼干铁盒" data-testid="cookie-tin-art"></div>
        <div class="twist-tie-art" role="img" aria-label="扎带" data-testid="twist-tie-art"></div>
        <div class="recipe-card-art" role="img" aria-label="手写菜谱卡" data-testid="recipe-card-art"></div>
        <div class="wood-clip-art" role="img" aria-label="木夹" data-testid="wood-clip-art"></div>
        <div class="oven-thermo-art" role="img" aria-label="烤箱温度计" data-testid="oven-thermo-art"></div>
        <div class="timer-dial-art" role="img" aria-label="计时旋钮" data-testid="timer-dial-art"></div>
        <div class="spice-jar-art" role="img" aria-label="香料小罐" data-testid="spice-jar-art"></div>
        <div class="wood-scoop-art" role="img" aria-label="木勺" data-testid="wood-scoop-art"></div>
        <div class="stone-mortar-art" role="img" aria-label="石臼" data-testid="stone-mortar-art"></div>
        <div class="wood-pestle-art" role="img" aria-label="木杵" data-testid="wood-pestle-art"></div>
        <div class="herb-bundle-art" role="img" aria-label="干草药束" data-testid="herb-bundle-art"></div>
        <div class="hang-twine-art" role="img" aria-label="挂绳" data-testid="hang-twine-art"></div>
        <div class="herb-oil-bottle-art" role="img" aria-label="草药油瓶" data-testid="herb-oil-bottle-art"></div>
        <div class="glass-dropper-art" role="img" aria-label="玻璃滴管" data-testid="glass-dropper-art"></div>
        <div class="salve-tin-art" role="img" aria-label="软膏小盒" data-testid="salve-tin-art"></div>
        <div class="bamboo-spatula-art" role="img" aria-label="竹刮勺" data-testid="bamboo-spatula-art"></div>
        <div class="cotton-pad-art" role="img" aria-label="棉垫" data-testid="cotton-pad-art"></div>
        <div class="gauze-roll-art" role="img" aria-label="纱布卷" data-testid="gauze-roll-art"></div>
        <div class="rose-water-bottle-art" role="img" aria-label="花露水瓶" data-testid="rose-water-bottle-art"></div>
        <div class="linen-cloth-art" role="img" aria-label="亚麻手帕" data-testid="linen-cloth-art"></div>
        <div class="soap-bar-art" role="img" aria-label="香皂块" data-testid="soap-bar-art"></div>
        <div class="soap-dish-art" role="img" aria-label="木皂碟" data-testid="soap-dish-art"></div>
        <div class="lotion-bottle-art" role="img" aria-label="润肤乳瓶" data-testid="lotion-bottle-art"></div>
        <div class="pump-cap-art" role="img" aria-label="按压泵" data-testid="pump-cap-art"></div>
        <div class="bath-salt-jar-art" role="img" aria-label="浴盐罐" data-testid="bath-salt-jar-art"></div>
        <div class="shell-scoop-art" role="img" aria-label="贝壳勺" data-testid="shell-scoop-art"></div>
        <div class="diffuser-bottle-art" role="img" aria-label="香薰瓶" data-testid="diffuser-bottle-art"></div>
        <div class="rattan-reed-art" role="img" aria-label="藤条" data-testid="rattan-reed-art"></div>
        <div class="tealight-art" role="img" aria-label="茶蜡" data-testid="tealight-art"></div>
        <div class="candle-snuffer-art" role="img" aria-label="熄烛罩" data-testid="candle-snuffer-art"></div>
        <div class="matchbox-art" role="img" aria-label="火柴盒" data-testid="matchbox-art"></div>
        <div class="matchstick-art" role="img" aria-label="火柴" data-testid="matchstick-art"></div>
        <div class="paper-lantern-art" role="img" aria-label="纸灯笼" data-testid="paper-lantern-art"></div>
        <div class="lantern-shade-art" role="img" aria-label="灯罩" data-testid="lantern-shade-art"></div>
        <div class="sand-timer-art" role="img" aria-label="计时沙漏" data-testid="sand-timer-art"></div>
        <div class="fine-sand-art" role="img" aria-label="细沙" data-testid="fine-sand-art"></div>
        <div class="pressed-mark-art" role="img" aria-label="压花书签" data-testid="pressed-mark-art"></div>
        <div class="silk-tail-art" role="img" aria-label="丝尾" data-testid="silk-tail-art"></div>
        <div class="ceramic-pen-rest-art" role="img" aria-label="瓷笔搁" data-testid="ceramic-pen-rest-art"></div>
        <div class="blot-sheet-art" role="img" aria-label="吸墨纸" data-testid="blot-sheet-art"></div>
        <div class="cream-envelope-art" role="img" aria-label="奶油信封" data-testid="cream-envelope-art"></div>
        <div class="letter-opener-art" role="img" aria-label="拆信刀" data-testid="letter-opener-art"></div>
        <div class="desk-cal-block-art" role="img" aria-label="台历块" data-testid="desk-cal-block-art"></div>
        <div class="day-page-ribbon-art" role="img" aria-label="日页丝带" data-testid="day-page-ribbon-art"></div>
        <div class="guest-cup-art" role="img" aria-label="待客瓷杯" data-testid="guest-cup-art"></div>
        <div class="linen-coaster-art" role="img" aria-label="亚麻杯垫" data-testid="linen-coaster-art"></div>
        <div class="brass-desk-bell-art" role="img" aria-label="柜台黄铜铃" data-testid="brass-desk-bell-art"></div>
        <div class="felt-mallet-art" role="img" aria-label="毡槌" data-testid="felt-mallet-art"></div>
        <div class="soft-sign-book-art" role="img" aria-label="软皮留言簿" data-testid="soft-sign-book-art"></div>
        <div class="graphite-pencil-art" role="img" aria-label="石墨铅笔" data-testid="graphite-pencil-art"></div>
        <div class="soft-wool-scarf-art" role="img" aria-label="软羊毛围巾" data-testid="soft-wool-scarf-art"></div>
        <div class="wood-coat-peg-art" role="img" aria-label="木衣钉" data-testid="wood-coat-peg-art"></div>
        <div class="fold-umbrella-art" role="img" aria-label="折叠伞" data-testid="fold-umbrella-art"></div>
        <div class="ceramic-um-stand-art" role="img" aria-label="瓷伞筒" data-testid="ceramic-um-stand-art"></div>
        <div class="soft-mitten-art" role="img" aria-label="软织连指手套" data-testid="soft-mitten-art"></div>
        <div class="mitten-basket-art" role="img" aria-label="柳编手套筐" data-testid="mitten-basket-art"></div>
        <div class="thermos-flask-art" role="img" aria-label="保温瓷壶" data-testid="thermos-flask-art"></div>
        <div class="wool-sleeve-art" role="img" aria-label="羊毛壶套" data-testid="wool-sleeve-art"></div>
        <div class="soft-beanie-art" role="img" aria-label="软织毛线帽" data-testid="soft-beanie-art"></div>
        <div class="wood-hat-form-art" role="img" aria-label="木帽托" data-testid="wood-hat-form-art"></div>
        <div class="soft-slipper-art" role="img" aria-label="软室内拖鞋" data-testid="soft-slipper-art"></div>
        <div class="wood-shoe-tray-art" role="img" aria-label="木鞋托盘" data-testid="wood-shoe-tray-art"></div>
        <div class="soft-earmuff-art" role="img" aria-label="软织耳罩" data-testid="soft-earmuff-art"></div>
        <div class="earmuff-peg-art" role="img" aria-label="耳罩挂钉" data-testid="earmuff-peg-art"></div>
        <div class="fingerless-glove-art" role="img" aria-label="半指软织手套" data-testid="fingerless-glove-art"></div>
        <div class="glove-dish-art" role="img" aria-label="瓷手套碟" data-testid="glove-dish-art"></div>
        <div class="knee-blanket-art" role="img" aria-label="膝上小毯" data-testid="knee-blanket-art"></div>
        <div class="blanket-board-art" role="img" aria-label="木托板" data-testid="blanket-board-art"></div>
        <div class="soft-eye-mask-art" role="img" aria-label="软眼罩" data-testid="soft-eye-mask-art"></div>
        <div class="mask-pouch-art" role="img" aria-label="眼罩收纳袋" data-testid="mask-pouch-art"></div>
        <div class="lavender-sachet-art" role="img" aria-label="薰衣草香囊" data-testid="lavender-sachet-art"></div>
        <div class="sachet-dish-art" role="img" aria-label="瓷香囊碟" data-testid="sachet-dish-art"></div>
        <div class="beeswax-tin-art" role="img" aria-label="蜂蜡小烛" data-testid="beeswax-tin-art"></div>
        <div class="strike-strip-art" role="img" aria-label="擦火条" data-testid="strike-strip-art"></div>
        <div class="soft-cloth-tape-art" role="img" aria-label="软布卷尺" data-testid="soft-cloth-tape-art"></div>
        <div class="tape-wood-clip-art" role="img" aria-label="卷尺木夹" data-testid="tape-wood-clip-art"></div>
        <div class="soft-button-tin-art" role="img" aria-label="软扣子小罐" data-testid="soft-button-tin-art"></div>
        <div class="button-scoop-art" role="img" aria-label="扣子木勺" data-testid="button-scoop-art"></div>
        <div class="embroidery-hoop-art" role="img" aria-label="绣绷" data-testid="embroidery-hoop-art"></div>
        <div class="embroidery-floss-art" role="img" aria-label="绣线" data-testid="embroidery-floss-art"></div>
        <div class="cloth-weight-art" role="img" aria-label="布镇" data-testid="cloth-weight-art"></div>
        <div class="paper-pattern-art" role="img" aria-label="裁片纸样" data-testid="paper-pattern-art"></div>
        <div class="rotary-cutter-art" role="img" aria-label="滚刀" data-testid="rotary-cutter-art"></div>
        <div class="soft-cut-mat-art" role="img" aria-label="软裁垫" data-testid="soft-cut-mat-art"></div>
        <div class="mini-steam-iron-art" role="img" aria-label="小蒸汽熨" data-testid="mini-steam-iron-art"></div>
        <div class="steam-press-cloth-art" role="img" aria-label="熨布" data-testid="steam-press-cloth-art"></div>
        <div class="soft-tailor-chalk-art" role="img" aria-label="裁缝粉笔" data-testid="soft-tailor-chalk-art"></div>
        <div class="chalk-tray-art" role="img" aria-label="粉笔托" data-testid="chalk-tray-art"></div>
        <div class="soft-pin-cushion-art" role="img" aria-label="软针插" data-testid="soft-pin-cushion-art"></div>
        <div class="straight-pins-art" role="img" aria-label="直针" data-testid="straight-pins-art"></div>
        <div class="embro-snips-art" role="img" aria-label="绣花剪" data-testid="embro-snips-art"></div>
        <div class="snips-sheath-art" role="img" aria-label="剪皮套" data-testid="snips-sheath-art"></div>
        <div class="mend-mushroom-art" role="img" aria-label="补衣木菇" data-testid="mend-mushroom-art"></div>
        <div class="mend-yarn-art" role="img" aria-label="补线团" data-testid="mend-yarn-art"></div>
        <div class="lace-bobbin-art" role="img" aria-label="梭心" data-testid="lace-bobbin-art"></div>
        <div class="lace-pillow-art" role="img" aria-label="花边枕" data-testid="lace-pillow-art"></div>
        <div class="crochet-hook-art" role="img" aria-label="钩针" data-testid="crochet-hook-art"></div>
        <div class="soft-yarn-ball-art" role="img" aria-label="线团" data-testid="soft-yarn-ball-art"></div>
        <div class="knitting-needles-art" role="img" aria-label="棒针" data-testid="knitting-needles-art"></div>
        <div class="stitch-markers-art" role="img" aria-label="记号扣" data-testid="stitch-markers-art"></div>
        <div class="yarn-swatch-art" role="img" aria-label="色卡样片" data-testid="yarn-swatch-art"></div>
        <div class="row-counter-art" role="img" aria-label="行数计数器" data-testid="row-counter-art"></div>
        <div class="pom-maker-art" role="img" aria-label="绒球器" data-testid="pom-maker-art"></div>
        <div class="yarn-scrap-box-art" role="img" aria-label="碎线盒" data-testid="yarn-scrap-box-art"></div>
        <div class="tassel-board-art" role="img" aria-label="流苏板" data-testid="tassel-board-art"></div>
        <div class="waxed-cord-art" role="img" aria-label="蜡线" data-testid="waxed-cord-art"></div>
        <div class="small-loom-art" role="img" aria-label="小织机" data-testid="small-loom-art"></div>
        <div class="soft-shuttle-art" role="img" aria-label="梭子" data-testid="soft-shuttle-art"></div>
        <div class="quilt-block-art" role="img" aria-label="拼布方块" data-testid="quilt-block-art"></div>
        <div class="basting-thread-art" role="img" aria-label="绷缝线" data-testid="basting-thread-art"></div>
        <div class="needle-gauge-art" role="img" aria-label="棒针尺" data-testid="needle-gauge-art"></div>
        <div class="cable-needle-art" role="img" aria-label="麻花针" data-testid="cable-needle-art"></div>
        <div class="ball-winder-art" role="img" aria-label="绕线器" data-testid="ball-winder-art"></div>
        <div class="yarn-swift-art" role="img" aria-label="纱架" data-testid="yarn-swift-art"></div>
        <div class="felting-needle-art" role="img" aria-label="戳戳针" data-testid="felting-needle-art"></div>
        <div class="wool-roving-art" role="img" aria-label="羊毛条" data-testid="wool-roving-art"></div>
        <div class="drop-spindle-art" role="img" aria-label="纺锤" data-testid="drop-spindle-art"></div>
        <div class="soft-roving-art" role="img" aria-label="纺前毛条" data-testid="soft-roving-art"></div>
        <div class="carding-brush-art" role="img" aria-label="梳毛刷" data-testid="carding-brush-art"></div>
        <div class="carding-pad-art" role="img" aria-label="梳毛垫" data-testid="carding-pad-art"></div>
        <div class="niddy-noddy-art" role="img" aria-label="绕绞架" data-testid="niddy-noddy-art"></div>
        <div class="yarn-skein-art" role="img" aria-label="绞线" data-testid="yarn-skein-art"></div>
        <div class="french-knitter-art" role="img" aria-label="法式编织筒" data-testid="french-knitter-art"></div>
        <div class="knitter-yarn-art" role="img" aria-label="筒线" data-testid="knitter-yarn-art"></div>
        <h2>接待处</h2>
        <p class="muted">把门推开一点，听听今天的故事。</p>
        <p class="muted" data-testid="curtain-line">${formatCurtainLine(s.day)}</p>
        <p class="muted" data-testid="curtain-open">${formatCurtainOpenAside(qLen)}</p>
        <p class="muted" data-testid="rain-stick-aside">${formatRainStickAside(s.day)}</p>
        <p class="muted" data-testid="curtain-encourage">${formatCurtainEncourage(s.day)}</p>
        <p class="muted" data-testid="mint-pots-line">${formatMintPotsLine(s.day)}</p>
        <p class="muted" data-testid="rest-stool-line">${formatRestStoolLine(qLen)}</p>
        <p class="muted" data-testid="herb-aside">${formatHerbAside(s.warmth)}</p>
        <p class="muted" data-testid="rest-encourage">${formatRestEncourage(s.circulationsToday)}</p>
        <p class="muted" data-testid="sachet-line">${formatSachetLine(s.day)}</p>
        <p class="muted" data-testid="dried-bouquet-line">${formatDriedBouquetLine(s.warmth)}</p>
        <p class="muted" data-testid="fragrance-encourage">${formatFragranceEncourage(s.circulationsToday)}</p>
        <p class="muted" data-testid="sachet-pair">${formatSachetPair(s.day, s.warmth)}</p>
        <p class="muted" data-testid="coat-hook-line">${formatCoatHookLine(qLen)}</p>
        <p class="muted" data-testid="scarf-rack-line">${formatScarfRackLine(s.day)}</p>
        <p class="muted" data-testid="hook-aside">${formatHookAside(s.warmth)}</p>
        <p class="muted" data-testid="coat-encourage">${formatCoatEncourage(s.circulationsToday)}</p>
        <p class="muted" data-testid="hook-pair">${formatHookPair(qLen, s.day)}</p>
        <p class="muted" data-testid="reply-box-line">${formatReplyBoxLine(s.history.length)}</p>
        <p class="muted" data-testid="stamp-tray-line">${formatStampTrayLine(s.day)}</p>
        <p class="muted" data-testid="letter-aside">${formatLetterAside(s.warmth)}</p>
        <p class="muted" data-testid="letter-encourage">${formatLetterEncourage(s.circulationsToday)}</p>
        <p class="muted" data-testid="letter-pair">${formatLetterPair(s.history.length, s.day)}</p>
        <p class="muted" data-testid="apron-line">${formatApronLine(s.day)}</p>
        <p class="muted" data-testid="cuff-line">${formatCuffLine(s.circulationsToday)}</p>
        <p class="muted" data-testid="apron-aside">${formatApronAside(s.warmth)}</p>
        <p class="muted" data-testid="keeper-encourage">${formatKeeperEncourage(qLen)}</p>
        <p class="muted" data-testid="apron-pair">${formatApronPair(s.day, s.circulationsToday)}</p>
        <p class="muted" data-testid="radio-line">${formatRadioLine(s.day)}</p>
        <p class="muted" data-testid="needle-line">${formatNeedleLine(s.warmth)}</p>
        <p class="muted" data-testid="radio-aside">${formatRadioAside(false)}</p>
        <p class="muted" data-testid="radio-encourage">${formatRadioEncourage(s.circulationsToday)}</p>
        <p class="muted" data-testid="radio-pair">${formatRadioPair(s.day, s.warmth)}</p>
        <p class="muted" data-testid="ink-well-line">${formatInkWellLine(s.day)}</p>
        <p class="muted" data-testid="blotter-line">${formatBlotterLine(s.history.length)}</p>
        <p class="muted" data-testid="ink-aside">${formatInkAside(s.warmth)}</p>
        <p class="muted" data-testid="ink-encourage">${formatInkEncourage(s.circulationsToday)}</p>
        <p class="muted" data-testid="ink-pair">${formatInkPair(s.day, s.history.length)}</p>
        <p class="muted" data-testid="lace-curtain-line">${formatLaceCurtainLine(s.day)}</p>
        <p class="muted" data-testid="lace-light-line">${formatLaceLightLine(s.warmth)}</p>
        <p class="muted" data-testid="lace-aside">${formatLaceAside(qLen)}</p>
        <p class="muted" data-testid="lace-encourage">${formatLaceEncourage(s.circulationsToday)}</p>
        <p class="muted" data-testid="lace-pair">${formatLacePair(s.day, s.warmth)}</p>
        <p class="muted" data-testid="morning-dew-line">${formatMorningDewLine(s.day)}</p>
        <p class="muted" data-testid="wet-sill-line">${formatWetSillLine(s.warmth)}</p>
        <p class="muted" data-testid="dew-aside">${formatDewAside(qLen)}</p>
        <p class="muted" data-testid="dew-encourage">${formatDewEncourage(s.circulationsToday)}</p>
        <p class="muted" data-testid="dew-pair">${formatDewPair(s.day, s.warmth)}</p>
        <p class="muted" data-testid="biscuit-tin-line">${formatBiscuitTinLine(s.day)}</p>
        <p class="muted" data-testid="sugar-spoon-line">${formatSugarSpoonLine(s.warmth)}</p>
        <p class="muted" data-testid="biscuit-encourage">${formatBiscuitEncourage(s.circulationsToday)}</p>
        <p class="muted" data-testid="biscuit-pair">${formatBiscuitPair(s.day, s.warmth)}</p>
        <p class="muted" data-testid="step-ladder-line">${formatStepLadderLine(s.day)}</p>
        <p class="muted" data-testid="high-shelf-line">${formatHighShelfLine(s.shelf.length)}</p>
        <p class="muted" data-testid="ladder-aside">${formatLadderAside(s.warmth)}</p>
        <p class="muted" data-testid="ladder-encourage">${formatLadderEncourage(s.circulationsToday)}</p>
        <p class="muted" data-testid="ladder-pair">${formatLadderPair(s.day, s.shelf.length)}</p>
        <p class="muted" data-testid="guest-mirror-line">${formatGuestMirrorLine(s.day)}</p>
        <p class="muted" data-testid="soft-cloth-line">${formatSoftClothLine(s.warmth)}</p>
        <p class="muted" data-testid="mirror-aside">${formatMirrorAside(qLen)}</p>
        <p class="muted" data-testid="mirror-encourage">${formatMirrorEncourage(s.circulationsToday)}</p>
        <p class="muted" data-testid="mirror-pair">${formatMirrorPair(s.day, s.warmth)}</p>
        <p class="muted" data-testid="ribbon-spool-line">${formatRibbonSpoolLine(s.day)}</p>
        <p class="muted" data-testid="snip-thread-line">${formatSnipThreadLine(s.history.length)}</p>
        <p class="muted" data-testid="ribbon-encourage">${formatRibbonEncourage(s.circulationsToday)}</p>
        <p class="muted" data-testid="ribbon-pair">${formatRibbonPair(s.day, s.history.length)}</p>
        <p class="muted" data-testid="door-mat-line">${formatDoorMatLine(s.day)}</p>
        <p class="muted" data-testid="shoe-box-line">${formatShoeBoxLine(qLen)}</p>
        <p class="muted" data-testid="mat-aside">${formatMatAside(s.warmth)}</p>
        <p class="muted" data-testid="mat-encourage">${formatMatEncourage(s.circulationsToday)}</p>
        <p class="muted" data-testid="mat-pair">${formatMatPair(s.day, qLen)}</p>
        <p class="muted" data-testid="hand-soap-line">${formatHandSoapLine(s.day)}</p>
        <p class="muted" data-testid="soft-towel-line">${formatSoftTowelLine(s.warmth)}</p>
        <p class="muted" data-testid="soap-aside">${formatSoapAside(s.circulationsToday)}</p>
        <p class="muted" data-testid="soap-encourage">${formatSoapEncourage(qLen)}</p>
        <p class="muted" data-testid="soap-pair">${formatSoapPair(s.day, s.warmth)}</p>
        <p class="muted" data-testid="warm-kettle-line">${formatWarmKettleLine(s.day)}</p>
        <p class="muted" data-testid="cup-lid-line">${formatCupLidLine(s.warmth)}</p>
        <p class="muted" data-testid="kettle-aside">${formatKettleAside(s.circulationsToday)}</p>
        <p class="muted" data-testid="kettle-encourage">${formatKettleEncourage(qLen)}</p>
        <p class="muted" data-testid="kettle-pair">${formatKettlePair(s.day, s.warmth)}</p>
        <p class="muted" data-testid="bird-seed-line">${formatBirdSeedLine(s.day)}</p>
        <p class="muted" data-testid="seed-dish-line">${formatSeedDishLine(s.warmth)}</p>
        <p class="muted" data-testid="seed-aside">${formatSeedAside(qLen)}</p>
        <p class="muted" data-testid="seed-encourage">${formatSeedEncourage(s.circulationsToday)}</p>
        <p class="muted" data-testid="seed-pair">${formatSeedPair(s.day, s.warmth)}</p>
        <p class="muted" data-testid="soft-broom-line">${formatSoftBroomLine(s.day)}</p>
        <p class="muted" data-testid="dustpan-line">${formatDustpanLine(s.circulationsToday)}</p>
        <p class="muted" data-testid="broom-aside">${formatBroomAside(s.warmth)}</p>
        <p class="muted" data-testid="broom-encourage">${formatBroomEncourage(qLen)}</p>
        <p class="muted" data-testid="broom-pair">${formatBroomPair(s.day, s.circulationsToday)}</p>
        <p class="muted" data-testid="picture-frame-line">${formatPictureFrameLine(s.day)}</p>
        <p class="muted" data-testid="hanging-cord-line">${formatHangingCordLine(s.shelf.length)}</p>
        <p class="muted" data-testid="frame-aside">${formatFrameAside(s.warmth)}</p>
        <p class="muted" data-testid="frame-encourage">${formatFrameEncourage(s.circulationsToday)}</p>
        <p class="muted" data-testid="frame-pair">${formatFramePair(s.day, s.shelf.length)}</p>
        <p class="muted" data-testid="cork-board-line">${formatCorkBoardLine(s.day)}</p>
        <p class="muted" data-testid="push-pin-line">${formatPushPinLine(s.history.length)}</p>
        <p class="muted" data-testid="cork-aside">${formatCorkAside(s.warmth)}</p>
        <p class="muted" data-testid="cork-encourage">${formatCorkEncourage(s.circulationsToday)}</p>
        <p class="muted" data-testid="cork-pair">${formatCorkPair(s.day, s.history.length)}</p>
        <p class="muted" data-testid="thimble-line">${formatThimbleLine(s.day)}</p>
        <p class="muted" data-testid="pincushion-line">${formatPincushionLine(s.history.length)}</p>
        <p class="muted" data-testid="thimble-aside">${formatThimbleAside(s.warmth)}</p>
        <p class="muted" data-testid="thimble-encourage">${formatThimbleEncourage(s.circulationsToday)}</p>
        <p class="muted" data-testid="thimble-pair">${formatThimblePair(s.day, s.history.length)}</p>
        <p class="muted" data-testid="button-box-line">${formatButtonBoxLine(s.day)}</p>
        <p class="muted" data-testid="soft-tape-line">${formatSoftTapeLine(s.warmth)}</p>
        <p class="muted" data-testid="button-encourage">${formatButtonEncourage(s.circulationsToday)}</p>
        <p class="muted" data-testid="button-pair">${formatButtonPair(s.day, s.warmth)}</p>
        <p class="muted" data-testid="thread-spool-line">${formatThreadSpoolLine(s.day)}</p>
        <p class="muted" data-testid="beeswax-brick-line">${formatBeeswaxBrickLine(s.warmth)}</p>
        <p class="muted" data-testid="spool-aside">${formatSpoolAside(s.circulationsToday)}</p>
        <p class="muted" data-testid="spool-encourage">${formatSpoolEncourage(qLen)}</p>
        <p class="muted" data-testid="spool-pair">${formatSpoolPair(s.day, s.warmth)}</p>
        <p class="muted" data-testid="soft-shears-line">${formatSoftShearsLine(s.day)}</p>
        <p class="muted" data-testid="snip-dish-line">${formatSnipDishLine(s.history.length)}</p>
        <p class="muted" data-testid="shears-aside">${formatShearsAside(s.warmth)}</p>
        <p class="muted" data-testid="shears-encourage">${formatShearsEncourage(s.circulationsToday)}</p>
        <p class="muted" data-testid="shears-pair">${formatShearsPair(s.day, s.history.length)}</p>
        <p class="muted" data-testid="pattern-paper-line">${formatPatternPaperLine(s.day)}</p>
        <p class="muted" data-testid="chalk-wheel-line">${formatChalkWheelLine(s.warmth)}</p>
        <p class="muted" data-testid="pattern-aside">${formatPatternAside(s.circulationsToday)}</p>
        <p class="muted" data-testid="pattern-encourage">${formatPatternEncourage(qLen)}</p>
        <p class="muted" data-testid="pattern-pair">${formatPatternPair(s.day, s.warmth)}</p>
        <p class="muted" data-testid="soft-iron-line">${formatSoftIronLine(s.day)}</p>
        <p class="muted" data-testid="press-pad-line">${formatPressPadLine(s.warmth)}</p>
        <p class="muted" data-testid="iron-aside">${formatIronAside(s.circulationsToday)}</p>
        <p class="muted" data-testid="iron-encourage">${formatIronEncourage(qLen)}</p>
        <p class="muted" data-testid="iron-pair">${formatIronPair(s.day, s.warmth)}</p>
        <p class="muted" data-testid="darning-egg-line">${formatDarningEggLine(s.day)}</p>
        <p class="muted" data-testid="needle-book-line">${formatNeedleBookLine(s.history.length)}</p>
        <p class="muted" data-testid="darn-aside">${formatDarnAside(s.warmth)}</p>
        <p class="muted" data-testid="darn-encourage">${formatDarnEncourage(s.circulationsToday)}</p>
        <p class="muted" data-testid="darn-pair">${formatDarnPair(s.day, s.history.length)}</p>
        <p class="muted" data-testid="fabric-clip-line">${formatFabricClipLine(s.day)}</p>
        <p class="muted" data-testid="marking-pen-line">${formatMarkingPenLine(s.warmth)}</p>
        <p class="muted" data-testid="clip-aside">${formatClipAside(s.shelf.length)}</p>
        <p class="muted" data-testid="clip-encourage">${formatClipEncourage(s.circulationsToday)}</p>
        <p class="muted" data-testid="clip-pair">${formatClipPair(s.day, s.warmth)}</p>
        <p class="muted" data-testid="seam-ripper-line">${formatSeamRipperLine(s.day)}</p>
        <p class="muted" data-testid="emery-bag-line">${formatEmeryBagLine(s.warmth)}</p>
        <p class="muted" data-testid="ripper-aside">${formatRipperAside(s.circulationsToday)}</p>
        <p class="muted" data-testid="ripper-encourage">${formatRipperEncourage(qLen)}</p>
        <p class="muted" data-testid="ripper-pair">${formatRipperPair(s.day, s.warmth)}</p>
        <p class="muted" data-testid="tailor-ham-line">${formatTailorHamLine(s.day)}</p>
        <p class="muted" data-testid="sleeve-board-line">${formatSleeveBoardLine(s.warmth)}</p>
        <p class="muted" data-testid="ham-aside">${formatHamAside(s.circulationsToday)}</p>
        <p class="muted" data-testid="ham-encourage">${formatHamEncourage(qLen)}</p>
        <p class="muted" data-testid="ham-pair">${formatHamPair(s.day, s.warmth)}</p>
        <p class="muted" data-testid="stitching-awl-line">${formatStitchingAwlLine(s.day)}</p>
        <p class="muted" data-testid="bone-folder-line">${formatBoneFolderLine(s.warmth)}</p>
        <p class="muted" data-testid="awl-aside">${formatAwlAside(s.history.length)}</p>
        <p class="muted" data-testid="awl-encourage">${formatAwlEncourage(s.circulationsToday)}</p>
        <p class="muted" data-testid="awl-pair">${formatAwlPair(s.day, s.warmth)}</p>
        <p class="muted" data-testid="book-press-line">${formatBookPressLine(s.day)}</p>
        <p class="muted" data-testid="weight-bar-line">${formatWeightBarLine(s.warmth)}</p>
        <p class="muted" data-testid="press-aside">${formatPressAside(s.history.length)}</p>
        <p class="muted" data-testid="press-encourage">${formatPressEncourage(s.circulationsToday)}</p>
        <p class="muted" data-testid="press-pair">${formatPressPair(s.day, s.warmth)}</p>
        <p class="muted" data-testid="binding-thread-line">${formatBindingThreadLine(s.day)}</p>
        <p class="muted" data-testid="sewing-needle-line">${formatSewingNeedleLine(s.warmth)}</p>
        <p class="muted" data-testid="binding-aside">${formatBindingAside(s.history.length)}</p>
        <p class="muted" data-testid="binding-encourage">${formatBindingEncourage(s.circulationsToday)}</p>
        <p class="muted" data-testid="binding-pair">${formatBindingPair(s.day, s.warmth)}</p>
        <p class="muted" data-testid="bookcloth-line">${formatBookclothLine(s.day)}</p>
        <p class="muted" data-testid="spine-strip-line">${formatSpineStripLine(s.warmth)}</p>
        <p class="muted" data-testid="cloth-aside">${formatClothAside(s.history.length)}</p>
        <p class="muted" data-testid="cloth-encourage">${formatClothEncourage(s.circulationsToday)}</p>
        <p class="muted" data-testid="cloth-pair">${formatClothPair(s.day, s.warmth)}</p>
        <p class="muted" data-testid="endpaper-line">${formatEndpaperLine(s.day)}</p>
        <p class="muted" data-testid="headband-line">${formatHeadbandLine(s.warmth)}</p>
        <p class="muted" data-testid="endpaper-aside">${formatEndpaperAside(s.history.length)}</p>
        <p class="muted" data-testid="endpaper-encourage">${formatEndpaperEncourage(s.circulationsToday)}</p>
        <p class="muted" data-testid="endpaper-pair">${formatEndpaperPair(s.day, s.warmth)}</p>
        <p class="muted" data-testid="paste-pot-line">${formatPastePotLine(s.day)}</p>
        <p class="muted" data-testid="paste-brush-line">${formatPasteBrushLine(s.warmth)}</p>
        <p class="muted" data-testid="glue-aside">${formatGlueAside(s.circulationsToday)}</p>
        <p class="muted" data-testid="glue-encourage">${formatGlueEncourage(qLen)}</p>
        <p class="muted" data-testid="glue-pair">${formatGluePair(s.day, s.warmth)}</p>
        <p class="muted" data-testid="cutting-mat-line">${formatCuttingMatLine(s.day)}</p>
        <p class="muted" data-testid="straight-ruler-line">${formatStraightRulerLine(s.warmth)}</p>
        <p class="muted" data-testid="matcut-aside">${formatMatcutAside(s.history.length)}</p>
        <p class="muted" data-testid="matcut-encourage">${formatMatcutEncourage(s.circulationsToday)}</p>
        <p class="muted" data-testid="matcut-pair">${formatMatcutPair(s.day, s.warmth)}</p>
        <p class="muted" data-testid="craft-knife-line">${formatCraftKnifeLine(s.day)}</p>
        <p class="muted" data-testid="safety-ruler-line">${formatSafetyRulerLine(s.warmth)}</p>
        <p class="muted" data-testid="knife-aside">${formatKnifeAside(s.circulationsToday)}</p>
        <p class="muted" data-testid="knife-encourage">${formatKnifeEncourage(qLen)}</p>
        <p class="muted" data-testid="knife-pair">${formatKnifePair(s.day, s.warmth)}</p>
        <p class="muted" data-testid="corner-rounder-line">${formatCornerRounderLine(s.day)}</p>
        <p class="muted" data-testid="corner-guard-line">${formatCornerGuardLine(s.warmth)}</p>
        <p class="muted" data-testid="corner-aside">${formatCornerAside(s.history.length)}</p>
        <p class="muted" data-testid="corner-encourage">${formatCornerEncourage(s.circulationsToday)}</p>
        <p class="muted" data-testid="corner-pair">${formatCornerPair(s.day, s.warmth)}</p>
        <p class="muted" data-testid="eyelet-line">${formatEyeletLine(s.day)}</p>
        <p class="muted" data-testid="eyelet-punch-line">${formatEyeletPunchLine(s.warmth)}</p>
        <p class="muted" data-testid="eyelet-aside">${formatEyeletAside(s.history.length)}</p>
        <p class="muted" data-testid="eyelet-encourage">${formatEyeletEncourage(s.circulationsToday)}</p>
        <p class="muted" data-testid="eyelet-pair">${formatEyeletPair(s.day, s.warmth)}</p>
        <p class="muted" data-testid="sealing-wax-line">${formatSealingWaxLine(s.day)}</p>
        <p class="muted" data-testid="wax-spoon-line">${formatWaxSpoonLine(s.warmth)}</p>
        <p class="muted" data-testid="waxseal-aside">${formatWaxsealAside(s.history.length)}</p>
        <p class="muted" data-testid="waxseal-encourage">${formatWaxsealEncourage(s.circulationsToday)}</p>
        <p class="muted" data-testid="waxseal-pair">${formatWaxsealPair(s.day, s.warmth)}</p>
        <p class="muted" data-testid="seal-stamp-line">${formatSealStampLine(s.day)}</p>
        <p class="muted" data-testid="ink-pad-line">${formatInkPadLine(s.warmth)}</p>
        <p class="muted" data-testid="stamp-aside">${formatStampAside(s.history.length)}</p>
        <p class="muted" data-testid="stamp-encourage">${formatStampEncourage(s.circulationsToday)}</p>
        <p class="muted" data-testid="stamp-pair">${formatStampPair(s.day, s.warmth)}</p>
        <p class="muted" data-testid="bookmark-ribbon-line">${formatBookmarkRibbonLine(s.day)}</p>
        <p class="muted" data-testid="page-dogear-line">${formatPageDogearLine(s.warmth)}</p>
        <p class="muted" data-testid="ribbonmark-aside">${formatRibbonmarkAside(s.history.length)}</p>
        <p class="muted" data-testid="ribbonmark-encourage">${formatRibbonmarkEncourage(s.circulationsToday)}</p>
        <p class="muted" data-testid="ribbonmark-pair">${formatRibbonmarkPair(s.day, s.warmth)}</p>
        <p class="muted" data-testid="shop-ledger-line">${formatShopLedgerLine(s.day)}</p>
        <p class="muted" data-testid="soft-pencil-line">${formatSoftPencilLine(s.warmth)}</p>
        <p class="muted" data-testid="ledger-aside">${formatLedgerAside(s.history.length)}</p>
        <p class="muted" data-testid="ledger-encourage">${formatLedgerEncourage(s.circulationsToday)}</p>
        <p class="muted" data-testid="ledger-pair">${formatLedgerPair(s.day, s.warmth)}</p>
        <p class="muted" data-testid="receipt-slip-line">${formatReceiptSlipLine(s.day)}</p>
        <p class="muted" data-testid="round-stamp-line">${formatSoftRoundStampLine(s.warmth)}</p>
        <p class="muted" data-testid="receipt-aside">${formatReceiptAside(s.history.length)}</p>
        <p class="muted" data-testid="receipt-encourage">${formatReceiptEncourage(s.circulationsToday)}</p>
        <p class="muted" data-testid="receipt-pair">${formatReceiptPair(s.day, s.warmth)}</p>
        <p class="muted" data-testid="kraft-bag-line">${formatKraftBagLine(s.day)}</p>
        <p class="muted" data-testid="hemp-twine-line">${formatHempTwineLine(s.warmth)}</p>
        <p class="muted" data-testid="kraft-aside">${formatKraftAside(s.history.length)}</p>
        <p class="muted" data-testid="kraft-encourage">${formatKraftEncourage(s.circulationsToday)}</p>
        <p class="muted" data-testid="kraft-pair">${formatKraftPair(s.day, s.warmth)}</p>
        <p class="muted" data-testid="warm-tag-card-line">${formatWarmTagCardLine(s.day)}</p>
        <p class="muted" data-testid="fine-string-line">${formatFineStringLine(s.warmth)}</p>
        <p class="muted" data-testid="tagcard-aside">${formatTagcardAside(s.history.length)}</p>
        <p class="muted" data-testid="tagcard-encourage">${formatTagcardEncourage(s.circulationsToday)}</p>
        <p class="muted" data-testid="tagcard-pair">${formatTagcardPair(s.day, s.warmth)}</p>
        <p class="muted" data-testid="change-dish-line">${formatChangeDishLine(s.day)}</p>
        <p class="muted" data-testid="palm-kerchief-line">${formatPalmKerchiefLine(s.warmth)}</p>
        <p class="muted" data-testid="farewell-aside">${formatFarewellAside(s.history.length)}</p>
        <p class="muted" data-testid="farewell-encourage">${formatFarewellEncourage(s.circulationsToday)}</p>
        <p class="muted" data-testid="farewell-pair">${formatFarewellPair(s.day, s.warmth)}</p>
        <p class="muted" data-testid="key-tray-line">${formatKeyTrayLine(s.day)}</p>
        <p class="muted" data-testid="closing-lamp-line">${formatClosingLampLine(s.warmth)}</p>
        <p class="muted" data-testid="dayend-aside">${formatDayendAside(s.history.length)}</p>
        <p class="muted" data-testid="dayend-encourage">${formatDayendEncourage(s.circulationsToday)}</p>
        <p class="muted" data-testid="dayend-pair">${formatDayendPair(s.day, s.warmth)}</p>
        <p class="muted" data-testid="morning-cloth-line">${formatMorningClothLine(s.day)}</p>
        <p class="muted" data-testid="sill-vase-line">${formatSillVaseLine(s.warmth)}</p>
        <p class="muted" data-testid="reopen-aside">${formatReopenAside(s.history.length)}</p>
        <p class="muted" data-testid="reopen-encourage">${formatReopenEncourage(s.circulationsToday)}</p>
        <p class="muted" data-testid="reopen-pair">${formatReopenPair(s.day, s.warmth)}</p>
        <p class="muted" data-testid="umbrella-stand-line">${formatUmbrellaStandLine(s.day)}</p>
        <p class="muted" data-testid="threshold-mat-line">${formatThresholdMatLine(s.warmth)}</p>
        <p class="muted" data-testid="entry-aside">${formatEntryAside(s.history.length)}</p>
        <p class="muted" data-testid="entry-encourage">${formatEntryEncourage(s.circulationsToday)}</p>
        <p class="muted" data-testid="entry-pair">${formatEntryPair(s.day, s.warmth)}</p>
        <p class="muted" data-testid="guest-log-line">${formatGuestLogLine(s.day)}</p>
        <p class="muted" data-testid="soft-eraser-line">${formatSoftEraserLine(s.warmth)}</p>
        <p class="muted" data-testid="guestlog-aside">${formatGuestlogAside(s.history.length)}</p>
        <p class="muted" data-testid="guestlog-encourage">${formatGuestlogEncourage(s.circulationsToday)}</p>
        <p class="muted" data-testid="guestlog-pair">${formatGuestlogPair(s.day, s.warmth)}</p>
        <p class="muted" data-testid="wait-cushion-line">${formatWaitCushionLine(s.day)}</p>
        <p class="muted" data-testid="warm-water-cup-line">${formatWarmWaterCupLine(s.warmth)}</p>
        <p class="muted" data-testid="waitseat-aside">${formatWaitseatAside(s.history.length)}</p>
        <p class="muted" data-testid="waitseat-encourage">${formatWaitseatEncourage(s.circulationsToday)}</p>
        <p class="muted" data-testid="waitseat-pair">${formatWaitseatPair(s.day, s.warmth)}</p>
        <p class="muted" data-testid="desk-calendar-line">${formatDeskCalendarLine(s.day)}</p>
        <p class="muted" data-testid="today-sticker-line">${formatTodayStickerLine(s.warmth)}</p>
        <p class="muted" data-testid="daymark-aside">${formatDaymarkAside(s.history.length)}</p>
        <p class="muted" data-testid="daymark-encourage">${formatDaymarkEncourage(s.circulationsToday)}</p>
        <p class="muted" data-testid="daymark-pair">${formatDaymarkPair(s.day, s.warmth)}</p>
        <p class="muted" data-testid="sticky-pad-line">${formatStickyPadLine(s.day)}</p>
        <p class="muted" data-testid="fine-pen-line">${formatFinePenLine(s.warmth)}</p>
        <p class="muted" data-testid="notepen-aside">${formatNotepenAside(s.history.length)}</p>
        <p class="muted" data-testid="notepen-encourage">${formatNotepenEncourage(s.circulationsToday)}</p>
        <p class="muted" data-testid="notepen-pair">${formatNotepenPair(s.day, s.warmth)}</p>
        <p class="muted" data-testid="paper-clips-line">${formatPaperClipLine(s.day)}</p>
        <p class="muted" data-testid="mini-tray-line">${formatMiniTrayLine(s.warmth)}</p>
        <p class="muted" data-testid="cliptray-aside">${formatCliptrayAside(s.history.length)}</p>
        <p class="muted" data-testid="cliptray-encourage">${formatCliptrayEncourage(s.circulationsToday)}</p>
        <p class="muted" data-testid="cliptray-pair">${formatCliptrayPair(s.day, s.warmth)}</p>
        <p class="muted" data-testid="small-ink-bottle-line">${formatSmallInkBottleLine(s.day)}</p>
        <p class="muted" data-testid="soft-blot-sheet-line">${formatSoftBlotSheetLine(s.warmth)}</p>
        <p class="muted" data-testid="slowink-aside">${formatSlowinkAside(s.history.length)}</p>
        <p class="muted" data-testid="slowink-encourage">${formatSlowinkEncourage(s.circulationsToday)}</p>
        <p class="muted" data-testid="slowink-pair">${formatSlowinkPair(s.day, s.warmth)}</p>
        <p class="muted" data-testid="wooden-bookend-line">${formatWoodenBookendLine(s.day)}</p>
        <p class="muted" data-testid="page-weight-line">${formatPageWeightLine(s.warmth)}</p>
        <p class="muted" data-testid="bookend-aside">${formatBookendAside(s.history.length)}</p>
        <p class="muted" data-testid="bookend-encourage">${formatBookendEncourage(s.circulationsToday)}</p>
        <p class="muted" data-testid="bookend-pair">${formatBookendPair(s.day, s.warmth)}</p>
        <p class="muted" data-testid="paper-shade-line">${formatPaperShadeLine(s.day)}</p>
        <p class="muted" data-testid="cord-switch-line">${formatCordSwitchLine(s.warmth)}</p>
        <p class="muted" data-testid="lampshade-aside">${formatLampshadeAside(s.history.length)}</p>
        <p class="muted" data-testid="lampshade-encourage">${formatLampshadeEncourage(s.circulationsToday)}</p>
        <p class="muted" data-testid="lampshade-pair">${formatLampshadePair(s.day, s.warmth)}</p>
        <p class="muted" data-testid="tasting-spoon-line">${formatTastingSpoonLine(s.day)}</p>
        <p class="muted" data-testid="tasting-mat-line">${formatTastingMatLine(s.warmth)}</p>
        <p class="muted" data-testid="teaspoon-aside">${formatTeaspoonAside(s.history.length)}</p>
        <p class="muted" data-testid="teaspoon-encourage">${formatTeaspoonEncourage(s.circulationsToday)}</p>
        <p class="muted" data-testid="teaspoon-pair">${formatTeaspoonPair(s.day, s.warmth)}</p>
        <p class="muted" data-testid="jar-tag-line">${formatJarTagLine(s.day)}</p>
        <p class="muted" data-testid="fine-cotton-line">${formatFineCottonLine(s.warmth)}</p>
        <p class="muted" data-testid="jarlabel-aside">${formatJarlabelAside(s.history.length)}</p>
        <p class="muted" data-testid="jarlabel-encourage">${formatJarlabelEncourage(s.circulationsToday)}</p>
        <p class="muted" data-testid="jarlabel-pair">${formatJarlabelPair(s.day, s.warmth)}</p>
        <p class="muted" data-testid="blank-postcard-line">${formatBlankPostcardLine(s.day)}</p>
        <p class="muted" data-testid="stamp-box-line">${formatStampBoxLine(s.warmth)}</p>
        <p class="muted" data-testid="mailcard-aside">${formatMailcardAside(s.history.length)}</p>
        <p class="muted" data-testid="mailcard-encourage">${formatMailcardEncourage(s.circulationsToday)}</p>
        <p class="muted" data-testid="mailcard-pair">${formatMailcardPair(s.day, s.warmth)}</p>
        <p class="muted" data-testid="window-cushion-line">${formatWindowCushionLine(s.day)}</p>
        <p class="muted" data-testid="sheer-curtain-line">${formatSheerCurtainLine(s.warmth)}</p>
        <p class="muted" data-testid="windowseat-aside">${formatWindowseatAside(s.history.length)}</p>
        <p class="muted" data-testid="windowseat-encourage">${formatWindowseatEncourage(s.circulationsToday)}</p>
        <p class="muted" data-testid="windowseat-pair">${formatWindowseatPair(s.day, s.warmth)}</p>
        <p class="muted" data-testid="clay-pot-line">${formatClayPotLine(s.day)}</p>
        <p class="muted" data-testid="watering-can-line">${formatWateringCanLine(s.warmth)}</p>
        <p class="muted" data-testid="plantpot-aside">${formatPlantpotAside(s.history.length)}</p>
        <p class="muted" data-testid="plantpot-encourage">${formatPlantpotEncourage(s.circulationsToday)}</p>
        <p class="muted" data-testid="plantpot-pair">${formatPlantpotPair(s.day, s.warmth)}</p>
        <p class="muted" data-testid="cup-rest-line">${formatCupRestLine(s.day)}</p>
        <p class="muted" data-testid="tea-cloth-line">${formatTeaClothLine(s.warmth)}</p>
        <p class="muted" data-testid="cuprest-aside">${formatCuprestAside(s.history.length)}</p>
        <p class="muted" data-testid="cuprest-encourage">${formatCuprestEncourage(s.circulationsToday)}</p>
        <p class="muted" data-testid="cuprest-pair">${formatCuprestPair(s.day, s.warmth)}</p>
        <p class="muted" data-testid="honey-jar-line">${formatHoneyJarLine(s.day)}</p>
        <p class="muted" data-testid="wood-dipper-line">${formatWoodDipperLine(s.warmth)}</p>
        <p class="muted" data-testid="honeydip-aside">${formatHoneydipAside(s.history.length)}</p>
        <p class="muted" data-testid="honeydip-encourage">${formatHoneydipEncourage(s.circulationsToday)}</p>
        <p class="muted" data-testid="honeydip-pair">${formatHoneydipPair(s.day, s.warmth)}</p>
        <p class="muted" data-testid="milk-jug-line">${formatMilkJugLine(s.day)}</p>
        <p class="muted" data-testid="cream-spoon-line">${formatCreamSpoonLine(s.warmth)}</p>
        <p class="muted" data-testid="milkjug-aside">${formatMilkjugAside(s.history.length)}</p>
        <p class="muted" data-testid="milkjug-encourage">${formatMilkjugEncourage(s.circulationsToday)}</p>
        <p class="muted" data-testid="milkjug-pair">${formatMilkjugPair(s.day, s.warmth)}</p>
        <p class="muted" data-testid="lemon-dish-line">${formatLemonDishLine(s.day)}</p>
        <p class="muted" data-testid="citrus-knife-line">${formatCitrusKnifeLine(s.warmth)}</p>
        <p class="muted" data-testid="citrus-aside">${formatCitrusAside(s.history.length)}</p>
        <p class="muted" data-testid="citrus-encourage">${formatCitrusEncourage(s.circulationsToday)}</p>
        <p class="muted" data-testid="citrus-pair">${formatCitrusPair(s.day, s.warmth)}</p>
        <p class="muted" data-testid="napkin-ring-line">${formatNapkinRingLine(s.day)}</p>
        <p class="muted" data-testid="guest-napkin-line">${formatGuestNapkinLine(s.warmth)}</p>
        <p class="muted" data-testid="napkin-aside">${formatNapkinAside(s.history.length)}</p>
        <p class="muted" data-testid="napkin-encourage">${formatNapkinEncourage(s.circulationsToday)}</p>
        <p class="muted" data-testid="napkin-pair">${formatNapkinPair(s.day, s.warmth)}</p>
        <p class="muted" data-testid="place-mat-line">${formatPlaceMatLine(s.day)}</p>
        <p class="muted" data-testid="chopstick-rest-line">${formatChopstickRestLine(s.warmth)}</p>
        <p class="muted" data-testid="placemat-aside">${formatPlacematAside(s.history.length)}</p>
        <p class="muted" data-testid="placemat-encourage">${formatPlacematEncourage(s.circulationsToday)}</p>
        <p class="muted" data-testid="placemat-pair">${formatPlacematPair(s.day, s.warmth)}</p>
        <p class="muted" data-testid="soy-cruet-line">${formatSoyCruetLine(s.day)}</p>
        <p class="muted" data-testid="vinegar-dish-line">${formatVinegarDishLine(s.warmth)}</p>
        <p class="muted" data-testid="soycruet-aside">${formatSoycruetAside(s.history.length)}</p>
        <p class="muted" data-testid="soycruet-encourage">${formatSoycruetEncourage(s.circulationsToday)}</p>
        <p class="muted" data-testid="soycruet-pair">${formatSoycruetPair(s.day, s.warmth)}</p>
        <p class="muted" data-testid="clay-lid-line">${formatClayLidLine(s.day)}</p>
        <p class="muted" data-testid="wood-paddle-line">${formatWoodPaddleLine(s.warmth)}</p>
        <p class="muted" data-testid="hotpotlid-aside">${formatHotpotlidAside(s.history.length)}</p>
        <p class="muted" data-testid="hotpotlid-encourage">${formatHotpotlidEncourage(s.circulationsToday)}</p>
        <p class="muted" data-testid="hotpotlid-pair">${formatHotpotlidPair(s.day, s.warmth)}</p>
        <p class="muted" data-testid="oven-mitt-line">${formatOvenMittLine(s.day)}</p>
        <p class="muted" data-testid="bake-pad-line">${formatBakePadLine(s.warmth)}</p>
        <p class="muted" data-testid="ovenmitt-aside">${formatOvenmittAside(s.history.length)}</p>
        <p class="muted" data-testid="ovenmitt-encourage">${formatOvenmittEncourage(s.circulationsToday)}</p>
        <p class="muted" data-testid="ovenmitt-pair">${formatOvenmittPair(s.day, s.warmth)}</p>
        <p class="muted" data-testid="kitchen-hourglass-line">${formatKitchenHourglassLine(s.day)}</p>
        <p class="muted" data-testid="soft-timer-bell-line">${formatSoftTimerBellLine(s.warmth)}</p>
        <p class="muted" data-testid="timerbell-aside">${formatTimerbellAside(s.history.length)}</p>
        <p class="muted" data-testid="timerbell-encourage">${formatTimerbellEncourage(s.circulationsToday)}</p>
        <p class="muted" data-testid="timerbell-pair">${formatTimerbellPair(s.day, s.warmth)}</p>
        <p class="muted" data-testid="flour-bin-line">${formatFlourBinLine(s.day)}</p>
        <p class="muted" data-testid="measure-cup-line">${formatMeasureCupLine(s.warmth)}</p>
        <p class="muted" data-testid="flourbin-aside">${formatFlourbinAside(s.history.length)}</p>
        <p class="muted" data-testid="flourbin-encourage">${formatFlourbinEncourage(s.circulationsToday)}</p>
        <p class="muted" data-testid="flourbin-pair">${formatFlourbinPair(s.day, s.warmth)}</p>
        <p class="muted" data-testid="mix-bowl-line">${formatMixBowlLine(s.day)}</p>
        <p class="muted" data-testid="wire-whisk-line">${formatWireWhiskLine(s.warmth)}</p>
        <p class="muted" data-testid="mixbowl-aside">${formatMixbowlAside(s.history.length)}</p>
        <p class="muted" data-testid="mixbowl-encourage">${formatMixbowlEncourage(s.circulationsToday)}</p>
        <p class="muted" data-testid="mixbowl-pair">${formatMixbowlPair(s.day, s.warmth)}</p>
        <p class="muted" data-testid="rolling-pin-line">${formatRollingPinLine(s.day)}</p>
        <p class="muted" data-testid="dust-spoon-line">${formatDustSpoonLine(s.warmth)}</p>
        <p class="muted" data-testid="rollingpin-aside">${formatRollingpinAside(s.history.length)}</p>
        <p class="muted" data-testid="rollingpin-encourage">${formatRollingpinEncourage(s.circulationsToday)}</p>
        <p class="muted" data-testid="rollingpin-pair">${formatRollingpinPair(s.day, s.warmth)}</p>
        <p class="muted" data-testid="dough-scraper-line">${formatDoughScraperLine(s.day)}</p>
        <p class="muted" data-testid="bake-parchment-line">${formatBakeParchmentLine(s.warmth)}</p>
        <p class="muted" data-testid="scraper-aside">${formatScraperAside(s.history.length)}</p>
        <p class="muted" data-testid="scraper-encourage">${formatScraperEncourage(s.circulationsToday)}</p>
        <p class="muted" data-testid="scraper-pair">${formatScraperPair(s.day, s.warmth)}</p>
        <p class="muted" data-testid="cookie-cutter-line">${formatCookieCutterLine(s.day)}</p>
        <p class="muted" data-testid="cooling-rack-line">${formatCoolingRackLine(s.warmth)}</p>
        <p class="muted" data-testid="cutter-aside">${formatCutterAside(s.history.length)}</p>
        <p class="muted" data-testid="cutter-encourage">${formatCutterEncourage(s.circulationsToday)}</p>
        <p class="muted" data-testid="cutter-pair">${formatCutterPair(s.day, s.warmth)}</p>
        <p class="muted" data-testid="icing-bag-line">${formatIcingBagLine(s.day)}</p>
        <p class="muted" data-testid="sugar-sieve-line">${formatSugarSieveLine(s.warmth)}</p>
        <p class="muted" data-testid="icing-aside">${formatIcingAside(s.history.length)}</p>
        <p class="muted" data-testid="icing-encourage">${formatIcingEncourage(s.circulationsToday)}</p>
        <p class="muted" data-testid="icing-pair">${formatIcingPair(s.day, s.warmth)}</p>
        <p class="muted" data-testid="cookie-tin-line">${formatCookieTinLine(s.day)}</p>
        <p class="muted" data-testid="twist-tie-line">${formatTwistTieLine(s.warmth)}</p>
        <p class="muted" data-testid="cookietin-aside">${formatCookietinAside(s.history.length)}</p>
        <p class="muted" data-testid="cookietin-encourage">${formatCookietinEncourage(s.circulationsToday)}</p>
        <p class="muted" data-testid="cookietin-pair">${formatCookietinPair(s.day, s.warmth)}</p>
        <p class="muted" data-testid="recipe-card-line">${formatRecipeCardLine(s.day)}</p>
        <p class="muted" data-testid="wood-clip-line">${formatWoodClipLine(s.warmth)}</p>
        <p class="muted" data-testid="recipecard-aside">${formatRecipecardAside(s.history.length)}</p>
        <p class="muted" data-testid="recipecard-encourage">${formatRecipecardEncourage(s.circulationsToday)}</p>
        <p class="muted" data-testid="recipecard-pair">${formatRecipecardPair(s.day, s.warmth)}</p>
        <p class="muted" data-testid="oven-thermo-line">${formatOvenThermoLine(s.day)}</p>
        <p class="muted" data-testid="timer-dial-line">${formatTimerDialLine(s.warmth)}</p>
        <p class="muted" data-testid="oventhermo-aside">${formatOventhermoAside(s.history.length)}</p>
        <p class="muted" data-testid="oventhermo-encourage">${formatOventhermoEncourage(s.circulationsToday)}</p>
        <p class="muted" data-testid="oventhermo-pair">${formatOventhermoPair(s.day, s.warmth)}</p>
        <p class="muted" data-testid="spice-jar-line">${formatSpiceJarLine(s.day)}</p>
        <p class="muted" data-testid="wood-scoop-line">${formatWoodScoopLine(s.warmth)}</p>
        <p class="muted" data-testid="spicejar-aside">${formatSpicejarAside(s.history.length)}</p>
        <p class="muted" data-testid="spicejar-encourage">${formatSpicejarEncourage(s.circulationsToday)}</p>
        <p class="muted" data-testid="spicejar-pair">${formatSpicejarPair(s.day, s.warmth)}</p>
        <p class="muted" data-testid="stone-mortar-line">${formatStoneMortarLine(s.day)}</p>
        <p class="muted" data-testid="wood-pestle-line">${formatWoodPestleLine(s.warmth)}</p>
        <p class="muted" data-testid="mortar-aside">${formatMortarAside(s.history.length)}</p>
        <p class="muted" data-testid="mortar-encourage">${formatMortarEncourage(s.circulationsToday)}</p>
        <p class="muted" data-testid="mortar-pair">${formatMortarPair(s.day, s.warmth)}</p>
        <p class="muted" data-testid="herb-bundle-line">${formatHerbBundleLine(s.day)}</p>
        <p class="muted" data-testid="hang-twine-line">${formatHangTwineLine(s.warmth)}</p>
        <p class="muted" data-testid="herbhang-aside">${formatHerbhangAside(s.history.length)}</p>
        <p class="muted" data-testid="herbhang-encourage">${formatHerbhangEncourage(s.circulationsToday)}</p>
        <p class="muted" data-testid="herbhang-pair">${formatHerbhangPair(s.day, s.warmth)}</p>
        <p class="muted" data-testid="herb-oil-bottle-line">${formatHerbOilBottleLine(s.day)}</p>
        <p class="muted" data-testid="glass-dropper-line">${formatGlassDropperLine(s.warmth)}</p>
        <p class="muted" data-testid="herboil-aside">${formatHerboilAside(s.history.length)}</p>
        <p class="muted" data-testid="herboil-encourage">${formatHerboilEncourage(s.circulationsToday)}</p>
        <p class="muted" data-testid="herboil-pair">${formatHerboilPair(s.day, s.warmth)}</p>
        <p class="muted" data-testid="salve-tin-line">${formatSalveTinLine(s.day)}</p>
        <p class="muted" data-testid="bamboo-spatula-line">${formatBambooSpatulaLine(s.warmth)}</p>
        <p class="muted" data-testid="salve-aside">${formatSalveAside(s.history.length)}</p>
        <p class="muted" data-testid="salve-encourage">${formatSalveEncourage(s.circulationsToday)}</p>
        <p class="muted" data-testid="salve-pair">${formatSalvePair(s.day, s.warmth)}</p>
        <p class="muted" data-testid="cotton-pad-line">${formatCottonPadLine(s.day)}</p>
        <p class="muted" data-testid="gauze-roll-line">${formatGauzeRollLine(s.warmth)}</p>
        <p class="muted" data-testid="gauze-aside">${formatGauzeAside(s.history.length)}</p>
        <p class="muted" data-testid="gauze-encourage">${formatGauzeEncourage(s.circulationsToday)}</p>
        <p class="muted" data-testid="gauze-pair">${formatGauzePair(s.day, s.warmth)}</p>
        <p class="muted" data-testid="rose-water-line">${formatRoseWaterLine(s.day)}</p>
        <p class="muted" data-testid="linen-cloth-line">${formatLinenClothLine(s.warmth)}</p>
        <p class="muted" data-testid="rosewater-aside">${formatRosewaterAside(s.history.length)}</p>
        <p class="muted" data-testid="rosewater-encourage">${formatRosewaterEncourage(s.circulationsToday)}</p>
        <p class="muted" data-testid="rosewater-pair">${formatRosewaterPair(s.day, s.warmth)}</p>
        <p class="muted" data-testid="soap-bar-line">${formatSoapBarLine(s.day)}</p>
        <p class="muted" data-testid="wood-soap-dish-line">${formatWoodSoapDishLine(s.warmth)}</p>
        <p class="muted" data-testid="soapbar-aside">${formatSoapbarAside(s.history.length)}</p>
        <p class="muted" data-testid="soapbar-encourage">${formatSoapbarEncourage(s.circulationsToday)}</p>
        <p class="muted" data-testid="soapbar-pair">${formatSoapbarPair(s.day, s.warmth)}</p>
        <p class="muted" data-testid="lotion-bottle-line">${formatLotionBottleLine(s.day)}</p>
        <p class="muted" data-testid="pump-cap-line">${formatPumpCapLine(s.warmth)}</p>
        <p class="muted" data-testid="lotion-aside">${formatLotionAside(s.history.length)}</p>
        <p class="muted" data-testid="lotion-encourage">${formatLotionEncourage(s.circulationsToday)}</p>
        <p class="muted" data-testid="lotion-pair">${formatLotionPair(s.day, s.warmth)}</p>
        <p class="muted" data-testid="bath-salt-jar-line">${formatBathSaltJarLine(s.day)}</p>
        <p class="muted" data-testid="shell-scoop-line">${formatShellScoopLine(s.warmth)}</p>
        <p class="muted" data-testid="bathsalt-aside">${formatBathsaltAside(s.history.length)}</p>
        <p class="muted" data-testid="bathsalt-encourage">${formatBathsaltEncourage(s.circulationsToday)}</p>
        <p class="muted" data-testid="bathsalt-pair">${formatBathsaltPair(s.day, s.warmth)}</p>
        <p class="muted" data-testid="diffuser-bottle-line">${formatDiffuserBottleLine(s.day)}</p>
        <p class="muted" data-testid="rattan-reed-line">${formatRattanReedLine(s.warmth)}</p>
        <p class="muted" data-testid="diffuser-aside">${formatDiffuserAside(s.history.length)}</p>
        <p class="muted" data-testid="diffuser-encourage">${formatDiffuserEncourage(s.circulationsToday)}</p>
        <p class="muted" data-testid="diffuser-pair">${formatDiffuserPair(s.day, s.warmth)}</p>
        <p class="muted" data-testid="tealight-line">${formatTealightLine(s.day)}</p>
        <p class="muted" data-testid="snuffer-line">${formatSnufferLine(s.warmth)}</p>
        <p class="muted" data-testid="tealight-aside">${formatTealightAside(s.history.length)}</p>
        <p class="muted" data-testid="tealight-encourage">${formatTealightEncourage(s.circulationsToday)}</p>
        <p class="muted" data-testid="tealight-pair">${formatTealightPair(s.day, s.warmth)}</p>
        <p class="muted" data-testid="matchbox-line">${formatMatchboxLine(s.day)}</p>
        <p class="muted" data-testid="matchstick-line">${formatMatchstickLine(s.warmth)}</p>
        <p class="muted" data-testid="matchbox-aside">${formatMatchboxAside(s.history.length)}</p>
        <p class="muted" data-testid="matchbox-encourage">${formatMatchboxEncourage(s.circulationsToday)}</p>
        <p class="muted" data-testid="matchbox-pair">${formatMatchboxPair(s.day, s.warmth)}</p>
        <p class="muted" data-testid="paper-lantern-line">${formatPaperLanternLine(s.day)}</p>
        <p class="muted" data-testid="lantern-shade-line">${formatLanternShadeLine(s.warmth)}</p>
        <p class="muted" data-testid="paper-lantern-aside">${formatPaperLanternAside(s.history.length)}</p>
        <p class="muted" data-testid="paper-lantern-encourage">${formatPaperLanternEncourage(s.circulationsToday)}</p>
        <p class="muted" data-testid="paper-lantern-pair">${formatPaperLanternPair(s.day, s.warmth)}</p>
        <p class="muted" data-testid="sand-timer-line">${formatSandTimerLine(s.day)}</p>
        <p class="muted" data-testid="fine-sand-line">${formatFineSandLine(s.warmth)}</p>
        <p class="muted" data-testid="sand-timer-aside">${formatSandTimerAside(s.history.length)}</p>
        <p class="muted" data-testid="sand-timer-encourage">${formatSandTimerEncourage(s.circulationsToday)}</p>
        <p class="muted" data-testid="sand-timer-pair">${formatSandTimerPair(s.day, s.warmth)}</p>
        <p class="muted" data-testid="pressed-mark-line">${formatPressedMarkLine(s.day)}</p>
        <p class="muted" data-testid="silk-tail-line">${formatSilkTailLine(s.warmth)}</p>
        <p class="muted" data-testid="pressmark-aside">${formatPressmarkAside(s.history.length)}</p>
        <p class="muted" data-testid="pressmark-encourage">${formatPressmarkEncourage(s.circulationsToday)}</p>
        <p class="muted" data-testid="pressmark-pair">${formatPressmarkPair(s.day, s.warmth)}</p>
        <p class="muted" data-testid="ceramic-pen-rest-line">${formatCeramicPenRestLine(s.day)}</p>
        <p class="muted" data-testid="blot-sheet-line">${formatBlotSheetLine(s.warmth)}</p>
        <p class="muted" data-testid="penrest-aside">${formatPenrestAside(s.history.length)}</p>
        <p class="muted" data-testid="penrest-encourage">${formatPenrestEncourage(s.circulationsToday)}</p>
        <p class="muted" data-testid="penrest-pair">${formatPenrestPair(s.day, s.warmth)}</p>
        <p class="muted" data-testid="cream-envelope-line">${formatCreamEnvelopeLine(s.day)}</p>
        <p class="muted" data-testid="letter-opener-line">${formatLetterOpenerLine(s.warmth)}</p>
        <p class="muted" data-testid="letteropener-aside">${formatLetteropenerAside(s.history.length)}</p>
        <p class="muted" data-testid="letteropener-encourage">${formatLetteropenerEncourage(s.circulationsToday)}</p>
        <p class="muted" data-testid="letteropener-pair">${formatLetteropenerPair(s.day, s.warmth)}</p>
        <p class="muted" data-testid="desk-cal-block-line">${formatDeskCalBlockLine(s.day)}</p>
        <p class="muted" data-testid="day-page-ribbon-line">${formatDayPageRibbonLine(s.warmth)}</p>
        <p class="muted" data-testid="deskcal-aside">${formatDeskcalAside(s.history.length)}</p>
        <p class="muted" data-testid="deskcal-encourage">${formatDeskcalEncourage(s.circulationsToday)}</p>
        <p class="muted" data-testid="deskcal-pair">${formatDeskcalPair(s.day, s.warmth)}</p>
        <p class="muted" data-testid="guest-cup-line">${formatGuestCupLine(s.day)}</p>
        <p class="muted" data-testid="linen-coaster-line">${formatLinenCoasterLine(s.warmth)}</p>
        <p class="muted" data-testid="guestcup-aside">${formatGuestcupAside(s.history.length)}</p>
        <p class="muted" data-testid="guestcup-encourage">${formatGuestcupEncourage(s.circulationsToday)}</p>
        <p class="muted" data-testid="guestcup-pair">${formatGuestcupPair(s.day, s.warmth)}</p>
        <p class="muted" data-testid="brass-desk-bell-line">${formatBrassDeskBellLine(s.day)}</p>
        <p class="muted" data-testid="felt-mallet-line">${formatFeltMalletLine(s.warmth)}</p>
        <p class="muted" data-testid="deskbell-aside">${formatDeskbellAside(s.history.length)}</p>
        <p class="muted" data-testid="deskbell-encourage">${formatDeskbellEncourage(s.circulationsToday)}</p>
        <p class="muted" data-testid="deskbell-pair">${formatDeskbellPair(s.day, s.warmth)}</p>
        <p class="muted" data-testid="soft-sign-book-line">${formatSoftSignBookLine(s.day)}</p>
        <p class="muted" data-testid="graphite-pencil-line">${formatGraphitePencilLine(s.warmth)}</p>
        <p class="muted" data-testid="signbook-aside">${formatSignbookAside(s.history.length)}</p>
        <p class="muted" data-testid="signbook-encourage">${formatSignbookEncourage(s.circulationsToday)}</p>
        <p class="muted" data-testid="signbook-pair">${formatSignbookPair(s.day, s.warmth)}</p>
        <p class="muted" data-testid="soft-wool-scarf-line">${formatSoftWoolScarfLine(s.day)}</p>
        <p class="muted" data-testid="wood-coat-peg-line">${formatWoodCoatPegLine(s.warmth)}</p>
        <p class="muted" data-testid="softscarf-aside">${formatSoftscarfAside(s.history.length)}</p>
        <p class="muted" data-testid="softscarf-encourage">${formatSoftscarfEncourage(s.circulationsToday)}</p>
        <p class="muted" data-testid="softscarf-pair">${formatSoftscarfPair(s.day, s.warmth)}</p>
        <p class="muted" data-testid="fold-umbrella-line">${formatFoldUmbrellaLine(s.day)}</p>
        <p class="muted" data-testid="ceramic-um-stand-line">${formatCeramicUmStandLine(s.warmth)}</p>
        <p class="muted" data-testid="foldumb-aside">${formatFoldumbAside(s.history.length)}</p>
        <p class="muted" data-testid="foldumb-encourage">${formatFoldumbEncourage(s.circulationsToday)}</p>
        <p class="muted" data-testid="foldumb-pair">${formatFoldumbPair(s.day, s.warmth)}</p>
        <p class="muted" data-testid="soft-mitten-line">${formatSoftMittenLine(s.day)}</p>
        <p class="muted" data-testid="mitten-basket-line">${formatMittenBasketLine(s.warmth)}</p>
        <p class="muted" data-testid="softmitten-aside">${formatSoftmittenAside(s.history.length)}</p>
        <p class="muted" data-testid="softmitten-encourage">${formatSoftmittenEncourage(s.circulationsToday)}</p>
        <p class="muted" data-testid="softmitten-pair">${formatSoftmittenPair(s.day, s.warmth)}</p>
        <p class="muted" data-testid="thermos-flask-line">${formatThermosFlaskLine(s.day)}</p>
        <p class="muted" data-testid="wool-sleeve-line">${formatWoolSleeveLine(s.warmth)}</p>
        <p class="muted" data-testid="thermos-aside">${formatThermosAside(s.history.length)}</p>
        <p class="muted" data-testid="thermos-encourage">${formatThermosEncourage(s.circulationsToday)}</p>
        <p class="muted" data-testid="thermos-pair">${formatThermosPair(s.day, s.warmth)}</p>
        <p class="muted" data-testid="soft-beanie-line">${formatSoftBeanieLine(s.day)}</p>
        <p class="muted" data-testid="wood-hat-form-line">${formatWoodHatFormLine(s.warmth)}</p>
        <p class="muted" data-testid="softbeanie-aside">${formatSoftbeanieAside(s.history.length)}</p>
        <p class="muted" data-testid="softbeanie-encourage">${formatSoftbeanieEncourage(s.circulationsToday)}</p>
        <p class="muted" data-testid="softbeanie-pair">${formatSoftbeaniePair(s.day, s.warmth)}</p>
        <p class="muted" data-testid="soft-slipper-line">${formatSoftSlipperLine(s.day)}</p>
        <p class="muted" data-testid="wood-shoe-tray-line">${formatWoodShoeTrayLine(s.warmth)}</p>
        <p class="muted" data-testid="softslipper-aside">${formatSoftslipperAside(s.history.length)}</p>
        <p class="muted" data-testid="softslipper-encourage">${formatSoftslipperEncourage(s.circulationsToday)}</p>
        <p class="muted" data-testid="softslipper-pair">${formatSoftslipperPair(s.day, s.warmth)}</p>
        <p class="muted" data-testid="soft-earmuff-line">${formatSoftEarmuffLine(s.day)}</p>
        <p class="muted" data-testid="earmuff-peg-line">${formatEarmuffPegLine(s.warmth)}</p>
        <p class="muted" data-testid="earmuff-aside">${formatEarmuffAside(s.history.length)}</p>
        <p class="muted" data-testid="earmuff-encourage">${formatEarmuffEncourage(s.circulationsToday)}</p>
        <p class="muted" data-testid="earmuff-pair">${formatEarmuffPair(s.day, s.warmth)}</p>
        <p class="muted" data-testid="fingerless-glove-line">${formatFingerlessGloveLine(s.day)}</p>
        <p class="muted" data-testid="glove-dish-line">${formatGloveDishLine(s.warmth)}</p>
        <p class="muted" data-testid="fingerless-aside">${formatFingerlessAside(s.history.length)}</p>
        <p class="muted" data-testid="fingerless-encourage">${formatFingerlessEncourage(s.circulationsToday)}</p>
        <p class="muted" data-testid="fingerless-pair">${formatFingerlessPair(s.day, s.warmth)}</p>
        <p class="muted" data-testid="knee-blanket-line">${formatKneeBlanketLine(s.day)}</p>
        <p class="muted" data-testid="blanket-board-line">${formatBlanketBoardLine(s.warmth)}</p>
        <p class="muted" data-testid="kneeblanket-aside">${formatKneeblanketAside(s.history.length)}</p>
        <p class="muted" data-testid="kneeblanket-encourage">${formatKneeblanketEncourage(s.circulationsToday)}</p>
        <p class="muted" data-testid="kneeblanket-pair">${formatKneeblanketPair(s.day, s.warmth)}</p>
        <p class="muted" data-testid="soft-eye-mask-line">${formatSoftEyeMaskLine(s.day)}</p>
        <p class="muted" data-testid="mask-pouch-line">${formatMaskPouchLine(s.warmth)}</p>
        <p class="muted" data-testid="eyemask-aside">${formatEyemaskAside(s.history.length)}</p>
        <p class="muted" data-testid="eyemask-encourage">${formatEyemaskEncourage(s.circulationsToday)}</p>
        <p class="muted" data-testid="eyemask-pair">${formatEyemaskPair(s.day, s.warmth)}</p>
        <p class="muted" data-testid="lavender-sachet-line">${formatLavenderSachetLine(s.day)}</p>
        <p class="muted" data-testid="sachet-dish-line">${formatSachetDishLine(s.warmth)}</p>
        <p class="muted" data-testid="lavsachet-aside">${formatLavsachetAside(s.history.length)}</p>
        <p class="muted" data-testid="lavsachet-encourage">${formatLavsachetEncourage(s.circulationsToday)}</p>
        <p class="muted" data-testid="lavsachet-pair">${formatLavsachetPair(s.day, s.warmth)}</p>
        <p class="muted" data-testid="beeswax-tin-line">${formatBeeswaxTinLine(s.day)}</p>
        <p class="muted" data-testid="strike-strip-line">${formatStrikeStripLine(s.warmth)}</p>
        <p class="muted" data-testid="beeswax-aside">${formatBeeswaxAside(s.history.length)}</p>
        <p class="muted" data-testid="beeswax-encourage">${formatBeeswaxEncourage(s.circulationsToday)}</p>
        <p class="muted" data-testid="beeswax-pair">${formatBeeswaxPair(s.day, s.warmth)}</p>
        <p class="muted" data-testid="soft-cloth-tape-line">${formatSoftClothTapeLine(s.day)}</p>
        <p class="muted" data-testid="tape-wood-clip-line">${formatTapeWoodClipLine(s.warmth)}</p>
        <p class="muted" data-testid="softtape-aside">${formatSofttapeAside(s.history.length)}</p>
        <p class="muted" data-testid="softtape-encourage">${formatSofttapeEncourage(s.circulationsToday)}</p>
        <p class="muted" data-testid="softtape-pair">${formatSofttapePair(s.day, s.warmth)}</p>
        <p class="muted" data-testid="soft-button-tin-line">${formatSoftButtonTinLine(s.day)}</p>
        <p class="muted" data-testid="button-scoop-line">${formatButtonScoopLine(s.warmth)}</p>
        <p class="muted" data-testid="softbutton-aside">${formatSoftbuttonAside(s.history.length)}</p>
        <p class="muted" data-testid="softbutton-encourage">${formatSoftbuttonEncourage(s.circulationsToday)}</p>
        <p class="muted" data-testid="softbutton-pair">${formatSoftbuttonPair(s.day, s.warmth)}</p>
        <p class="muted" data-testid="embroidery-hoop-line">${formatEmbroideryHoopLine(s.day)}</p>
        <p class="muted" data-testid="embroidery-floss-line">${formatEmbroideryFlossLine(s.warmth)}</p>
        <p class="muted" data-testid="embroider-aside">${formatEmbroiderAside(s.history.length)}</p>
        <p class="muted" data-testid="embroider-encourage">${formatEmbroiderEncourage(s.circulationsToday)}</p>
        <p class="muted" data-testid="embroider-pair">${formatEmbroiderPair(s.day, s.warmth)}</p>
        <p class="muted" data-testid="cloth-weight-line">${formatClothWeightLine(s.day)}</p>
        <p class="muted" data-testid="paper-pattern-line">${formatPaperPatternLine(s.warmth)}</p>
        <p class="muted" data-testid="patweight-aside">${formatPatweightAside(s.history.length)}</p>
        <p class="muted" data-testid="patweight-encourage">${formatPatweightEncourage(s.circulationsToday)}</p>
        <p class="muted" data-testid="patweight-pair">${formatPatweightPair(s.day, s.warmth)}</p>
        <p class="muted" data-testid="rotary-cutter-line">${formatRotaryCutterLine(s.day)}</p>
        <p class="muted" data-testid="soft-cut-mat-line">${formatSoftCutMatLine(s.warmth)}</p>
        <p class="muted" data-testid="rotarycut-aside">${formatRotarycutAside(s.history.length)}</p>
        <p class="muted" data-testid="rotarycut-encourage">${formatRotarycutEncourage(s.circulationsToday)}</p>
        <p class="muted" data-testid="rotarycut-pair">${formatRotarycutPair(s.day, s.warmth)}</p>
        <p class="muted" data-testid="mini-steam-iron-line">${formatMiniSteamIronLine(s.day)}</p>
        <p class="muted" data-testid="steam-press-cloth-line">${formatSteamPressClothLine(s.warmth)}</p>
        <p class="muted" data-testid="steampress-aside">${formatSteampressAside(s.history.length)}</p>
        <p class="muted" data-testid="steampress-encourage">${formatSteampressEncourage(s.circulationsToday)}</p>
        <p class="muted" data-testid="steampress-pair">${formatSteampressPair(s.day, s.warmth)}</p>
        <p class="muted" data-testid="soft-tailor-chalk-line">${formatSoftTailorChalkLine(s.day)}</p>
        <p class="muted" data-testid="chalk-tray-line">${formatChalkTrayLine(s.warmth)}</p>
        <p class="muted" data-testid="softchalk-aside">${formatSoftchalkAside(s.history.length)}</p>
        <p class="muted" data-testid="softchalk-encourage">${formatSoftchalkEncourage(s.circulationsToday)}</p>
        <p class="muted" data-testid="softchalk-pair">${formatSoftchalkPair(s.day, s.warmth)}</p>
        <p class="muted" data-testid="soft-pin-cushion-line">${formatSoftPinCushionLine(s.day)}</p>
        <p class="muted" data-testid="straight-pin-line">${formatStraightPinLine(s.warmth)}</p>
        <p class="muted" data-testid="softpin-aside">${formatSoftpinAside(s.history.length)}</p>
        <p class="muted" data-testid="softpin-encourage">${formatSoftpinEncourage(s.circulationsToday)}</p>
        <p class="muted" data-testid="softpin-pair">${formatSoftpinPair(s.day, s.warmth)}</p>
        <p class="muted" data-testid="embro-snips-line">${formatEmbroSnipsLine(s.day)}</p>
        <p class="muted" data-testid="snips-sheath-line">${formatSnipsSheathLine(s.warmth)}</p>
        <p class="muted" data-testid="embrosnips-aside">${formatEmbrosnipsAside(s.history.length)}</p>
        <p class="muted" data-testid="embrosnips-encourage">${formatEmbrosnipsEncourage(s.circulationsToday)}</p>
        <p class="muted" data-testid="embrosnips-pair">${formatEmbrosnipsPair(s.day, s.warmth)}</p>
        <p class="muted" data-testid="mend-mushroom-line">${formatMendMushroomLine(s.day)}</p>
        <p class="muted" data-testid="mend-yarn-line">${formatMendYarnLine(s.warmth)}</p>
        <p class="muted" data-testid="softmend-aside">${formatSoftmendAside(s.history.length)}</p>
        <p class="muted" data-testid="softmend-encourage">${formatSoftmendEncourage(s.circulationsToday)}</p>
        <p class="muted" data-testid="softmend-pair">${formatSoftmendPair(s.day, s.warmth)}</p>
        <p class="muted" data-testid="lace-bobbin-line">${formatLaceBobbinLine(s.day)}</p>
        <p class="muted" data-testid="lace-pillow-line">${formatLacePillowLine(s.warmth)}</p>
        <p class="muted" data-testid="softlace-aside">${formatSoftlaceAside(s.history.length)}</p>
        <p class="muted" data-testid="softlace-encourage">${formatSoftlaceEncourage(s.circulationsToday)}</p>
        <p class="muted" data-testid="softlace-pair">${formatSoftlacePair(s.day, s.warmth)}</p>
        <p class="muted" data-testid="crochet-hook-line">${formatCrochetHookLine(s.day)}</p>
        <p class="muted" data-testid="soft-yarn-ball-line">${formatSoftYarnBallLine(s.warmth)}</p>
        <p class="muted" data-testid="softcrochet-aside">${formatSoftcrochetAside(s.history.length)}</p>
        <p class="muted" data-testid="softcrochet-encourage">${formatSoftcrochetEncourage(s.circulationsToday)}</p>
        <p class="muted" data-testid="softcrochet-pair">${formatSoftcrochetPair(s.day, s.warmth)}</p>
        <p class="muted" data-testid="knit-needles-line">${formatKnitNeedlesLine(s.day)}</p>
        <p class="muted" data-testid="stitch-markers-line">${formatStitchMarkersLine(s.warmth)}</p>
        <p class="muted" data-testid="softknit-aside">${formatSoftknitAside(s.history.length)}</p>
        <p class="muted" data-testid="softknit-encourage">${formatSoftknitEncourage(s.circulationsToday)}</p>
        <p class="muted" data-testid="softknit-pair">${formatSoftknitPair(s.day, s.warmth)}</p>
        <p class="muted" data-testid="yarn-swatch-line">${formatYarnSwatchLine(s.day)}</p>
        <p class="muted" data-testid="row-counter-line">${formatRowCounterLine(s.warmth)}</p>
        <p class="muted" data-testid="softswatch-aside">${formatSoftswatchAside(s.history.length)}</p>
        <p class="muted" data-testid="softswatch-encourage">${formatSoftswatchEncourage(s.circulationsToday)}</p>
        <p class="muted" data-testid="softswatch-pair">${formatSoftswatchPair(s.day, s.warmth)}</p>
        <p class="muted" data-testid="pom-maker-line">${formatPomMakerLine(s.day)}</p>
        <p class="muted" data-testid="yarn-scrap-box-line">${formatYarnScrapBoxLine(s.warmth)}</p>
        <p class="muted" data-testid="softpom-aside">${formatSoftpomAside(s.history.length)}</p>
        <p class="muted" data-testid="softpom-encourage">${formatSoftpomEncourage(s.circulationsToday)}</p>
        <p class="muted" data-testid="softpom-pair">${formatSoftpomPair(s.day, s.warmth)}</p>
        <p class="muted" data-testid="tassel-board-line">${formatTasselBoardLine(s.day)}</p>
        <p class="muted" data-testid="waxed-cord-line">${formatWaxedCordLine(s.warmth)}</p>
        <p class="muted" data-testid="softtassel-aside">${formatSofttasselAside(s.history.length)}</p>
        <p class="muted" data-testid="softtassel-encourage">${formatSofttasselEncourage(s.circulationsToday)}</p>
        <p class="muted" data-testid="softtassel-pair">${formatSofttasselPair(s.day, s.warmth)}</p>
        <p class="muted" data-testid="small-loom-line">${formatSmallLoomLine(s.day)}</p>
        <p class="muted" data-testid="soft-shuttle-line">${formatSoftShuttleLine(s.warmth)}</p>
        <p class="muted" data-testid="softloom-aside">${formatSoftloomAside(s.history.length)}</p>
        <p class="muted" data-testid="softloom-encourage">${formatSoftloomEncourage(s.circulationsToday)}</p>
        <p class="muted" data-testid="softloom-pair">${formatSoftloomPair(s.day, s.warmth)}</p>
        <p class="muted" data-testid="quilt-block-line">${formatQuiltBlockLine(s.day)}</p>
        <p class="muted" data-testid="basting-thread-line">${formatBastingThreadLine(s.warmth)}</p>
        <p class="muted" data-testid="softblock-aside">${formatSoftblockAside(s.history.length)}</p>
        <p class="muted" data-testid="softblock-encourage">${formatSoftblockEncourage(s.circulationsToday)}</p>
        <p class="muted" data-testid="softblock-pair">${formatSoftblockPair(s.day, s.warmth)}</p>
        <p class="muted" data-testid="needle-gauge-line">${formatNeedleGaugeLine(s.day)}</p>
        <p class="muted" data-testid="cable-needle-line">${formatCableNeedleLine(s.warmth)}</p>
        <p class="muted" data-testid="softgauge-aside">${formatSoftgaugeAside(s.history.length)}</p>
        <p class="muted" data-testid="softgauge-encourage">${formatSoftgaugeEncourage(s.circulationsToday)}</p>
        <p class="muted" data-testid="softgauge-pair">${formatSoftgaugePair(s.day, s.warmth)}</p>
        <p class="muted" data-testid="ball-winder-line">${formatBallWinderLine(s.day)}</p>
        <p class="muted" data-testid="yarn-swift-line">${formatYarnSwiftLine(s.warmth)}</p>
        <p class="muted" data-testid="softwinder-aside">${formatSoftwinderAside(s.history.length)}</p>
        <p class="muted" data-testid="softwinder-encourage">${formatSoftwinderEncourage(s.circulationsToday)}</p>
        <p class="muted" data-testid="softwinder-pair">${formatSoftwinderPair(s.day, s.warmth)}</p>
        <p class="muted" data-testid="felting-needle-line">${formatFeltingNeedleLine(s.day)}</p>
        <p class="muted" data-testid="wool-roving-line">${formatWoolRovingLine(s.warmth)}</p>
        <p class="muted" data-testid="softfelting-aside">${formatSoftfeltingAside(s.history.length)}</p>
        <p class="muted" data-testid="softfelting-encourage">${formatSoftfeltingEncourage(s.circulationsToday)}</p>
        <p class="muted" data-testid="softfelting-pair">${formatSoftfeltingPair(s.day, s.warmth)}</p>
        <p class="muted" data-testid="drop-spindle-line">${formatDropSpindleLine(s.day)}</p>
        <p class="muted" data-testid="soft-roving-line">${formatSoftRovingLine(s.warmth)}</p>
        <p class="muted" data-testid="softspindle-aside">${formatSoftspindleAside(s.history.length)}</p>
        <p class="muted" data-testid="softspindle-encourage">${formatSoftspindleEncourage(s.circulationsToday)}</p>
        <p class="muted" data-testid="softspindle-pair">${formatSoftspindlePair(s.day, s.warmth)}</p>
        <p class="muted" data-testid="carding-brush-line">${formatCardingBrushLine(s.day)}</p>
        <p class="muted" data-testid="carding-pad-line">${formatCardingPadLine(s.warmth)}</p>
        <p class="muted" data-testid="softcarder-aside">${formatSoftcarderAside(s.history.length)}</p>
        <p class="muted" data-testid="softcarder-encourage">${formatSoftcarderEncourage(s.circulationsToday)}</p>
        <p class="muted" data-testid="softcarder-pair">${formatSoftcarderPair(s.day, s.warmth)}</p>
        <p class="muted" data-testid="niddy-noddy-line">${formatNiddyNoddyLine(s.day)}</p>
        <p class="muted" data-testid="yarn-skein-line">${formatYarnSkeinLine(s.warmth)}</p>
        <p class="muted" data-testid="softniddy-aside">${formatSoftniddyAside(s.history.length)}</p>
        <p class="muted" data-testid="softniddy-encourage">${formatSoftniddyEncourage(s.circulationsToday)}</p>
        <p class="muted" data-testid="softniddy-pair">${formatSoftniddyPair(s.day, s.warmth)}</p>
        <p class="muted" data-testid="french-knitter-line">${formatFrenchKnitterLine(s.day)}</p>
        <p class="muted" data-testid="knitter-yarn-line">${formatKnitterYarnLine(s.warmth)}</p>
        <p class="muted" data-testid="softknitter-aside">${formatSoftknitterAside(s.history.length)}</p>
        <p class="muted" data-testid="softknitter-encourage">${formatSoftknitterEncourage(s.circulationsToday)}</p>
        <p class="muted" data-testid="softknitter-pair">${formatSoftknitterPair(s.day, s.warmth)}</p>
        <p class="muted" data-testid="accept-hint">${formatAcceptReadyHint(qLen)}</p>
        ${favorHint ? `<p class="muted" data-testid="favor-greeting">${favorHint}</p>` : `<p class="muted" data-testid="favor-greeting" hidden></p>`}`;
      const row = document.createElement("div");
      row.className = "btn-row";
      const canAccept = qLen > 0;
      const acceptBtn = this.button(
        formatAcceptButtonLabel(qLen),
        () => this.setState(acceptNextEmotion(s)),
        undefined,
        !canAccept && s.phase !== "result",
      );
      acceptBtn.setAttribute("aria-label", formatAcceptAriaLabel(qLen));
      acceptBtn.dataset.testid = "accept-next";
      row.append(acceptBtn);
      if (s.phase === "result") {
        row.append(
          this.button("继续", () => this.setState(continueAfterResult(s))),
        );
      }
      card.appendChild(row);
      if (s.lastResult) {
        card.appendChild(this.renderLastResult(s));
      }
      return card;
    }

    if (s.phase === "awaiting_vessel" && s.current) {
      const e = s.current;
      const guestFavor = favorForGuest(s, e.guestName);
      const greet = formatFavorGreeting(e.guestName, guestFavor);
      const craftAside = formatFavorCraftAside(e.guestName, guestFavor);
      card.innerHTML = `
        <div class="guest-silhouette" role="img" aria-label="${guestPortraitAriaLabel(e.guestName)}" data-testid="guest-silhouette" data-guest-art="${guestPortraitDataAttr(e.guestName)}"></div>
        <div class="guest-notebook-art" role="img" aria-label="客人手记" data-testid="guest-notebook-art"></div>
        <div class="intensity-meter-art" role="img" aria-label="强度丝带" data-testid="intensity-meter-art"></div>
        <h2>${e.guestName}</h2>
        <p class="muted" data-testid="guest-name-line">${formatGuestNameLine(e.guestName)}</p>
        ${greet ? `<p class="muted" data-testid="favor-greeting">${greet}</p>` : ""}
        ${guestFavor > 0 ? `<p class="muted" data-testid="favor-guest-line">${formatFavorLine({ name: e.guestName, favor: guestFavor })}</p>` : ""}
        <p class="emotion-text" data-testid="emotion-text">「${e.text}」</p>
        <div class="tags" data-testid="emotion-tags">${e.tags.map((t) => `<span class="tag">${t}</span>`).join("")}</div>
        <p class="muted" data-testid="tags-line">${formatTagsLine(e.tags)}</p>
        <p class="muted" data-testid="intensity-line">${formatIntensityLine(e.intensity)}</p>
        <p class="muted" data-testid="intensity-hint">${intensityCraftHint(e.intensity)}</p>
        ${craftAside ? `<p class="muted" data-testid="favor-craft-aside">${craftAside}</p>` : ""}
        <div class="soft-compass-art" role="img" aria-label="温柔罗盘" data-testid="soft-compass-art"></div>
        <div class="street-map-art" role="img" aria-label="巷口地图" data-testid="street-map-art"></div>
        <p class="muted" data-testid="compass-line">${formatCompassForEmotion(e)}</p>
        <p class="muted" data-testid="compass-aside">${formatCompassAside(e)}</p>
        <p class="muted" data-testid="map-path-aside">${formatMapPathAside(s.day)}</p>
        <p class="muted" data-testid="radio-craft-line">${formatRadioLine(s.day)}</p>
        <p class="muted" data-testid="radio-music-aside">${formatRadioAside(true)} ${formatRadioAside(false)}</p>
        <p class="muted">选择容器形态</p>
        <div class="vessel-grid" data-testid="vessel-grid"></div>
        <p class="muted" data-testid="hints" style="margin-top:0.75rem"></p>
      `;
      const grid = card.querySelector(".vessel-grid")!;
      for (const v of VESSELS) {
        const b = document.createElement("button");
        b.type = "button";
        b.className = "vessel-btn";
        const helpsOrder = vesselHelpsAnyOrder(s, v);
        if (helpsOrder) {
          b.classList.add("vessel-order-preferred");
          b.dataset.orderPreferred = "true";
        }
        b.dataset.vessel = v;
        b.innerHTML = `<span class="icon">${vesselIconHtml(v)}</span><span>${VESSEL_LABELS[v]}</span><span class="muted" style="font-size:0.75rem">${VESSELS.indexOf(v) + 1}</span>`;
        b.setAttribute(
          "aria-label",
          helpsOrder
            ? `选择${VESSEL_LABELS[v]}（今日委托偏好）。${vesselCraftHint(v)}`
            : `选择${VESSEL_LABELS[v]}。${vesselCraftHint(v)}`,
        );
        b.title = formatVesselLine(v);
        b.addEventListener("click", () => this.setState(chooseVessel(s, v)));
        grid.appendChild(b);
      }
      const hintEl = card.querySelector("[data-testid=hints]") as HTMLElement;
      if (this.settings.showHints) {
        const hints = listVesselHints(e)
          .map((h) => formatHintLine(h))
          .join(" · ");
        const rec = formatVesselRecommendLine(e, s);
        hintEl.textContent = `气息提示：${hints}。${rec}`;
      } else {
        hintEl.textContent = "";
        hintEl.hidden = true;
      }
      return card;
    }

    if (s.phase === "awaiting_circulation" && s.crafted) {
      const item = s.crafted;
      card.innerHTML = `
        <div class="gift-station-art" role="img" aria-label="赠予包装台" data-testid="gift-station-art"></div>
        <div class="gift-box-art" role="img" aria-label="礼物盒" data-testid="gift-box-art"></div>
        <div class="ribbon-spools-art" role="img" aria-label="丝带卷" data-testid="ribbon-spools-art"></div>
        <div class="match-abacus-art" role="img" aria-label="匹配算珠" data-testid="match-abacus-art"></div>
        <div class="quality-seal-art" role="img" aria-label="品质印记" data-testid="quality-seal-art"></div>
        <div class="ink-seal-art" role="img" aria-label="朱砂印鉴" data-testid="ink-seal-art"></div>
        <div class="vessel-flower-art" role="img" aria-label="花形态示意" data-testid="vessel-flower-art" data-vessel="${item.vessel}"></div>
        <div class="vessel-tray-art" role="img" aria-label="成品托盘" data-testid="vessel-tray-art"></div>
        <h2>转化台</h2>
        <p data-testid="crafted-label"><strong>${item.label}</strong></p>
        <p class="muted" data-testid="vessel-line">${formatVesselLine(item.vessel)}</p>
        <p class="muted" data-testid="vessel-pick-line">${formatVesselPickLine(item.vessel)}</p>
        <p class="muted" data-testid="tray-place">${formatTrayPlaceLine(item.vessel)}</p>
        <p class="muted" data-testid="tray-full">${formatTrayFullAside(s.shelf.length + 1)}</p>
        <p class="muted" data-testid="tray-serve">${formatTrayServeAside(true)} ${formatTrayServeAside(false)}</p>
        <p class="muted" data-testid="tray-encourage">${formatTrayEncourage()}</p>
        <p data-testid="match-line">${formatMatchScoreLine(item.matchScore)}</p>
        <div class="price-tag-art" role="img" aria-label="温情价签" data-testid="price-tag-art"></div>
        <p data-testid="quality-line"><span class="quality-${item.quality}" data-testid="quality">${formatQualityLine(item.quality)}</span>
          · ${priceLabel(item)}</p>
        <p class="muted" data-testid="warmth-price-line">${formatWarmthPriceLine(item)}</p>
        <p class="muted" data-testid="price-narrative">${formatPriceNarrative(item)}</p>
        <p class="muted" data-testid="craft-summary">${formatCraftSummary(item.matchScore, item.quality)}</p>
        <p class="muted" data-testid="seal-quality">${formatSealForQuality(item.quality)}</p>
        <p class="muted" data-testid="seal-encourage">${formatSealEncourage(item.quality)}</p>
        <p class="muted" data-testid="seal-count">${formatSealCountAside(s.history.length)}</p>
        <p class="muted" data-testid="seal-milestone">${formatMilestoneSeal(s.day, s.history.length)}</p>
        <p class="muted" data-testid="gift-wrap-line">${formatGiftWrapLine(item.vessel, item.quality)}</p>
        <p class="muted" data-testid="display-wrap-line">${formatDisplayWrapLine(item.vessel, item.quality)}</p>
        <p class="muted" data-testid="sachet-gift-aside">${formatSachetGiftAside(true)} ${formatSachetGiftAside(false)}</p>
        <p class="muted" data-testid="ink-craft-pair">${formatInkPair(s.day, s.history.length)}</p>
        <p class="muted" data-testid="ink-craft-aside">${formatInkAside(s.warmth)}</p>
        <p class="muted" data-testid="biscuit-gift-aside">${formatBiscuitAside(true)} ${formatBiscuitAside(false)}</p>
        <p class="muted" data-testid="ribbon-gift-aside">${formatRibbonAside(true)} ${formatRibbonAside(false)}</p>
        <p class="muted" data-testid="button-gift-aside">${formatButtonAside(true)} ${formatButtonAside(false)}</p>
        <p class="muted" data-testid="gift-choice-hint">${formatCirculationChoiceHint("gift")} ${formatCirculationChoiceHint("display")}</p>
        <p class="muted" data-testid="order-bonus-hint">${firstOrderBonusHint(item, s.activeOrder, s.pendingOrders) || "上架等待知音，或直接赠予需要的人。"}</p>
        <p class="muted" data-testid="order-match-aside">${formatOrderMatchAside(item, s.activeOrder)}</p>
        <div class="btn-row"></div>
      `;
      const row = card.querySelector(".btn-row")!;
      const displayBtn = this.button("上架", () => this.setState(circulate(s, "display")), "display");
      const giftBtn = this.button("赠予", () => this.setState(circulate(s, "gift")), "gift");
      displayBtn.title = formatDisplayWrapLine(item.vessel, item.quality);
      giftBtn.title = formatGiftWrapLine(item.vessel, item.quality);
      giftBtn.setAttribute("aria-label", `赠予：${formatGiftBoxAside("gift")}`);
      displayBtn.setAttribute("aria-label", `上架：${formatGiftBoxAside("display")}`);
      row.append(displayBtn, giftBtn);
      return card;
    }

    if (s.phase === "result") {
      card.innerHTML = `<h2>流通完成</h2><p class="muted" data-testid="result-action">${s.lastResult ? formatActionLine(s.lastResult.action) : ""}</p>`;
      card.appendChild(this.renderLastResult(s));
      const row = document.createElement("div");
      row.className = "btn-row";
      row.append(
        this.button("继续经营", () => this.setState(continueAfterResult(s))),
      );
      card.appendChild(row);
      return card;
    }

    if (s.phase === "day_complete") {
      const stats = computeSessionStats(s);
      const dayEnd = buildDayEndNarrative(s);
      card.innerHTML = `
        <div class="day-complete-art" role="img" aria-label="打烊窗景插画" data-testid="day-complete-art"></div>
        <div class="closed-sign-art" role="img" aria-label="打烊门牌" data-testid="closed-sign-art"></div>
        <div class="warmth-jar-art" role="img" aria-label="温存罐插画" data-testid="warmth-jar-art"></div>
        <div class="soft-candle-art soft-candle-art--lg" role="img" aria-label="打烊烛火" data-testid="day-end-candle-art"></div>
        <div class="wish-tags-art wish-tags-art--lg" role="img" aria-label="梁上祈愿签" data-testid="day-end-wish-tags-art"></div>
        <h2>今日打烊</h2>
        <p data-testid="day-end-warmth">你完成了今日的情绪流通。${dayEnd.warmthLine}，今日流通 ${s.circulationsToday} 次。</p>
        <p class="muted" data-testid="day-end-warmth-encourage">${formatWarmthEncourage(s.warmth)}</p>
        <p class="muted" data-testid="day-end-candle">${formatCandleAside(s.warmth)}</p>
        <p class="muted" data-testid="day-end-wish">${formatWishTagLine(s.history.length)}</p>
        <p class="muted" data-testid="day-end-wish-hang">${formatWishHangAside(true)} ${formatWishHangAside(false)}</p>
        <p class="muted" data-testid="day-end-circulation">${dayEnd.circulationLine}</p>
        <p class="muted" data-testid="day-end-reputation">${dayEnd.reputationLine}</p>
        <p class="muted" data-testid="day-end-favor">${dayEnd.favorLine}</p>
        <p data-testid="day-end-closing">${dayEnd.closingLine}</p>
        <div class="evening-window-art" role="img" aria-label="暮色橱窗" data-testid="evening-window-art"></div>
        <p class="muted" data-testid="day-end-atmosphere">${formatAtmosphereClosing(s.day)}</p>
        <p class="muted" data-testid="day-end-moon">${formatMoonClosing(s.day)}</p>
        <div class="night-rain-window-art" role="img" aria-label="夜雨窗" data-testid="night-rain-window-art"></div>
        <div class="puddle-dusk-art" role="img" aria-label="暮色水洼" data-testid="puddle-dusk-art"></div>
        <div class="window-seat-art" role="img" aria-label="窗边座位" data-testid="window-seat-art"></div>
        <div class="revisit-door-art" role="img" aria-label="再访门廊" data-testid="revisit-door-art"></div>
        <div class="soft-suitcase-art" role="img" aria-label="再访小行李箱" data-testid="soft-suitcase-art"></div>
        <div class="soft-blanket-art" role="img" aria-label="薄被" data-testid="soft-blanket-art"></div>
        <p class="muted" data-testid="day-end-stats">${formatStatsSummary(stats)}</p>
        <p data-testid="day-end-orders">${formatOrderDayEndLine(s)}</p>
        <p class="muted" data-testid="revisit-hint">${formatRevisitHint(s)}</p>
        <p class="muted" data-testid="revisit-eligibility">${formatRevisitEligibilityAside(evaluateRevisitEligibility(s))}</p>
        <p class="muted" data-testid="revisit-luggage">${formatRevisitLuggageAside()}</p>
        ${
          (() => {
            const elig = evaluateRevisitEligibility(s);
            return elig.topName
              ? `<p class="muted" data-testid="revisit-welcome">${formatRevisitWelcome(elig.topName)}</p>`
              : "";
          })()
        }
      `;
      if (s.lastResult) {
        card.appendChild(this.renderLastResult(s));
      }
      const row = document.createElement("div");
      row.className = "btn-row";
      row.append(
        this.button("进入下一日", () => {
          const day = s.day + 1;
          const goals = goalsForDay(day);
          let queue = freshDayQueue(day);
          queue = maybeAppendRevisit(s, queue);
          let next = startNextDay(s, queue, describeDayOpener(day));
          next = {
            ...next,
            config: { ...next.config, ...goals },
          };
          if (queue.some((e) => e.id.startsWith("revisit_"))) {
            next = {
              ...next,
              message: `${next.message} 柜台边多了一位故人。`,
            };
          }
          this.setState(next);
        }),
        this.button("回到主菜单", () => this.go("menu"), "secondary"),
      );
      card.appendChild(row);
      return card;
    }

    card.textContent = "店内暂时无事。";
    return card;
  }

  private renderLastResult(s: GameState): HTMLElement {
    const box = document.createElement("div");
    if (!s.lastResult) return box;
    const r = s.lastResult;
    box.innerHTML = `
      <div class="letter-seal-art" role="img" aria-label="瞬间信笺封口" data-testid="letter-seal-art"></div>
      <div class="moment-letter-art" role="img" aria-label="瞬间信笺" data-testid="moment-letter-art"></div>
      <div class="writing-desk-art" role="img" aria-label="写字台" data-testid="writing-desk-art"></div>
      <div class="paper-stamp-art" role="img" aria-label="日记印章" data-testid="paper-stamp-art"></div>
      <div class="circulation-log-art" role="img" aria-label="流通手账" data-testid="circulation-log-art"></div>
      <div class="fountain-pen-art" role="img" aria-label="钢笔" data-testid="fountain-pen-art"></div>
      <div class="journal-page-art" role="img" aria-label="手账页" data-testid="journal-page-art"></div>
      <div class="gift-tag-art" role="img" aria-label="心意吊牌" data-testid="gift-tag-art"></div>
      <div class="postcards-art" role="img" aria-label="明信片叠" data-testid="postcards-art"></div>
      <div class="moment-card" data-testid="moment-card">
        <p data-testid="moment-header"><strong>${formatMomentCardHeader(r)}</strong></p>
        <p data-testid="action-result-line">${formatCirculationResultLine(r.action, r.warmthGained)}</p>
        <p>${r.momentCard}</p>
        <p class="muted" data-testid="moment-footer">${formatMomentCardFooter(r)}</p>
        <p class="muted" data-testid="postcard-line">${formatPostcardLine(r.item.vessel, r.item.quality, r.action)}</p>
        <p class="muted" data-testid="postcard-stack">${formatPostcardStackAside(s.history.length)}</p>
      </div>
    `;
    return box;
  }

  private button(
    label: string,
    onClick: () => void,
    className?: string,
    disabled = false,
  ): HTMLButtonElement {
    const b = document.createElement("button");
    b.type = "button";
    b.textContent = label;
    b.setAttribute("aria-label", label);
    if (className) b.className = className;
    b.disabled = disabled;
    if (disabled) b.setAttribute("aria-disabled", "true");
    b.addEventListener("click", onClick);
    return b;
  }
}

