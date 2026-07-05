// ── Site & APK Configuration ─────────────────────────────────────────────────
// Single source of truth for all version / URL constants.
// Update these whenever a new APK is released.

export const CANONICAL_URL = "https://official-streamwave-apk.vercel.app";

// ── APK Archive ──────────────────────────────────────────────────────────────
// Single source of truth for every released build. To publish a new version,
// drop the .apk into /public and prepend a new object here with `latest: true`
// (and set the previous latest to `latest: false`). Everything else — the
// homepage download, the /versions archive, filenames and labels — updates
// automatically from this array.
export interface ApkVersion {
  version: string;   // e.g. "1.2.0"
  file: string;      // filename in /public, e.g. "StreamWave_1.2.0_Official.apk"
  latest: boolean;   // exactly one entry should be the latest release
  date: string;      // human-readable release date, e.g. "July 2026"
  status: string;    // badge label, e.g. "Recommended" | "Stable"
  notes: string[];   // release highlights
}

export const APK_VERSIONS: ApkVersion[] = [
  {
    version: "1.2.0",
    file: "StreamWave_1.2.0_Official.apk",
    latest: true,
    date: "July 2026",
    status: "Recommended",
    notes: [
      "Telegram community integration",
      "Share App feature",
      "Profile improvements",
      "Loading screen redesign",
    ],
  },
  {
    version: "1.1.0",
    file: "StreamWave_1.1.0_Official.apk",
    latest: false,
    date: "July 2026",
    status: "Stable",
    notes: ["Initial public release"],
  },
];

// The current release — derived from the array so callers never hard-code it.
export const LATEST_VERSION: ApkVersion =
  APK_VERSIONS.find((v) => v.latest) ?? APK_VERSIONS[0];

export const VERSION      = LATEST_VERSION.version;
export const VERSION_CODE = 3;
export const APK_SIZE     = "21.2 MB";
export const RELEASE_DATE = "2026-08-15";
export const RELEASE_NOTES =
  "Added subtitles, improved player UI, and fixed bugs.";
export const ANDROID_MIN  = "Android 5.0 (Lollipop) or higher";

// Official APK — served as a static asset from /public, downloaded directly.
export const APK_FILENAME = LATEST_VERSION.file;
export const APK_URL      = `/${LATEST_VERSION.file}`;

export const TELEGRAM_URL = "https://t.me/streamwave_official";

// Public community invite (Download page "Join Community" CTA).
export const TELEGRAM_COMMUNITY_URL = "https://t.me/+_U_kmPsZs1JjMzU1";
