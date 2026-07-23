import { VESSEL_AFFINITY, VESSEL_LABELS, type Emotion, type VesselKind } from "./types";
import { evaluateMatch } from "./matching";

export interface VesselHint {
  vessel: VesselKind;
  label: string;
  overlap: number;
  predictedQuality: string;
}

/**
 * 弱提示：仅显示标签重合数，不直接剧透最优解文案。
 * 教学/低难度可用。
 */
export function listVesselHints(emotion: Emotion): VesselHint[] {
  const kinds = Object.keys(VESSEL_AFFINITY) as VesselKind[];
  return kinds
    .map((vessel) => {
      const match = evaluateMatch(emotion, vessel);
      return {
        vessel,
        label: VESSEL_LABELS[vessel],
        overlap: match.matchedTags.length,
        predictedQuality: match.quality,
      };
    })
    .sort((a, b) => b.overlap - a.overlap || b.predictedQuality.localeCompare(a.predictedQuality));
}

export function formatHintLine(hint: VesselHint): string {
  if (hint.overlap <= 0) return `${hint.label}：气息尚远`;
  if (hint.overlap === 1) return `${hint.label}：隐约相近`;
  return `${hint.label}：颇为契合`;
}
