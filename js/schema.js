var LAYER_NUMBER = 131

var SCHEMA_GLOBAL = {
  "constructors": [
    {
      "id": 3162085175,
      "predicate": "boolFalse",
      "params": [],
      "type": "Bool"
    },
    {
      "id": 2574415285,
      "predicate": "boolTrue",
      "params": [],
      "type": "Bool"
    },
    {
      "id": 1072550713,
      "predicate": "true",
      "params": [],
      "type": "True"
    },
    {
      "id": 481674261,
      "predicate": "vector",
      "params": [],
      "type": "Vector t"
    },
    {
      "id": 3300522427,
      "predicate": "error",
      "params": [
        {
          "name": "code",
          "type": "int"
        },
        {
          "name": "text",
          "type": "string"
        }
      ],
      "type": "Error"
    },
    {
      "id": 1450380236,
      "predicate": "null",
      "params": [],
      "type": "Null"
    },
    {
      "id": 2134579434,
      "predicate": "inputPeerEmpty",
      "params": [],
      "type": "InputPeer"
    },
    {
      "id": 2107670217,
      "predicate": "inputPeerSelf",
      "params": [],
      "type": "InputPeer"
    },
    {
      "id": 396093539,
      "predicate": "inputPeerChat",
      "params": [
        {
          "name": "chat_id",
          "type": "int"
        }
      ],
      "type": "InputPeer"
    },
    {
      "id": 2072935910,
      "predicate": "inputPeerUser",
      "params": [
        {
          "name": "user_id",
          "type": "int"
        },
        {
          "name": "access_hash",
          "type": "long"
        }
      ],
      "type": "InputPeer"
    },
    {
      "id": 548253432,
      "predicate": "inputPeerChannel",
      "params": [
        {
          "name": "channel_id",
          "type": "int"
        },
        {
          "name": "access_hash",
          "type": "long"
        }
      ],
      "type": "InputPeer"
    },
    {
      "id": 398123750,
      "predicate": "inputPeerUserFromMessage",
      "params": [
        {
          "name": "peer",
          "type": "InputPeer"
        },
        {
          "name": "msg_id",
          "type": "int"
        },
        {
          "name": "user_id",
          "type": "int"
        }
      ],
      "type": "InputPeer"
    },
    {
      "id": 2627073979,
      "predicate": "inputPeerChannelFromMessage",
      "params": [
        {
          "name": "peer",
          "type": "InputPeer"
        },
        {
          "name": "msg_id",
          "type": "int"
        },
        {
          "name": "channel_id",
          "type": "int"
        }
      ],
      "type": "InputPeer"
    },
    {
      "id": 3112732367,
      "predicate": "inputUserEmpty",
      "params": [],
      "type": "InputUser"
    },
    {
      "id": 4156666175,
      "predicate": "inputUserSelf",
      "params": [],
      "type": "InputUser"
    },
    {
      "id": 3626575894,
      "predicate": "inputUser",
      "params": [
        {
          "name": "user_id",
          "type": "int"
        },
        {
          "name": "access_hash",
          "type": "long"
        }
      ],
      "type": "InputUser"
    },
    {
      "id": 756118935,
      "predicate": "inputUserFromMessage",
      "params": [
        {
          "name": "peer",
          "type": "InputPeer"
        },
        {
          "name": "msg_id",
          "type": "int"
        },
        {
          "name": "user_id",
          "type": "int"
        }
      ],
      "type": "InputUser"
    },
    {
      "id": 4086478836,
      "predicate": "inputPhoneContact",
      "params": [
        {
          "name": "client_id",
          "type": "long"
        },
        {
          "name": "phone",
          "type": "string"
        },
        {
          "name": "first_name",
          "type": "string"
        },
        {
          "name": "last_name",
          "type": "string"
        }
      ],
      "type": "InputContact"
    },
    {
      "id": 4113560191,
      "predicate": "inputFile",
      "params": [
        {
          "name": "id",
          "type": "long"
        },
        {
          "name": "parts",
          "type": "int"
        },
        {
          "name": "name",
          "type": "string"
        },
        {
          "name": "md5_checksum",
          "type": "string"
        }
      ],
      "type": "InputFile"
    },
    {
      "id": 4199484341,
      "predicate": "inputFileBig",
      "params": [
        {
          "name": "id",
          "type": "long"
        },
        {
          "name": "parts",
          "type": "int"
        },
        {
          "name": "name",
          "type": "string"
        }
      ],
      "type": "InputFile"
    },
    {
      "id": 2523198847,
      "predicate": "inputMediaEmpty",
      "params": [],
      "type": "InputMedia"
    },
    {
      "id": 505969924,
      "predicate": "inputMediaUploadedPhoto",
      "params": [
        {
          "name": "flags",
          "type": "#"
        },
        {
          "name": "file",
          "type": "InputFile"
        },
        {
          "name": "stickers",
          "type": "flags.0?Vector<InputDocument>"
        },
        {
          "name": "ttl_seconds",
          "type": "flags.1?int"
        }
      ],
      "type": "InputMedia"
    },
    {
      "id": 3015312949,
      "predicate": "inputMediaPhoto",
      "params": [
        {
          "name": "flags",
          "type": "#"
        },
        {
          "name": "id",
          "type": "InputPhoto"
        },
        {
          "name": "ttl_seconds",
          "type": "flags.0?int"
        }
      ],
      "type": "InputMedia"
    },
    {
      "id": 4190388548,
      "predicate": "inputMediaGeoPoint",
      "params": [
        {
          "name": "geo_point",
          "type": "InputGeoPoint"
        }
      ],
      "type": "InputMedia"
    },
    {
      "id": 4171988475,
      "predicate": "inputMediaContact",
      "params": [
        {
          "name": "phone_number",
          "type": "string"
        },
        {
          "name": "first_name",
          "type": "string"
        },
        {
          "name": "last_name",
          "type": "string"
        },
        {
          "name": "vcard",
          "type": "string"
        }
      ],
      "type": "InputMedia"
    },
    {
      "id": 1530447553,
      "predicate": "inputMediaUploadedDocument",
      "params": [
        {
          "name": "flags",
          "type": "#"
        },
        {
          "name": "nosound_video",
          "type": "flags.3?true"
        },
        {
          "name": "force_file",
          "type": "flags.4?true"
        },
        {
          "name": "file",
          "type": "InputFile"
        },
        {
          "name": "thumb",
          "type": "flags.2?InputFile"
        },
        {
          "name": "mime_type",
          "type": "string"
        },
        {
          "name": "attributes",
          "type": "Vector<DocumentAttribute>"
        },
        {
          "name": "stickers",
          "type": "flags.0?Vector<InputDocument>"
        },
        {
          "name": "ttl_seconds",
          "type": "flags.1?int"
        }
      ],
      "type": "InputMedia"
    },
    {
      "id": 860303448,
      "predicate": "inputMediaDocument",
      "params": [
        {
          "name": "flags",
          "type": "#"
        },
        {
          "name": "id",
          "type": "InputDocument"
        },
        {
          "name": "ttl_seconds",
          "type": "flags.0?int"
        },
        {
          "name": "query",
          "type": "flags.1?string"
        }
      ],
      "type": "InputMedia"
    },
    {
      "id": 3242007569,
      "predicate": "inputMediaVenue",
      "params": [
        {
          "name": "geo_point",
          "type": "InputGeoPoint"
        },
        {
          "name": "title",
          "type": "string"
        },
        {
          "name": "address",
          "type": "string"
        },
        {
          "name": "provider",
          "type": "string"
        },
        {
          "name": "venue_id",
          "type": "string"
        },
        {
          "name": "venue_type",
          "type": "string"
        }
      ],
      "type": "InputMedia"
    },
    {
      "id": 3854302746,
      "predicate": "inputMediaPhotoExternal",
      "params": [
        {
          "name": "flags",
          "type": "#"
        },
        {
          "name": "url",
          "type": "string"
        },
        {
          "name": "ttl_seconds",
          "type": "flags.0?int"
        }
      ],
      "type": "InputMedia"
    },
    {
      "id": 4216511641,
      "predicate": "inputMediaDocumentExternal",
      "params": [
        {
          "name": "flags",
          "type": "#"
        },
        {
          "name": "url",
          "type": "string"
        },
        {
          "name": "ttl_seconds",
          "type": "flags.0?int"
        }
      ],
      "type": "InputMedia"
    },
    {
      "id": 3544138739,
      "predicate": "inputMediaGame",
      "params": [
        {
          "name": "id",
          "type": "InputGame"
        }
      ],
      "type": "InputMedia"
    },
    {
      "id": 3648624756,
      "predicate": "inputMediaInvoice",
      "params": [
        {
          "name": "flags",
          "type": "#"
        },
        {
          "name": "title",
          "type": "string"
        },
        {
          "name": "description",
          "type": "string"
        },
        {
          "name": "photo",
          "type": "flags.0?InputWebDocument"
        },
        {
          "name": "invoice",
          "type": "Invoice"
        },
        {
          "name": "payload",
          "type": "bytes"
        },
        {
          "name": "provider",
          "type": "string"
        },
        {
          "name": "provider_data",
          "type": "DataJSON"
        },
        {
          "name": "start_param",
          "type": "flags.1?string"
        }
      ],
      "type": "InputMedia"
    },
    {
      "id": 2535434307,
      "predicate": "inputMediaGeoLive",
      "params": [
        {
          "name": "flags",
          "type": "#"
        },
        {
          "name": "stopped",
          "type": "flags.0?true"
        },
        {
          "name": "geo_point",
          "type": "InputGeoPoint"
        },
        {
          "name": "heading",
          "type": "flags.2?int"
        },
        {
          "name": "period",
          "type": "flags.1?int"
        },
        {
          "name": "proximity_notification_radius",
          "type": "flags.3?int"
        }
      ],
      "type": "InputMedia"
    },
    {
      "id": 261416433,
      "predicate": "inputMediaPoll",
      "params": [
        {
          "name": "flags",
          "type": "#"
        },
        {
          "name": "poll",
          "type": "Poll"
        },
        {
          "name": "correct_answers",
          "type": "flags.0?Vector<bytes>"
        },
        {
          "name": "solution",
          "type": "flags.1?string"
        },
        {
          "name": "solution_entities",
          "type": "flags.1?Vector<MessageEntity>"
        }
      ],
      "type": "InputMedia"
    },
    {
      "id": 3866083195,
      "predicate": "inputMediaDice",
      "params": [
        {
          "name": "emoticon",
          "type": "string"
        }
      ],
      "type": "InputMedia"
    },
    {
      "id": 480546647,
      "predicate": "inputChatPhotoEmpty",
      "params": [],
      "type": "InputChatPhoto"
    },
    {
      "id": 3326243406,
      "predicate": "inputChatUploadedPhoto",
      "params": [
        {
          "name": "flags",
          "type": "#"
        },
        {
          "name": "file",
          "type": "flags.0?InputFile"
        },
        {
          "name": "video",
          "type": "flags.1?InputFile"
        },
        {
          "name": "video_start_ts",
          "type": "flags.2?double"
        }
      ],
      "type": "InputChatPhoto"
    },
    {
      "id": 2303962423,
      "predicate": "inputChatPhoto",
      "params": [
        {
          "name": "id",
          "type": "InputPhoto"
        }
      ],
      "type": "InputChatPhoto"
    },
    {
      "id": 3837862870,
      "predicate": "inputGeoPointEmpty",
      "params": [],
      "type": "InputGeoPoint"
    },
    {
      "id": 1210199983,
      "predicate": "inputGeoPoint",
      "params": [
        {
          "name": "flags",
          "type": "#"
        },
        {
          "name": "lat",
          "type": "double"
        },
        {
          "name": "long",
          "type": "double"
        },
        {
          "name": "accuracy_radius",
          "type": "flags.0?int"
        }
      ],
      "type": "InputGeoPoint"
    },
    {
      "id": 483901197,
      "predicate": "inputPhotoEmpty",
      "params": [],
      "type": "InputPhoto"
    },
    {
      "id": 1001634122,
      "predicate": "inputPhoto",
      "params": [
        {
          "name": "id",
          "type": "long"
        },
        {
          "name": "access_hash",
          "type": "long"
        },
        {
          "name": "file_reference",
          "type": "bytes"
        }
      ],
      "type": "InputPhoto"
    },
    {
      "id": 3755650017,
      "predicate": "inputFileLocation",
      "params": [
        {
          "name": "volume_id",
          "type": "long"
        },
        {
          "name": "local_id",
          "type": "int"
        },
        {
          "name": "secret",
          "type": "long"
        },
        {
          "name": "file_reference",
          "type": "bytes"
        }
      ],
      "type": "InputFileLocation"
    },
    {
      "id": 4112735573,
      "predicate": "inputEncryptedFileLocation",
      "params": [
        {
          "name": "id",
          "type": "long"
        },
        {
          "name": "access_hash",
          "type": "long"
        }
      ],
      "type": "InputFileLocation"
    },
    {
      "id": 3134223748,
      "predicate": "inputDocumentFileLocation",
      "params": [
        {
          "name": "id",
          "type": "long"
        },
        {
          "name": "access_hash",
          "type": "long"
        },
        {
          "name": "file_reference",
          "type": "bytes"
        },
        {
          "name": "thumb_size",
          "type": "string"
        }
      ],
      "type": "InputFileLocation"
    },
    {
      "id": 3418877480,
      "predicate": "inputSecureFileLocation",
      "params": [
        {
          "name": "id",
          "type": "long"
        },
        {
          "name": "access_hash",
          "type": "long"
        }
      ],
      "type": "InputFileLocation"
    },
    {
      "id": 700340377,
      "predicate": "inputTakeoutFileLocation",
      "params": [],
      "type": "InputFileLocation"
    },
    {
      "id": 1075322878,
      "predicate": "inputPhotoFileLocation",
      "params": [
        {
          "name": "id",
          "type": "long"
        },
        {
          "name": "access_hash",
          "type": "long"
        },
        {
          "name": "file_reference",
          "type": "bytes"
        },
        {
          "name": "thumb_size",
          "type": "string"
        }
      ],
      "type": "InputFileLocation"
    },
    {
      "id": 3627312883,
      "predicate": "inputPhotoLegacyFileLocation",
      "params": [
        {
          "name": "id",
          "type": "long"
        },
        {
          "name": "access_hash",
          "type": "long"
        },
        {
          "name": "file_reference",
          "type": "bytes"
        },
        {
          "name": "volume_id",
          "type": "long"
        },
        {
          "name": "local_id",
          "type": "int"
        },
        {
          "name": "secret",
          "type": "long"
        }
      ],
      "type": "InputFileLocation"
    },
    {
      "id": 925204121,
      "predicate": "inputPeerPhotoFileLocation",
      "params": [
        {
          "name": "flags",
          "type": "#"
        },
        {
          "name": "big",
          "type": "flags.0?true"
        },
        {
          "name": "peer",
          "type": "InputPeer"
        },
        {
          "name": "photo_id",
          "type": "long"
        }
      ],
      "type": "InputFileLocation"
    },
    {
      "id": 2642736091,
      "predicate": "inputStickerSetThumb",
      "params": [
        {
          "name": "stickerset",
          "type": "InputStickerSet"
        },
        {
          "name": "thumb_version",
          "type": "int"
        }
      ],
      "type": "InputFileLocation"
    },
    {
      "id": 3148158521,
      "predicate": "inputGroupCallStream",
      "params": [
        {
          "name": "call",
          "type": "InputGroupCall"
        },
        {
          "name": "time_ms",
          "type": "long"
        },
        {
          "name": "scale",
          "type": "int"
        }
      ],
      "type": "InputFileLocation"
    },
    {
      "id": 2645671021,
      "predicate": "peerUser",
      "params": [
        {
          "name": "user_id",
          "type": "int"
        }
      ],
      "type": "Peer"
    },
    {
      "id": 3134252475,
      "predicate": "peerChat",
      "params": [
        {
          "name": "chat_id",
          "type": "int"
        }
      ],
      "type": "Peer"
    },
    {
      "id": 3185435954,
      "predicate": "peerChannel",
      "params": [
        {
          "name": "channel_id",
          "type": "int"
        }
      ],
      "type": "Peer"
    },
    {
      "id": 2861972229,
      "predicate": "storage.fileUnknown",
      "params": [],
      "type": "storage.FileType"
    },
    {
      "id": 1086091090,
      "predicate": "storage.filePartial",
      "params": [],
      "type": "storage.FileType"
    },
    {
      "id": 8322574,
      "predicate": "storage.fileJpeg",
      "params": [],
      "type": "storage.FileType"
    },
    {
      "id": 3403786975,
      "predicate": "storage.fileGif",
      "params": [],
      "type": "storage.FileType"
    },
    {
      "id": 172975040,
      "predicate": "storage.filePng",
      "params": [],
      "type": "storage.FileType"
    },
    {
      "id": 2921222285,
      "predicate": "storage.filePdf",
      "params": [],
      "type": "storage.FileType"
    },
    {
      "id": 1384777335,
      "predicate": "storage.fileMp3",
      "params": [],
      "type": "storage.FileType"
    },
    {
      "id": 1258941372,
      "predicate": "storage.fileMov",
      "params": [],
      "type": "storage.FileType"
    },
    {
      "id": 3016663268,
      "predicate": "storage.fileMp4",
      "params": [],
      "type": "storage.FileType"
    },
    {
      "id": 276907596,
      "predicate": "storage.fileWebp",
      "params": [],
      "type": "storage.FileType"
    },
    {
      "id": 537022650,
      "predicate": "userEmpty",
      "params": [
        {
          "name": "id",
          "type": "int"
        }
      ],
      "type": "User"
    },
    {
      "id": 2474924225,
      "predicate": "user",
      "params": [
        {
          "name": "flags",
          "type": "#"
        },
        {
          "name": "self",
          "type": "flags.10?true"
        },
        {
          "name": "contact",
          "type": "flags.11?true"
        },
        {
          "name": "mutual_contact",
          "type": "flags.12?true"
        },
        {
          "name": "deleted",
          "type": "flags.13?true"
        },
        {
          "name": "bot",
          "type": "flags.14?true"
        },
        {
          "name": "bot_chat_history",
          "type": "flags.15?true"
        },
        {
          "name": "bot_nochats",
          "type": "flags.16?true"
        },
        {
          "name": "verified",
          "type": "flags.17?true"
        },
        {
          "name": "restricted",
          "type": "flags.18?true"
        },
        {
          "name": "min",
          "type": "flags.20?true"
        },
        {
          "name": "bot_inline_geo",
          "type": "flags.21?true"
        },
        {
          "name": "support",
          "type": "flags.23?true"
        },
        {
          "name": "scam",
          "type": "flags.24?true"
        },
        {
          "name": "apply_min_photo",
          "type": "flags.25?true"
        },
        {
          "name": "fake",
          "type": "flags.26?true"
        },
        {
          "name": "id",
          "type": "int"
        },
        {
          "name": "access_hash",
          "type": "flags.0?long"
        },
        {
          "name": "first_name",
          "type": "flags.1?string"
        },
        {
          "name": "last_name",
          "type": "flags.2?string"
        },
        {
          "name": "username",
          "type": "flags.3?string"
        },
        {
          "name": "phone",
          "type": "flags.4?string"
        },
        {
          "name": "photo",
          "type": "flags.5?UserProfilePhoto"
        },
        {
          "name": "status",
          "type": "flags.6?UserStatus"
        },
        {
          "name": "bot_info_version",
          "type": "flags.14?int"
        },
        {
          "name": "restriction_reason",
          "type": "flags.18?Vector<RestrictionReason>"
        },
        {
          "name": "bot_inline_placeholder",
          "type": "flags.19?string"
        },
        {
          "name": "lang_code",
          "type": "flags.22?string"
        }
      ],
      "type": "User"
    },
    {
      "id": 1326562017,
      "predicate": "userProfilePhotoEmpty",
      "params": [],
      "type": "UserProfilePhoto"
    },
    {
      "id": 2194798342,
      "predicate": "userProfilePhoto",
      "params": [
        {
          "name": "flags",
          "type": "#"
        },
        {
          "name": "has_video",
          "type": "flags.0?true"
        },
        {
          "name": "photo_id",
          "type": "long"
        },
        {
          "name": "stripped_thumb",
          "type": "flags.1?bytes"
        },
        {
          "name": "dc_id",
          "type": "int"
        }
      ],
      "type": "UserProfilePhoto"
    },
    {
      "id": 164646985,
      "predicate": "userStatusEmpty",
      "params": [],
      "type": "UserStatus"
    },
    {
      "id": 3988339017,
      "predicate": "userStatusOnline",
      "params": [
        {
          "name": "expires",
          "type": "int"
        }
      ],
      "type": "UserStatus"
    },
    {
      "id": 9203775,
      "predicate": "userStatusOffline",
      "params": [
        {
          "name": "was_online",
          "type": "int"
        }
      ],
      "type": "UserStatus"
    },
    {
      "id": 3798942449,
      "predicate": "userStatusRecently",
      "params": [],
      "type": "UserStatus"
    },
    {
      "id": 129960444,
      "predicate": "userStatusLastWeek",
      "params": [],
      "type": "UserStatus"
    },
    {
      "id": 2011940674,
      "predicate": "userStatusLastMonth",
      "params": [],
      "type": "UserStatus"
    },
    {
      "id": 2611140608,
      "predicate": "chatEmpty",
      "params": [
        {
          "name": "id",
          "type": "int"
        }
      ],
      "type": "Chat"
    },
    {
      "id": 1004149726,
      "predicate": "chat",
      "params": [
        {
          "name": "flags",
          "type": "#"
        },
        {
          "name": "creator",
          "type": "flags.0?true"
        },
        {
          "name": "kicked",
          "type": "flags.1?true"
        },
        {
          "name": "left",
          "type": "flags.2?true"
        },
        {
          "name": "deactivated",
          "type": "flags.5?true"
        },
        {
          "name": "call_active",
          "type": "flags.23?true"
        },
        {
          "name": "call_not_empty",
          "type": "flags.24?true"
        },
        {
          "name": "id",
          "type": "int"
        },
        {
          "name": "title",
          "type": "string"
        },
        {
          "name": "photo",
          "type": "ChatPhoto"
        },
        {
          "name": "participants_count",
          "type": "int"
        },
        {
          "name": "date",
          "type": "int"
        },
        {
          "name": "version",
          "type": "int"
        },
        {
          "name": "migrated_to",
          "type": "flags.6?InputChannel"
        },
        {
          "name": "admin_rights",
          "type": "flags.14?ChatAdminRights"
        },
        {
          "name": "default_banned_rights",
          "type": "flags.18?ChatBannedRights"
        }
      ],
      "type": "Chat"
    },
    {
      "id": 120753115,
      "predicate": "chatForbidden",
      "params": [
        {
          "name": "id",
          "type": "int"
        },
        {
          "name": "title",
          "type": "string"
        }
      ],
      "type": "Chat"
    },
    {
      "id": 3541734942,
      "predicate": "channel",
      "params": [
        {
          "name": "flags",
          "type": "#"
        },
        {
          "name": "creator",
          "type": "flags.0?true"
        },
        {
          "name": "left",
          "type": "flags.2?true"
        },
        {
          "name": "broadcast",
          "type": "flags.5?true"
        },
        {
          "name": "verified",
          "type": "flags.7?true"
        },
        {
          "name": "megagroup",
          "type": "flags.8?true"
        },
        {
          "name": "restricted",
          "type": "flags.9?true"
        },
        {
          "name": "signatures",
          "type": "flags.11?true"
        },
        {
          "name": "min",
          "type": "flags.12?true"
        },
        {
          "name": "scam",
          "type": "flags.19?true"
        },
        {
          "name": "has_link",
          "type": "flags.20?true"
        },
        {
          "name": "has_geo",
          "type": "flags.21?true"
        },
        {
          "name": "slowmode_enabled",
          "type": "flags.22?true"
        },
        {
          "name": "call_active",
          "type": "flags.23?true"
        },
        {
          "name": "call_not_empty",
          "type": "flags.24?true"
        },
        {
          "name": "fake",
          "type": "flags.25?true"
        },
        {
          "name": "gigagroup",
          "type": "flags.26?true"
        },
        {
          "name": "id",
          "type": "int"
        },
        {
          "name": "access_hash",
          "type": "flags.13?long"
        },
        {
          "name": "title",
          "type": "string"
        },
        {
          "name": "username",
          "type": "flags.6?string"
        },
        {
          "name": "photo",
          "type": "ChatPhoto"
        },
        {
          "name": "date",
          "type": "int"
        },
        {
          "name": "version",
          "type": "int"
        },
        {
          "name": "restriction_reason",
          "type": "flags.9?Vector<RestrictionReason>"
        },
        {
          "name": "admin_rights",
          "type": "flags.14?ChatAdminRights"
        },
        {
          "name": "banned_rights",
          "type": "flags.15?ChatBannedRights"
        },
        {
          "name": "default_banned_rights",
          "type": "flags.18?ChatBannedRights"
        },
        {
          "name": "participants_count",
          "type": "flags.17?int"
        }
      ],
      "type": "Chat"
    },
    {
      "id": 681420594,
      "predicate": "channelForbidden",
      "params": [
        {
          "name": "flags",
          "type": "#"
        },
        {
          "name": "broadcast",
          "type": "flags.5?true"
        },
        {
          "name": "megagroup",
          "type": "flags.8?true"
        },
        {
          "name": "id",
          "type": "int"
        },
        {
          "name": "access_hash",
          "type": "long"
        },
        {
          "name": "title",
          "type": "string"
        },
        {
          "name": "until_date",
          "type": "flags.16?int"
        }
      ],
      "type": "Chat"
    },
    {
      "id": 2317232515,
      "predicate": "chatFull",
      "params": [
        {
          "name": "flags",
          "type": "#"
        },
        {
          "name": "can_set_username",
          "type": "flags.7?true"
        },
        {
          "name": "has_scheduled",
          "type": "flags.8?true"
        },
        {
          "name": "id",
          "type": "int"
        },
        {
          "name": "about",
          "type": "string"
        },
        {
          "name": "participants",
          "type": "ChatParticipants"
        },
        {
          "name": "chat_photo",
          "type": "flags.2?Photo"
        },
        {
          "name": "notify_settings",
          "type": "PeerNotifySettings"
        },
        {
          "name": "exported_invite",
          "type": "flags.13?ExportedChatInvite"
        },
        {
          "name": "bot_info",
          "type": "flags.3?Vector<BotInfo>"
        },
        {
          "name": "pinned_msg_id",
          "type": "flags.6?int"
        },
        {
          "name": "folder_id",
          "type": "flags.11?int"
        },
        {
          "name": "call",
          "type": "flags.12?InputGroupCall"
        },
        {
          "name": "ttl_period",
          "type": "flags.14?int"
        },
        {
          "name": "groupcall_default_join_as",
          "type": "flags.15?Peer"
        }
      ],
      "type": "ChatFull"
    },
    {
      "id": 1418477459,
      "predicate": "channelFull",
      "params": [
        {
          "name": "flags",
          "type": "#"
        },
        {
          "name": "can_view_participants",
          "type": "flags.3?true"
        },
        {
          "name": "can_set_username",
          "type": "flags.6?true"
        },
        {
          "name": "can_set_stickers",
          "type": "flags.7?true"
        },
        {
          "name": "hidden_prehistory",
          "type": "flags.10?true"
        },
        {
          "name": "can_set_location",
          "type": "flags.16?true"
        },
        {
          "name": "has_scheduled",
          "type": "flags.19?true"
        },
        {
          "name": "can_view_stats",
          "type": "flags.20?true"
        },
        {
          "name": "blocked",
          "type": "flags.22?true"
        },
        {
          "name": "id",
          "type": "int"
        },
        {
          "name": "about",
          "type": "string"
        },
        {
          "name": "participants_count",
          "type": "flags.0?int"
        },
        {
          "name": "admins_count",
          "type": "flags.1?int"
        },
        {
          "name": "kicked_count",
          "type": "flags.2?int"
        },
        {
          "name": "banned_count",
          "type": "flags.2?int"
        },
        {
          "name": "online_count",
          "type": "flags.13?int"
        },
        {
          "name": "read_inbox_max_id",
          "type": "int"
        },
        {
          "name": "read_outbox_max_id",
          "type": "int"
        },
        {
          "name": "unread_count",
          "type": "int"
        },
        {
          "name": "chat_photo",
          "type": "Photo"
        },
        {
          "name": "notify_settings",
          "type": "PeerNotifySettings"
        },
        {
          "name": "exported_invite",
          "type": "flags.23?ExportedChatInvite"
        },
        {
          "name": "bot_info",
          "type": "Vector<BotInfo>"
        },
        {
          "name": "migrated_from_chat_id",
          "type": "flags.4?int"
        },
        {
          "name": "migrated_from_max_id",
          "type": "flags.4?int"
        },
        {
          "name": "pinned_msg_id",
          "type": "flags.5?int"
        },
        {
          "name": "stickerset",
          "type": "flags.8?StickerSet"
        },
        {
          "name": "available_min_id",
          "type": "flags.9?int"
        },
        {
          "name": "folder_id",
          "type": "flags.11?int"
        },
        {
          "name": "linked_chat_id",
          "type": "flags.14?int"
        },
        {
          "name": "location",
          "type": "flags.15?ChannelLocation"
        },
        {
          "name": "slowmode_seconds",
          "type": "flags.17?int"
        },
        {
          "name": "slowmode_next_send_date",
          "type": "flags.18?int"
        },
        {
          "name": "stats_dc",
          "type": "flags.12?int"
        },
        {
          "name": "pts",
          "type": "int"
        },
        {
          "name": "call",
          "type": "flags.21?InputGroupCall"
        },
        {
          "name": "ttl_period",
          "type": "flags.24?int"
        },
        {
          "name": "pending_suggestions",
          "type": "flags.25?Vector<string>"
        },
        {
          "name": "groupcall_default_join_as",
          "type": "flags.26?Peer"
        }
      ],
      "type": "ChatFull"
    },
    {
      "id": 3369552190,
      "predicate": "chatParticipant",
      "params": [
        {
          "name": "user_id",
          "type": "int"
        },
        {
          "name": "inviter_id",
          "type": "int"
        },
        {
          "name": "date",
          "type": "int"
        }
      ],
      "type": "ChatParticipant"
    },
    {
      "id": 3658699658,
      "predicate": "chatParticipantCreator",
      "params": [
        {
          "name": "user_id",
          "type": "int"
        }
      ],
      "type": "ChatParticipant"
    },
    {
      "id": 3805733942,
      "predicate": "chatParticipantAdmin",
      "params": [
        {
          "name": "user_id",
          "type": "int"
        },
        {
          "name": "inviter_id",
          "type": "int"
        },
        {
          "name": "date",
          "type": "int"
        }
      ],
      "type": "ChatParticipant"
    },
    {
      "id": 4237298731,
      "predicate": "chatParticipantsForbidden",
      "params": [
        {
          "name": "flags",
          "type": "#"
        },
        {
          "name": "chat_id",
          "type": "int"
        },
        {
          "name": "self_participant",
          "type": "flags.0?ChatParticipant"
        }
      ],
      "type": "ChatParticipants"
    },
    {
      "id": 1061556205,
      "predicate": "chatParticipants",
      "params": [
        {
          "name": "chat_id",
          "type": "int"
        },
        {
          "name": "participants",
          "type": "Vector<ChatParticipant>"
        },
        {
          "name": "version",
          "type": "int"
        }
      ],
      "type": "ChatParticipants"
    },
    {
      "id": 935395612,
      "predicate": "chatPhotoEmpty",
      "params": [],
      "type": "ChatPhoto"
    },
    {
      "id": 476978193,
      "predicate": "chatPhoto",
      "params": [
        {
          "name": "flags",
          "type": "#"
        },
        {
          "name": "has_video",
          "type": "flags.0?true"
        },
        {
          "name": "photo_id",
          "type": "long"
        },
        {
          "name": "stripped_thumb",
          "type": "flags.1?bytes"
        },
        {
          "name": "dc_id",
          "type": "int"
        }
      ],
      "type": "ChatPhoto"
    },
    {
      "id": 2426849924,
      "predicate": "messageEmpty",
      "params": [
        {
          "name": "flags",
          "type": "#"
        },
        {
          "name": "id",
          "type": "int"
        },
        {
          "name": "peer_id",
          "type": "flags.0?Peer"
        }
      ],
      "type": "Message"
    },
    {
      "id": 3169027026,
      "predicate": "message",
      "params": [
        {
          "name": "flags",
          "type": "#"
        },
        {
          "name": "out",
          "type": "flags.1?true"
        },
        {
          "name": "mentioned",
          "type": "flags.4?true"
        },
        {
          "name": "media_unread",
          "type": "flags.5?true"
        },
        {
          "name": "silent",
          "type": "flags.13?true"
        },
        {
          "name": "post",
          "type": "flags.14?true"
        },
        {
          "name": "from_scheduled",
          "type": "flags.18?true"
        },
        {
          "name": "legacy",
          "type": "flags.19?true"
        },
        {
          "name": "edit_hide",
          "type": "flags.21?true"
        },
        {
          "name": "pinned",
          "type": "flags.24?true"
        },
        {
          "name": "id",
          "type": "int"
        },
        {
          "name": "from_id",
          "type": "flags.8?Peer"
        },
        {
          "name": "peer_id",
          "type": "Peer"
        },
        {
          "name": "fwd_from",
          "type": "flags.2?MessageFwdHeader"
        },
        {
          "name": "via_bot_id",
          "type": "flags.11?int"
        },
        {
          "name": "reply_to",
          "type": "flags.3?MessageReplyHeader"
        },
        {
          "name": "date",
          "type": "int"
        },
        {
          "name": "message",
          "type": "string"
        },
        {
          "name": "media",
          "type": "flags.9?MessageMedia"
        },
        {
          "name": "reply_markup",
          "type": "flags.6?ReplyMarkup"
        },
        {
          "name": "entities",
          "type": "flags.7?Vector<MessageEntity>"
        },
        {
          "name": "views",
          "type": "flags.10?int"
        },
        {
          "name": "forwards",
          "type": "flags.10?int"
        },
        {
          "name": "replies",
          "type": "flags.23?MessageReplies"
        },
        {
          "name": "edit_date",
          "type": "flags.15?int"
        },
        {
          "name": "post_author",
          "type": "flags.16?string"
        },
        {
          "name": "grouped_id",
          "type": "flags.17?long"
        },
        {
          "name": "restriction_reason",
          "type": "flags.22?Vector<RestrictionReason>"
        },
        {
          "name": "ttl_period",
          "type": "flags.25?int"
        }
      ],
      "type": "Message"
    },
    {
      "id": 721967202,
      "predicate": "messageService",
      "params": [
        {
          "name": "flags",
          "type": "#"
        },
        {
          "name": "out",
          "type": "flags.1?true"
        },
        {
          "name": "mentioned",
          "type": "flags.4?true"
        },
        {
          "name": "media_unread",
          "type": "flags.5?true"
        },
        {
          "name": "silent",
          "type": "flags.13?true"
        },
        {
          "name": "post",
          "type": "flags.14?true"
        },
        {
          "name": "legacy",
          "type": "flags.19?true"
        },
        {
          "name": "id",
          "type": "int"
        },
        {
          "name": "from_id",
          "type": "flags.8?Peer"
        },
        {
          "name": "peer_id",
          "type": "Peer"
        },
        {
          "name": "reply_to",
          "type": "flags.3?MessageReplyHeader"
        },
        {
          "name": "date",
          "type": "int"
        },
        {
          "name": "action",
          "type": "MessageAction"
        },
        {
          "name": "ttl_period",
          "type": "flags.25?int"
        }
      ],
      "type": "Message"
    },
    {
      "id": 1038967584,
      "predicate": "messageMediaEmpty",
      "params": [],
      "type": "MessageMedia"
    },
    {
      "id": 1766936791,
      "predicate": "messageMediaPhoto",
      "params": [
        {
          "name": "flags",
          "type": "#"
        },
        {
          "name": "photo",
          "type": "flags.0?Photo"
        },
        {
          "name": "ttl_seconds",
          "type": "flags.2?int"
        }
      ],
      "type": "MessageMedia"
    },
    {
      "id": 1457575028,
      "predicate": "messageMediaGeo",
      "params": [
        {
          "name": "geo",
          "type": "GeoPoint"
        }
      ],
      "type": "MessageMedia"
    },
    {
      "id": 3421653312,
      "predicate": "messageMediaContact",
      "params": [
        {
          "name": "phone_number",
          "type": "string"
        },
        {
          "name": "first_name",
          "type": "string"
        },
        {
          "name": "last_name",
          "type": "string"
        },
        {
          "name": "vcard",
          "type": "string"
        },
        {
          "name": "user_id",
          "type": "int"
        }
      ],
      "type": "MessageMedia"
    },
    {
      "id": 2676290718,
      "predicate": "messageMediaUnsupported",
      "params": [],
      "type": "MessageMedia"
    },
    {
      "id": 2628808919,
      "predicate": "messageMediaDocument",
      "params": [
        {
          "name": "flags",
          "type": "#"
        },
        {
          "name": "document",
          "type": "flags.0?Document"
        },
        {
          "name": "ttl_seconds",
          "type": "flags.2?int"
        }
      ],
      "type": "MessageMedia"
    },
    {
      "id": 2737690112,
      "predicate": "messageMediaWebPage",
      "params": [
        {
          "name": "webpage",
          "type": "WebPage"
        }
      ],
      "type": "MessageMedia"
    },
    {
      "id": 784356159,
      "predicate": "messageMediaVenue",
      "params": [
        {
          "name": "geo",
          "type": "GeoPoint"
        },
        {
          "name": "title",
          "type": "string"
        },
        {
          "name": "address",
          "type": "string"
        },
        {
          "name": "provider",
          "type": "string"
        },
        {
          "name": "venue_id",
          "type": "string"
        },
        {
          "name": "venue_type",
          "type": "string"
        }
      ],
      "type": "MessageMedia"
    },
    {
      "id": 4256272392,
      "predicate": "messageMediaGame",
      "params": [
        {
          "name": "game",
          "type": "Game"
        }
      ],
      "type": "MessageMedia"
    },
    {
      "id": 2220168007,
      "predicate": "messageMediaInvoice",
      "params": [
        {
          "name": "flags",
          "type": "#"
        },
        {
          "name": "shipping_address_requested",
          "type": "flags.1?true"
        },
        {
          "name": "test",
          "type": "flags.3?true"
        },
        {
          "name": "title",
          "type": "string"
        },
        {
          "name": "description",
          "type": "string"
        },
        {
          "name": "photo",
          "type": "flags.0?WebDocument"
        },
        {
          "name": "receipt_msg_id",
          "type": "flags.2?int"
        },
        {
          "name": "currency",
          "type": "string"
        },
        {
          "name": "total_amount",
          "type": "long"
        },
        {
          "name": "start_param",
          "type": "string"
        }
      ],
      "type": "MessageMedia"
    },
    {
      "id": 3108030054,
      "predicate": "messageMediaGeoLive",
      "params": [
        {
          "name": "flags",
          "type": "#"
        },
        {
          "name": "geo",
          "type": "GeoPoint"
        },
        {
          "name": "heading",
          "type": "flags.0?int"
        },
        {
          "name": "period",
          "type": "int"
        },
        {
          "name": "proximity_notification_radius",
          "type": "flags.1?int"
        }
      ],
      "type": "MessageMedia"
    },
    {
      "id": 1272375192,
      "predicate": "messageMediaPoll",
      "params": [
        {
          "name": "poll",
          "type": "Poll"
        },
        {
          "name": "results",
          "type": "PollResults"
        }
      ],
      "type": "MessageMedia"
    },
    {
      "id": 1065280907,
      "predicate": "messageMediaDice",
      "params": [
        {
          "name": "value",
          "type": "int"
        },
        {
          "name": "emoticon",
          "type": "string"
        }
      ],
      "type": "MessageMedia"
    },
    {
      "id": 3064919984,
      "predicate": "messageActionEmpty",
      "params": [],
      "type": "MessageAction"
    },
    {
      "id": 2791541658,
      "predicate": "messageActionChatCreate",
      "params": [
        {
          "name": "title",
          "type": "string"
        },
        {
          "name": "users",
          "type": "Vector<int>"
        }
      ],
      "type": "MessageAction"
    },
    {
      "id": 3047280218,
      "predicate": "messageActionChatEditTitle",
      "params": [
        {
          "name": "title",
          "type": "string"
        }
      ],
      "type": "MessageAction"
    },
    {
      "id": 2144015272,
      "predicate": "messageActionChatEditPhoto",
      "params": [
        {
          "name": "photo",
          "type": "Photo"
        }
      ],
      "type": "MessageAction"
    },
    {
      "id": 2514746351,
      "predicate": "messageActionChatDeletePhoto",
      "params": [],
      "type": "MessageAction"
    },
    {
      "id": 1217033015,
      "predicate": "messageActionChatAddUser",
      "params": [
        {
          "name": "users",
          "type": "Vector<int>"
        }
      ],
      "type": "MessageAction"
    },
    {
      "id": 2997787404,
      "predicate": "messageActionChatDeleteUser",
      "params": [
        {
          "name": "user_id",
          "type": "int"
        }
      ],
      "type": "MessageAction"
    },
    {
      "id": 4171036136,
      "predicate": "messageActionChatJoinedByLink",
      "params": [
        {
          "name": "inviter_id",
          "type": "int"
        }
      ],
      "type": "MessageAction"
    },
    {
      "id": 2513611922,
      "predicate": "messageActionChannelCreate",
      "params": [
        {
          "name": "title",
          "type": "string"
        }
      ],
      "type": "MessageAction"
    },
    {
      "id": 1371385889,
      "predicate": "messageActionChatMigrateTo",
      "params": [
        {
          "name": "channel_id",
          "type": "int"
        }
      ],
      "type": "MessageAction"
    },
    {
      "id": 2958420718,
      "predicate": "messageActionChannelMigrateFrom",
      "params": [
        {
          "name": "title",
          "type": "string"
        },
        {
          "name": "chat_id",
          "type": "int"
        }
      ],
      "type": "MessageAction"
    },
    {
      "id": 2495428845,
      "predicate": "messageActionPinMessage",
      "params": [],
      "type": "MessageAction"
    },
    {
      "id": 2679813636,
      "predicate": "messageActionHistoryClear",
      "params": [],
      "type": "MessageAction"
    },
    {
      "id": 2460428406,
      "predicate": "messageActionGameScore",
      "params": [
        {
          "name": "game_id",
          "type": "long"
        },
        {
          "name": "score",
          "type": "int"
        }
      ],
      "type": "MessageAction"
    },
    {
      "id": 2402399015,
      "predicate": "messageActionPaymentSentMe",
      "params": [
        {
          "name": "flags",
          "type": "#"
        },
        {
          "name": "currency",
          "type": "string"
        },
        {
          "name": "total_amount",
          "type": "long"
        },
        {
          "name": "payload",
          "type": "bytes"
        },
        {
          "name": "info",
          "type": "flags.0?PaymentRequestedInfo"
        },
        {
          "name": "shipping_option_id",
          "type": "flags.1?string"
        },
        {
          "name": "charge",
          "type": "PaymentCharge"
        }
      ],
      "type": "MessageAction"
    },
    {
      "id": 1080663248,
      "predicate": "messageActionPaymentSent",
      "params": [
        {
          "name": "currency",
          "type": "string"
        },
        {
          "name": "total_amount",
          "type": "long"
        }
      ],
      "type": "MessageAction"
    },
    {
      "id": 2162236031,
      "predicate": "messageActionPhoneCall",
      "params": [
        {
          "name": "flags",
          "type": "#"
        },
        {
          "name": "video",
          "type": "flags.2?true"
        },
        {
          "name": "call_id",
          "type": "long"
        },
        {
          "name": "reason",
          "type": "flags.0?PhoneCallDiscardReason"
        },
        {
          "name": "duration",
          "type": "flags.1?int"
        }
      ],
      "type": "MessageAction"
    },
    {
      "id": 1200788123,
      "predicate": "messageActionScreenshotTaken",
      "params": [],
      "type": "MessageAction"
    },
    {
      "id": 4209418070,
      "predicate": "messageActionCustomAction",
      "params": [
        {
          "name": "message",
          "type": "string"
        }
      ],
      "type": "MessageAction"
    },
    {
      "id": 2884218878,
      "predicate": "messageActionBotAllowed",
      "params": [
        {
          "name": "domain",
          "type": "string"
        }
      ],
      "type": "MessageAction"
    },
    {
      "id": 455635795,
      "predicate": "messageActionSecureValuesSentMe",
      "params": [
        {
          "name": "values",
          "type": "Vector<SecureValue>"
        },
        {
          "name": "credentials",
          "type": "SecureCredentialsEncrypted"
        }
      ],
      "type": "MessageAction"
    },
    {
      "id": 3646710100,
      "predicate": "messageActionSecureValuesSent",
      "params": [
        {
          "name": "types",
          "type": "Vector<SecureValueType>"
        }
      ],
      "type": "MessageAction"
    },
    {
      "id": 4092747638,
      "predicate": "messageActionContactSignUp",
      "params": [],
      "type": "MessageAction"
    },
    {
      "id": 2564871831,
      "predicate": "messageActionGeoProximityReached",
      "params": [
        {
          "name": "from_id",
          "type": "Peer"
        },
        {
          "name": "to_id",
          "type": "Peer"
        },
        {
          "name": "distance",
          "type": "int"
        }
      ],
      "type": "MessageAction"
    },
    {
      "id": 2047704898,
      "predicate": "messageActionGroupCall",
      "params": [
        {
          "name": "flags",
          "type": "#"
        },
        {
          "name": "call",
          "type": "InputGroupCall"
        },
        {
          "name": "duration",
          "type": "flags.0?int"
        }
      ],
      "type": "MessageAction"
    },
    {
      "id": 1991897370,
      "predicate": "messageActionInviteToGroupCall",
      "params": [
        {
          "name": "call",
          "type": "InputGroupCall"
        },
        {
          "name": "users",
          "type": "Vector<int>"
        }
      ],
      "type": "MessageAction"
    },
    {
      "id": 2853895165,
      "predicate": "messageActionSetMessagesTTL",
      "params": [
        {
          "name": "period",
          "type": "int"
        }
      ],
      "type": "MessageAction"
    },
    {
      "id": 3013637729,
      "predicate": "messageActionGroupCallScheduled",
      "params": [
        {
          "name": "call",
          "type": "InputGroupCall"
        },
        {
          "name": "schedule_date",
          "type": "int"
        }
      ],
      "type": "MessageAction"
    },
    {
      "id": 739712882,
      "predicate": "dialog",
      "params": [
        {
          "name": "flags",
          "type": "#"
        },
        {
          "name": "pinned",
          "type": "flags.2?true"
        },
        {
          "name": "unread_mark",
          "type": "flags.3?true"
        },
        {
          "name": "peer",
          "type": "Peer"
        },
        {
          "name": "top_message",
          "type": "int"
        },
        {
          "name": "read_inbox_max_id",
          "type": "int"
        },
        {
          "name": "read_outbox_max_id",
          "type": "int"
        },
        {
          "name": "unread_count",
          "type": "int"
        },
        {
          "name": "unread_mentions_count",
          "type": "int"
        },
        {
          "name": "notify_settings",
          "type": "PeerNotifySettings"
        },
        {
          "name": "pts",
          "type": "flags.0?int"
        },
        {
          "name": "draft",
          "type": "flags.1?DraftMessage"
        },
        {
          "name": "folder_id",
          "type": "flags.4?int"
        }
      ],
      "type": "Dialog"
    },
    {
      "id": 1908216652,
      "predicate": "dialogFolder",
      "params": [
        {
          "name": "flags",
          "type": "#"
        },
        {
          "name": "pinned",
          "type": "flags.2?true"
        },
        {
          "name": "folder",
          "type": "Folder"
        },
        {
          "name": "peer",
          "type": "Peer"
        },
        {
          "name": "top_message",
          "type": "int"
        },
        {
          "name": "unread_muted_peers_count",
          "type": "int"
        },
        {
          "name": "unread_unmuted_peers_count",
          "type": "int"
        },
        {
          "name": "unread_muted_messages_count",
          "type": "int"
        },
        {
          "name": "unread_unmuted_messages_count",
          "type": "int"
        }
      ],
      "type": "Dialog"
    },
    {
      "id": 590459437,
      "predicate": "photoEmpty",
      "params": [
        {
          "name": "id",
          "type": "long"
        }
      ],
      "type": "Photo"
    },
    {
      "id": 4212750949,
      "predicate": "photo",
      "params": [
        {
          "name": "flags",
          "type": "#"
        },
        {
          "name": "has_stickers",
          "type": "flags.0?true"
        },
        {
          "name": "id",
          "type": "long"
        },
        {
          "name": "access_hash",
          "type": "long"
        },
        {
          "name": "file_reference",
          "type": "bytes"
        },
        {
          "name": "date",
          "type": "int"
        },
        {
          "name": "sizes",
          "type": "Vector<PhotoSize>"
        },
        {
          "name": "video_sizes",
          "type": "flags.1?Vector<VideoSize>"
        },
        {
          "name": "dc_id",
          "type": "int"
        }
      ],
      "type": "Photo"
    },
    {
      "id": 236446268,
      "predicate": "photoSizeEmpty",
      "params": [
        {
          "name": "type",
          "type": "string"
        }
      ],
      "type": "PhotoSize"
    },
    {
      "id": 1976012384,
      "predicate": "photoSize",
      "params": [
        {
          "name": "type",
          "type": "string"
        },
        {
          "name": "w",
          "type": "int"
        },
        {
          "name": "h",
          "type": "int"
        },
        {
          "name": "size",
          "type": "int"
        }
      ],
      "type": "PhotoSize"
    },
    {
      "id": 35527382,
      "predicate": "photoCachedSize",
      "params": [
        {
          "name": "type",
          "type": "string"
        },
        {
          "name": "w",
          "type": "int"
        },
        {
          "name": "h",
          "type": "int"
        },
        {
          "name": "bytes",
          "type": "bytes"
        }
      ],
      "type": "PhotoSize"
    },
    {
      "id": 3769678894,
      "predicate": "photoStrippedSize",
      "params": [
        {
          "name": "type",
          "type": "string"
        },
        {
          "name": "bytes",
          "type": "bytes"
        }
      ],
      "type": "PhotoSize"
    },
    {
      "id": 4198431637,
      "predicate": "photoSizeProgressive",
      "params": [
        {
          "name": "type",
          "type": "string"
        },
        {
          "name": "w",
          "type": "int"
        },
        {
          "name": "h",
          "type": "int"
        },
        {
          "name": "sizes",
          "type": "Vector<int>"
        }
      ],
      "type": "PhotoSize"
    },
    {
      "id": 3626061121,
      "predicate": "photoPathSize",
      "params": [
        {
          "name": "type",
          "type": "string"
        },
        {
          "name": "bytes",
          "type": "bytes"
        }
      ],
      "type": "PhotoSize"
    },
    {
      "id": 286776671,
      "predicate": "geoPointEmpty",
      "params": [],
      "type": "GeoPoint"
    },
    {
      "id": 2997024355,
      "predicate": "geoPoint",
      "params": [
        {
          "name": "flags",
          "type": "#"
        },
        {
          "name": "long",
          "type": "double"
        },
        {
          "name": "lat",
          "type": "double"
        },
        {
          "name": "access_hash",
          "type": "long"
        },
        {
          "name": "accuracy_radius",
          "type": "flags.0?int"
        }
      ],
      "type": "GeoPoint"
    },
    {
      "id": 1577067778,
      "predicate": "auth.sentCode",
      "params": [
        {
          "name": "flags",
          "type": "#"
        },
        {
          "name": "type",
          "type": "auth.SentCodeType"
        },
        {
          "name": "phone_code_hash",
          "type": "string"
        },
        {
          "name": "next_type",
          "type": "flags.1?auth.CodeType"
        },
        {
          "name": "timeout",
          "type": "flags.2?int"
        }
      ],
      "type": "auth.SentCode"
    },
    {
      "id": 3439659286,
      "predicate": "auth.authorization",
      "params": [
        {
          "name": "flags",
          "type": "#"
        },
        {
          "name": "tmp_sessions",
          "type": "flags.0?int"
        },
        {
          "name": "user",
          "type": "User"
        }
      ],
      "type": "auth.Authorization"
    },
    {
      "id": 1148485274,
      "predicate": "auth.authorizationSignUpRequired",
      "params": [
        {
          "name": "flags",
          "type": "#"
        },
        {
          "name": "terms_of_service",
          "type": "flags.0?help.TermsOfService"
        }
      ],
      "type": "auth.Authorization"
    },
    {
      "id": 3751189549,
      "predicate": "auth.exportedAuthorization",
      "params": [
        {
          "name": "id",
          "type": "int"
        },
        {
          "name": "bytes",
          "type": "bytes"
        }
      ],
      "type": "auth.ExportedAuthorization"
    },
    {
      "id": 3099351820,
      "predicate": "inputNotifyPeer",
      "params": [
        {
          "name": "peer",
          "type": "InputPeer"
        }
      ],
      "type": "InputNotifyPeer"
    },
    {
      "id": 423314455,
      "predicate": "inputNotifyUsers",
      "params": [],
      "type": "InputNotifyPeer"
    },
    {
      "id": 1251338318,
      "predicate": "inputNotifyChats",
      "params": [],
      "type": "InputNotifyPeer"
    },
    {
      "id": 2983951486,
      "predicate": "inputNotifyBroadcasts",
      "params": [],
      "type": "InputNotifyPeer"
    },
    {
      "id": 2621249934,
      "predicate": "inputPeerNotifySettings",
      "params": [
        {
          "name": "flags",
          "type": "#"
        },
        {
          "name": "show_previews",
          "type": "flags.0?Bool"
        },
        {
          "name": "silent",
          "type": "flags.1?Bool"
        },
        {
          "name": "mute_until",
          "type": "flags.2?int"
        },
        {
          "name": "sound",
          "type": "flags.3?string"
        }
      ],
      "type": "InputPeerNotifySettings"
    },
    {
      "id": 2941295904,
      "predicate": "peerNotifySettings",
      "params": [
        {
          "name": "flags",
          "type": "#"
        },
        {
          "name": "show_previews",
          "type": "flags.0?Bool"
        },
        {
          "name": "silent",
          "type": "flags.1?Bool"
        },
        {
          "name": "mute_until",
          "type": "flags.2?int"
        },
        {
          "name": "sound",
          "type": "flags.3?string"
        }
      ],
      "type": "PeerNotifySettings"
    },
    {
      "id": 1933519201,
      "predicate": "peerSettings",
      "params": [
        {
          "name": "flags",
          "type": "#"
        },
        {
          "name": "report_spam",
          "type": "flags.0?true"
        },
        {
          "name": "add_contact",
          "type": "flags.1?true"
        },
        {
          "name": "block_contact",
          "type": "flags.2?true"
        },
        {
          "name": "share_contact",
          "type": "flags.3?true"
        },
        {
          "name": "need_contacts_exception",
          "type": "flags.4?true"
        },
        {
          "name": "report_geo",
          "type": "flags.5?true"
        },
        {
          "name": "autoarchived",
          "type": "flags.7?true"
        },
        {
          "name": "invite_members",
          "type": "flags.8?true"
        },
        {
          "name": "geo_distance",
          "type": "flags.6?int"
        }
      ],
      "type": "PeerSettings"
    },
    {
      "id": 2755118061,
      "predicate": "wallPaper",
      "params": [
        {
          "name": "id",
          "type": "long"
        },
        {
          "name": "flags",
          "type": "#"
        },
        {
          "name": "creator",
          "type": "flags.0?true"
        },
        {
          "name": "default",
          "type": "flags.1?true"
        },
        {
          "name": "pattern",
          "type": "flags.3?true"
        },
        {
          "name": "dark",
          "type": "flags.4?true"
        },
        {
          "name": "access_hash",
          "type": "long"
        },
        {
          "name": "slug",
          "type": "string"
        },
        {
          "name": "document",
          "type": "Document"
        },
        {
          "name": "settings",
          "type": "flags.2?WallPaperSettings"
        }
      ],
      "type": "WallPaper"
    },
    {
      "id": 3766501654,
      "predicate": "wallPaperNoFile",
      "params": [
        {
          "name": "id",
          "type": "long"
        },
        {
          "name": "flags",
          "type": "#"
        },
        {
          "name": "default",
          "type": "flags.1?true"
        },
        {
          "name": "dark",
          "type": "flags.4?true"
        },
        {
          "name": "settings",
          "type": "flags.2?WallPaperSettings"
        }
      ],
      "type": "WallPaper"
    },
    {
      "id": 1490799288,
      "predicate": "inputReportReasonSpam",
      "params": [],
      "type": "ReportReason"
    },
    {
      "id": 505595789,
      "predicate": "inputReportReasonViolence",
      "params": [],
      "type": "ReportReason"
    },
    {
      "id": 777640226,
      "predicate": "inputReportReasonPornography",
      "params": [],
      "type": "ReportReason"
    },
    {
      "id": 2918469347,
      "predicate": "inputReportReasonChildAbuse",
      "params": [],
      "type": "ReportReason"
    },
    {
      "id": 3252986545,
      "predicate": "inputReportReasonOther",
      "params": [],
      "type": "ReportReason"
    },
    {
      "id": 2609510714,
      "predicate": "inputReportReasonCopyright",
      "params": [],
      "type": "ReportReason"
    },
    {
      "id": 3688169197,
      "predicate": "inputReportReasonGeoIrrelevant",
      "params": [],
      "type": "ReportReason"
    },
    {
      "id": 4124956391,
      "predicate": "inputReportReasonFake",
      "params": [],
      "type": "ReportReason"
    },
    {
      "id": 328899191,
      "predicate": "userFull",
      "params": [
        {
          "name": "flags",
          "type": "#"
        },
        {
          "name": "blocked",
          "type": "flags.0?true"
        },
        {
          "name": "phone_calls_available",
          "type": "flags.4?true"
        },
        {
          "name": "phone_calls_private",
          "type": "flags.5?true"
        },
        {
          "name": "can_pin_message",
          "type": "flags.7?true"
        },
        {
          "name": "has_scheduled",
          "type": "flags.12?true"
        },
        {
          "name": "video_calls_available",
          "type": "flags.13?true"
        },
        {
          "name": "user",
          "type": "User"
        },
        {
          "name": "about",
          "type": "flags.1?string"
        },
        {
          "name": "settings",
          "type": "PeerSettings"
        },
        {
          "name": "profile_photo",
          "type": "flags.2?Photo"
        },
        {
          "name": "notify_settings",
          "type": "PeerNotifySettings"
        },
        {
          "name": "bot_info",
          "type": "flags.3?BotInfo"
        },
        {
          "name": "pinned_msg_id",
          "type": "flags.6?int"
        },
        {
          "name": "common_chats_count",
          "type": "int"
        },
        {
          "name": "folder_id",
          "type": "flags.11?int"
        },
        {
          "name": "ttl_period",
          "type": "flags.14?int"
        }
      ],
      "type": "UserFull"
    },
    {
      "id": 4178692500,
      "predicate": "contact",
      "params": [
        {
          "name": "user_id",
          "type": "int"
        },
        {
          "name": "mutual",
          "type": "Bool"
        }
      ],
      "type": "Contact"
    },
    {
      "id": 3489825848,
      "predicate": "importedContact",
      "params": [
        {
          "name": "user_id",
          "type": "int"
        },
        {
          "name": "client_id",
          "type": "long"
        }
      ],
      "type": "ImportedContact"
    },
    {
      "id": 3546811489,
      "predicate": "contactStatus",
      "params": [
        {
          "name": "user_id",
          "type": "int"
        },
        {
          "name": "status",
          "type": "UserStatus"
        }
      ],
      "type": "ContactStatus"
    },
    {
      "id": 3075189202,
      "predicate": "contacts.contactsNotModified",
      "params": [],
      "type": "contacts.Contacts"
    },
    {
      "id": 3941105218,
      "predicate": "contacts.contacts",
      "params": [
        {
          "name": "contacts",
          "type": "Vector<Contact>"
        },
        {
          "name": "saved_count",
          "type": "int"
        },
        {
          "name": "users",
          "type": "Vector<User>"
        }
      ],
      "type": "contacts.Contacts"
    },
    {
      "id": 2010127419,
      "predicate": "contacts.importedContacts",
      "params": [
        {
          "name": "imported",
          "type": "Vector<ImportedContact>"
        },
        {
          "name": "popular_invites",
          "type": "Vector<PopularContact>"
        },
        {
          "name": "retry_contacts",
          "type": "Vector<long>"
        },
        {
          "name": "users",
          "type": "Vector<User>"
        }
      ],
      "type": "contacts.ImportedContacts"
    },
    {
      "id": 182326673,
      "predicate": "contacts.blocked",
      "params": [
        {
          "name": "blocked",
          "type": "Vector<PeerBlocked>"
        },
        {
          "name": "chats",
          "type": "Vector<Chat>"
        },
        {
          "name": "users",
          "type": "Vector<User>"
        }
      ],
      "type": "contacts.Blocked"
    },
    {
      "id": 3781575060,
      "predicate": "contacts.blockedSlice",
      "params": [
        {
          "name": "count",
          "type": "int"
        },
        {
          "name": "blocked",
          "type": "Vector<PeerBlocked>"
        },
        {
          "name": "chats",
          "type": "Vector<Chat>"
        },
        {
          "name": "users",
          "type": "Vector<User>"
        }
      ],
      "type": "contacts.Blocked"
    },
    {
      "id": 364538944,
      "predicate": "messages.dialogs",
      "params": [
        {
          "name": "dialogs",
          "type": "Vector<Dialog>"
        },
        {
          "name": "messages",
          "type": "Vector<Message>"
        },
        {
          "name": "chats",
          "type": "Vector<Chat>"
        },
        {
          "name": "users",
          "type": "Vector<User>"
        }
      ],
      "type": "messages.Dialogs"
    },
    {
      "id": 1910543603,
      "predicate": "messages.dialogsSlice",
      "params": [
        {
          "name": "count",
          "type": "int"
        },
        {
          "name": "dialogs",
          "type": "Vector<Dialog>"
        },
        {
          "name": "messages",
          "type": "Vector<Message>"
        },
        {
          "name": "chats",
          "type": "Vector<Chat>"
        },
        {
          "name": "users",
          "type": "Vector<User>"
        }
      ],
      "type": "messages.Dialogs"
    },
    {
      "id": 4041467286,
      "predicate": "messages.dialogsNotModified",
      "params": [
        {
          "name": "count",
          "type": "int"
        }
      ],
      "type": "messages.Dialogs"
    },
    {
      "id": 2356252295,
      "predicate": "messages.messages",
      "params": [
        {
          "name": "messages",
          "type": "Vector<Message>"
        },
        {
          "name": "chats",
          "type": "Vector<Chat>"
        },
        {
          "name": "users",
          "type": "Vector<User>"
        }
      ],
      "type": "messages.Messages"
    },
    {
      "id": 978610270,
      "predicate": "messages.messagesSlice",
      "params": [
        {
          "name": "flags",
          "type": "#"
        },
        {
          "name": "inexact",
          "type": "flags.1?true"
        },
        {
          "name": "count",
          "type": "int"
        },
        {
          "name": "next_rate",
          "type": "flags.0?int"
        },
        {
          "name": "offset_id_offset",
          "type": "flags.2?int"
        },
        {
          "name": "messages",
          "type": "Vector<Message>"
        },
        {
          "name": "chats",
          "type": "Vector<Chat>"
        },
        {
          "name": "users",
          "type": "Vector<User>"
        }
      ],
      "type": "messages.Messages"
    },
    {
      "id": 1682413576,
      "predicate": "messages.channelMessages",
      "params": [
        {
          "name": "flags",
          "type": "#"
        },
        {
          "name": "inexact",
          "type": "flags.1?true"
        },
        {
          "name": "pts",
          "type": "int"
        },
        {
          "name": "count",
          "type": "int"
        },
        {
          "name": "offset_id_offset",
          "type": "flags.2?int"
        },
        {
          "name": "messages",
          "type": "Vector<Message>"
        },
        {
          "name": "chats",
          "type": "Vector<Chat>"
        },
        {
          "name": "users",
          "type": "Vector<User>"
        }
      ],
      "type": "messages.Messages"
    },
    {
      "id": 1951620897,
      "predicate": "messages.messagesNotModified",
      "params": [
        {
          "name": "count",
          "type": "int"
        }
      ],
      "type": "messages.Messages"
    },
    {
      "id": 1694474197,
      "predicate": "messages.chats",
      "params": [
        {
          "name": "chats",
          "type": "Vector<Chat>"
        }
      ],
      "type": "messages.Chats"
    },
    {
      "id": 2631405892,
      "predicate": "messages.chatsSlice",
      "params": [
        {
          "name": "count",
          "type": "int"
        },
        {
          "name": "chats",
          "type": "Vector<Chat>"
        }
      ],
      "type": "messages.Chats"
    },
    {
      "id": 3856126364,
      "predicate": "messages.chatFull",
      "params": [
        {
          "name": "full_chat",
          "type": "ChatFull"
        },
        {
          "name": "chats",
          "type": "Vector<Chat>"
        },
        {
          "name": "users",
          "type": "Vector<User>"
        }
      ],
      "type": "messages.ChatFull"
    },
    {
      "id": 3025955281,
      "predicate": "messages.affectedHistory",
      "params": [
        {
          "name": "pts",
          "type": "int"
        },
        {
          "name": "pts_count",
          "type": "int"
        },
        {
          "name": "offset",
          "type": "int"
        }
      ],
      "type": "messages.AffectedHistory"
    },
    {
      "id": 1474492012,
      "predicate": "inputMessagesFilterEmpty",
      "params": [],
      "type": "MessagesFilter"
    },
    {
      "id": 2517214492,
      "predicate": "inputMessagesFilterPhotos",
      "params": [],
      "type": "MessagesFilter"
    },
    {
      "id": 2680163941,
      "predicate": "inputMessagesFilterVideo",
      "params": [],
      "type": "MessagesFilter"
    },
    {
      "id": 1458172132,
      "predicate": "inputMessagesFilterPhotoVideo",
      "params": [],
      "type": "MessagesFilter"
    },
    {
      "id": 2665345416,
      "predicate": "inputMessagesFilterDocument",
      "params": [],
      "type": "MessagesFilter"
    },
    {
      "id": 2129714567,
      "predicate": "inputMessagesFilterUrl",
      "params": [],
      "type": "MessagesFilter"
    },
    {
      "id": 4291323271,
      "predicate": "inputMessagesFilterGif",
      "params": [],
      "type": "MessagesFilter"
    },
    {
      "id": 1358283666,
      "predicate": "inputMessagesFilterVoice",
      "params": [],
      "type": "MessagesFilter"
    },
    {
      "id": 928101534,
      "predicate": "inputMessagesFilterMusic",
      "params": [],
      "type": "MessagesFilter"
    },
    {
      "id": 975236280,
      "predicate": "inputMessagesFilterChatPhotos",
      "params": [],
      "type": "MessagesFilter"
    },
    {
      "id": 2160695144,
      "predicate": "inputMessagesFilterPhoneCalls",
      "params": [
        {
          "name": "flags",
          "type": "#"
        },
        {
          "name": "missed",
          "type": "flags.0?true"
        }
      ],
      "type": "MessagesFilter"
    },
    {
      "id": 2054952868,
      "predicate": "inputMessagesFilterRoundVoice",
      "params": [],
      "type": "MessagesFilter"
    },
    {
      "id": 3041516115,
      "predicate": "inputMessagesFilterRoundVideo",
      "params": [],
      "type": "MessagesFilter"
    },
    {
      "id": 3254314650,
      "predicate": "inputMessagesFilterMyMentions",
      "params": [],
      "type": "MessagesFilter"
    },
    {
      "id": 3875695885,
      "predicate": "inputMessagesFilterGeo",
      "params": [],
      "type": "MessagesFilter"
    },
    {
      "id": 3764575107,
      "predicate": "inputMessagesFilterContacts",
      "params": [],
      "type": "MessagesFilter"
    },
    {
      "id": 464520273,
      "predicate": "inputMessagesFilterPinned",
      "params": [],
      "type": "MessagesFilter"
    },
    {
      "id": 522914557,
      "predicate": "updateNewMessage",
      "params": [
        {
          "name": "message",
          "type": "Message"
        },
        {
          "name": "pts",
          "type": "int"
        },
        {
          "name": "pts_count",
          "type": "int"
        }
      ],
      "type": "Update"
    },
    {
      "id": 1318109142,
      "predicate": "updateMessageID",
      "params": [
        {
          "name": "id",
          "type": "int"
        },
        {
          "name": "random_id",
          "type": "long"
        }
      ],
      "type": "Update"
    },
    {
      "id": 2718806245,
      "predicate": "updateDeleteMessages",
      "params": [
        {
          "name": "messages",
          "type": "Vector<int>"
        },
        {
          "name": "pts",
          "type": "int"
        },
        {
          "name": "pts_count",
          "type": "int"
        }
      ],
      "type": "Update"
    },
    {
      "id": 1548249383,
      "predicate": "updateUserTyping",
      "params": [
        {
          "name": "user_id",
          "type": "int"
        },
        {
          "name": "action",
          "type": "SendMessageAction"
        }
      ],
      "type": "Update"
    },
    {
      "id": 2261441388,
      "predicate": "updateChatUserTyping",
      "params": [
        {
          "name": "chat_id",
          "type": "int"
        },
        {
          "name": "from_id",
          "type": "Peer"
        },
        {
          "name": "action",
          "type": "SendMessageAction"
        }
      ],
      "type": "Update"
    },
    {
      "id": 125178264,
      "predicate": "updateChatParticipants",
      "params": [
        {
          "name": "participants",
          "type": "ChatParticipants"
        }
      ],
      "type": "Update"
    },
    {
      "id": 469489699,
      "predicate": "updateUserStatus",
      "params": [
        {
          "name": "user_id",
          "type": "int"
        },
        {
          "name": "status",
          "type": "UserStatus"
        }
      ],
      "type": "Update"
    },
    {
      "id": 2805148531,
      "predicate": "updateUserName",
      "params": [
        {
          "name": "user_id",
          "type": "int"
        },
        {
          "name": "first_name",
          "type": "string"
        },
        {
          "name": "last_name",
          "type": "string"
        },
        {
          "name": "username",
          "type": "string"
        }
      ],
      "type": "Update"
    },
    {
      "id": 2503031564,
      "predicate": "updateUserPhoto",
      "params": [
        {
          "name": "user_id",
          "type": "int"
        },
        {
          "name": "date",
          "type": "int"
        },
        {
          "name": "photo",
          "type": "UserProfilePhoto"
        },
        {
          "name": "previous",
          "type": "Bool"
        }
      ],
      "type": "Update"
    },
    {
      "id": 314359194,
      "predicate": "updateNewEncryptedMessage",
      "params": [
        {
          "name": "message",
          "type": "EncryptedMessage"
        },
        {
          "name": "qts",
          "type": "int"
        }
      ],
      "type": "Update"
    },
    {
      "id": 386986326,
      "predicate": "updateEncryptedChatTyping",
      "params": [
        {
          "name": "chat_id",
          "type": "int"
        }
      ],
      "type": "Update"
    },
    {
      "id": 3030575245,
      "predicate": "updateEncryption",
      "params": [
        {
          "name": "chat",
          "type": "EncryptedChat"
        },
        {
          "name": "date",
          "type": "int"
        }
      ],
      "type": "Update"
    },
    {
      "id": 956179895,
      "predicate": "updateEncryptedMessagesRead",
      "params": [
        {
          "name": "chat_id",
          "type": "int"
        },
        {
          "name": "max_date",
          "type": "int"
        },
        {
          "name": "date",
          "type": "int"
        }
      ],
      "type": "Update"
    },
    {
      "id": 3930787420,
      "predicate": "updateChatParticipantAdd",
      "params": [
        {
          "name": "chat_id",
          "type": "int"
        },
        {
          "name": "user_id",
          "type": "int"
        },
        {
          "name": "inviter_id",
          "type": "int"
        },
        {
          "name": "date",
          "type": "int"
        },
        {
          "name": "version",
          "type": "int"
        }
      ],
      "type": "Update"
    },
    {
      "id": 1851755554,
      "predicate": "updateChatParticipantDelete",
      "params": [
        {
          "name": "chat_id",
          "type": "int"
        },
        {
          "name": "user_id",
          "type": "int"
        },
        {
          "name": "version",
          "type": "int"
        }
      ],
      "type": "Update"
    },
    {
      "id": 2388564083,
      "predicate": "updateDcOptions",
      "params": [
        {
          "name": "dc_options",
          "type": "Vector<DcOption>"
        }
      ],
      "type": "Update"
    },
    {
      "id": 3200411887,
      "predicate": "updateNotifySettings",
      "params": [
        {
          "name": "peer",
          "type": "NotifyPeer"
        },
        {
          "name": "notify_settings",
          "type": "PeerNotifySettings"
        }
      ],
      "type": "Update"
    },
    {
      "id": 3957614617,
      "predicate": "updateServiceNotification",
      "params": [
        {
          "name": "flags",
          "type": "#"
        },
        {
          "name": "popup",
          "type": "flags.0?true"
        },
        {
          "name": "inbox_date",
          "type": "flags.1?int"
        },
        {
          "name": "type",
          "type": "string"
        },
        {
          "name": "message",
          "type": "string"
        },
        {
          "name": "media",
          "type": "MessageMedia"
        },
        {
          "name": "entities",
          "type": "Vector<MessageEntity>"
        }
      ],
      "type": "Update"
    },
    {
      "id": 3996854058,
      "predicate": "updatePrivacy",
      "params": [
        {
          "name": "key",
          "type": "PrivacyKey"
        },
        {
          "name": "rules",
          "type": "Vector<PrivacyRule>"
        }
      ],
      "type": "Update"
    },
    {
      "id": 314130811,
      "predicate": "updateUserPhone",
      "params": [
        {
          "name": "user_id",
          "type": "int"
        },
        {
          "name": "phone",
          "type": "string"
        }
      ],
      "type": "Update"
    },
    {
      "id": 2627162079,
      "predicate": "updateReadHistoryInbox",
      "params": [
        {
          "name": "flags",
          "type": "#"
        },
        {
          "name": "folder_id",
          "type": "flags.0?int"
        },
        {
          "name": "peer",
          "type": "Peer"
        },
        {
          "name": "max_id",
          "type": "int"
        },
        {
          "name": "still_unread_count",
          "type": "int"
        },
        {
          "name": "pts",
          "type": "int"
        },
        {
          "name": "pts_count",
          "type": "int"
        }
      ],
      "type": "Update"
    },
    {
      "id": 791617983,
      "predicate": "updateReadHistoryOutbox",
      "params": [
        {
          "name": "peer",
          "type": "Peer"
        },
        {
          "name": "max_id",
          "type": "int"
        },
        {
          "name": "pts",
          "type": "int"
        },
        {
          "name": "pts_count",
          "type": "int"
        }
      ],
      "type": "Update"
    },
    {
      "id": 2139689491,
      "predicate": "updateWebPage",
      "params": [
        {
          "name": "webpage",
          "type": "WebPage"
        },
        {
          "name": "pts",
          "type": "int"
        },
        {
          "name": "pts_count",
          "type": "int"
        }
      ],
      "type": "Update"
    },
    {
      "id": 1757493555,
      "predicate": "updateReadMessagesContents",
      "params": [
        {
          "name": "messages",
          "type": "Vector<int>"
        },
        {
          "name": "pts",
          "type": "int"
        },
        {
          "name": "pts_count",
          "type": "int"
        }
      ],
      "type": "Update"
    },
    {
      "id": 3942934523,
      "predicate": "updateChannelTooLong",
      "params": [
        {
          "name": "flags",
          "type": "#"
        },
        {
          "name": "channel_id",
          "type": "int"
        },
        {
          "name": "pts",
          "type": "flags.0?int"
        }
      ],
      "type": "Update"
    },
    {
      "id": 3067369046,
      "predicate": "updateChannel",
      "params": [
        {
          "name": "channel_id",
          "type": "int"
        }
      ],
      "type": "Update"
    },
    {
      "id": 1656358105,
      "predicate": "updateNewChannelMessage",
      "params": [
        {
          "name": "message",
          "type": "Message"
        },
        {
          "name": "pts",
          "type": "int"
        },
        {
          "name": "pts_count",
          "type": "int"
        }
      ],
      "type": "Update"
    },
    {
      "id": 856380452,
      "predicate": "updateReadChannelInbox",
      "params": [
        {
          "name": "flags",
          "type": "#"
        },
        {
          "name": "folder_id",
          "type": "flags.0?int"
        },
        {
          "name": "channel_id",
          "type": "int"
        },
        {
          "name": "max_id",
          "type": "int"
        },
        {
          "name": "still_unread_count",
          "type": "int"
        },
        {
          "name": "pts",
          "type": "int"
        }
      ],
      "type": "Update"
    },
    {
      "id": 3279233481,
      "predicate": "updateDeleteChannelMessages",
      "params": [
        {
          "name": "channel_id",
          "type": "int"
        },
        {
          "name": "messages",
          "type": "Vector<int>"
        },
        {
          "name": "pts",
          "type": "int"
        },
        {
          "name": "pts_count",
          "type": "int"
        }
      ],
      "type": "Update"
    },
    {
      "id": 2560699211,
      "predicate": "updateChannelMessageViews",
      "params": [
        {
          "name": "channel_id",
          "type": "int"
        },
        {
          "name": "id",
          "type": "int"
        },
        {
          "name": "views",
          "type": "int"
        }
      ],
      "type": "Update"
    },
    {
      "id": 3062896985,
      "predicate": "updateChatParticipantAdmin",
      "params": [
        {
          "name": "chat_id",
          "type": "int"
        },
        {
          "name": "user_id",
          "type": "int"
        },
        {
          "name": "is_admin",
          "type": "Bool"
        },
        {
          "name": "version",
          "type": "int"
        }
      ],
      "type": "Update"
    },
    {
      "id": 1753886890,
      "predicate": "updateNewStickerSet",
      "params": [
        {
          "name": "stickerset",
          "type": "messages.StickerSet"
        }
      ],
      "type": "Update"
    },
    {
      "id": 196268545,
      "predicate": "updateStickerSetsOrder",
      "params": [
        {
          "name": "flags",
          "type": "#"
        },
        {
          "name": "masks",
          "type": "flags.0?true"
        },
        {
          "name": "order",
          "type": "Vector<long>"
        }
      ],
      "type": "Update"
    },
    {
      "id": 1135492588,
      "predicate": "updateStickerSets",
      "params": [],
      "type": "Update"
    },
    {
      "id": 2473931806,
      "predicate": "updateSavedGifs",
      "params": [],
      "type": "Update"
    },
    {
      "id": 1059076315,
      "predicate": "updateBotInlineQuery",
      "params": [
        {
          "name": "flags",
          "type": "#"
        },
        {
          "name": "query_id",
          "type": "long"
        },
        {
          "name": "user_id",
          "type": "int"
        },
        {
          "name": "query",
          "type": "string"
        },
        {
          "name": "geo",
          "type": "flags.0?GeoPoint"
        },
        {
          "name": "peer_type",
          "type": "flags.1?InlineQueryPeerType"
        },
        {
          "name": "offset",
          "type": "string"
        }
      ],
      "type": "Update"
    },
    {
      "id": 239663460,
      "predicate": "updateBotInlineSend",
      "params": [
        {
          "name": "flags",
          "type": "#"
        },
        {
          "name": "user_id",
          "type": "int"
        },
        {
          "name": "query",
          "type": "string"
        },
        {
          "name": "geo",
          "type": "flags.0?GeoPoint"
        },
        {
          "name": "id",
          "type": "string"
        },
        {
          "name": "msg_id",
          "type": "flags.1?InputBotInlineMessageID"
        }
      ],
      "type": "Update"
    },
    {
      "id": 457133559,
      "predicate": "updateEditChannelMessage",
      "params": [
        {
          "name": "message",
          "type": "Message"
        },
        {
          "name": "pts",
          "type": "int"
        },
        {
          "name": "pts_count",
          "type": "int"
        }
      ],
      "type": "Update"
    },
    {
      "id": 3879028705,
      "predicate": "updateBotCallbackQuery",
      "params": [
        {
          "name": "flags",
          "type": "#"
        },
        {
          "name": "query_id",
          "type": "long"
        },
        {
          "name": "user_id",
          "type": "int"
        },
        {
          "name": "peer",
          "type": "Peer"
        },
        {
          "name": "msg_id",
          "type": "int"
        },
        {
          "name": "chat_instance",
          "type": "long"
        },
        {
          "name": "data",
          "type": "flags.0?bytes"
        },
        {
          "name": "game_short_name",
          "type": "flags.1?string"
        }
      ],
      "type": "Update"
    },
    {
      "id": 3825430691,
      "predicate": "updateEditMessage",
      "params": [
        {
          "name": "message",
          "type": "Message"
        },
        {
          "name": "pts",
          "type": "int"
        },
        {
          "name": "pts_count",
          "type": "int"
        }
      ],
      "type": "Update"
    },
    {
      "id": 4191320666,
      "predicate": "updateInlineBotCallbackQuery",
      "params": [
        {
          "name": "flags",
          "type": "#"
        },
        {
          "name": "query_id",
          "type": "long"
        },
        {
          "name": "user_id",
          "type": "int"
        },
        {
          "name": "msg_id",
          "type": "InputBotInlineMessageID"
        },
        {
          "name": "chat_instance",
          "type": "long"
        },
        {
          "name": "data",
          "type": "flags.0?bytes"
        },
        {
          "name": "game_short_name",
          "type": "flags.1?string"
        }
      ],
      "type": "Update"
    },
    {
      "id": 634833351,
      "predicate": "updateReadChannelOutbox",
      "params": [
        {
          "name": "channel_id",
          "type": "int"
        },
        {
          "name": "max_id",
          "type": "int"
        }
      ],
      "type": "Update"
    },
    {
      "id": 3995842921,
      "predicate": "updateDraftMessage",
      "params": [
        {
          "name": "peer",
          "type": "Peer"
        },
        {
          "name": "draft",
          "type": "DraftMessage"
        }
      ],
      "type": "Update"
    },
    {
      "id": 1461528386,
      "predicate": "updateReadFeaturedStickers",
      "params": [],
      "type": "Update"
    },
    {
      "id": 2588027936,
      "predicate": "updateRecentStickers",
      "params": [],
      "type": "Update"
    },
    {
      "id": 2720652550,
      "predicate": "updateConfig",
      "params": [],
      "type": "Update"
    },
    {
      "id": 861169551,
      "predicate": "updatePtsChanged",
      "params": [],
      "type": "Update"
    },
    {
      "id": 1081547008,
      "predicate": "updateChannelWebPage",
      "params": [
        {
          "name": "channel_id",
          "type": "int"
        },
        {
          "name": "webpage",
          "type": "WebPage"
        },
        {
          "name": "pts",
          "type": "int"
        },
        {
          "name": "pts_count",
          "type": "int"
        }
      ],
      "type": "Update"
    },
    {
      "id": 1852826908,
      "predicate": "updateDialogPinned",
      "params": [
        {
          "name": "flags",
          "type": "#"
        },
        {
          "name": "pinned",
          "type": "flags.0?true"
        },
        {
          "name": "folder_id",
          "type": "flags.1?int"
        },
        {
          "name": "peer",
          "type": "DialogPeer"
        }
      ],
      "type": "Update"
    },
    {
      "id": 4195302562,
      "predicate": "updatePinnedDialogs",
      "params": [
        {
          "name": "flags",
          "type": "#"
        },
        {
          "name": "folder_id",
          "type": "flags.1?int"
        },
        {
          "name": "order",
          "type": "flags.0?Vector<DialogPeer>"
        }
      ],
      "type": "Update"
    },
    {
      "id": 2199371971,
      "predicate": "updateBotWebhookJSON",
      "params": [
        {
          "name": "data",
          "type": "DataJSON"
        }
      ],
      "type": "Update"
    },
    {
      "id": 2610053286,
      "predicate": "updateBotWebhookJSONQuery",
      "params": [
        {
          "name": "query_id",
          "type": "long"
        },
        {
          "name": "data",
          "type": "DataJSON"
        },
        {
          "name": "timeout",
          "type": "int"
        }
      ],
      "type": "Update"
    },
    {
      "id": 3771582784,
      "predicate": "updateBotShippingQuery",
      "params": [
        {
          "name": "query_id",
          "type": "long"
        },
        {
          "name": "user_id",
          "type": "int"
        },
        {
          "name": "payload",
          "type": "bytes"
        },
        {
          "name": "shipping_address",
          "type": "PostAddress"
        }
      ],
      "type": "Update"
    },
    {
      "id": 1563376297,
      "predicate": "updateBotPrecheckoutQuery",
      "params": [
        {
          "name": "flags",
          "type": "#"
        },
        {
          "name": "query_id",
          "type": "long"
        },
        {
          "name": "user_id",
          "type": "int"
        },
        {
          "name": "payload",
          "type": "bytes"
        },
        {
          "name": "info",
          "type": "flags.0?PaymentRequestedInfo"
        },
        {
          "name": "shipping_option_id",
          "type": "flags.1?string"
        },
        {
          "name": "currency",
          "type": "string"
        },
        {
          "name": "total_amount",
          "type": "long"
        }
      ],
      "type": "Update"
    },
    {
      "id": 2869914398,
      "predicate": "updatePhoneCall",
      "params": [
        {
          "name": "phone_call",
          "type": "PhoneCall"
        }
      ],
      "type": "Update"
    },
    {
      "id": 1180041828,
      "predicate": "updateLangPackTooLong",
      "params": [
        {
          "name": "lang_code",
          "type": "string"
        }
      ],
      "type": "Update"
    },
    {
      "id": 1442983757,
      "predicate": "updateLangPack",
      "params": [
        {
          "name": "difference",
          "type": "LangPackDifference"
        }
      ],
      "type": "Update"
    },
    {
      "id": 3843135853,
      "predicate": "updateFavedStickers",
      "params": [],
      "type": "Update"
    },
    {
      "id": 2307472197,
      "predicate": "updateChannelReadMessagesContents",
      "params": [
        {
          "name": "channel_id",
          "type": "int"
        },
        {
          "name": "messages",
          "type": "Vector<int>"
        }
      ],
      "type": "Update"
    },
    {
      "id": 1887741886,
      "predicate": "updateContactsReset",
      "params": [],
      "type": "Update"
    },
    {
      "id": 1893427255,
      "predicate": "updateChannelAvailableMessages",
      "params": [
        {
          "name": "channel_id",
          "type": "int"
        },
        {
          "name": "available_min_id",
          "type": "int"
        }
      ],
      "type": "Update"
    },
    {
      "id": 3781450179,
      "predicate": "updateDialogUnreadMark",
      "params": [
        {
          "name": "flags",
          "type": "#"
        },
        {
          "name": "unread",
          "type": "flags.0?true"
        },
        {
          "name": "peer",
          "type": "DialogPeer"
        }
      ],
      "type": "Update"
    },
    {
      "id": 2896258427,
      "predicate": "updateMessagePoll",
      "params": [
        {
          "name": "flags",
          "type": "#"
        },
        {
          "name": "poll_id",
          "type": "long"
        },
        {
          "name": "poll",
          "type": "flags.0?Poll"
        },
        {
          "name": "results",
          "type": "PollResults"
        }
      ],
      "type": "Update"
    },
    {
      "id": 1421875280,
      "predicate": "updateChatDefaultBannedRights",
      "params": [
        {
          "name": "peer",
          "type": "Peer"
        },
        {
          "name": "default_banned_rights",
          "type": "ChatBannedRights"
        },
        {
          "name": "version",
          "type": "int"
        }
      ],
      "type": "Update"
    },
    {
      "id": 422972864,
      "predicate": "updateFolderPeers",
      "params": [
        {
          "name": "folder_peers",
          "type": "Vector<FolderPeer>"
        },
        {
          "name": "pts",
          "type": "int"
        },
        {
          "name": "pts_count",
          "type": "int"
        }
      ],
      "type": "Update"
    },
    {
      "id": 1786671974,
      "predicate": "updatePeerSettings",
      "params": [
        {
          "name": "peer",
          "type": "Peer"
        },
        {
          "name": "settings",
          "type": "PeerSettings"
        }
      ],
      "type": "Update"
    },
    {
      "id": 3031420848,
      "predicate": "updatePeerLocated",
      "params": [
        {
          "name": "peers",
          "type": "Vector<PeerLocated>"
        }
      ],
      "type": "Update"
    },
    {
      "id": 967122427,
      "predicate": "updateNewScheduledMessage",
      "params": [
        {
          "name": "message",
          "type": "Message"
        }
      ],
      "type": "Update"
    },
    {
      "id": 2424728814,
      "predicate": "updateDeleteScheduledMessages",
      "params": [
        {
          "name": "peer",
          "type": "Peer"
        },
        {
          "name": "messages",
          "type": "Vector<int>"
        }
      ],
      "type": "Update"
    },
    {
      "id": 2182544291,
      "predicate": "updateTheme",
      "params": [
        {
          "name": "theme",
          "type": "Theme"
        }
      ],
      "type": "Update"
    },
    {
      "id": 2267003193,
      "predicate": "updateGeoLiveViewed",
      "params": [
        {
          "name": "peer",
          "type": "Peer"
        },
        {
          "name": "msg_id",
          "type": "int"
        }
      ],
      "type": "Update"
    },
    {
      "id": 1448076945,
      "predicate": "updateLoginToken",
      "params": [],
      "type": "Update"
    },
    {
      "id": 938909451,
      "predicate": "updateMessagePollVote",
      "params": [
        {
          "name": "poll_id",
          "type": "long"
        },
        {
          "name": "user_id",
          "type": "int"
        },
        {
          "name": "options",
          "type": "Vector<bytes>"
        },
        {
          "name": "qts",
          "type": "int"
        }
      ],
      "type": "Update"
    },
    {
      "id": 654302845,
      "predicate": "updateDialogFilter",
      "params": [
        {
          "name": "flags",
          "type": "#"
        },
        {
          "name": "id",
          "type": "int"
        },
        {
          "name": "filter",
          "type": "flags.0?DialogFilter"
        }
      ],
      "type": "Update"
    },
    {
      "id": 2782339333,
      "predicate": "updateDialogFilterOrder",
      "params": [
        {
          "name": "order",
          "type": "Vector<int>"
        }
      ],
      "type": "Update"
    },
    {
      "id": 889491791,
      "predicate": "updateDialogFilters",
      "params": [],
      "type": "Update"
    },
    {
      "id": 643940105,
      "predicate": "updatePhoneCallSignalingData",
      "params": [
        {
          "name": "phone_call_id",
          "type": "long"
        },
        {
          "name": "data",
          "type": "bytes"
        }
      ],
      "type": "Update"
    },
    {
      "id": 1854571743,
      "predicate": "updateChannelMessageForwards",
      "params": [
        {
          "name": "channel_id",
          "type": "int"
        },
        {
          "name": "id",
          "type": "int"
        },
        {
          "name": "forwards",
          "type": "int"
        }
      ],
      "type": "Update"
    },
    {
      "id": 482860628,
      "predicate": "updateReadChannelDiscussionInbox",
      "params": [
        {
          "name": "flags",
          "type": "#"
        },
        {
          "name": "channel_id",
          "type": "int"
        },
        {
          "name": "top_msg_id",
          "type": "int"
        },
        {
          "name": "read_max_id",
          "type": "int"
        },
        {
          "name": "broadcast_id",
          "type": "flags.0?int"
        },
        {
          "name": "broadcast_post",
          "type": "flags.0?int"
        }
      ],
      "type": "Update"
    },
    {
      "id": 1178116716,
      "predicate": "updateReadChannelDiscussionOutbox",
      "params": [
        {
          "name": "channel_id",
          "type": "int"
        },
        {
          "name": "top_msg_id",
          "type": "int"
        },
        {
          "name": "read_max_id",
          "type": "int"
        }
      ],
      "type": "Update"
    },
    {
      "id": 610945826,
      "predicate": "updatePeerBlocked",
      "params": [
        {
          "name": "peer_id",
          "type": "Peer"
        },
        {
          "name": "blocked",
          "type": "Bool"
        }
      ],
      "type": "Update"
    },
    {
      "id": 1796675352,
      "predicate": "updateChannelUserTyping",
      "params": [
        {
          "name": "flags",
          "type": "#"
        },
        {
          "name": "channel_id",
          "type": "int"
        },
        {
          "name": "top_msg_id",
          "type": "flags.0?int"
        },
        {
          "name": "from_id",
          "type": "Peer"
        },
        {
          "name": "action",
          "type": "SendMessageAction"
        }
      ],
      "type": "Update"
    },
    {
      "id": 3984976565,
      "predicate": "updatePinnedMessages",
      "params": [
        {
          "name": "flags",
          "type": "#"
        },
        {
          "name": "pinned",
          "type": "flags.0?true"
        },
        {
          "name": "peer",
          "type": "Peer"
        },
        {
          "name": "messages",
          "type": "Vector<int>"
        },
        {
          "name": "pts",
          "type": "int"
        },
        {
          "name": "pts_count",
          "type": "int"
        }
      ],
      "type": "Update"
    },
    {
      "id": 2240317323,
      "predicate": "updatePinnedChannelMessages",
      "params": [
        {
          "name": "flags",
          "type": "#"
        },
        {
          "name": "pinned",
          "type": "flags.0?true"
        },
        {
          "name": "channel_id",
          "type": "int"
        },
        {
          "name": "messages",
          "type": "Vector<int>"
        },
        {
          "name": "pts",
          "type": "int"
        },
        {
          "name": "pts_count",
          "type": "int"
        }
      ],
      "type": "Update"
    },
    {
      "id": 321954198,
      "predicate": "updateChat",
      "params": [
        {
          "name": "chat_id",
          "type": "int"
        }
      ],
      "type": "Update"
    },
    {
      "id": 4075543374,
      "predicate": "updateGroupCallParticipants",
      "params": [
        {
          "name": "call",
          "type": "InputGroupCall"
        },
        {
          "name": "participants",
          "type": "Vector<GroupCallParticipant>"
        },
        {
          "name": "version",
          "type": "int"
        }
      ],
      "type": "Update"
    },
    {
      "id": 2757671323,
      "predicate": "updateGroupCall",
      "params": [
        {
          "name": "chat_id",
          "type": "int"
        },
        {
          "name": "call",
          "type": "GroupCall"
        }
      ],
      "type": "Update"
    },
    {
      "id": 3147544997,
      "predicate": "updatePeerHistoryTTL",
      "params": [
        {
          "name": "flags",
          "type": "#"
        },
        {
          "name": "peer",
          "type": "Peer"
        },
        {
          "name": "ttl_period",
          "type": "flags.0?int"
        }
      ],
      "type": "Update"
    },
    {
      "id": 4088625183,
      "predicate": "updateChatParticipant",
      "params": [
        {
          "name": "flags",
          "type": "#"
        },
        {
          "name": "chat_id",
          "type": "int"
        },
        {
          "name": "date",
          "type": "int"
        },
        {
          "name": "actor_id",
          "type": "int"
        },
        {
          "name": "user_id",
          "type": "int"
        },
        {
          "name": "prev_participant",
          "type": "flags.0?ChatParticipant"
        },
        {
          "name": "new_participant",
          "type": "flags.1?ChatParticipant"
        },
        {
          "name": "invite",
          "type": "flags.2?ExportedChatInvite"
        },
        {
          "name": "qts",
          "type": "int"
        }
      ],
      "type": "Update"
    },
    {
      "id": 2146218476,
      "predicate": "updateChannelParticipant",
      "params": [
        {
          "name": "flags",
          "type": "#"
        },
        {
          "name": "channel_id",
          "type": "int"
        },
        {
          "name": "date",
          "type": "int"
        },
        {
          "name": "actor_id",
          "type": "int"
        },
        {
          "name": "user_id",
          "type": "int"
        },
        {
          "name": "prev_participant",
          "type": "flags.0?ChannelParticipant"
        },
        {
          "name": "new_participant",
          "type": "flags.1?ChannelParticipant"
        },
        {
          "name": "invite",
          "type": "flags.2?ExportedChatInvite"
        },
        {
          "name": "qts",
          "type": "int"
        }
      ],
      "type": "Update"
    },
    {
      "id": 133777546,
      "predicate": "updateBotStopped",
      "params": [
        {
          "name": "user_id",
          "type": "int"
        },
        {
          "name": "date",
          "type": "int"
        },
        {
          "name": "stopped",
          "type": "Bool"
        },
        {
          "name": "qts",
          "type": "int"
        }
      ],
      "type": "Update"
    },
    {
      "id": 192428418,
      "predicate": "updateGroupCallConnection",
      "params": [
        {
          "name": "flags",
          "type": "#"
        },
        {
          "name": "presentation",
          "type": "flags.0?true"
        },
        {
          "name": "params",
          "type": "DataJSON"
        }
      ],
      "type": "Update"
    },
    {
      "id": 3481143411,
      "predicate": "updateBotCommands",
      "params": [
        {
          "name": "peer",
          "type": "Peer"
        },
        {
          "name": "bot_id",
          "type": "int"
        },
        {
          "name": "commands",
          "type": "Vector<BotCommand>"
        }
      ],
      "type": "Update"
    },
    {
      "id": 2775329342,
      "predicate": "updates.state",
      "params": [
        {
          "name": "pts",
          "type": "int"
        },
        {
          "name": "qts",
          "type": "int"
        },
        {
          "name": "date",
          "type": "int"
        },
        {
          "name": "seq",
          "type": "int"
        },
        {
          "name": "unread_count",
          "type": "int"
        }
      ],
      "type": "updates.State"
    },
    {
      "id": 1567990072,
      "predicate": "updates.differenceEmpty",
      "params": [
        {
          "name": "date",
          "type": "int"
        },
        {
          "name": "seq",
          "type": "int"
        }
      ],
      "type": "updates.Difference"
    },
    {
      "id": 16030880,
      "predicate": "updates.difference",
      "params": [
        {
          "name": "new_messages",
          "type": "Vector<Message>"
        },
        {
          "name": "new_encrypted_messages",
          "type": "Vector<EncryptedMessage>"
        },
        {
          "name": "other_updates",
          "type": "Vector<Update>"
        },
        {
          "name": "chats",
          "type": "Vector<Chat>"
        },
        {
          "name": "users",
          "type": "Vector<User>"
        },
        {
          "name": "state",
          "type": "updates.State"
        }
      ],
      "type": "updates.Difference"
    },
    {
      "id": 2835028353,
      "predicate": "updates.differenceSlice",
      "params": [
        {
          "name": "new_messages",
          "type": "Vector<Message>"
        },
        {
          "name": "new_encrypted_messages",
          "type": "Vector<EncryptedMessage>"
        },
        {
          "name": "other_updates",
          "type": "Vector<Update>"
        },
        {
          "name": "chats",
          "type": "Vector<Chat>"
        },
        {
          "name": "users",
          "type": "Vector<User>"
        },
        {
          "name": "intermediate_state",
          "type": "updates.State"
        }
      ],
      "type": "updates.Difference"
    },
    {
      "id": 1258196845,
      "predicate": "updates.differenceTooLong",
      "params": [
        {
          "name": "pts",
          "type": "int"
        }
      ],
      "type": "updates.Difference"
    },
    {
      "id": 3809980286,
      "predicate": "updatesTooLong",
      "params": [],
      "type": "Updates"
    },
    {
      "id": 4210030643,
      "predicate": "updateShortMessage",
      "params": [
        {
          "name": "flags",
          "type": "#"
        },
        {
          "name": "out",
          "type": "flags.1?true"
        },
        {
          "name": "mentioned",
          "type": "flags.4?true"
        },
        {
          "name": "media_unread",
          "type": "flags.5?true"
        },
        {
          "name": "silent",
          "type": "flags.13?true"
        },
        {
          "name": "id",
          "type": "int"
        },
        {
          "name": "user_id",
          "type": "int"
        },
        {
          "name": "message",
          "type": "string"
        },
        {
          "name": "pts",
          "type": "int"
        },
        {
          "name": "pts_count",
          "type": "int"
        },
        {
          "name": "date",
          "type": "int"
        },
        {
          "name": "fwd_from",
          "type": "flags.2?MessageFwdHeader"
        },
        {
          "name": "via_bot_id",
          "type": "flags.11?int"
        },
        {
          "name": "reply_to",
          "type": "flags.3?MessageReplyHeader"
        },
        {
          "name": "entities",
          "type": "flags.7?Vector<MessageEntity>"
        },
        {
          "name": "ttl_period",
          "type": "flags.25?int"
        }
      ],
      "type": "Updates"
    },
    {
      "id": 290961496,
      "predicate": "updateShortChatMessage",
      "params": [
        {
          "name": "flags",
          "type": "#"
        },
        {
          "name": "out",
          "type": "flags.1?true"
        },
        {
          "name": "mentioned",
          "type": "flags.4?true"
        },
        {
          "name": "media_unread",
          "type": "flags.5?true"
        },
        {
          "name": "silent",
          "type": "flags.13?true"
        },
        {
          "name": "id",
          "type": "int"
        },
        {
          "name": "from_id",
          "type": "int"
        },
        {
          "name": "chat_id",
          "type": "int"
        },
        {
          "name": "message",
          "type": "string"
        },
        {
          "name": "pts",
          "type": "int"
        },
        {
          "name": "pts_count",
          "type": "int"
        },
        {
          "name": "date",
          "type": "int"
        },
        {
          "name": "fwd_from",
          "type": "flags.2?MessageFwdHeader"
        },
        {
          "name": "via_bot_id",
          "type": "flags.11?int"
        },
        {
          "name": "reply_to",
          "type": "flags.3?MessageReplyHeader"
        },
        {
          "name": "entities",
          "type": "flags.7?Vector<MessageEntity>"
        },
        {
          "name": "ttl_period",
          "type": "flags.25?int"
        }
      ],
      "type": "Updates"
    },
    {
      "id": 2027216577,
      "predicate": "updateShort",
      "params": [
        {
          "name": "update",
          "type": "Update"
        },
        {
          "name": "date",
          "type": "int"
        }
      ],
      "type": "Updates"
    },
    {
      "id": 1918567619,
      "predicate": "updatesCombined",
      "params": [
        {
          "name": "updates",
          "type": "Vector<Update>"
        },
        {
          "name": "users",
          "type": "Vector<User>"
        },
        {
          "name": "chats",
          "type": "Vector<Chat>"
        },
        {
          "name": "date",
          "type": "int"
        },
        {
          "name": "seq_start",
          "type": "int"
        },
        {
          "name": "seq",
          "type": "int"
        }
      ],
      "type": "Updates"
    },
    {
      "id": 1957577280,
      "predicate": "updates",
      "params": [
        {
          "name": "updates",
          "type": "Vector<Update>"
        },
        {
          "name": "users",
          "type": "Vector<User>"
        },
        {
          "name": "chats",
          "type": "Vector<Chat>"
        },
        {
          "name": "date",
          "type": "int"
        },
        {
          "name": "seq",
          "type": "int"
        }
      ],
      "type": "Updates"
    },
    {
      "id": 2417352961,
      "predicate": "updateShortSentMessage",
      "params": [
        {
          "name": "flags",
          "type": "#"
        },
        {
          "name": "out",
          "type": "flags.1?true"
        },
        {
          "name": "id",
          "type": "int"
        },
        {
          "name": "pts",
          "type": "int"
        },
        {
          "name": "pts_count",
          "type": "int"
        },
        {
          "name": "date",
          "type": "int"
        },
        {
          "name": "media",
          "type": "flags.9?MessageMedia"
        },
        {
          "name": "entities",
          "type": "flags.7?Vector<MessageEntity>"
        },
        {
          "name": "ttl_period",
          "type": "flags.25?int"
        }
      ],
      "type": "Updates"
    },
    {
      "id": 2378853029,
      "predicate": "photos.photos",
      "params": [
        {
          "name": "photos",
          "type": "Vector<Photo>"
        },
        {
          "name": "users",
          "type": "Vector<User>"
        }
      ],
      "type": "photos.Photos"
    },
    {
      "id": 352657236,
      "predicate": "photos.photosSlice",
      "params": [
        {
          "name": "count",
          "type": "int"
        },
        {
          "name": "photos",
          "type": "Vector<Photo>"
        },
        {
          "name": "users",
          "type": "Vector<User>"
        }
      ],
      "type": "photos.Photos"
    },
    {
      "id": 539045032,
      "predicate": "photos.photo",
      "params": [
        {
          "name": "photo",
          "type": "Photo"
        },
        {
          "name": "users",
          "type": "Vector<User>"
        }
      ],
      "type": "photos.Photo"
    },
    {
      "id": 157948117,
      "predicate": "upload.file",
      "params": [
        {
          "name": "type",
          "type": "storage.FileType"
        },
        {
          "name": "mtime",
          "type": "int"
        },
        {
          "name": "bytes",
          "type": "bytes"
        }
      ],
      "type": "upload.File"
    },
    {
      "id": 4052539972,
      "predicate": "upload.fileCdnRedirect",
      "params": [
        {
          "name": "dc_id",
          "type": "int"
        },
        {
          "name": "file_token",
          "type": "bytes"
        },
        {
          "name": "encryption_key",
          "type": "bytes"
        },
        {
          "name": "encryption_iv",
          "type": "bytes"
        },
        {
          "name": "file_hashes",
          "type": "Vector<FileHash>"
        }
      ],
      "type": "upload.File"
    },
    {
      "id": 414687501,
      "predicate": "dcOption",
      "params": [
        {
          "name": "flags",
          "type": "#"
        },
        {
          "name": "ipv6",
          "type": "flags.0?true"
        },
        {
          "name": "media_only",
          "type": "flags.1?true"
        },
        {
          "name": "tcpo_only",
          "type": "flags.2?true"
        },
        {
          "name": "cdn",
          "type": "flags.3?true"
        },
        {
          "name": "static",
          "type": "flags.4?true"
        },
        {
          "name": "id",
          "type": "int"
        },
        {
          "name": "ip_address",
          "type": "string"
        },
        {
          "name": "port",
          "type": "int"
        },
        {
          "name": "secret",
          "type": "flags.10?bytes"
        }
      ],
      "type": "DcOption"
    },
    {
      "id": 856375399,
      "predicate": "config",
      "params": [
        {
          "name": "flags",
          "type": "#"
        },
        {
          "name": "phonecalls_enabled",
          "type": "flags.1?true"
        },
        {
          "name": "default_p2p_contacts",
          "type": "flags.3?true"
        },
        {
          "name": "preload_featured_stickers",
          "type": "flags.4?true"
        },
        {
          "name": "ignore_phone_entities",
          "type": "flags.5?true"
        },
        {
          "name": "revoke_pm_inbox",
          "type": "flags.6?true"
        },
        {
          "name": "blocked_mode",
          "type": "flags.8?true"
        },
        {
          "name": "pfs_enabled",
          "type": "flags.13?true"
        },
        {
          "name": "date",
          "type": "int"
        },
        {
          "name": "expires",
          "type": "int"
        },
        {
          "name": "test_mode",
          "type": "Bool"
        },
        {
          "name": "this_dc",
          "type": "int"
        },
        {
          "name": "dc_options",
          "type": "Vector<DcOption>"
        },
        {
          "name": "dc_txt_domain_name",
          "type": "string"
        },
        {
          "name": "chat_size_max",
          "type": "int"
        },
        {
          "name": "megagroup_size_max",
          "type": "int"
        },
        {
          "name": "forwarded_count_max",
          "type": "int"
        },
        {
          "name": "online_update_period_ms",
          "type": "int"
        },
        {
          "name": "offline_blur_timeout_ms",
          "type": "int"
        },
        {
          "name": "offline_idle_timeout_ms",
          "type": "int"
        },
        {
          "name": "online_cloud_timeout_ms",
          "type": "int"
        },
        {
          "name": "notify_cloud_delay_ms",
          "type": "int"
        },
        {
          "name": "notify_default_delay_ms",
          "type": "int"
        },
        {
          "name": "push_chat_period_ms",
          "type": "int"
        },
        {
          "name": "push_chat_limit",
          "type": "int"
        },
        {
          "name": "saved_gifs_limit",
          "type": "int"
        },
        {
          "name": "edit_time_limit",
          "type": "int"
        },
        {
          "name": "revoke_time_limit",
          "type": "int"
        },
        {
          "name": "revoke_pm_time_limit",
          "type": "int"
        },
        {
          "name": "rating_e_decay",
          "type": "int"
        },
        {
          "name": "stickers_recent_limit",
          "type": "int"
        },
        {
          "name": "stickers_faved_limit",
          "type": "int"
        },
        {
          "name": "channels_read_media_period",
          "type": "int"
        },
        {
          "name": "tmp_sessions",
          "type": "flags.0?int"
        },
        {
          "name": "pinned_dialogs_count_max",
          "type": "int"
        },
        {
          "name": "pinned_infolder_count_max",
          "type": "int"
        },
        {
          "name": "call_receive_timeout_ms",
          "type": "int"
        },
        {
          "name": "call_ring_timeout_ms",
          "type": "int"
        },
        {
          "name": "call_connect_timeout_ms",
          "type": "int"
        },
        {
          "name": "call_packet_timeout_ms",
          "type": "int"
        },
        {
          "name": "me_url_prefix",
          "type": "string"
        },
        {
          "name": "autoupdate_url_prefix",
          "type": "flags.7?string"
        },
        {
          "name": "gif_search_username",
          "type": "flags.9?string"
        },
        {
          "name": "venue_search_username",
          "type": "flags.10?string"
        },
        {
          "name": "img_search_username",
          "type": "flags.11?string"
        },
        {
          "name": "static_maps_provider",
          "type": "flags.12?string"
        },
        {
          "name": "caption_length_max",
          "type": "int"
        },
        {
          "name": "message_length_max",
          "type": "int"
        },
        {
          "name": "webfile_dc_id",
          "type": "int"
        },
        {
          "name": "suggested_lang_code",
          "type": "flags.2?string"
        },
        {
          "name": "lang_pack_version",
          "type": "flags.2?int"
        },
        {
          "name": "base_lang_pack_version",
          "type": "flags.2?int"
        }
      ],
      "type": "Config"
    },
    {
      "id": 2384074613,
      "predicate": "nearestDc",
      "params": [
        {
          "name": "country",
          "type": "string"
        },
        {
          "name": "this_dc",
          "type": "int"
        },
        {
          "name": "nearest_dc",
          "type": "int"
        }
      ],
      "type": "NearestDc"
    },
    {
      "id": 3434860080,
      "predicate": "help.appUpdate",
      "params": [
        {
          "name": "flags",
          "type": "#"
        },
        {
          "name": "can_not_skip",
          "type": "flags.0?true"
        },
        {
          "name": "id",
          "type": "int"
        },
        {
          "name": "version",
          "type": "string"
        },
        {
          "name": "text",
          "type": "string"
        },
        {
          "name": "entities",
          "type": "Vector<MessageEntity>"
        },
        {
          "name": "document",
          "type": "flags.1?Document"
        },
        {
          "name": "url",
          "type": "flags.2?string"
        },
        {
          "name": "sticker",
          "type": "flags.3?Document"
        }
      ],
      "type": "help.AppUpdate"
    },
    {
      "id": 3294258486,
      "predicate": "help.noAppUpdate",
      "params": [],
      "type": "help.AppUpdate"
    },
    {
      "id": 415997816,
      "predicate": "help.inviteText",
      "params": [
        {
          "name": "message",
          "type": "string"
        }
      ],
      "type": "help.InviteText"
    },
    {
      "id": 2877210784,
      "predicate": "encryptedChatEmpty",
      "params": [
        {
          "name": "id",
          "type": "int"
        }
      ],
      "type": "EncryptedChat"
    },
    {
      "id": 1006044124,
      "predicate": "encryptedChatWaiting",
      "params": [
        {
          "name": "id",
          "type": "int"
        },
        {
          "name": "access_hash",
          "type": "long"
        },
        {
          "name": "date",
          "type": "int"
        },
        {
          "name": "admin_id",
          "type": "int"
        },
        {
          "name": "participant_id",
          "type": "int"
        }
      ],
      "type": "EncryptedChat"
    },
    {
      "id": 1651608194,
      "predicate": "encryptedChatRequested",
      "params": [
        {
          "name": "flags",
          "type": "#"
        },
        {
          "name": "folder_id",
          "type": "flags.0?int"
        },
        {
          "name": "id",
          "type": "int"
        },
        {
          "name": "access_hash",
          "type": "long"
        },
        {
          "name": "date",
          "type": "int"
        },
        {
          "name": "admin_id",
          "type": "int"
        },
        {
          "name": "participant_id",
          "type": "int"
        },
        {
          "name": "g_a",
          "type": "bytes"
        }
      ],
      "type": "EncryptedChat"
    },
    {
      "id": 4199992886,
      "predicate": "encryptedChat",
      "params": [
        {
          "name": "id",
          "type": "int"
        },
        {
          "name": "access_hash",
          "type": "long"
        },
        {
          "name": "date",
          "type": "int"
        },
        {
          "name": "admin_id",
          "type": "int"
        },
        {
          "name": "participant_id",
          "type": "int"
        },
        {
          "name": "g_a_or_b",
          "type": "bytes"
        },
        {
          "name": "key_fingerprint",
          "type": "long"
        }
      ],
      "type": "EncryptedChat"
    },
    {
      "id": 505183301,
      "predicate": "encryptedChatDiscarded",
      "params": [
        {
          "name": "flags",
          "type": "#"
        },
        {
          "name": "history_deleted",
          "type": "flags.0?true"
        },
        {
          "name": "id",
          "type": "int"
        }
      ],
      "type": "EncryptedChat"
    },
    {
      "id": 4047615457,
      "predicate": "inputEncryptedChat",
      "params": [
        {
          "name": "chat_id",
          "type": "int"
        },
        {
          "name": "access_hash",
          "type": "long"
        }
      ],
      "type": "InputEncryptedChat"
    },
    {
      "id": 3256830334,
      "predicate": "encryptedFileEmpty",
      "params": [],
      "type": "EncryptedFile"
    },
    {
      "id": 1248893260,
      "predicate": "encryptedFile",
      "params": [
        {
          "name": "id",
          "type": "long"
        },
        {
          "name": "access_hash",
          "type": "long"
        },
        {
          "name": "size",
          "type": "int"
        },
        {
          "name": "dc_id",
          "type": "int"
        },
        {
          "name": "key_fingerprint",
          "type": "int"
        }
      ],
      "type": "EncryptedFile"
    },
    {
      "id": 406307684,
      "predicate": "inputEncryptedFileEmpty",
      "params": [],
      "type": "InputEncryptedFile"
    },
    {
      "id": 1690108678,
      "predicate": "inputEncryptedFileUploaded",
      "params": [
        {
          "name": "id",
          "type": "long"
        },
        {
          "name": "parts",
          "type": "int"
        },
        {
          "name": "md5_checksum",
          "type": "string"
        },
        {
          "name": "key_fingerprint",
          "type": "int"
        }
      ],
      "type": "InputEncryptedFile"
    },
    {
      "id": 1511503333,
      "predicate": "inputEncryptedFile",
      "params": [
        {
          "name": "id",
          "type": "long"
        },
        {
          "name": "access_hash",
          "type": "long"
        }
      ],
      "type": "InputEncryptedFile"
    },
    {
      "id": 767652808,
      "predicate": "inputEncryptedFileBigUploaded",
      "params": [
        {
          "name": "id",
          "type": "long"
        },
        {
          "name": "parts",
          "type": "int"
        },
        {
          "name": "key_fingerprint",
          "type": "int"
        }
      ],
      "type": "InputEncryptedFile"
    },
    {
      "id": 3977822488,
      "predicate": "encryptedMessage",
      "params": [
        {
          "name": "random_id",
          "type": "long"
        },
        {
          "name": "chat_id",
          "type": "int"
        },
        {
          "name": "date",
          "type": "int"
        },
        {
          "name": "bytes",
          "type": "bytes"
        },
        {
          "name": "file",
          "type": "EncryptedFile"
        }
      ],
      "type": "EncryptedMessage"
    },
    {
      "id": 594758406,
      "predicate": "encryptedMessageService",
      "params": [
        {
          "name": "random_id",
          "type": "long"
        },
        {
          "name": "chat_id",
          "type": "int"
        },
        {
          "name": "date",
          "type": "int"
        },
        {
          "name": "bytes",
          "type": "bytes"
        }
      ],
      "type": "EncryptedMessage"
    },
    {
      "id": 3236054581,
      "predicate": "messages.dhConfigNotModified",
      "params": [
        {
          "name": "random",
          "type": "bytes"
        }
      ],
      "type": "messages.DhConfig"
    },
    {
      "id": 740433629,
      "predicate": "messages.dhConfig",
      "params": [
        {
          "name": "g",
          "type": "int"
        },
        {
          "name": "p",
          "type": "bytes"
        },
        {
          "name": "version",
          "type": "int"
        },
        {
          "name": "random",
          "type": "bytes"
        }
      ],
      "type": "messages.DhConfig"
    },
    {
      "id": 1443858741,
      "predicate": "messages.sentEncryptedMessage",
      "params": [
        {
          "name": "date",
          "type": "int"
        }
      ],
      "type": "messages.SentEncryptedMessage"
    },
    {
      "id": 2492727090,
      "predicate": "messages.sentEncryptedFile",
      "params": [
        {
          "name": "date",
          "type": "int"
        },
        {
          "name": "file",
          "type": "EncryptedFile"
        }
      ],
      "type": "messages.SentEncryptedMessage"
    },
    {
      "id": 1928391342,
      "predicate": "inputDocumentEmpty",
      "params": [],
      "type": "InputDocument"
    },
    {
      "id": 448771445,
      "predicate": "inputDocument",
      "params": [
        {
          "name": "id",
          "type": "long"
        },
        {
          "name": "access_hash",
          "type": "long"
        },
        {
          "name": "file_reference",
          "type": "bytes"
        }
      ],
      "type": "InputDocument"
    },
    {
      "id": 922273905,
      "predicate": "documentEmpty",
      "params": [
        {
          "name": "id",
          "type": "long"
        }
      ],
      "type": "Document"
    },
    {
      "id": 512177195,
      "predicate": "document",
      "params": [
        {
          "name": "flags",
          "type": "#"
        },
        {
          "name": "id",
          "type": "long"
        },
        {
          "name": "access_hash",
          "type": "long"
        },
        {
          "name": "file_reference",
          "type": "bytes"
        },
        {
          "name": "date",
          "type": "int"
        },
        {
          "name": "mime_type",
          "type": "string"
        },
        {
          "name": "size",
          "type": "int"
        },
        {
          "name": "thumbs",
          "type": "flags.0?Vector<PhotoSize>"
        },
        {
          "name": "video_thumbs",
          "type": "flags.1?Vector<VideoSize>"
        },
        {
          "name": "dc_id",
          "type": "int"
        },
        {
          "name": "attributes",
          "type": "Vector<DocumentAttribute>"
        }
      ],
      "type": "Document"
    },
    {
      "id": 398898678,
      "predicate": "help.support",
      "params": [
        {
          "name": "phone_number",
          "type": "string"
        },
        {
          "name": "user",
          "type": "User"
        }
      ],
      "type": "help.Support"
    },
    {
      "id": 2681474008,
      "predicate": "notifyPeer",
      "params": [
        {
          "name": "peer",
          "type": "Peer"
        }
      ],
      "type": "NotifyPeer"
    },
    {
      "id": 3033021260,
      "predicate": "notifyUsers",
      "params": [],
      "type": "NotifyPeer"
    },
    {
      "id": 3221737155,
      "predicate": "notifyChats",
      "params": [],
      "type": "NotifyPeer"
    },
    {
      "id": 3591563503,
      "predicate": "notifyBroadcasts",
      "params": [],
      "type": "NotifyPeer"
    },
    {
      "id": 381645902,
      "predicate": "sendMessageTypingAction",
      "params": [],
      "type": "SendMessageAction"
    },
    {
      "id": 4250847477,
      "predicate": "sendMessageCancelAction",
      "params": [],
      "type": "SendMessageAction"
    },
    {
      "id": 2710034031,
      "predicate": "sendMessageRecordVideoAction",
      "params": [],
      "type": "SendMessageAction"
    },
    {
      "id": 3916839660,
      "predicate": "sendMessageUploadVideoAction",
      "params": [
        {
          "name": "progress",
          "type": "int"
        }
      ],
      "type": "SendMessageAction"
    },
    {
      "id": 3576656887,
      "predicate": "sendMessageRecordAudioAction",
      "params": [],
      "type": "SendMessageAction"
    },
    {
      "id": 4082227115,
      "predicate": "sendMessageUploadAudioAction",
      "params": [
        {
          "name": "progress",
          "type": "int"
        }
      ],
      "type": "SendMessageAction"
    },
    {
      "id": 3520285222,
      "predicate": "sendMessageUploadPhotoAction",
      "params": [
        {
          "name": "progress",
          "type": "int"
        }
      ],
      "type": "SendMessageAction"
    },
    {
      "id": 2852968932,
      "predicate": "sendMessageUploadDocumentAction",
      "params": [
        {
          "name": "progress",
          "type": "int"
        }
      ],
      "type": "SendMessageAction"
    },
    {
      "id": 393186209,
      "predicate": "sendMessageGeoLocationAction",
      "params": [],
      "type": "SendMessageAction"
    },
    {
      "id": 1653390447,
      "predicate": "sendMessageChooseContactAction",
      "params": [],
      "type": "SendMessageAction"
    },
    {
      "id": 3714748232,
      "predicate": "sendMessageGamePlayAction",
      "params": [],
      "type": "SendMessageAction"
    },
    {
      "id": 2297593788,
      "predicate": "sendMessageRecordRoundAction",
      "params": [],
      "type": "SendMessageAction"
    },
    {
      "id": 608050278,
      "predicate": "sendMessageUploadRoundAction",
      "params": [
        {
          "name": "progress",
          "type": "int"
        }
      ],
      "type": "SendMessageAction"
    },
    {
      "id": 3643548293,
      "predicate": "speakingInGroupCallAction",
      "params": [],
      "type": "SendMessageAction"
    },
    {
      "id": 3688534598,
      "predicate": "sendMessageHistoryImportAction",
      "params": [
        {
          "name": "progress",
          "type": "int"
        }
      ],
      "type": "SendMessageAction"
    },
    {
      "id": 3004386717,
      "predicate": "contacts.found",
      "params": [
        {
          "name": "my_results",
          "type": "Vector<Peer>"
        },
        {
          "name": "results",
          "type": "Vector<Peer>"
        },
        {
          "name": "chats",
          "type": "Vector<Chat>"
        },
        {
          "name": "users",
          "type": "Vector<User>"
        }
      ],
      "type": "contacts.Found"
    },
    {
      "id": 1335282456,
      "predicate": "inputPrivacyKeyStatusTimestamp",
      "params": [],
      "type": "InputPrivacyKey"
    },
    {
      "id": 3187344422,
      "predicate": "inputPrivacyKeyChatInvite",
      "params": [],
      "type": "InputPrivacyKey"
    },
    {
      "id": 4206550111,
      "predicate": "inputPrivacyKeyPhoneCall",
      "params": [],
      "type": "InputPrivacyKey"
    },
    {
      "id": 3684593874,
      "predicate": "inputPrivacyKeyPhoneP2P",
      "params": [],
      "type": "InputPrivacyKey"
    },
    {
      "id": 2765966344,
      "predicate": "inputPrivacyKeyForwards",
      "params": [],
      "type": "InputPrivacyKey"
    },
    {
      "id": 1461304012,
      "predicate": "inputPrivacyKeyProfilePhoto",
      "params": [],
      "type": "InputPrivacyKey"
    },
    {
      "id": 55761658,
      "predicate": "inputPrivacyKeyPhoneNumber",
      "params": [],
      "type": "InputPrivacyKey"
    },
    {
      "id": 3508640733,
      "predicate": "inputPrivacyKeyAddedByPhone",
      "params": [],
      "type": "InputPrivacyKey"
    },
    {
      "id": 3157175088,
      "predicate": "privacyKeyStatusTimestamp",
      "params": [],
      "type": "PrivacyKey"
    },
    {
      "id": 1343122938,
      "predicate": "privacyKeyChatInvite",
      "params": [],
      "type": "PrivacyKey"
    },
    {
      "id": 1030105979,
      "predicate": "privacyKeyPhoneCall",
      "params": [],
      "type": "PrivacyKey"
    },
    {
      "id": 961092808,
      "predicate": "privacyKeyPhoneP2P",
      "params": [],
      "type": "PrivacyKey"
    },
    {
      "id": 1777096355,
      "predicate": "privacyKeyForwards",
      "params": [],
      "type": "PrivacyKey"
    },
    {
      "id": 2517966829,
      "predicate": "privacyKeyProfilePhoto",
      "params": [],
      "type": "PrivacyKey"
    },
    {
      "id": 3516589165,
      "predicate": "privacyKeyPhoneNumber",
      "params": [],
      "type": "PrivacyKey"
    },
    {
      "id": 1124062251,
      "predicate": "privacyKeyAddedByPhone",
      "params": [],
      "type": "PrivacyKey"
    },
    {
      "id": 218751099,
      "predicate": "inputPrivacyValueAllowContacts",
      "params": [],
      "type": "InputPrivacyRule"
    },
    {
      "id": 407582158,
      "predicate": "inputPrivacyValueAllowAll",
      "params": [],
      "type": "InputPrivacyRule"
    },
    {
      "id": 320652927,
      "predicate": "inputPrivacyValueAllowUsers",
      "params": [
        {
          "name": "users",
          "type": "Vector<InputUser>"
        }
      ],
      "type": "InputPrivacyRule"
    },
    {
      "id": 195371015,
      "predicate": "inputPrivacyValueDisallowContacts",
      "params": [],
      "type": "InputPrivacyRule"
    },
    {
      "id": 3597362889,
      "predicate": "inputPrivacyValueDisallowAll",
      "params": [],
      "type": "InputPrivacyRule"
    },
    {
      "id": 2417034343,
      "predicate": "inputPrivacyValueDisallowUsers",
      "params": [
        {
          "name": "users",
          "type": "Vector<InputUser>"
        }
      ],
      "type": "InputPrivacyRule"
    },
    {
      "id": 1283572154,
      "predicate": "inputPrivacyValueAllowChatParticipants",
      "params": [
        {
          "name": "chats",
          "type": "Vector<int>"
        }
      ],
      "type": "InputPrivacyRule"
    },
    {
      "id": 3626197935,
      "predicate": "inputPrivacyValueDisallowChatParticipants",
      "params": [
        {
          "name": "chats",
          "type": "Vector<int>"
        }
      ],
      "type": "InputPrivacyRule"
    },
    {
      "id": 4294843308,
      "predicate": "privacyValueAllowContacts",
      "params": [],
      "type": "PrivacyRule"
    },
    {
      "id": 1698855810,
      "predicate": "privacyValueAllowAll",
      "params": [],
      "type": "PrivacyRule"
    },
    {
      "id": 1297858060,
      "predicate": "privacyValueAllowUsers",
      "params": [
        {
          "name": "users",
          "type": "Vector<int>"
        }
      ],
      "type": "PrivacyRule"
    },
    {
      "id": 4169726490,
      "predicate": "privacyValueDisallowContacts",
      "params": [],
      "type": "PrivacyRule"
    },
    {
      "id": 2339628899,
      "predicate": "privacyValueDisallowAll",
      "params": [],
      "type": "PrivacyRule"
    },
    {
      "id": 209668535,
      "predicate": "privacyValueDisallowUsers",
      "params": [
        {
          "name": "users",
          "type": "Vector<int>"
        }
      ],
      "type": "PrivacyRule"
    },
    {
      "id": 415136107,
      "predicate": "privacyValueAllowChatParticipants",
      "params": [
        {
          "name": "chats",
          "type": "Vector<int>"
        }
      ],
      "type": "PrivacyRule"
    },
    {
      "id": 2897086096,
      "predicate": "privacyValueDisallowChatParticipants",
      "params": [
        {
          "name": "chats",
          "type": "Vector<int>"
        }
      ],
      "type": "PrivacyRule"
    },
    {
      "id": 1352683077,
      "predicate": "account.privacyRules",
      "params": [
        {
          "name": "rules",
          "type": "Vector<PrivacyRule>"
        },
        {
          "name": "chats",
          "type": "Vector<Chat>"
        },
        {
          "name": "users",
          "type": "Vector<User>"
        }
      ],
      "type": "account.PrivacyRules"
    },
    {
      "id": 3100684255,
      "predicate": "accountDaysTTL",
      "params": [
        {
          "name": "days",
          "type": "int"
        }
      ],
      "type": "AccountDaysTTL"
    },
    {
      "id": 1815593308,
      "predicate": "documentAttributeImageSize",
      "params": [
        {
          "name": "w",
          "type": "int"
        },
        {
          "name": "h",
          "type": "int"
        }
      ],
      "type": "DocumentAttribute"
    },
    {
      "id": 297109817,
      "predicate": "documentAttributeAnimated",
      "params": [],
      "type": "DocumentAttribute"
    },
    {
      "id": 1662637586,
      "predicate": "documentAttributeSticker",
      "params": [
        {
          "name": "flags",
          "type": "#"
        },
        {
          "name": "mask",
          "type": "flags.1?true"
        },
        {
          "name": "alt",
          "type": "string"
        },
        {
          "name": "stickerset",
          "type": "InputStickerSet"
        },
        {
          "name": "mask_coords",
          "type": "flags.0?MaskCoords"
        }
      ],
      "type": "DocumentAttribute"
    },
    {
      "id": 250621158,
      "predicate": "documentAttributeVideo",
      "params": [
        {
          "name": "flags",
          "type": "#"
        },
        {
          "name": "round_message",
          "type": "flags.0?true"
        },
        {
          "name": "supports_streaming",
          "type": "flags.1?true"
        },
        {
          "name": "duration",
          "type": "int"
        },
        {
          "name": "w",
          "type": "int"
        },
        {
          "name": "h",
          "type": "int"
        }
      ],
      "type": "DocumentAttribute"
    },
    {
      "id": 2555574726,
      "predicate": "documentAttributeAudio",
      "params": [
        {
          "name": "flags",
          "type": "#"
        },
        {
          "name": "voice",
          "type": "flags.10?true"
        },
        {
          "name": "duration",
          "type": "int"
        },
        {
          "name": "title",
          "type": "flags.0?string"
        },
        {
          "name": "performer",
          "type": "flags.1?string"
        },
        {
          "name": "waveform",
          "type": "flags.2?bytes"
        }
      ],
      "type": "DocumentAttribute"
    },
    {
      "id": 358154344,
      "predicate": "documentAttributeFilename",
      "params": [
        {
          "name": "file_name",
          "type": "string"
        }
      ],
      "type": "DocumentAttribute"
    },
    {
      "id": 2550256375,
      "predicate": "documentAttributeHasStickers",
      "params": [],
      "type": "DocumentAttribute"
    },
    {
      "id": 4050950690,
      "predicate": "messages.stickersNotModified",
      "params": [],
      "type": "messages.Stickers"
    },
    {
      "id": 3831077821,
      "predicate": "messages.stickers",
      "params": [
        {
          "name": "hash",
          "type": "int"
        },
        {
          "name": "stickers",
          "type": "Vector<Document>"
        }
      ],
      "type": "messages.Stickers"
    },
    {
      "id": 313694676,
      "predicate": "stickerPack",
      "params": [
        {
          "name": "emoticon",
          "type": "string"
        },
        {
          "name": "documents",
          "type": "Vector<long>"
        }
      ],
      "type": "StickerPack"
    },
    {
      "id": 3898999491,
      "predicate": "messages.allStickersNotModified",
      "params": [],
      "type": "messages.AllStickers"
    },
    {
      "id": 3992797279,
      "predicate": "messages.allStickers",
      "params": [
        {
          "name": "hash",
          "type": "int"
        },
        {
          "name": "sets",
          "type": "Vector<StickerSet>"
        }
      ],
      "type": "messages.AllStickers"
    },
    {
      "id": 2228326789,
      "predicate": "messages.affectedMessages",
      "params": [
        {
          "name": "pts",
          "type": "int"
        },
        {
          "name": "pts_count",
          "type": "int"
        }
      ],
      "type": "messages.AffectedMessages"
    },
    {
      "id": 3943987176,
      "predicate": "webPageEmpty",
      "params": [
        {
          "name": "id",
          "type": "long"
        }
      ],
      "type": "WebPage"
    },
    {
      "id": 3313949212,
      "predicate": "webPagePending",
      "params": [
        {
          "name": "id",
          "type": "long"
        },
        {
          "name": "date",
          "type": "int"
        }
      ],
      "type": "WebPage"
    },
    {
      "id": 3902555570,
      "predicate": "webPage",
      "params": [
        {
          "name": "flags",
          "type": "#"
        },
        {
          "name": "id",
          "type": "long"
        },
        {
          "name": "url",
          "type": "string"
        },
        {
          "name": "display_url",
          "type": "string"
        },
        {
          "name": "hash",
          "type": "int"
        },
        {
          "name": "type",
          "type": "flags.0?string"
        },
        {
          "name": "site_name",
          "type": "flags.1?string"
        },
        {
          "name": "title",
          "type": "flags.2?string"
        },
        {
          "name": "description",
          "type": "flags.3?string"
        },
        {
          "name": "photo",
          "type": "flags.4?Photo"
        },
        {
          "name": "embed_url",
          "type": "flags.5?string"
        },
        {
          "name": "embed_type",
          "type": "flags.5?string"
        },
        {
          "name": "embed_width",
          "type": "flags.6?int"
        },
        {
          "name": "embed_height",
          "type": "flags.6?int"
        },
        {
          "name": "duration",
          "type": "flags.7?int"
        },
        {
          "name": "author",
          "type": "flags.8?string"
        },
        {
          "name": "document",
          "type": "flags.9?Document"
        },
        {
          "name": "cached_page",
          "type": "flags.10?Page"
        },
        {
          "name": "attributes",
          "type": "flags.12?Vector<WebPageAttribute>"
        }
      ],
      "type": "WebPage"
    },
    {
      "id": 1930545681,
      "predicate": "webPageNotModified",
      "params": [
        {
          "name": "flags",
          "type": "#"
        },
        {
          "name": "cached_page_views",
          "type": "flags.0?int"
        }
      ],
      "type": "WebPage"
    },
    {
      "id": 2902578717,
      "predicate": "authorization",
      "params": [
        {
          "name": "flags",
          "type": "#"
        },
        {
          "name": "current",
          "type": "flags.0?true"
        },
        {
          "name": "official_app",
          "type": "flags.1?true"
        },
        {
          "name": "password_pending",
          "type": "flags.2?true"
        },
        {
          "name": "hash",
          "type": "long"
        },
        {
          "name": "device_model",
          "type": "string"
        },
        {
          "name": "platform",
          "type": "string"
        },
        {
          "name": "system_version",
          "type": "string"
        },
        {
          "name": "api_id",
          "type": "int"
        },
        {
          "name": "app_name",
          "type": "string"
        },
        {
          "name": "app_version",
          "type": "string"
        },
        {
          "name": "date_created",
          "type": "int"
        },
        {
          "name": "date_active",
          "type": "int"
        },
        {
          "name": "ip",
          "type": "string"
        },
        {
          "name": "country",
          "type": "string"
        },
        {
          "name": "region",
          "type": "string"
        }
      ],
      "type": "Authorization"
    },
    {
      "id": 307276766,
      "predicate": "account.authorizations",
      "params": [
        {
          "name": "authorizations",
          "type": "Vector<Authorization>"
        }
      ],
      "type": "account.Authorizations"
    },
    {
      "id": 408623183,
      "predicate": "account.password",
      "params": [
        {
          "name": "flags",
          "type": "#"
        },
        {
          "name": "has_recovery",
          "type": "flags.0?true"
        },
        {
          "name": "has_secure_values",
          "type": "flags.1?true"
        },
        {
          "name": "has_password",
          "type": "flags.2?true"
        },
        {
          "name": "current_algo",
          "type": "flags.2?PasswordKdfAlgo"
        },
        {
          "name": "srp_B",
          "type": "flags.2?bytes"
        },
        {
          "name": "srp_id",
          "type": "flags.2?long"
        },
        {
          "name": "hint",
          "type": "flags.3?string"
        },
        {
          "name": "email_unconfirmed_pattern",
          "type": "flags.4?string"
        },
        {
          "name": "new_algo",
          "type": "PasswordKdfAlgo"
        },
        {
          "name": "new_secure_algo",
          "type": "SecurePasswordKdfAlgo"
        },
        {
          "name": "secure_random",
          "type": "bytes"
        },
        {
          "name": "pending_reset_date",
          "type": "flags.5?int"
        }
      ],
      "type": "account.Password"
    },
    {
      "id": 2589733861,
      "predicate": "account.passwordSettings",
      "params": [
        {
          "name": "flags",
          "type": "#"
        },
        {
          "name": "email",
          "type": "flags.0?string"
        },
        {
          "name": "secure_settings",
          "type": "flags.1?SecureSecretSettings"
        }
      ],
      "type": "account.PasswordSettings"
    },
    {
      "id": 3258394569,
      "predicate": "account.passwordInputSettings",
      "params": [
        {
          "name": "flags",
          "type": "#"
        },
        {
          "name": "new_algo",
          "type": "flags.0?PasswordKdfAlgo"
        },
        {
          "name": "new_password_hash",
          "type": "flags.0?bytes"
        },
        {
          "name": "hint",
          "type": "flags.0?string"
        },
        {
          "name": "email",
          "type": "flags.1?string"
        },
        {
          "name": "new_secure_settings",
          "type": "flags.2?SecureSecretSettings"
        }
      ],
      "type": "account.PasswordInputSettings"
    },
    {
      "id": 326715557,
      "predicate": "auth.passwordRecovery",
      "params": [
        {
          "name": "email_pattern",
          "type": "string"
        }
      ],
      "type": "auth.PasswordRecovery"
    },
    {
      "id": 2743383929,
      "predicate": "receivedNotifyMessage",
      "params": [
        {
          "name": "id",
          "type": "int"
        },
        {
          "name": "flags",
          "type": "int"
        }
      ],
      "type": "ReceivedNotifyMessage"
    },
    {
      "id": 1847917725,
      "predicate": "chatInviteExported",
      "params": [
        {
          "name": "flags",
          "type": "#"
        },
        {
          "name": "revoked",
          "type": "flags.0?true"
        },
        {
          "name": "permanent",
          "type": "flags.5?true"
        },
        {
          "name": "link",
          "type": "string"
        },
        {
          "name": "admin_id",
          "type": "int"
        },
        {
          "name": "date",
          "type": "int"
        },
        {
          "name": "start_date",
          "type": "flags.4?int"
        },
        {
          "name": "expire_date",
          "type": "flags.1?int"
        },
        {
          "name": "usage_limit",
          "type": "flags.2?int"
        },
        {
          "name": "usage",
          "type": "flags.3?int"
        }
      ],
      "type": "ExportedChatInvite"
    },
    {
      "id": 1516793212,
      "predicate": "chatInviteAlready",
      "params": [
        {
          "name": "chat",
          "type": "Chat"
        }
      ],
      "type": "ChatInvite"
    },
    {
      "id": 3754096014,
      "predicate": "chatInvite",
      "params": [
        {
          "name": "flags",
          "type": "#"
        },
        {
          "name": "channel",
          "type": "flags.0?true"
        },
        {
          "name": "broadcast",
          "type": "flags.1?true"
        },
        {
          "name": "public",
          "type": "flags.2?true"
        },
        {
          "name": "megagroup",
          "type": "flags.3?true"
        },
        {
          "name": "title",
          "type": "string"
        },
        {
          "name": "photo",
          "type": "Photo"
        },
        {
          "name": "participants_count",
          "type": "int"
        },
        {
          "name": "participants",
          "type": "flags.4?Vector<User>"
        }
      ],
      "type": "ChatInvite"
    },
    {
      "id": 1634294960,
      "predicate": "chatInvitePeek",
      "params": [
        {
          "name": "chat",
          "type": "Chat"
        },
        {
          "name": "expires",
          "type": "int"
        }
      ],
      "type": "ChatInvite"
    },
    {
      "id": 4290128789,
      "predicate": "inputStickerSetEmpty",
      "params": [],
      "type": "InputStickerSet"
    },
    {
      "id": 2649203305,
      "predicate": "inputStickerSetID",
      "params": [
        {
          "name": "id",
          "type": "long"
        },
        {
          "name": "access_hash",
          "type": "long"
        }
      ],
      "type": "InputStickerSet"
    },
    {
      "id": 2250033312,
      "predicate": "inputStickerSetShortName",
      "params": [
        {
          "name": "short_name",
          "type": "string"
        }
      ],
      "type": "InputStickerSet"
    },
    {
      "id": 42402760,
      "predicate": "inputStickerSetAnimatedEmoji",
      "params": [],
      "type": "InputStickerSet"
    },
    {
      "id": 3867103758,
      "predicate": "inputStickerSetDice",
      "params": [
        {
          "name": "emoticon",
          "type": "string"
        }
      ],
      "type": "InputStickerSet"
    },
    {
      "id": 3621724538,
      "predicate": "stickerSet",
      "params": [
        {
          "name": "flags",
          "type": "#"
        },
        {
          "name": "archived",
          "type": "flags.1?true"
        },
        {
          "name": "official",
          "type": "flags.2?true"
        },
        {
          "name": "masks",
          "type": "flags.3?true"
        },
        {
          "name": "animated",
          "type": "flags.5?true"
        },
        {
          "name": "installed_date",
          "type": "flags.0?int"
        },
        {
          "name": "id",
          "type": "long"
        },
        {
          "name": "access_hash",
          "type": "long"
        },
        {
          "name": "title",
          "type": "string"
        },
        {
          "name": "short_name",
          "type": "string"
        },
        {
          "name": "thumbs",
          "type": "flags.4?Vector<PhotoSize>"
        },
        {
          "name": "thumb_dc_id",
          "type": "flags.4?int"
        },
        {
          "name": "thumb_version",
          "type": "flags.4?int"
        },
        {
          "name": "count",
          "type": "int"
        },
        {
          "name": "hash",
          "type": "int"
        }
      ],
      "type": "StickerSet"
    },
    {
      "id": 3054118054,
      "predicate": "messages.stickerSet",
      "params": [
        {
          "name": "set",
          "type": "StickerSet"
        },
        {
          "name": "packs",
          "type": "Vector<StickerPack>"
        },
        {
          "name": "documents",
          "type": "Vector<Document>"
        }
      ],
      "type": "messages.StickerSet"
    },
    {
      "id": 3262826695,
      "predicate": "botCommand",
      "params": [
        {
          "name": "command",
          "type": "string"
        },
        {
          "name": "description",
          "type": "string"
        }
      ],
      "type": "BotCommand"
    },
    {
      "id": 2565348666,
      "predicate": "botInfo",
      "params": [
        {
          "name": "user_id",
          "type": "int"
        },
        {
          "name": "description",
          "type": "string"
        },
        {
          "name": "commands",
          "type": "Vector<BotCommand>"
        }
      ],
      "type": "BotInfo"
    },
    {
      "id": 2734311552,
      "predicate": "keyboardButton",
      "params": [
        {
          "name": "text",
          "type": "string"
        }
      ],
      "type": "KeyboardButton"
    },
    {
      "id": 629866245,
      "predicate": "keyboardButtonUrl",
      "params": [
        {
          "name": "text",
          "type": "string"
        },
        {
          "name": "url",
          "type": "string"
        }
      ],
      "type": "KeyboardButton"
    },
    {
      "id": 901503851,
      "predicate": "keyboardButtonCallback",
      "params": [
        {
          "name": "flags",
          "type": "#"
        },
        {
          "name": "requires_password",
          "type": "flags.0?true"
        },
        {
          "name": "text",
          "type": "string"
        },
        {
          "name": "data",
          "type": "bytes"
        }
      ],
      "type": "KeyboardButton"
    },
    {
      "id": 2976541737,
      "predicate": "keyboardButtonRequestPhone",
      "params": [
        {
          "name": "text",
          "type": "string"
        }
      ],
      "type": "KeyboardButton"
    },
    {
      "id": 4235815743,
      "predicate": "keyboardButtonRequestGeoLocation",
      "params": [
        {
          "name": "text",
          "type": "string"
        }
      ],
      "type": "KeyboardButton"
    },
    {
      "id": 90744648,
      "predicate": "keyboardButtonSwitchInline",
      "params": [
        {
          "name": "flags",
          "type": "#"
        },
        {
          "name": "same_peer",
          "type": "flags.0?true"
        },
        {
          "name": "text",
          "type": "string"
        },
        {
          "name": "query",
          "type": "string"
        }
      ],
      "type": "KeyboardButton"
    },
    {
      "id": 1358175439,
      "predicate": "keyboardButtonGame",
      "params": [
        {
          "name": "text",
          "type": "string"
        }
      ],
      "type": "KeyboardButton"
    },
    {
      "id": 2950250427,
      "predicate": "keyboardButtonBuy",
      "params": [
        {
          "name": "text",
          "type": "string"
        }
      ],
      "type": "KeyboardButton"
    },
    {
      "id": 280464681,
      "predicate": "keyboardButtonUrlAuth",
      "params": [
        {
          "name": "flags",
          "type": "#"
        },
        {
          "name": "text",
          "type": "string"
        },
        {
          "name": "fwd_text",
          "type": "flags.0?string"
        },
        {
          "name": "url",
          "type": "string"
        },
        {
          "name": "button_id",
          "type": "int"
        }
      ],
      "type": "KeyboardButton"
    },
    {
      "id": 3492708308,
      "predicate": "inputKeyboardButtonUrlAuth",
      "params": [
        {
          "name": "flags",
          "type": "#"
        },
        {
          "name": "request_write_access",
          "type": "flags.0?true"
        },
        {
          "name": "text",
          "type": "string"
        },
        {
          "name": "fwd_text",
          "type": "flags.1?string"
        },
        {
          "name": "url",
          "type": "string"
        },
        {
          "name": "bot",
          "type": "InputUser"
        }
      ],
      "type": "KeyboardButton"
    },
    {
      "id": 3150401885,
      "predicate": "keyboardButtonRequestPoll",
      "params": [
        {
          "name": "flags",
          "type": "#"
        },
        {
          "name": "quiz",
          "type": "flags.0?Bool"
        },
        {
          "name": "text",
          "type": "string"
        }
      ],
      "type": "KeyboardButton"
    },
    {
      "id": 2002815875,
      "predicate": "keyboardButtonRow",
      "params": [
        {
          "name": "buttons",
          "type": "Vector<KeyboardButton>"
        }
      ],
      "type": "KeyboardButtonRow"
    },
    {
      "id": 2688441221,
      "predicate": "replyKeyboardHide",
      "params": [
        {
          "name": "flags",
          "type": "#"
        },
        {
          "name": "selective",
          "type": "flags.2?true"
        }
      ],
      "type": "ReplyMarkup"
    },
    {
      "id": 2259946248,
      "predicate": "replyKeyboardForceReply",
      "params": [
        {
          "name": "flags",
          "type": "#"
        },
        {
          "name": "single_use",
          "type": "flags.1?true"
        },
        {
          "name": "selective",
          "type": "flags.2?true"
        },
        {
          "name": "placeholder",
          "type": "flags.3?string"
        }
      ],
      "type": "ReplyMarkup"
    },
    {
      "id": 2245892561,
      "predicate": "replyKeyboardMarkup",
      "params": [
        {
          "name": "flags",
          "type": "#"
        },
        {
          "name": "resize",
          "type": "flags.0?true"
        },
        {
          "name": "single_use",
          "type": "flags.1?true"
        },
        {
          "name": "selective",
          "type": "flags.2?true"
        },
        {
          "name": "rows",
          "type": "Vector<KeyboardButtonRow>"
        },
        {
          "name": "placeholder",
          "type": "flags.3?string"
        }
      ],
      "type": "ReplyMarkup"
    },
    {
      "id": 1218642516,
      "predicate": "replyInlineMarkup",
      "params": [
        {
          "name": "rows",
          "type": "Vector<KeyboardButtonRow>"
        }
      ],
      "type": "ReplyMarkup"
    },
    {
      "id": 3146955413,
      "predicate": "messageEntityUnknown",
      "params": [
        {
          "name": "offset",
          "type": "int"
        },
        {
          "name": "length",
          "type": "int"
        }
      ],
      "type": "MessageEntity"
    },
    {
      "id": 4194588573,
      "predicate": "messageEntityMention",
      "params": [
        {
          "name": "offset",
          "type": "int"
        },
        {
          "name": "length",
          "type": "int"
        }
      ],
      "type": "MessageEntity"
    },
    {
      "id": 1868782349,
      "predicate": "messageEntityHashtag",
      "params": [
        {
          "name": "offset",
          "type": "int"
        },
        {
          "name": "length",
          "type": "int"
        }
      ],
      "type": "MessageEntity"
    },
    {
      "id": 1827637959,
      "predicate": "messageEntityBotCommand",
      "params": [
        {
          "name": "offset",
          "type": "int"
        },
        {
          "name": "length",
          "type": "int"
        }
      ],
      "type": "MessageEntity"
    },
    {
      "id": 1859134776,
      "predicate": "messageEntityUrl",
      "params": [
        {
          "name": "offset",
          "type": "int"
        },
        {
          "name": "length",
          "type": "int"
        }
      ],
      "type": "MessageEntity"
    },
    {
      "id": 1692693954,
      "predicate": "messageEntityEmail",
      "params": [
        {
          "name": "offset",
          "type": "int"
        },
        {
          "name": "length",
          "type": "int"
        }
      ],
      "type": "MessageEntity"
    },
    {
      "id": 3177253833,
      "predicate": "messageEntityBold",
      "params": [
        {
          "name": "offset",
          "type": "int"
        },
        {
          "name": "length",
          "type": "int"
        }
      ],
      "type": "MessageEntity"
    },
    {
      "id": 2188348256,
      "predicate": "messageEntityItalic",
      "params": [
        {
          "name": "offset",
          "type": "int"
        },
        {
          "name": "length",
          "type": "int"
        }
      ],
      "type": "MessageEntity"
    },
    {
      "id": 681706865,
      "predicate": "messageEntityCode",
      "params": [
        {
          "name": "offset",
          "type": "int"
        },
        {
          "name": "length",
          "type": "int"
        }
      ],
      "type": "MessageEntity"
    },
    {
      "id": 1938967520,
      "predicate": "messageEntityPre",
      "params": [
        {
          "name": "offset",
          "type": "int"
        },
        {
          "name": "length",
          "type": "int"
        },
        {
          "name": "language",
          "type": "string"
        }
      ],
      "type": "MessageEntity"
    },
    {
      "id": 1990644519,
      "predicate": "messageEntityTextUrl",
      "params": [
        {
          "name": "offset",
          "type": "int"
        },
        {
          "name": "length",
          "type": "int"
        },
        {
          "name": "url",
          "type": "string"
        }
      ],
      "type": "MessageEntity"
    },
    {
      "id": 892193368,
      "predicate": "messageEntityMentionName",
      "params": [
        {
          "name": "offset",
          "type": "int"
        },
        {
          "name": "length",
          "type": "int"
        },
        {
          "name": "user_id",
          "type": "int"
        }
      ],
      "type": "MessageEntity"
    },
    {
      "id": 546203849,
      "predicate": "inputMessageEntityMentionName",
      "params": [
        {
          "name": "offset",
          "type": "int"
        },
        {
          "name": "length",
          "type": "int"
        },
        {
          "name": "user_id",
          "type": "InputUser"
        }
      ],
      "type": "MessageEntity"
    },
    {
      "id": 2607407947,
      "predicate": "messageEntityPhone",
      "params": [
        {
          "name": "offset",
          "type": "int"
        },
        {
          "name": "length",
          "type": "int"
        }
      ],
      "type": "MessageEntity"
    },
    {
      "id": 1280209983,
      "predicate": "messageEntityCashtag",
      "params": [
        {
          "name": "offset",
          "type": "int"
        },
        {
          "name": "length",
          "type": "int"
        }
      ],
      "type": "MessageEntity"
    },
    {
      "id": 2622389899,
      "predicate": "messageEntityUnderline",
      "params": [
        {
          "name": "offset",
          "type": "int"
        },
        {
          "name": "length",
          "type": "int"
        }
      ],
      "type": "MessageEntity"
    },
    {
      "id": 3204879316,
      "predicate": "messageEntityStrike",
      "params": [
        {
          "name": "offset",
          "type": "int"
        },
        {
          "name": "length",
          "type": "int"
        }
      ],
      "type": "MessageEntity"
    },
    {
      "id": 34469328,
      "predicate": "messageEntityBlockquote",
      "params": [
        {
          "name": "offset",
          "type": "int"
        },
        {
          "name": "length",
          "type": "int"
        }
      ],
      "type": "MessageEntity"
    },
    {
      "id": 1981704948,
      "predicate": "messageEntityBankCard",
      "params": [
        {
          "name": "offset",
          "type": "int"
        },
        {
          "name": "length",
          "type": "int"
        }
      ],
      "type": "MessageEntity"
    },
    {
      "id": 4002160262,
      "predicate": "inputChannelEmpty",
      "params": [],
      "type": "InputChannel"
    },
    {
      "id": 2951442734,
      "predicate": "inputChannel",
      "params": [
        {
          "name": "channel_id",
          "type": "int"
        },
        {
          "name": "access_hash",
          "type": "long"
        }
      ],
      "type": "InputChannel"
    },
    {
      "id": 707290417,
      "predicate": "inputChannelFromMessage",
      "params": [
        {
          "name": "peer",
          "type": "InputPeer"
        },
        {
          "name": "msg_id",
          "type": "int"
        },
        {
          "name": "channel_id",
          "type": "int"
        }
      ],
      "type": "InputChannel"
    },
    {
      "id": 2131196633,
      "predicate": "contacts.resolvedPeer",
      "params": [
        {
          "name": "peer",
          "type": "Peer"
        },
        {
          "name": "chats",
          "type": "Vector<Chat>"
        },
        {
          "name": "users",
          "type": "Vector<User>"
        }
      ],
      "type": "contacts.ResolvedPeer"
    },
    {
      "id": 182649427,
      "predicate": "messageRange",
      "params": [
        {
          "name": "min_id",
          "type": "int"
        },
        {
          "name": "max_id",
          "type": "int"
        }
      ],
      "type": "MessageRange"
    },
    {
      "id": 1041346555,
      "predicate": "updates.channelDifferenceEmpty",
      "params": [
        {
          "name": "flags",
          "type": "#"
        },
        {
          "name": "final",
          "type": "flags.0?true"
        },
        {
          "name": "pts",
          "type": "int"
        },
        {
          "name": "timeout",
          "type": "flags.1?int"
        }
      ],
      "type": "updates.ChannelDifference"
    },
    {
      "id": 2763835134,
      "predicate": "updates.channelDifferenceTooLong",
      "params": [
        {
          "name": "flags",
          "type": "#"
        },
        {
          "name": "final",
          "type": "flags.0?true"
        },
        {
          "name": "timeout",
          "type": "flags.1?int"
        },
        {
          "name": "dialog",
          "type": "Dialog"
        },
        {
          "name": "messages",
          "type": "Vector<Message>"
        },
        {
          "name": "chats",
          "type": "Vector<Chat>"
        },
        {
          "name": "users",
          "type": "Vector<User>"
        }
      ],
      "type": "updates.ChannelDifference"
    },
    {
      "id": 543450958,
      "predicate": "updates.channelDifference",
      "params": [
        {
          "name": "flags",
          "type": "#"
        },
        {
          "name": "final",
          "type": "flags.0?true"
        },
        {
          "name": "pts",
          "type": "int"
        },
        {
          "name": "timeout",
          "type": "flags.1?int"
        },
        {
          "name": "new_messages",
          "type": "Vector<Message>"
        },
        {
          "name": "other_updates",
          "type": "Vector<Update>"
        },
        {
          "name": "chats",
          "type": "Vector<Chat>"
        },
        {
          "name": "users",
          "type": "Vector<User>"
        }
      ],
      "type": "updates.ChannelDifference"
    },
    {
      "id": 2496933607,
      "predicate": "channelMessagesFilterEmpty",
      "params": [],
      "type": "ChannelMessagesFilter"
    },
    {
      "id": 3447183703,
      "predicate": "channelMessagesFilter",
      "params": [
        {
          "name": "flags",
          "type": "#"
        },
        {
          "name": "exclude_new_messages",
          "type": "flags.1?true"
        },
        {
          "name": "ranges",
          "type": "Vector<MessageRange>"
        }
      ],
      "type": "ChannelMessagesFilter"
    },
    {
      "id": 367766557,
      "predicate": "channelParticipant",
      "params": [
        {
          "name": "user_id",
          "type": "int"
        },
        {
          "name": "date",
          "type": "int"
        }
      ],
      "type": "ChannelParticipant"
    },
    {
      "id": 2737347181,
      "predicate": "channelParticipantSelf",
      "params": [
        {
          "name": "user_id",
          "type": "int"
        },
        {
          "name": "inviter_id",
          "type": "int"
        },
        {
          "name": "date",
          "type": "int"
        }
      ],
      "type": "ChannelParticipant"
    },
    {
      "id": 1149094475,
      "predicate": "channelParticipantCreator",
      "params": [
        {
          "name": "flags",
          "type": "#"
        },
        {
          "name": "user_id",
          "type": "int"
        },
        {
          "name": "admin_rights",
          "type": "ChatAdminRights"
        },
        {
          "name": "rank",
          "type": "flags.0?string"
        }
      ],
      "type": "ChannelParticipant"
    },
    {
      "id": 3435051951,
      "predicate": "channelParticipantAdmin",
      "params": [
        {
          "name": "flags",
          "type": "#"
        },
        {
          "name": "can_edit",
          "type": "flags.0?true"
        },
        {
          "name": "self",
          "type": "flags.1?true"
        },
        {
          "name": "user_id",
          "type": "int"
        },
        {
          "name": "inviter_id",
          "type": "flags.1?int"
        },
        {
          "name": "promoted_by",
          "type": "int"
        },
        {
          "name": "date",
          "type": "int"
        },
        {
          "name": "admin_rights",
          "type": "ChatAdminRights"
        },
        {
          "name": "rank",
          "type": "flags.2?string"
        }
      ],
      "type": "ChannelParticipant"
    },
    {
      "id": 1352785878,
      "predicate": "channelParticipantBanned",
      "params": [
        {
          "name": "flags",
          "type": "#"
        },
        {
          "name": "left",
          "type": "flags.0?true"
        },
        {
          "name": "peer",
          "type": "Peer"
        },
        {
          "name": "kicked_by",
          "type": "int"
        },
        {
          "name": "date",
          "type": "int"
        },
        {
          "name": "banned_rights",
          "type": "ChatBannedRights"
        }
      ],
      "type": "ChannelParticipant"
    },
    {
      "id": 453242886,
      "predicate": "channelParticipantLeft",
      "params": [
        {
          "name": "peer",
          "type": "Peer"
        }
      ],
      "type": "ChannelParticipant"
    },
    {
      "id": 3728686201,
      "predicate": "channelParticipantsRecent",
      "params": [],
      "type": "ChannelParticipantsFilter"
    },
    {
      "id": 3026225513,
      "predicate": "channelParticipantsAdmins",
      "params": [],
      "type": "ChannelParticipantsFilter"
    },
    {
      "id": 2746567045,
      "predicate": "channelParticipantsKicked",
      "params": [
        {
          "name": "q",
          "type": "string"
        }
      ],
      "type": "ChannelParticipantsFilter"
    },
    {
      "id": 2966521435,
      "predicate": "channelParticipantsBots",
      "params": [],
      "type": "ChannelParticipantsFilter"
    },
    {
      "id": 338142689,
      "predicate": "channelParticipantsBanned",
      "params": [
        {
          "name": "q",
          "type": "string"
        }
      ],
      "type": "ChannelParticipantsFilter"
    },
    {
      "id": 106343499,
      "predicate": "channelParticipantsSearch",
      "params": [
        {
          "name": "q",
          "type": "string"
        }
      ],
      "type": "ChannelParticipantsFilter"
    },
    {
      "id": 3144345741,
      "predicate": "channelParticipantsContacts",
      "params": [
        {
          "name": "q",
          "type": "string"
        }
      ],
      "type": "ChannelParticipantsFilter"
    },
    {
      "id": 3763035371,
      "predicate": "channelParticipantsMentions",
      "params": [
        {
          "name": "flags",
          "type": "#"
        },
        {
          "name": "q",
          "type": "flags.0?string"
        },
        {
          "name": "top_msg_id",
          "type": "flags.1?int"
        }
      ],
      "type": "ChannelParticipantsFilter"
    },
    {
      "id": 2595290799,
      "predicate": "channels.channelParticipants",
      "params": [
        {
          "name": "count",
          "type": "int"
        },
        {
          "name": "participants",
          "type": "Vector<ChannelParticipant>"
        },
        {
          "name": "chats",
          "type": "Vector<Chat>"
        },
        {
          "name": "users",
          "type": "Vector<User>"
        }
      ],
      "type": "channels.ChannelParticipants"
    },
    {
      "id": 4028055529,
      "predicate": "channels.channelParticipantsNotModified",
      "params": [],
      "type": "channels.ChannelParticipants"
    },
    {
      "id": 3753378583,
      "predicate": "channels.channelParticipant",
      "params": [
        {
          "name": "participant",
          "type": "ChannelParticipant"
        },
        {
          "name": "chats",
          "type": "Vector<Chat>"
        },
        {
          "name": "users",
          "type": "Vector<User>"
        }
      ],
      "type": "channels.ChannelParticipant"
    },
    {
      "id": 2013922064,
      "predicate": "help.termsOfService",
      "params": [
        {
          "name": "flags",
          "type": "#"
        },
        {
          "name": "popup",
          "type": "flags.0?true"
        },
        {
          "name": "id",
          "type": "DataJSON"
        },
        {
          "name": "text",
          "type": "string"
        },
        {
          "name": "entities",
          "type": "Vector<MessageEntity>"
        },
        {
          "name": "min_age_confirm",
          "type": "flags.1?int"
        }
      ],
      "type": "help.TermsOfService"
    },
    {
      "id": 3892468898,
      "predicate": "messages.savedGifsNotModified",
      "params": [],
      "type": "messages.SavedGifs"
    },
    {
      "id": 772213157,
      "predicate": "messages.savedGifs",
      "params": [
        {
          "name": "hash",
          "type": "int"
        },
        {
          "name": "gifs",
          "type": "Vector<Document>"
        }
      ],
      "type": "messages.SavedGifs"
    },
    {
      "id": 864077702,
      "predicate": "inputBotInlineMessageMediaAuto",
      "params": [
        {
          "name": "flags",
          "type": "#"
        },
        {
          "name": "message",
          "type": "string"
        },
        {
          "name": "entities",
          "type": "flags.1?Vector<MessageEntity>"
        },
        {
          "name": "reply_markup",
          "type": "flags.2?ReplyMarkup"
        }
      ],
      "type": "InputBotInlineMessage"
    },
    {
      "id": 1036876423,
      "predicate": "inputBotInlineMessageText",
      "params": [
        {
          "name": "flags",
          "type": "#"
        },
        {
          "name": "no_webpage",
          "type": "flags.0?true"
        },
        {
          "name": "message",
          "type": "string"
        },
        {
          "name": "entities",
          "type": "flags.1?Vector<MessageEntity>"
        },
        {
          "name": "reply_markup",
          "type": "flags.2?ReplyMarkup"
        }
      ],
      "type": "InputBotInlineMessage"
    },
    {
      "id": 2526190213,
      "predicate": "inputBotInlineMessageMediaGeo",
      "params": [
        {
          "name": "flags",
          "type": "#"
        },
        {
          "name": "geo_point",
          "type": "InputGeoPoint"
        },
        {
          "name": "heading",
          "type": "flags.0?int"
        },
        {
          "name": "period",
          "type": "flags.1?int"
        },
        {
          "name": "proximity_notification_radius",
          "type": "flags.3?int"
        },
        {
          "name": "reply_markup",
          "type": "flags.2?ReplyMarkup"
        }
      ],
      "type": "InputBotInlineMessage"
    },
    {
      "id": 1098628881,
      "predicate": "inputBotInlineMessageMediaVenue",
      "params": [
        {
          "name": "flags",
          "type": "#"
        },
        {
          "name": "geo_point",
          "type": "InputGeoPoint"
        },
        {
          "name": "title",
          "type": "string"
        },
        {
          "name": "address",
          "type": "string"
        },
        {
          "name": "provider",
          "type": "string"
        },
        {
          "name": "venue_id",
          "type": "string"
        },
        {
          "name": "venue_type",
          "type": "string"
        },
        {
          "name": "reply_markup",
          "type": "flags.2?ReplyMarkup"
        }
      ],
      "type": "InputBotInlineMessage"
    },
    {
      "id": 2800599037,
      "predicate": "inputBotInlineMessageMediaContact",
      "params": [
        {
          "name": "flags",
          "type": "#"
        },
        {
          "name": "phone_number",
          "type": "string"
        },
        {
          "name": "first_name",
          "type": "string"
        },
        {
          "name": "last_name",
          "type": "string"
        },
        {
          "name": "vcard",
          "type": "string"
        },
        {
          "name": "reply_markup",
          "type": "flags.2?ReplyMarkup"
        }
      ],
      "type": "InputBotInlineMessage"
    },
    {
      "id": 1262639204,
      "predicate": "inputBotInlineMessageGame",
      "params": [
        {
          "name": "flags",
          "type": "#"
        },
        {
          "name": "reply_markup",
          "type": "flags.2?ReplyMarkup"
        }
      ],
      "type": "InputBotInlineMessage"
    },
    {
      "id": 3622273573,
      "predicate": "inputBotInlineMessageMediaInvoice",
      "params": [
        {
          "name": "flags",
          "type": "#"
        },
        {
          "name": "title",
          "type": "string"
        },
        {
          "name": "description",
          "type": "string"
        },
        {
          "name": "photo",
          "type": "flags.0?InputWebDocument"
        },
        {
          "name": "invoice",
          "type": "Invoice"
        },
        {
          "name": "payload",
          "type": "bytes"
        },
        {
          "name": "provider",
          "type": "string"
        },
        {
          "name": "provider_data",
          "type": "DataJSON"
        },
        {
          "name": "reply_markup",
          "type": "flags.2?ReplyMarkup"
        }
      ],
      "type": "InputBotInlineMessage"
    },
    {
      "id": 2294256409,
      "predicate": "inputBotInlineResult",
      "params": [
        {
          "name": "flags",
          "type": "#"
        },
        {
          "name": "id",
          "type": "string"
        },
        {
          "name": "type",
          "type": "string"
        },
        {
          "name": "title",
          "type": "flags.1?string"
        },
        {
          "name": "description",
          "type": "flags.2?string"
        },
        {
          "name": "url",
          "type": "flags.3?string"
        },
        {
          "name": "thumb",
          "type": "flags.4?InputWebDocument"
        },
        {
          "name": "content",
          "type": "flags.5?InputWebDocument"
        },
        {
          "name": "send_message",
          "type": "InputBotInlineMessage"
        }
      ],
      "type": "InputBotInlineResult"
    },
    {
      "id": 2832753831,
      "predicate": "inputBotInlineResultPhoto",
      "params": [
        {
          "name": "id",
          "type": "string"
        },
        {
          "name": "type",
          "type": "string"
        },
        {
          "name": "photo",
          "type": "InputPhoto"
        },
        {
          "name": "send_message",
          "type": "InputBotInlineMessage"
        }
      ],
      "type": "InputBotInlineResult"
    },
    {
      "id": 4294507972,
      "predicate": "inputBotInlineResultDocument",
      "params": [
        {
          "name": "flags",
          "type": "#"
        },
        {
          "name": "id",
          "type": "string"
        },
        {
          "name": "type",
          "type": "string"
        },
        {
          "name": "title",
          "type": "flags.1?string"
        },
        {
          "name": "description",
          "type": "flags.2?string"
        },
        {
          "name": "document",
          "type": "InputDocument"
        },
        {
          "name": "send_message",
          "type": "InputBotInlineMessage"
        }
      ],
      "type": "InputBotInlineResult"
    },
    {
      "id": 1336154098,
      "predicate": "inputBotInlineResultGame",
      "params": [
        {
          "name": "id",
          "type": "string"
        },
        {
          "name": "short_name",
          "type": "string"
        },
        {
          "name": "send_message",
          "type": "InputBotInlineMessage"
        }
      ],
      "type": "InputBotInlineResult"
    },
    {
      "id": 1984755728,
      "predicate": "botInlineMessageMediaAuto",
      "params": [
        {
          "name": "flags",
          "type": "#"
        },
        {
          "name": "message",
          "type": "string"
        },
        {
          "name": "entities",
          "type": "flags.1?Vector<MessageEntity>"
        },
        {
          "name": "reply_markup",
          "type": "flags.2?ReplyMarkup"
        }
      ],
      "type": "BotInlineMessage"
    },
    {
      "id": 2357159394,
      "predicate": "botInlineMessageText",
      "params": [
        {
          "name": "flags",
          "type": "#"
        },
        {
          "name": "no_webpage",
          "type": "flags.0?true"
        },
        {
          "name": "message",
          "type": "string"
        },
        {
          "name": "entities",
          "type": "flags.1?Vector<MessageEntity>"
        },
        {
          "name": "reply_markup",
          "type": "flags.2?ReplyMarkup"
        }
      ],
      "type": "BotInlineMessage"
    },
    {
      "id": 85477117,
      "predicate": "botInlineMessageMediaGeo",
      "params": [
        {
          "name": "flags",
          "type": "#"
        },
        {
          "name": "geo",
          "type": "GeoPoint"
        },
        {
          "name": "heading",
          "type": "flags.0?int"
        },
        {
          "name": "period",
          "type": "flags.1?int"
        },
        {
          "name": "proximity_notification_radius",
          "type": "flags.3?int"
        },
        {
          "name": "reply_markup",
          "type": "flags.2?ReplyMarkup"
        }
      ],
      "type": "BotInlineMessage"
    },
    {
      "id": 2324063644,
      "predicate": "botInlineMessageMediaVenue",
      "params": [
        {
          "name": "flags",
          "type": "#"
        },
        {
          "name": "geo",
          "type": "GeoPoint"
        },
        {
          "name": "title",
          "type": "string"
        },
        {
          "name": "address",
          "type": "string"
        },
        {
          "name": "provider",
          "type": "string"
        },
        {
          "name": "venue_id",
          "type": "string"
        },
        {
          "name": "venue_type",
          "type": "string"
        },
        {
          "name": "reply_markup",
          "type": "flags.2?ReplyMarkup"
        }
      ],
      "type": "BotInlineMessage"
    },
    {
      "id": 416402882,
      "predicate": "botInlineMessageMediaContact",
      "params": [
        {
          "name": "flags",
          "type": "#"
        },
        {
          "name": "phone_number",
          "type": "string"
        },
        {
          "name": "first_name",
          "type": "string"
        },
        {
          "name": "last_name",
          "type": "string"
        },
        {
          "name": "vcard",
          "type": "string"
        },
        {
          "name": "reply_markup",
          "type": "flags.2?ReplyMarkup"
        }
      ],
      "type": "BotInlineMessage"
    },
    {
      "id": 894081801,
      "predicate": "botInlineMessageMediaInvoice",
      "params": [
        {
          "name": "flags",
          "type": "#"
        },
        {
          "name": "shipping_address_requested",
          "type": "flags.1?true"
        },
        {
          "name": "test",
          "type": "flags.3?true"
        },
        {
          "name": "title",
          "type": "string"
        },
        {
          "name": "description",
          "type": "string"
        },
        {
          "name": "photo",
          "type": "flags.0?WebDocument"
        },
        {
          "name": "currency",
          "type": "string"
        },
        {
          "name": "total_amount",
          "type": "long"
        },
        {
          "name": "reply_markup",
          "type": "flags.2?ReplyMarkup"
        }
      ],
      "type": "BotInlineMessage"
    },
    {
      "id": 295067450,
      "predicate": "botInlineResult",
      "params": [
        {
          "name": "flags",
          "type": "#"
        },
        {
          "name": "id",
          "type": "string"
        },
        {
          "name": "type",
          "type": "string"
        },
        {
          "name": "title",
          "type": "flags.1?string"
        },
        {
          "name": "description",
          "type": "flags.2?string"
        },
        {
          "name": "url",
          "type": "flags.3?string"
        },
        {
          "name": "thumb",
          "type": "flags.4?WebDocument"
        },
        {
          "name": "content",
          "type": "flags.5?WebDocument"
        },
        {
          "name": "send_message",
          "type": "BotInlineMessage"
        }
      ],
      "type": "BotInlineResult"
    },
    {
      "id": 400266251,
      "predicate": "botInlineMediaResult",
      "params": [
        {
          "name": "flags",
          "type": "#"
        },
        {
          "name": "id",
          "type": "string"
        },
        {
          "name": "type",
          "type": "string"
        },
        {
          "name": "photo",
          "type": "flags.0?Photo"
        },
        {
          "name": "document",
          "type": "flags.1?Document"
        },
        {
          "name": "title",
          "type": "flags.2?string"
        },
        {
          "name": "description",
          "type": "flags.3?string"
        },
        {
          "name": "send_message",
          "type": "BotInlineMessage"
        }
      ],
      "type": "BotInlineResult"
    },
    {
      "id": 2491197512,
      "predicate": "messages.botResults",
      "params": [
        {
          "name": "flags",
          "type": "#"
        },
        {
          "name": "gallery",
          "type": "flags.0?true"
        },
        {
          "name": "query_id",
          "type": "long"
        },
        {
          "name": "next_offset",
          "type": "flags.1?string"
        },
        {
          "name": "switch_pm",
          "type": "flags.2?InlineBotSwitchPM"
        },
        {
          "name": "results",
          "type": "Vector<BotInlineResult>"
        },
        {
          "name": "cache_time",
          "type": "int"
        },
        {
          "name": "users",
          "type": "Vector<User>"
        }
      ],
      "type": "messages.BotResults"
    },
    {
      "id": 1571494644,
      "predicate": "exportedMessageLink",
      "params": [
        {
          "name": "link",
          "type": "string"
        },
        {
          "name": "html",
          "type": "string"
        }
      ],
      "type": "ExportedMessageLink"
    },
    {
      "id": 1601666510,
      "predicate": "messageFwdHeader",
      "params": [
        {
          "name": "flags",
          "type": "#"
        },
        {
          "name": "imported",
          "type": "flags.7?true"
        },
        {
          "name": "from_id",
          "type": "flags.0?Peer"
        },
        {
          "name": "from_name",
          "type": "flags.5?string"
        },
        {
          "name": "date",
          "type": "int"
        },
        {
          "name": "channel_post",
          "type": "flags.2?int"
        },
        {
          "name": "post_author",
          "type": "flags.3?string"
        },
        {
          "name": "saved_from_peer",
          "type": "flags.4?Peer"
        },
        {
          "name": "saved_from_msg_id",
          "type": "flags.4?int"
        },
        {
          "name": "psa_type",
          "type": "flags.6?string"
        }
      ],
      "type": "MessageFwdHeader"
    },
    {
      "id": 1923290508,
      "predicate": "auth.codeTypeSms",
      "params": [],
      "type": "auth.CodeType"
    },
    {
      "id": 1948046307,
      "predicate": "auth.codeTypeCall",
      "params": [],
      "type": "auth.CodeType"
    },
    {
      "id": 577556219,
      "predicate": "auth.codeTypeFlashCall",
      "params": [],
      "type": "auth.CodeType"
    },
    {
      "id": 1035688326,
      "predicate": "auth.sentCodeTypeApp",
      "params": [
        {
          "name": "length",
          "type": "int"
        }
      ],
      "type": "auth.SentCodeType"
    },
    {
      "id": 3221273506,
      "predicate": "auth.sentCodeTypeSms",
      "params": [
        {
          "name": "length",
          "type": "int"
        }
      ],
      "type": "auth.SentCodeType"
    },
    {
      "id": 1398007207,
      "predicate": "auth.sentCodeTypeCall",
      "params": [
        {
          "name": "length",
          "type": "int"
        }
      ],
      "type": "auth.SentCodeType"
    },
    {
      "id": 2869151449,
      "predicate": "auth.sentCodeTypeFlashCall",
      "params": [
        {
          "name": "pattern",
          "type": "string"
        }
      ],
      "type": "auth.SentCodeType"
    },
    {
      "id": 911761060,
      "predicate": "messages.botCallbackAnswer",
      "params": [
        {
          "name": "flags",
          "type": "#"
        },
        {
          "name": "alert",
          "type": "flags.1?true"
        },
        {
          "name": "has_url",
          "type": "flags.3?true"
        },
        {
          "name": "native_ui",
          "type": "flags.4?true"
        },
        {
          "name": "message",
          "type": "flags.0?string"
        },
        {
          "name": "url",
          "type": "flags.2?string"
        },
        {
          "name": "cache_time",
          "type": "int"
        }
      ],
      "type": "messages.BotCallbackAnswer"
    },
    {
      "id": 649453030,
      "predicate": "messages.messageEditData",
      "params": [
        {
          "name": "flags",
          "type": "#"
        },
        {
          "name": "caption",
          "type": "flags.0?true"
        }
      ],
      "type": "messages.MessageEditData"
    },
    {
      "id": 2299280777,
      "predicate": "inputBotInlineMessageID",
      "params": [
        {
          "name": "dc_id",
          "type": "int"
        },
        {
          "name": "id",
          "type": "long"
        },
        {
          "name": "access_hash",
          "type": "long"
        }
      ],
      "type": "InputBotInlineMessageID"
    },
    {
      "id": 1008755359,
      "predicate": "inlineBotSwitchPM",
      "params": [
        {
          "name": "text",
          "type": "string"
        },
        {
          "name": "start_param",
          "type": "string"
        }
      ],
      "type": "InlineBotSwitchPM"
    },
    {
      "id": 863093588,
      "predicate": "messages.peerDialogs",
      "params": [
        {
          "name": "dialogs",
          "type": "Vector<Dialog>"
        },
        {
          "name": "messages",
          "type": "Vector<Message>"
        },
        {
          "name": "chats",
          "type": "Vector<Chat>"
        },
        {
          "name": "users",
          "type": "Vector<User>"
        },
        {
          "name": "state",
          "type": "updates.State"
        }
      ],
      "type": "messages.PeerDialogs"
    },
    {
      "id": 3989684315,
      "predicate": "topPeer",
      "params": [
        {
          "name": "peer",
          "type": "Peer"
        },
        {
          "name": "rating",
          "type": "double"
        }
      ],
      "type": "TopPeer"
    },
    {
      "id": 2875595611,
      "predicate": "topPeerCategoryBotsPM",
      "params": [],
      "type": "TopPeerCategory"
    },
    {
      "id": 344356834,
      "predicate": "topPeerCategoryBotsInline",
      "params": [],
      "type": "TopPeerCategory"
    },
    {
      "id": 104314861,
      "predicate": "topPeerCategoryCorrespondents",
      "params": [],
      "type": "TopPeerCategory"
    },
    {
      "id": 3172442442,
      "predicate": "topPeerCategoryGroups",
      "params": [],
      "type": "TopPeerCategory"
    },
    {
      "id": 371037736,
      "predicate": "topPeerCategoryChannels",
      "params": [],
      "type": "TopPeerCategory"
    },
    {
      "id": 511092620,
      "predicate": "topPeerCategoryPhoneCalls",
      "params": [],
      "type": "TopPeerCategory"
    },
    {
      "id": 2822794409,
      "predicate": "topPeerCategoryForwardUsers",
      "params": [],
      "type": "TopPeerCategory"
    },
    {
      "id": 4226728176,
      "predicate": "topPeerCategoryForwardChats",
      "params": [],
      "type": "TopPeerCategory"
    },
    {
      "id": 4219683473,
      "predicate": "topPeerCategoryPeers",
      "params": [
        {
          "name": "category",
          "type": "TopPeerCategory"
        },
        {
          "name": "count",
          "type": "int"
        },
        {
          "name": "peers",
          "type": "Vector<TopPeer>"
        }
      ],
      "type": "TopPeerCategoryPeers"
    },
    {
      "id": 3727060725,
      "predicate": "contacts.topPeersNotModified",
      "params": [],
      "type": "contacts.TopPeers"
    },
    {
      "id": 1891070632,
      "predicate": "contacts.topPeers",
      "params": [
        {
          "name": "categories",
          "type": "Vector<TopPeerCategoryPeers>"
        },
        {
          "name": "chats",
          "type": "Vector<Chat>"
        },
        {
          "name": "users",
          "type": "Vector<User>"
        }
      ],
      "type": "contacts.TopPeers"
    },
    {
      "id": 3039597469,
      "predicate": "contacts.topPeersDisabled",
      "params": [],
      "type": "contacts.TopPeers"
    },
    {
      "id": 453805082,
      "predicate": "draftMessageEmpty",
      "params": [
        {
          "name": "flags",
          "type": "#"
        },
        {
          "name": "date",
          "type": "flags.0?int"
        }
      ],
      "type": "DraftMessage"
    },
    {
      "id": 4253970719,
      "predicate": "draftMessage",
      "params": [
        {
          "name": "flags",
          "type": "#"
        },
        {
          "name": "no_webpage",
          "type": "flags.1?true"
        },
        {
          "name": "reply_to_msg_id",
          "type": "flags.0?int"
        },
        {
          "name": "message",
          "type": "string"
        },
        {
          "name": "entities",
          "type": "flags.3?Vector<MessageEntity>"
        },
        {
          "name": "date",
          "type": "int"
        }
      ],
      "type": "DraftMessage"
    },
    {
      "id": 3336309862,
      "predicate": "messages.featuredStickersNotModified",
      "params": [
        {
          "name": "count",
          "type": "int"
        }
      ],
      "type": "messages.FeaturedStickers"
    },
    {
      "id": 3064709953,
      "predicate": "messages.featuredStickers",
      "params": [
        {
          "name": "hash",
          "type": "int"
        },
        {
          "name": "count",
          "type": "int"
        },
        {
          "name": "sets",
          "type": "Vector<StickerSetCovered>"
        },
        {
          "name": "unread",
          "type": "Vector<long>"
        }
      ],
      "type": "messages.FeaturedStickers"
    },
    {
      "id": 186120336,
      "predicate": "messages.recentStickersNotModified",
      "params": [],
      "type": "messages.RecentStickers"
    },
    {
      "id": 586395571,
      "predicate": "messages.recentStickers",
      "params": [
        {
          "name": "hash",
          "type": "int"
        },
        {
          "name": "packs",
          "type": "Vector<StickerPack>"
        },
        {
          "name": "stickers",
          "type": "Vector<Document>"
        },
        {
          "name": "dates",
          "type": "Vector<int>"
        }
      ],
      "type": "messages.RecentStickers"
    },
    {
      "id": 1338747336,
      "predicate": "messages.archivedStickers",
      "params": [
        {
          "name": "count",
          "type": "int"
        },
        {
          "name": "sets",
          "type": "Vector<StickerSetCovered>"
        }
      ],
      "type": "messages.ArchivedStickers"
    },
    {
      "id": 946083368,
      "predicate": "messages.stickerSetInstallResultSuccess",
      "params": [],
      "type": "messages.StickerSetInstallResult"
    },
    {
      "id": 904138920,
      "predicate": "messages.stickerSetInstallResultArchive",
      "params": [
        {
          "name": "sets",
          "type": "Vector<StickerSetCovered>"
        }
      ],
      "type": "messages.StickerSetInstallResult"
    },
    {
      "id": 1678812626,
      "predicate": "stickerSetCovered",
      "params": [
        {
          "name": "set",
          "type": "StickerSet"
        },
        {
          "name": "cover",
          "type": "Document"
        }
      ],
      "type": "StickerSetCovered"
    },
    {
      "id": 872932635,
      "predicate": "stickerSetMultiCovered",
      "params": [
        {
          "name": "set",
          "type": "StickerSet"
        },
        {
          "name": "covers",
          "type": "Vector<Document>"
        }
      ],
      "type": "StickerSetCovered"
    },
    {
      "id": 2933316530,
      "predicate": "maskCoords",
      "params": [
        {
          "name": "n",
          "type": "int"
        },
        {
          "name": "x",
          "type": "double"
        },
        {
          "name": "y",
          "type": "double"
        },
        {
          "name": "zoom",
          "type": "double"
        }
      ],
      "type": "MaskCoords"
    },
    {
      "id": 1251549527,
      "predicate": "inputStickeredMediaPhoto",
      "params": [
        {
          "name": "id",
          "type": "InputPhoto"
        }
      ],
      "type": "InputStickeredMedia"
    },
    {
      "id": 70813275,
      "predicate": "inputStickeredMediaDocument",
      "params": [
        {
          "name": "id",
          "type": "InputDocument"
        }
      ],
      "type": "InputStickeredMedia"
    },
    {
      "id": 3187238203,
      "predicate": "game",
      "params": [
        {
          "name": "flags",
          "type": "#"
        },
        {
          "name": "id",
          "type": "long"
        },
        {
          "name": "access_hash",
          "type": "long"
        },
        {
          "name": "short_name",
          "type": "string"
        },
        {
          "name": "title",
          "type": "string"
        },
        {
          "name": "description",
          "type": "string"
        },
        {
          "name": "photo",
          "type": "Photo"
        },
        {
          "name": "document",
          "type": "flags.0?Document"
        }
      ],
      "type": "Game"
    },
    {
      "id": 53231223,
      "predicate": "inputGameID",
      "params": [
        {
          "name": "id",
          "type": "long"
        },
        {
          "name": "access_hash",
          "type": "long"
        }
      ],
      "type": "InputGame"
    },
    {
      "id": 3274827786,
      "predicate": "inputGameShortName",
      "params": [
        {
          "name": "bot_id",
          "type": "InputUser"
        },
        {
          "name": "short_name",
          "type": "string"
        }
      ],
      "type": "InputGame"
    },
    {
      "id": 1493171408,
      "predicate": "highScore",
      "params": [
        {
          "name": "pos",
          "type": "int"
        },
        {
          "name": "user_id",
          "type": "int"
        },
        {
          "name": "score",
          "type": "int"
        }
      ],
      "type": "HighScore"
    },
    {
      "id": 2587622809,
      "predicate": "messages.highScores",
      "params": [
        {
          "name": "scores",
          "type": "Vector<HighScore>"
        },
        {
          "name": "users",
          "type": "Vector<User>"
        }
      ],
      "type": "messages.HighScores"
    },
    {
      "id": 3695018575,
      "predicate": "textEmpty",
      "params": [],
      "type": "RichText"
    },
    {
      "id": 1950782688,
      "predicate": "textPlain",
      "params": [
        {
          "name": "text",
          "type": "string"
        }
      ],
      "type": "RichText"
    },
    {
      "id": 1730456516,
      "predicate": "textBold",
      "params": [
        {
          "name": "text",
          "type": "RichText"
        }
      ],
      "type": "RichText"
    },
    {
      "id": 3641877916,
      "predicate": "textItalic",
      "params": [
        {
          "name": "text",
          "type": "RichText"
        }
      ],
      "type": "RichText"
    },
    {
      "id": 3240501956,
      "predicate": "textUnderline",
      "params": [
        {
          "name": "text",
          "type": "RichText"
        }
      ],
      "type": "RichText"
    },
    {
      "id": 2616769429,
      "predicate": "textStrike",
      "params": [
        {
          "name": "text",
          "type": "RichText"
        }
      ],
      "type": "RichText"
    },
    {
      "id": 1816074681,
      "predicate": "textFixed",
      "params": [
        {
          "name": "text",
          "type": "RichText"
        }
      ],
      "type": "RichText"
    },
    {
      "id": 1009288385,
      "predicate": "textUrl",
      "params": [
        {
          "name": "text",
          "type": "RichText"
        },
        {
          "name": "url",
          "type": "string"
        },
        {
          "name": "webpage_id",
          "type": "long"
        }
      ],
      "type": "RichText"
    },
    {
      "id": 3730443734,
      "predicate": "textEmail",
      "params": [
        {
          "name": "text",
          "type": "RichText"
        },
        {
          "name": "email",
          "type": "string"
        }
      ],
      "type": "RichText"
    },
    {
      "id": 2120376535,
      "predicate": "textConcat",
      "params": [
        {
          "name": "texts",
          "type": "Vector<RichText>"
        }
      ],
      "type": "RichText"
    },
    {
      "id": 3983181060,
      "predicate": "textSubscript",
      "params": [
        {
          "name": "text",
          "type": "RichText"
        }
      ],
      "type": "RichText"
    },
    {
      "id": 3355139585,
      "predicate": "textSuperscript",
      "params": [
        {
          "name": "text",
          "type": "RichText"
        }
      ],
      "type": "RichText"
    },
    {
      "id": 55281185,
      "predicate": "textMarked",
      "params": [
        {
          "name": "text",
          "type": "RichText"
        }
      ],
      "type": "RichText"
    },
    {
      "id": 483104362,
      "predicate": "textPhone",
      "params": [
        {
          "name": "text",
          "type": "RichText"
        },
        {
          "name": "phone",
          "type": "string"
        }
      ],
      "type": "RichText"
    },
    {
      "id": 136105807,
      "predicate": "textImage",
      "params": [
        {
          "name": "document_id",
          "type": "long"
        },
        {
          "name": "w",
          "type": "int"
        },
        {
          "name": "h",
          "type": "int"
        }
      ],
      "type": "RichText"
    },
    {
      "id": 894777186,
      "predicate": "textAnchor",
      "params": [
        {
          "name": "text",
          "type": "RichText"
        },
        {
          "name": "name",
          "type": "string"
        }
      ],
      "type": "RichText"
    },
    {
      "id": 324435594,
      "predicate": "pageBlockUnsupported",
      "params": [],
      "type": "PageBlock"
    },
    {
      "id": 1890305021,
      "predicate": "pageBlockTitle",
      "params": [
        {
          "name": "text",
          "type": "RichText"
        }
      ],
      "type": "PageBlock"
    },
    {
      "id": 2415565343,
      "predicate": "pageBlockSubtitle",
      "params": [
        {
          "name": "text",
          "type": "RichText"
        }
      ],
      "type": "PageBlock"
    },
    {
      "id": 3132089824,
      "predicate": "pageBlockAuthorDate",
      "params": [
        {
          "name": "author",
          "type": "RichText"
        },
        {
          "name": "published_date",
          "type": "int"
        }
      ],
      "type": "PageBlock"
    },
    {
      "id": 3218105580,
      "predicate": "pageBlockHeader",
      "params": [
        {
          "name": "text",
          "type": "RichText"
        }
      ],
      "type": "PageBlock"
    },
    {
      "id": 4046173921,
      "predicate": "pageBlockSubheader",
      "params": [
        {
          "name": "text",
          "type": "RichText"
        }
      ],
      "type": "PageBlock"
    },
    {
      "id": 1182402406,
      "predicate": "pageBlockParagraph",
      "params": [
        {
          "name": "text",
          "type": "RichText"
        }
      ],
      "type": "PageBlock"
    },
    {
      "id": 3228621118,
      "predicate": "pageBlockPreformatted",
      "params": [
        {
          "name": "text",
          "type": "RichText"
        },
        {
          "name": "language",
          "type": "string"
        }
      ],
      "type": "PageBlock"
    },
    {
      "id": 1216809369,
      "predicate": "pageBlockFooter",
      "params": [
        {
          "name": "text",
          "type": "RichText"
        }
      ],
      "type": "PageBlock"
    },
    {
      "id": 3676352904,
      "predicate": "pageBlockDivider",
      "params": [],
      "type": "PageBlock"
    },
    {
      "id": 3456972720,
      "predicate": "pageBlockAnchor",
      "params": [
        {
          "name": "name",
          "type": "string"
        }
      ],
      "type": "PageBlock"
    },
    {
      "id": 3840442385,
      "predicate": "pageBlockList",
      "params": [
        {
          "name": "items",
          "type": "Vector<PageListItem>"
        }
      ],
      "type": "PageBlock"
    },
    {
      "id": 641563686,
      "predicate": "pageBlockBlockquote",
      "params": [
        {
          "name": "text",
          "type": "RichText"
        },
        {
          "name": "caption",
          "type": "RichText"
        }
      ],
      "type": "PageBlock"
    },
    {
      "id": 1329878739,
      "predicate": "pageBlockPullquote",
      "params": [
        {
          "name": "text",
          "type": "RichText"
        },
        {
          "name": "caption",
          "type": "RichText"
        }
      ],
      "type": "PageBlock"
    },
    {
      "id": 391759200,
      "predicate": "pageBlockPhoto",
      "params": [
        {
          "name": "flags",
          "type": "#"
        },
        {
          "name": "photo_id",
          "type": "long"
        },
        {
          "name": "caption",
          "type": "PageCaption"
        },
        {
          "name": "url",
          "type": "flags.0?string"
        },
        {
          "name": "webpage_id",
          "type": "flags.0?long"
        }
      ],
      "type": "PageBlock"
    },
    {
      "id": 2089805750,
      "predicate": "pageBlockVideo",
      "params": [
        {
          "name": "flags",
          "type": "#"
        },
        {
          "name": "autoplay",
          "type": "flags.0?true"
        },
        {
          "name": "loop",
          "type": "flags.1?true"
        },
        {
          "name": "video_id",
          "type": "long"
        },
        {
          "name": "caption",
          "type": "PageCaption"
        }
      ],
      "type": "PageBlock"
    },
    {
      "id": 972174080,
      "predicate": "pageBlockCover",
      "params": [
        {
          "name": "cover",
          "type": "PageBlock"
        }
      ],
      "type": "PageBlock"
    },
    {
      "id": 2826014149,
      "predicate": "pageBlockEmbed",
      "params": [
        {
          "name": "flags",
          "type": "#"
        },
        {
          "name": "full_width",
          "type": "flags.0?true"
        },
        {
          "name": "allow_scrolling",
          "type": "flags.3?true"
        },
        {
          "name": "url",
          "type": "flags.1?string"
        },
        {
          "name": "html",
          "type": "flags.2?string"
        },
        {
          "name": "poster_photo_id",
          "type": "flags.4?long"
        },
        {
          "name": "w",
          "type": "flags.5?int"
        },
        {
          "name": "h",
          "type": "flags.5?int"
        },
        {
          "name": "caption",
          "type": "PageCaption"
        }
      ],
      "type": "PageBlock"
    },
    {
      "id": 4065961995,
      "predicate": "pageBlockEmbedPost",
      "params": [
        {
          "name": "url",
          "type": "string"
        },
        {
          "name": "webpage_id",
          "type": "long"
        },
        {
          "name": "author_photo_id",
          "type": "long"
        },
        {
          "name": "author",
          "type": "string"
        },
        {
          "name": "date",
          "type": "int"
        },
        {
          "name": "blocks",
          "type": "Vector<PageBlock>"
        },
        {
          "name": "caption",
          "type": "PageCaption"
        }
      ],
      "type": "PageBlock"
    },
    {
      "id": 1705048653,
      "predicate": "pageBlockCollage",
      "params": [
        {
          "name": "items",
          "type": "Vector<PageBlock>"
        },
        {
          "name": "caption",
          "type": "PageCaption"
        }
      ],
      "type": "PageBlock"
    },
    {
      "id": 52401552,
      "predicate": "pageBlockSlideshow",
      "params": [
        {
          "name": "items",
          "type": "Vector<PageBlock>"
        },
        {
          "name": "caption",
          "type": "PageCaption"
        }
      ],
      "type": "PageBlock"
    },
    {
      "id": 4011282869,
      "predicate": "pageBlockChannel",
      "params": [
        {
          "name": "channel",
          "type": "Chat"
        }
      ],
      "type": "PageBlock"
    },
    {
      "id": 2151899626,
      "predicate": "pageBlockAudio",
      "params": [
        {
          "name": "audio_id",
          "type": "long"
        },
        {
          "name": "caption",
          "type": "PageCaption"
        }
      ],
      "type": "PageBlock"
    },
    {
      "id": 504660880,
      "predicate": "pageBlockKicker",
      "params": [
        {
          "name": "text",
          "type": "RichText"
        }
      ],
      "type": "PageBlock"
    },
    {
      "id": 3209554562,
      "predicate": "pageBlockTable",
      "params": [
        {
          "name": "flags",
          "type": "#"
        },
        {
          "name": "bordered",
          "type": "flags.0?true"
        },
        {
          "name": "striped",
          "type": "flags.1?true"
        },
        {
          "name": "title",
          "type": "RichText"
        },
        {
          "name": "rows",
          "type": "Vector<PageTableRow>"
        }
      ],
      "type": "PageBlock"
    },
    {
      "id": 2592793057,
      "predicate": "pageBlockOrderedList",
      "params": [
        {
          "name": "items",
          "type": "Vector<PageListOrderedItem>"
        }
      ],
      "type": "PageBlock"
    },
    {
      "id": 1987480557,
      "predicate": "pageBlockDetails",
      "params": [
        {
          "name": "flags",
          "type": "#"
        },
        {
          "name": "open",
          "type": "flags.0?true"
        },
        {
          "name": "blocks",
          "type": "Vector<PageBlock>"
        },
        {
          "name": "title",
          "type": "RichText"
        }
      ],
      "type": "PageBlock"
    },
    {
      "id": 370236054,
      "predicate": "pageBlockRelatedArticles",
      "params": [
        {
          "name": "title",
          "type": "RichText"
        },
        {
          "name": "articles",
          "type": "Vector<PageRelatedArticle>"
        }
      ],
      "type": "PageBlock"
    },
    {
      "id": 2756656886,
      "predicate": "pageBlockMap",
      "params": [
        {
          "name": "geo",
          "type": "GeoPoint"
        },
        {
          "name": "zoom",
          "type": "int"
        },
        {
          "name": "w",
          "type": "int"
        },
        {
          "name": "h",
          "type": "int"
        },
        {
          "name": "caption",
          "type": "PageCaption"
        }
      ],
      "type": "PageBlock"
    },
    {
      "id": 2246320897,
      "predicate": "phoneCallDiscardReasonMissed",
      "params": [],
      "type": "PhoneCallDiscardReason"
    },
    {
      "id": 3767910816,
      "predicate": "phoneCallDiscardReasonDisconnect",
      "params": [],
      "type": "PhoneCallDiscardReason"
    },
    {
      "id": 1471006352,
      "predicate": "phoneCallDiscardReasonHangup",
      "params": [],
      "type": "PhoneCallDiscardReason"
    },
    {
      "id": 4210550985,
      "predicate": "phoneCallDiscardReasonBusy",
      "params": [],
      "type": "PhoneCallDiscardReason"
    },
    {
      "id": 2104790276,
      "predicate": "dataJSON",
      "params": [
        {
          "name": "data",
          "type": "string"
        }
      ],
      "type": "DataJSON"
    },
    {
      "id": 3408489464,
      "predicate": "labeledPrice",
      "params": [
        {
          "name": "label",
          "type": "string"
        },
        {
          "name": "amount",
          "type": "long"
        }
      ],
      "type": "LabeledPrice"
    },
    {
      "id": 215516896,
      "predicate": "invoice",
      "params": [
        {
          "name": "flags",
          "type": "#"
        },
        {
          "name": "test",
          "type": "flags.0?true"
        },
        {
          "name": "name_requested",
          "type": "flags.1?true"
        },
        {
          "name": "phone_requested",
          "type": "flags.2?true"
        },
        {
          "name": "email_requested",
          "type": "flags.3?true"
        },
        {
          "name": "shipping_address_requested",
          "type": "flags.4?true"
        },
        {
          "name": "flexible",
          "type": "flags.5?true"
        },
        {
          "name": "phone_to_provider",
          "type": "flags.6?true"
        },
        {
          "name": "email_to_provider",
          "type": "flags.7?true"
        },
        {
          "name": "currency",
          "type": "string"
        },
        {
          "name": "prices",
          "type": "Vector<LabeledPrice>"
        },
        {
          "name": "max_tip_amount",
          "type": "flags.8?long"
        },
        {
          "name": "suggested_tip_amounts",
          "type": "flags.8?Vector<long>"
        }
      ],
      "type": "Invoice"
    },
    {
      "id": 3926049406,
      "predicate": "paymentCharge",
      "params": [
        {
          "name": "id",
          "type": "string"
        },
        {
          "name": "provider_charge_id",
          "type": "string"
        }
      ],
      "type": "PaymentCharge"
    },
    {
      "id": 512535275,
      "predicate": "postAddress",
      "params": [
        {
          "name": "street_line1",
          "type": "string"
        },
        {
          "name": "street_line2",
          "type": "string"
        },
        {
          "name": "city",
          "type": "string"
        },
        {
          "name": "state",
          "type": "string"
        },
        {
          "name": "country_iso2",
          "type": "string"
        },
        {
          "name": "post_code",
          "type": "string"
        }
      ],
      "type": "PostAddress"
    },
    {
      "id": 2426158996,
      "predicate": "paymentRequestedInfo",
      "params": [
        {
          "name": "flags",
          "type": "#"
        },
        {
          "name": "name",
          "type": "flags.0?string"
        },
        {
          "name": "phone",
          "type": "flags.1?string"
        },
        {
          "name": "email",
          "type": "flags.2?string"
        },
        {
          "name": "shipping_address",
          "type": "flags.3?PostAddress"
        }
      ],
      "type": "PaymentRequestedInfo"
    },
    {
      "id": 3452074527,
      "predicate": "paymentSavedCredentialsCard",
      "params": [
        {
          "name": "id",
          "type": "string"
        },
        {
          "name": "title",
          "type": "string"
        }
      ],
      "type": "PaymentSavedCredentials"
    },
    {
      "id": 475467473,
      "predicate": "webDocument",
      "params": [
        {
          "name": "url",
          "type": "string"
        },
        {
          "name": "access_hash",
          "type": "long"
        },
        {
          "name": "size",
          "type": "int"
        },
        {
          "name": "mime_type",
          "type": "string"
        },
        {
          "name": "attributes",
          "type": "Vector<DocumentAttribute>"
        }
      ],
      "type": "WebDocument"
    },
    {
      "id": 4190682310,
      "predicate": "webDocumentNoProxy",
      "params": [
        {
          "name": "url",
          "type": "string"
        },
        {
          "name": "size",
          "type": "int"
        },
        {
          "name": "mime_type",
          "type": "string"
        },
        {
          "name": "attributes",
          "type": "Vector<DocumentAttribute>"
        }
      ],
      "type": "WebDocument"
    },
    {
      "id": 2616017741,
      "predicate": "inputWebDocument",
      "params": [
        {
          "name": "url",
          "type": "string"
        },
        {
          "name": "size",
          "type": "int"
        },
        {
          "name": "mime_type",
          "type": "string"
        },
        {
          "name": "attributes",
          "type": "Vector<DocumentAttribute>"
        }
      ],
      "type": "InputWebDocument"
    },
    {
      "id": 3258570374,
      "predicate": "inputWebFileLocation",
      "params": [
        {
          "name": "url",
          "type": "string"
        },
        {
          "name": "access_hash",
          "type": "long"
        }
      ],
      "type": "InputWebFileLocation"
    },
    {
      "id": 2669814217,
      "predicate": "inputWebFileGeoPointLocation",
      "params": [
        {
          "name": "geo_point",
          "type": "InputGeoPoint"
        },
        {
          "name": "access_hash",
          "type": "long"
        },
        {
          "name": "w",
          "type": "int"
        },
        {
          "name": "h",
          "type": "int"
        },
        {
          "name": "zoom",
          "type": "int"
        },
        {
          "name": "scale",
          "type": "int"
        }
      ],
      "type": "InputWebFileLocation"
    },
    {
      "id": 568808380,
      "predicate": "upload.webFile",
      "params": [
        {
          "name": "size",
          "type": "int"
        },
        {
          "name": "mime_type",
          "type": "string"
        },
        {
          "name": "file_type",
          "type": "storage.FileType"
        },
        {
          "name": "mtime",
          "type": "int"
        },
        {
          "name": "bytes",
          "type": "bytes"
        }
      ],
      "type": "upload.WebFile"
    },
    {
      "id": 2366317589,
      "predicate": "payments.paymentForm",
      "params": [
        {
          "name": "flags",
          "type": "#"
        },
        {
          "name": "can_save_credentials",
          "type": "flags.2?true"
        },
        {
          "name": "password_missing",
          "type": "flags.3?true"
        },
        {
          "name": "form_id",
          "type": "long"
        },
        {
          "name": "bot_id",
          "type": "int"
        },
        {
          "name": "invoice",
          "type": "Invoice"
        },
        {
          "name": "provider_id",
          "type": "int"
        },
        {
          "name": "url",
          "type": "string"
        },
        {
          "name": "native_provider",
          "type": "flags.4?string"
        },
        {
          "name": "native_params",
          "type": "flags.4?DataJSON"
        },
        {
          "name": "saved_info",
          "type": "flags.0?PaymentRequestedInfo"
        },
        {
          "name": "saved_credentials",
          "type": "flags.1?PaymentSavedCredentials"
        },
        {
          "name": "users",
          "type": "Vector<User>"
        }
      ],
      "type": "payments.PaymentForm"
    },
    {
      "id": 3510966403,
      "predicate": "payments.validatedRequestedInfo",
      "params": [
        {
          "name": "flags",
          "type": "#"
        },
        {
          "name": "id",
          "type": "flags.0?string"
        },
        {
          "name": "shipping_options",
          "type": "flags.1?Vector<ShippingOption>"
        }
      ],
      "type": "payments.ValidatedRequestedInfo"
    },
    {
      "id": 1314881805,
      "predicate": "payments.paymentResult",
      "params": [
        {
          "name": "updates",
          "type": "Updates"
        }
      ],
      "type": "payments.PaymentResult"
    },
    {
      "id": 3628142905,
      "predicate": "payments.paymentVerificationNeeded",
      "params": [
        {
          "name": "url",
          "type": "string"
        }
      ],
      "type": "payments.PaymentResult"
    },
    {
      "id": 280319440,
      "predicate": "payments.paymentReceipt",
      "params": [
        {
          "name": "flags",
          "type": "#"
        },
        {
          "name": "date",
          "type": "int"
        },
        {
          "name": "bot_id",
          "type": "int"
        },
        {
          "name": "provider_id",
          "type": "int"
        },
        {
          "name": "title",
          "type": "string"
        },
        {
          "name": "description",
          "type": "string"
        },
        {
          "name": "photo",
          "type": "flags.2?WebDocument"
        },
        {
          "name": "invoice",
          "type": "Invoice"
        },
        {
          "name": "info",
          "type": "flags.0?PaymentRequestedInfo"
        },
        {
          "name": "shipping",
          "type": "flags.1?ShippingOption"
        },
        {
          "name": "tip_amount",
          "type": "flags.3?long"
        },
        {
          "name": "currency",
          "type": "string"
        },
        {
          "name": "total_amount",
          "type": "long"
        },
        {
          "name": "credentials_title",
          "type": "string"
        },
        {
          "name": "users",
          "type": "Vector<User>"
        }
      ],
      "type": "payments.PaymentReceipt"
    },
    {
      "id": 4220511292,
      "predicate": "payments.savedInfo",
      "params": [
        {
          "name": "flags",
          "type": "#"
        },
        {
          "name": "has_saved_credentials",
          "type": "flags.1?true"
        },
        {
          "name": "saved_info",
          "type": "flags.0?PaymentRequestedInfo"
        }
      ],
      "type": "payments.SavedInfo"
    },
    {
      "id": 3238965967,
      "predicate": "inputPaymentCredentialsSaved",
      "params": [
        {
          "name": "id",
          "type": "string"
        },
        {
          "name": "tmp_password",
          "type": "bytes"
        }
      ],
      "type": "InputPaymentCredentials"
    },
    {
      "id": 873977640,
      "predicate": "inputPaymentCredentials",
      "params": [
        {
          "name": "flags",
          "type": "#"
        },
        {
          "name": "save",
          "type": "flags.0?true"
        },
        {
          "name": "data",
          "type": "DataJSON"
        }
      ],
      "type": "InputPaymentCredentials"
    },
    {
      "id": 178373535,
      "predicate": "inputPaymentCredentialsApplePay",
      "params": [
        {
          "name": "payment_data",
          "type": "DataJSON"
        }
      ],
      "type": "InputPaymentCredentials"
    },
    {
      "id": 2328045569,
      "predicate": "inputPaymentCredentialsGooglePay",
      "params": [
        {
          "name": "payment_token",
          "type": "DataJSON"
        }
      ],
      "type": "InputPaymentCredentials"
    },
    {
      "id": 3680828724,
      "predicate": "account.tmpPassword",
      "params": [
        {
          "name": "tmp_password",
          "type": "bytes"
        },
        {
          "name": "valid_until",
          "type": "int"
        }
      ],
      "type": "account.TmpPassword"
    },
    {
      "id": 3055631583,
      "predicate": "shippingOption",
      "params": [
        {
          "name": "id",
          "type": "string"
        },
        {
          "name": "title",
          "type": "string"
        },
        {
          "name": "prices",
          "type": "Vector<LabeledPrice>"
        }
      ],
      "type": "ShippingOption"
    },
    {
      "id": 4288717974,
      "predicate": "inputStickerSetItem",
      "params": [
        {
          "name": "flags",
          "type": "#"
        },
        {
          "name": "document",
          "type": "InputDocument"
        },
        {
          "name": "emoji",
          "type": "string"
        },
        {
          "name": "mask_coords",
          "type": "flags.0?MaskCoords"
        }
      ],
      "type": "InputStickerSetItem"
    },
    {
      "id": 506920429,
      "predicate": "inputPhoneCall",
      "params": [
        {
          "name": "id",
          "type": "long"
        },
        {
          "name": "access_hash",
          "type": "long"
        }
      ],
      "type": "InputPhoneCall"
    },
    {
      "id": 1399245077,
      "predicate": "phoneCallEmpty",
      "params": [
        {
          "name": "id",
          "type": "long"
        }
      ],
      "type": "PhoneCall"
    },
    {
      "id": 462375633,
      "predicate": "phoneCallWaiting",
      "params": [
        {
          "name": "flags",
          "type": "#"
        },
        {
          "name": "video",
          "type": "flags.6?true"
        },
        {
          "name": "id",
          "type": "long"
        },
        {
          "name": "access_hash",
          "type": "long"
        },
        {
          "name": "date",
          "type": "int"
        },
        {
          "name": "admin_id",
          "type": "int"
        },
        {
          "name": "participant_id",
          "type": "int"
        },
        {
          "name": "protocol",
          "type": "PhoneCallProtocol"
        },
        {
          "name": "receive_date",
          "type": "flags.0?int"
        }
      ],
      "type": "PhoneCall"
    },
    {
      "id": 2280307539,
      "predicate": "phoneCallRequested",
      "params": [
        {
          "name": "flags",
          "type": "#"
        },
        {
          "name": "video",
          "type": "flags.6?true"
        },
        {
          "name": "id",
          "type": "long"
        },
        {
          "name": "access_hash",
          "type": "long"
        },
        {
          "name": "date",
          "type": "int"
        },
        {
          "name": "admin_id",
          "type": "int"
        },
        {
          "name": "participant_id",
          "type": "int"
        },
        {
          "name": "g_a_hash",
          "type": "bytes"
        },
        {
          "name": "protocol",
          "type": "PhoneCallProtocol"
        }
      ],
      "type": "PhoneCall"
    },
    {
      "id": 2575058250,
      "predicate": "phoneCallAccepted",
      "params": [
        {
          "name": "flags",
          "type": "#"
        },
        {
          "name": "video",
          "type": "flags.6?true"
        },
        {
          "name": "id",
          "type": "long"
        },
        {
          "name": "access_hash",
          "type": "long"
        },
        {
          "name": "date",
          "type": "int"
        },
        {
          "name": "admin_id",
          "type": "int"
        },
        {
          "name": "participant_id",
          "type": "int"
        },
        {
          "name": "g_b",
          "type": "bytes"
        },
        {
          "name": "protocol",
          "type": "PhoneCallProtocol"
        }
      ],
      "type": "PhoneCall"
    },
    {
      "id": 2269294207,
      "predicate": "phoneCall",
      "params": [
        {
          "name": "flags",
          "type": "#"
        },
        {
          "name": "p2p_allowed",
          "type": "flags.5?true"
        },
        {
          "name": "video",
          "type": "flags.6?true"
        },
        {
          "name": "id",
          "type": "long"
        },
        {
          "name": "access_hash",
          "type": "long"
        },
        {
          "name": "date",
          "type": "int"
        },
        {
          "name": "admin_id",
          "type": "int"
        },
        {
          "name": "participant_id",
          "type": "int"
        },
        {
          "name": "g_a_or_b",
          "type": "bytes"
        },
        {
          "name": "key_fingerprint",
          "type": "long"
        },
        {
          "name": "protocol",
          "type": "PhoneCallProtocol"
        },
        {
          "name": "connections",
          "type": "Vector<PhoneConnection>"
        },
        {
          "name": "start_date",
          "type": "int"
        }
      ],
      "type": "PhoneCall"
    },
    {
      "id": 1355435489,
      "predicate": "phoneCallDiscarded",
      "params": [
        {
          "name": "flags",
          "type": "#"
        },
        {
          "name": "need_rating",
          "type": "flags.2?true"
        },
        {
          "name": "need_debug",
          "type": "flags.3?true"
        },
        {
          "name": "video",
          "type": "flags.6?true"
        },
        {
          "name": "id",
          "type": "long"
        },
        {
          "name": "reason",
          "type": "flags.0?PhoneCallDiscardReason"
        },
        {
          "name": "duration",
          "type": "flags.1?int"
        }
      ],
      "type": "PhoneCall"
    },
    {
      "id": 2639009728,
      "predicate": "phoneConnection",
      "params": [
        {
          "name": "id",
          "type": "long"
        },
        {
          "name": "ip",
          "type": "string"
        },
        {
          "name": "ipv6",
          "type": "string"
        },
        {
          "name": "port",
          "type": "int"
        },
        {
          "name": "peer_tag",
          "type": "bytes"
        }
      ],
      "type": "PhoneConnection"
    },
    {
      "id": 1667228533,
      "predicate": "phoneConnectionWebrtc",
      "params": [
        {
          "name": "flags",
          "type": "#"
        },
        {
          "name": "turn",
          "type": "flags.0?true"
        },
        {
          "name": "stun",
          "type": "flags.1?true"
        },
        {
          "name": "id",
          "type": "long"
        },
        {
          "name": "ip",
          "type": "string"
        },
        {
          "name": "ipv6",
          "type": "string"
        },
        {
          "name": "port",
          "type": "int"
        },
        {
          "name": "username",
          "type": "string"
        },
        {
          "name": "password",
          "type": "string"
        }
      ],
      "type": "PhoneConnection"
    },
    {
      "id": 4236742600,
      "predicate": "phoneCallProtocol",
      "params": [
        {
          "name": "flags",
          "type": "#"
        },
        {
          "name": "udp_p2p",
          "type": "flags.0?true"
        },
        {
          "name": "udp_reflector",
          "type": "flags.1?true"
        },
        {
          "name": "min_layer",
          "type": "int"
        },
        {
          "name": "max_layer",
          "type": "int"
        },
        {
          "name": "library_versions",
          "type": "Vector<string>"
        }
      ],
      "type": "PhoneCallProtocol"
    },
    {
      "id": 3968000320,
      "predicate": "phone.phoneCall",
      "params": [
        {
          "name": "phone_call",
          "type": "PhoneCall"
        },
        {
          "name": "users",
          "type": "Vector<User>"
        }
      ],
      "type": "phone.PhoneCall"
    },
    {
      "id": 4004045934,
      "predicate": "upload.cdnFileReuploadNeeded",
      "params": [
        {
          "name": "request_token",
          "type": "bytes"
        }
      ],
      "type": "upload.CdnFile"
    },
    {
      "id": 2845821519,
      "predicate": "upload.cdnFile",
      "params": [
        {
          "name": "bytes",
          "type": "bytes"
        }
      ],
      "type": "upload.CdnFile"
    },
    {
      "id": 3380800186,
      "predicate": "cdnPublicKey",
      "params": [
        {
          "name": "dc_id",
          "type": "int"
        },
        {
          "name": "public_key",
          "type": "string"
        }
      ],
      "type": "CdnPublicKey"
    },
    {
      "id": 1462101002,
      "predicate": "cdnConfig",
      "params": [
        {
          "name": "public_keys",
          "type": "Vector<CdnPublicKey>"
        }
      ],
      "type": "CdnConfig"
    },
    {
      "id": 3402727926,
      "predicate": "langPackString",
      "params": [
        {
          "name": "key",
          "type": "string"
        },
        {
          "name": "value",
          "type": "string"
        }
      ],
      "type": "LangPackString"
    },
    {
      "id": 1816636575,
      "predicate": "langPackStringPluralized",
      "params": [
        {
          "name": "flags",
          "type": "#"
        },
        {
          "name": "key",
          "type": "string"
        },
        {
          "name": "zero_value",
          "type": "flags.0?string"
        },
        {
          "name": "one_value",
          "type": "flags.1?string"
        },
        {
          "name": "two_value",
          "type": "flags.2?string"
        },
        {
          "name": "few_value",
          "type": "flags.3?string"
        },
        {
          "name": "many_value",
          "type": "flags.4?string"
        },
        {
          "name": "other_value",
          "type": "string"
        }
      ],
      "type": "LangPackString"
    },
    {
      "id": 695856818,
      "predicate": "langPackStringDeleted",
      "params": [
        {
          "name": "key",
          "type": "string"
        }
      ],
      "type": "LangPackString"
    },
    {
      "id": 4085629430,
      "predicate": "langPackDifference",
      "params": [
        {
          "name": "lang_code",
          "type": "string"
        },
        {
          "name": "from_version",
          "type": "int"
        },
        {
          "name": "version",
          "type": "int"
        },
        {
          "name": "strings",
          "type": "Vector<LangPackString>"
        }
      ],
      "type": "LangPackDifference"
    },
    {
      "id": 4006239459,
      "predicate": "langPackLanguage",
      "params": [
        {
          "name": "flags",
          "type": "#"
        },
        {
          "name": "official",
          "type": "flags.0?true"
        },
        {
          "name": "rtl",
          "type": "flags.2?true"
        },
        {
          "name": "beta",
          "type": "flags.3?true"
        },
        {
          "name": "name",
          "type": "string"
        },
        {
          "name": "native_name",
          "type": "string"
        },
        {
          "name": "lang_code",
          "type": "string"
        },
        {
          "name": "base_lang_code",
          "type": "flags.1?string"
        },
        {
          "name": "plural_code",
          "type": "string"
        },
        {
          "name": "strings_count",
          "type": "int"
        },
        {
          "name": "translated_count",
          "type": "int"
        },
        {
          "name": "translations_url",
          "type": "string"
        }
      ],
      "type": "LangPackLanguage"
    },
    {
      "id": 3873421349,
      "predicate": "channelAdminLogEventActionChangeTitle",
      "params": [
        {
          "name": "prev_value",
          "type": "string"
        },
        {
          "name": "new_value",
          "type": "string"
        }
      ],
      "type": "ChannelAdminLogEventAction"
    },
    {
      "id": 1427671598,
      "predicate": "channelAdminLogEventActionChangeAbout",
      "params": [
        {
          "name": "prev_value",
          "type": "string"
        },
        {
          "name": "new_value",
          "type": "string"
        }
      ],
      "type": "ChannelAdminLogEventAction"
    },
    {
      "id": 1783299128,
      "predicate": "channelAdminLogEventActionChangeUsername",
      "params": [
        {
          "name": "prev_value",
          "type": "string"
        },
        {
          "name": "new_value",
          "type": "string"
        }
      ],
      "type": "ChannelAdminLogEventAction"
    },
    {
      "id": 1129042607,
      "predicate": "channelAdminLogEventActionChangePhoto",
      "params": [
        {
          "name": "prev_photo",
          "type": "Photo"
        },
        {
          "name": "new_photo",
          "type": "Photo"
        }
      ],
      "type": "ChannelAdminLogEventAction"
    },
    {
      "id": 460916654,
      "predicate": "channelAdminLogEventActionToggleInvites",
      "params": [
        {
          "name": "new_value",
          "type": "Bool"
        }
      ],
      "type": "ChannelAdminLogEventAction"
    },
    {
      "id": 648939889,
      "predicate": "channelAdminLogEventActionToggleSignatures",
      "params": [
        {
          "name": "new_value",
          "type": "Bool"
        }
      ],
      "type": "ChannelAdminLogEventAction"
    },
    {
      "id": 3924306968,
      "predicate": "channelAdminLogEventActionUpdatePinned",
      "params": [
        {
          "name": "message",
          "type": "Message"
        }
      ],
      "type": "ChannelAdminLogEventAction"
    },
    {
      "id": 1889215493,
      "predicate": "channelAdminLogEventActionEditMessage",
      "params": [
        {
          "name": "prev_message",
          "type": "Message"
        },
        {
          "name": "new_message",
          "type": "Message"
        }
      ],
      "type": "ChannelAdminLogEventAction"
    },
    {
      "id": 1121994683,
      "predicate": "channelAdminLogEventActionDeleteMessage",
      "params": [
        {
          "name": "message",
          "type": "Message"
        }
      ],
      "type": "ChannelAdminLogEventAction"
    },
    {
      "id": 405815507,
      "predicate": "channelAdminLogEventActionParticipantJoin",
      "params": [],
      "type": "ChannelAdminLogEventAction"
    },
    {
      "id": 4170676210,
      "predicate": "channelAdminLogEventActionParticipantLeave",
      "params": [],
      "type": "ChannelAdminLogEventAction"
    },
    {
      "id": 3810276568,
      "predicate": "channelAdminLogEventActionParticipantInvite",
      "params": [
        {
          "name": "participant",
          "type": "ChannelParticipant"
        }
      ],
      "type": "ChannelAdminLogEventAction"
    },
    {
      "id": 3872931198,
      "predicate": "channelAdminLogEventActionParticipantToggleBan",
      "params": [
        {
          "name": "prev_participant",
          "type": "ChannelParticipant"
        },
        {
          "name": "new_participant",
          "type": "ChannelParticipant"
        }
      ],
      "type": "ChannelAdminLogEventAction"
    },
    {
      "id": 3580323600,
      "predicate": "channelAdminLogEventActionParticipantToggleAdmin",
      "params": [
        {
          "name": "prev_participant",
          "type": "ChannelParticipant"
        },
        {
          "name": "new_participant",
          "type": "ChannelParticipant"
        }
      ],
      "type": "ChannelAdminLogEventAction"
    },
    {
      "id": 2982398631,
      "predicate": "channelAdminLogEventActionChangeStickerSet",
      "params": [
        {
          "name": "prev_stickerset",
          "type": "InputStickerSet"
        },
        {
          "name": "new_stickerset",
          "type": "InputStickerSet"
        }
      ],
      "type": "ChannelAdminLogEventAction"
    },
    {
      "id": 1599903217,
      "predicate": "channelAdminLogEventActionTogglePreHistoryHidden",
      "params": [
        {
          "name": "new_value",
          "type": "Bool"
        }
      ],
      "type": "ChannelAdminLogEventAction"
    },
    {
      "id": 771095562,
      "predicate": "channelAdminLogEventActionDefaultBannedRights",
      "params": [
        {
          "name": "prev_banned_rights",
          "type": "ChatBannedRights"
        },
        {
          "name": "new_banned_rights",
          "type": "ChatBannedRights"
        }
      ],
      "type": "ChannelAdminLogEventAction"
    },
    {
      "id": 2399639107,
      "predicate": "channelAdminLogEventActionStopPoll",
      "params": [
        {
          "name": "message",
          "type": "Message"
        }
      ],
      "type": "ChannelAdminLogEventAction"
    },
    {
      "id": 2725218331,
      "predicate": "channelAdminLogEventActionChangeLinkedChat",
      "params": [
        {
          "name": "prev_value",
          "type": "int"
        },
        {
          "name": "new_value",
          "type": "int"
        }
      ],
      "type": "ChannelAdminLogEventAction"
    },
    {
      "id": 241923758,
      "predicate": "channelAdminLogEventActionChangeLocation",
      "params": [
        {
          "name": "prev_value",
          "type": "ChannelLocation"
        },
        {
          "name": "new_value",
          "type": "ChannelLocation"
        }
      ],
      "type": "ChannelAdminLogEventAction"
    },
    {
      "id": 1401984889,
      "predicate": "channelAdminLogEventActionToggleSlowMode",
      "params": [
        {
          "name": "prev_value",
          "type": "int"
        },
        {
          "name": "new_value",
          "type": "int"
        }
      ],
      "type": "ChannelAdminLogEventAction"
    },
    {
      "id": 589338437,
      "predicate": "channelAdminLogEventActionStartGroupCall",
      "params": [
        {
          "name": "call",
          "type": "InputGroupCall"
        }
      ],
      "type": "ChannelAdminLogEventAction"
    },
    {
      "id": 3684667712,
      "predicate": "channelAdminLogEventActionDiscardGroupCall",
      "params": [
        {
          "name": "call",
          "type": "InputGroupCall"
        }
      ],
      "type": "ChannelAdminLogEventAction"
    },
    {
      "id": 4179895506,
      "predicate": "channelAdminLogEventActionParticipantMute",
      "params": [
        {
          "name": "participant",
          "type": "GroupCallParticipant"
        }
      ],
      "type": "ChannelAdminLogEventAction"
    },
    {
      "id": 3863226816,
      "predicate": "channelAdminLogEventActionParticipantUnmute",
      "params": [
        {
          "name": "participant",
          "type": "GroupCallParticipant"
        }
      ],
      "type": "ChannelAdminLogEventAction"
    },
    {
      "id": 1456906823,
      "predicate": "channelAdminLogEventActionToggleGroupCallSetting",
      "params": [
        {
          "name": "join_muted",
          "type": "Bool"
        }
      ],
      "type": "ChannelAdminLogEventAction"
    },
    {
      "id": 1557846647,
      "predicate": "channelAdminLogEventActionParticipantJoinByInvite",
      "params": [
        {
          "name": "invite",
          "type": "ExportedChatInvite"
        }
      ],
      "type": "ChannelAdminLogEventAction"
    },
    {
      "id": 1515256996,
      "predicate": "channelAdminLogEventActionExportedInviteDelete",
      "params": [
        {
          "name": "invite",
          "type": "ExportedChatInvite"
        }
      ],
      "type": "ChannelAdminLogEventAction"
    },
    {
      "id": 1091179342,
      "predicate": "channelAdminLogEventActionExportedInviteRevoke",
      "params": [
        {
          "name": "invite",
          "type": "ExportedChatInvite"
        }
      ],
      "type": "ChannelAdminLogEventAction"
    },
    {
      "id": 3910056793,
      "predicate": "channelAdminLogEventActionExportedInviteEdit",
      "params": [
        {
          "name": "prev_invite",
          "type": "ExportedChatInvite"
        },
        {
          "name": "new_invite",
          "type": "ExportedChatInvite"
        }
      ],
      "type": "ChannelAdminLogEventAction"
    },
    {
      "id": 1048537159,
      "predicate": "channelAdminLogEventActionParticipantVolume",
      "params": [
        {
          "name": "participant",
          "type": "GroupCallParticipant"
        }
      ],
      "type": "ChannelAdminLogEventAction"
    },
    {
      "id": 1855199800,
      "predicate": "channelAdminLogEventActionChangeHistoryTTL",
      "params": [
        {
          "name": "prev_value",
          "type": "int"
        },
        {
          "name": "new_value",
          "type": "int"
        }
      ],
      "type": "ChannelAdminLogEventAction"
    },
    {
      "id": 995769920,
      "predicate": "channelAdminLogEvent",
      "params": [
        {
          "name": "id",
          "type": "long"
        },
        {
          "name": "date",
          "type": "int"
        },
        {
          "name": "user_id",
          "type": "int"
        },
        {
          "name": "action",
          "type": "ChannelAdminLogEventAction"
        }
      ],
      "type": "ChannelAdminLogEvent"
    },
    {
      "id": 3985307469,
      "predicate": "channels.adminLogResults",
      "params": [
        {
          "name": "events",
          "type": "Vector<ChannelAdminLogEvent>"
        },
        {
          "name": "chats",
          "type": "Vector<Chat>"
        },
        {
          "name": "users",
          "type": "Vector<User>"
        }
      ],
      "type": "channels.AdminLogResults"
    },
    {
      "id": 3926948580,
      "predicate": "channelAdminLogEventsFilter",
      "params": [
        {
          "name": "flags",
          "type": "#"
        },
        {
          "name": "join",
          "type": "flags.0?true"
        },
        {
          "name": "leave",
          "type": "flags.1?true"
        },
        {
          "name": "invite",
          "type": "flags.2?true"
        },
        {
          "name": "ban",
          "type": "flags.3?true"
        },
        {
          "name": "unban",
          "type": "flags.4?true"
        },
        {
          "name": "kick",
          "type": "flags.5?true"
        },
        {
          "name": "unkick",
          "type": "flags.6?true"
        },
        {
          "name": "promote",
          "type": "flags.7?true"
        },
        {
          "name": "demote",
          "type": "flags.8?true"
        },
        {
          "name": "info",
          "type": "flags.9?true"
        },
        {
          "name": "settings",
          "type": "flags.10?true"
        },
        {
          "name": "pinned",
          "type": "flags.11?true"
        },
        {
          "name": "edit",
          "type": "flags.12?true"
        },
        {
          "name": "delete",
          "type": "flags.13?true"
        },
        {
          "name": "group_call",
          "type": "flags.14?true"
        },
        {
          "name": "invites",
          "type": "flags.15?true"
        }
      ],
      "type": "ChannelAdminLogEventsFilter"
    },
    {
      "id": 1558266229,
      "predicate": "popularContact",
      "params": [
        {
          "name": "client_id",
          "type": "long"
        },
        {
          "name": "importers",
          "type": "int"
        }
      ],
      "type": "PopularContact"
    },
    {
      "id": 2660214483,
      "predicate": "messages.favedStickersNotModified",
      "params": [],
      "type": "messages.FavedStickers"
    },
    {
      "id": 4085198614,
      "predicate": "messages.favedStickers",
      "params": [
        {
          "name": "hash",
          "type": "int"
        },
        {
          "name": "packs",
          "type": "Vector<StickerPack>"
        },
        {
          "name": "stickers",
          "type": "Vector<Document>"
        }
      ],
      "type": "messages.FavedStickers"
    },
    {
      "id": 1189204285,
      "predicate": "recentMeUrlUnknown",
      "params": [
        {
          "name": "url",
          "type": "string"
        }
      ],
      "type": "RecentMeUrl"
    },
    {
      "id": 2377921334,
      "predicate": "recentMeUrlUser",
      "params": [
        {
          "name": "url",
          "type": "string"
        },
        {
          "name": "user_id",
          "type": "int"
        }
      ],
      "type": "RecentMeUrl"
    },
    {
      "id": 2686132985,
      "predicate": "recentMeUrlChat",
      "params": [
        {
          "name": "url",
          "type": "string"
        },
        {
          "name": "chat_id",
          "type": "int"
        }
      ],
      "type": "RecentMeUrl"
    },
    {
      "id": 3947431965,
      "predicate": "recentMeUrlChatInvite",
      "params": [
        {
          "name": "url",
          "type": "string"
        },
        {
          "name": "chat_invite",
          "type": "ChatInvite"
        }
      ],
      "type": "RecentMeUrl"
    },
    {
      "id": 3154794460,
      "predicate": "recentMeUrlStickerSet",
      "params": [
        {
          "name": "url",
          "type": "string"
        },
        {
          "name": "set",
          "type": "StickerSetCovered"
        }
      ],
      "type": "RecentMeUrl"
    },
    {
      "id": 235081943,
      "predicate": "help.recentMeUrls",
      "params": [
        {
          "name": "urls",
          "type": "Vector<RecentMeUrl>"
        },
        {
          "name": "chats",
          "type": "Vector<Chat>"
        },
        {
          "name": "users",
          "type": "Vector<User>"
        }
      ],
      "type": "help.RecentMeUrls"
    },
    {
      "id": 482797855,
      "predicate": "inputSingleMedia",
      "params": [
        {
          "name": "flags",
          "type": "#"
        },
        {
          "name": "media",
          "type": "InputMedia"
        },
        {
          "name": "random_id",
          "type": "long"
        },
        {
          "name": "message",
          "type": "string"
        },
        {
          "name": "entities",
          "type": "flags.0?Vector<MessageEntity>"
        }
      ],
      "type": "InputSingleMedia"
    },
    {
      "id": 3402187762,
      "predicate": "webAuthorization",
      "params": [
        {
          "name": "hash",
          "type": "long"
        },
        {
          "name": "bot_id",
          "type": "int"
        },
        {
          "name": "domain",
          "type": "string"
        },
        {
          "name": "browser",
          "type": "string"
        },
        {
          "name": "platform",
          "type": "string"
        },
        {
          "name": "date_created",
          "type": "int"
        },
        {
          "name": "date_active",
          "type": "int"
        },
        {
          "name": "ip",
          "type": "string"
        },
        {
          "name": "region",
          "type": "string"
        }
      ],
      "type": "WebAuthorization"
    },
    {
      "id": 3981887996,
      "predicate": "account.webAuthorizations",
      "params": [
        {
          "name": "authorizations",
          "type": "Vector<WebAuthorization>"
        },
        {
          "name": "users",
          "type": "Vector<User>"
        }
      ],
      "type": "account.WebAuthorizations"
    },
    {
      "id": 2792792866,
      "predicate": "inputMessageID",
      "params": [
        {
          "name": "id",
          "type": "int"
        }
      ],
      "type": "InputMessage"
    },
    {
      "id": 3134751637,
      "predicate": "inputMessageReplyTo",
      "params": [
        {
          "name": "id",
          "type": "int"
        }
      ],
      "type": "InputMessage"
    },
    {
      "id": 2257003832,
      "predicate": "inputMessagePinned",
      "params": [],
      "type": "InputMessage"
    },
    {
      "id": 2902071934,
      "predicate": "inputMessageCallbackQuery",
      "params": [
        {
          "name": "id",
          "type": "int"
        },
        {
          "name": "query_id",
          "type": "long"
        }
      ],
      "type": "InputMessage"
    },
    {
      "id": 4239064759,
      "predicate": "inputDialogPeer",
      "params": [
        {
          "name": "peer",
          "type": "InputPeer"
        }
      ],
      "type": "InputDialogPeer"
    },
    {
      "id": 1684014375,
      "predicate": "inputDialogPeerFolder",
      "params": [
        {
          "name": "folder_id",
          "type": "int"
        }
      ],
      "type": "InputDialogPeer"
    },
    {
      "id": 3849174789,
      "predicate": "dialogPeer",
      "params": [
        {
          "name": "peer",
          "type": "Peer"
        }
      ],
      "type": "DialogPeer"
    },
    {
      "id": 1363483106,
      "predicate": "dialogPeerFolder",
      "params": [
        {
          "name": "folder_id",
          "type": "int"
        }
      ],
      "type": "DialogPeer"
    },
    {
      "id": 223655517,
      "predicate": "messages.foundStickerSetsNotModified",
      "params": [],
      "type": "messages.FoundStickerSets"
    },
    {
      "id": 1359533640,
      "predicate": "messages.foundStickerSets",
      "params": [
        {
          "name": "hash",
          "type": "int"
        },
        {
          "name": "sets",
          "type": "Vector<StickerSetCovered>"
        }
      ],
      "type": "messages.FoundStickerSets"
    },
    {
      "id": 1648543603,
      "predicate": "fileHash",
      "params": [
        {
          "name": "offset",
          "type": "int"
        },
        {
          "name": "limit",
          "type": "int"
        },
        {
          "name": "hash",
          "type": "bytes"
        }
      ],
      "type": "FileHash"
    },
    {
      "id": 1968737087,
      "predicate": "inputClientProxy",
      "params": [
        {
          "name": "address",
          "type": "string"
        },
        {
          "name": "port",
          "type": "int"
        }
      ],
      "type": "InputClientProxy"
    },
    {
      "id": 3811614591,
      "predicate": "help.termsOfServiceUpdateEmpty",
      "params": [
        {
          "name": "expires",
          "type": "int"
        }
      ],
      "type": "help.TermsOfServiceUpdate"
    },
    {
      "id": 686618977,
      "predicate": "help.termsOfServiceUpdate",
      "params": [
        {
          "name": "expires",
          "type": "int"
        },
        {
          "name": "terms_of_service",
          "type": "help.TermsOfService"
        }
      ],
      "type": "help.TermsOfServiceUpdate"
    },
    {
      "id": 859091184,
      "predicate": "inputSecureFileUploaded",
      "params": [
        {
          "name": "id",
          "type": "long"
        },
        {
          "name": "parts",
          "type": "int"
        },
        {
          "name": "md5_checksum",
          "type": "string"
        },
        {
          "name": "file_hash",
          "type": "bytes"
        },
        {
          "name": "secret",
          "type": "bytes"
        }
      ],
      "type": "InputSecureFile"
    },
    {
      "id": 1399317950,
      "predicate": "inputSecureFile",
      "params": [
        {
          "name": "id",
          "type": "long"
        },
        {
          "name": "access_hash",
          "type": "long"
        }
      ],
      "type": "InputSecureFile"
    },
    {
      "id": 1679398724,
      "predicate": "secureFileEmpty",
      "params": [],
      "type": "SecureFile"
    },
    {
      "id": 3760683618,
      "predicate": "secureFile",
      "params": [
        {
          "name": "id",
          "type": "long"
        },
        {
          "name": "access_hash",
          "type": "long"
        },
        {
          "name": "size",
          "type": "int"
        },
        {
          "name": "dc_id",
          "type": "int"
        },
        {
          "name": "date",
          "type": "int"
        },
        {
          "name": "file_hash",
          "type": "bytes"
        },
        {
          "name": "secret",
          "type": "bytes"
        }
      ],
      "type": "SecureFile"
    },
    {
      "id": 2330640067,
      "predicate": "secureData",
      "params": [
        {
          "name": "data",
          "type": "bytes"
        },
        {
          "name": "data_hash",
          "type": "bytes"
        },
        {
          "name": "secret",
          "type": "bytes"
        }
      ],
      "type": "SecureData"
    },
    {
      "id": 2103482845,
      "predicate": "securePlainPhone",
      "params": [
        {
          "name": "phone",
          "type": "string"
        }
      ],
      "type": "SecurePlainData"
    },
    {
      "id": 569137759,
      "predicate": "securePlainEmail",
      "params": [
        {
          "name": "email",
          "type": "string"
        }
      ],
      "type": "SecurePlainData"
    },
    {
      "id": 2636808675,
      "predicate": "secureValueTypePersonalDetails",
      "params": [],
      "type": "SecureValueType"
    },
    {
      "id": 1034709504,
      "predicate": "secureValueTypePassport",
      "params": [],
      "type": "SecureValueType"
    },
    {
      "id": 115615172,
      "predicate": "secureValueTypeDriverLicense",
      "params": [],
      "type": "SecureValueType"
    },
    {
      "id": 2698015819,
      "predicate": "secureValueTypeIdentityCard",
      "params": [],
      "type": "SecureValueType"
    },
    {
      "id": 2577698595,
      "predicate": "secureValueTypeInternalPassport",
      "params": [],
      "type": "SecureValueType"
    },
    {
      "id": 3420659238,
      "predicate": "secureValueTypeAddress",
      "params": [],
      "type": "SecureValueType"
    },
    {
      "id": 4231435598,
      "predicate": "secureValueTypeUtilityBill",
      "params": [],
      "type": "SecureValueType"
    },
    {
      "id": 2299755533,
      "predicate": "secureValueTypeBankStatement",
      "params": [],
      "type": "SecureValueType"
    },
    {
      "id": 2340959368,
      "predicate": "secureValueTypeRentalAgreement",
      "params": [],
      "type": "SecureValueType"
    },
    {
      "id": 2581823594,
      "predicate": "secureValueTypePassportRegistration",
      "params": [],
      "type": "SecureValueType"
    },
    {
      "id": 3926060083,
      "predicate": "secureValueTypeTemporaryRegistration",
      "params": [],
      "type": "SecureValueType"
    },
    {
      "id": 3005262555,
      "predicate": "secureValueTypePhone",
      "params": [],
      "type": "SecureValueType"
    },
    {
      "id": 2386339822,
      "predicate": "secureValueTypeEmail",
      "params": [],
      "type": "SecureValueType"
    },
    {
      "id": 411017418,
      "predicate": "secureValue",
      "params": [
        {
          "name": "flags",
          "type": "#"
        },
        {
          "name": "type",
          "type": "SecureValueType"
        },
        {
          "name": "data",
          "type": "flags.0?SecureData"
        },
        {
          "name": "front_side",
          "type": "flags.1?SecureFile"
        },
        {
          "name": "reverse_side",
          "type": "flags.2?SecureFile"
        },
        {
          "name": "selfie",
          "type": "flags.3?SecureFile"
        },
        {
          "name": "translation",
          "type": "flags.6?Vector<SecureFile>"
        },
        {
          "name": "files",
          "type": "flags.4?Vector<SecureFile>"
        },
        {
          "name": "plain_data",
          "type": "flags.5?SecurePlainData"
        },
        {
          "name": "hash",
          "type": "bytes"
        }
      ],
      "type": "SecureValue"
    },
    {
      "id": 3676426407,
      "predicate": "inputSecureValue",
      "params": [
        {
          "name": "flags",
          "type": "#"
        },
        {
          "name": "type",
          "type": "SecureValueType"
        },
        {
          "name": "data",
          "type": "flags.0?SecureData"
        },
        {
          "name": "front_side",
          "type": "flags.1?InputSecureFile"
        },
        {
          "name": "reverse_side",
          "type": "flags.2?InputSecureFile"
        },
        {
          "name": "selfie",
          "type": "flags.3?InputSecureFile"
        },
        {
          "name": "translation",
          "type": "flags.6?Vector<InputSecureFile>"
        },
        {
          "name": "files",
          "type": "flags.4?Vector<InputSecureFile>"
        },
        {
          "name": "plain_data",
          "type": "flags.5?SecurePlainData"
        }
      ],
      "type": "InputSecureValue"
    },
    {
      "id": 3978218928,
      "predicate": "secureValueHash",
      "params": [
        {
          "name": "type",
          "type": "SecureValueType"
        },
        {
          "name": "hash",
          "type": "bytes"
        }
      ],
      "type": "SecureValueHash"
    },
    {
      "id": 3903065049,
      "predicate": "secureValueErrorData",
      "params": [
        {
          "name": "type",
          "type": "SecureValueType"
        },
        {
          "name": "data_hash",
          "type": "bytes"
        },
        {
          "name": "field",
          "type": "string"
        },
        {
          "name": "text",
          "type": "string"
        }
      ],
      "type": "SecureValueError"
    },
    {
      "id": 12467706,
      "predicate": "secureValueErrorFrontSide",
      "params": [
        {
          "name": "type",
          "type": "SecureValueType"
        },
        {
          "name": "file_hash",
          "type": "bytes"
        },
        {
          "name": "text",
          "type": "string"
        }
      ],
      "type": "SecureValueError"
    },
    {
      "id": 2257201829,
      "predicate": "secureValueErrorReverseSide",
      "params": [
        {
          "name": "type",
          "type": "SecureValueType"
        },
        {
          "name": "file_hash",
          "type": "bytes"
        },
        {
          "name": "text",
          "type": "string"
        }
      ],
      "type": "SecureValueError"
    },
    {
      "id": 3845639894,
      "predicate": "secureValueErrorSelfie",
      "params": [
        {
          "name": "type",
          "type": "SecureValueType"
        },
        {
          "name": "file_hash",
          "type": "bytes"
        },
        {
          "name": "text",
          "type": "string"
        }
      ],
      "type": "SecureValueError"
    },
    {
      "id": 2054162547,
      "predicate": "secureValueErrorFile",
      "params": [
        {
          "name": "type",
          "type": "SecureValueType"
        },
        {
          "name": "file_hash",
          "type": "bytes"
        },
        {
          "name": "text",
          "type": "string"
        }
      ],
      "type": "SecureValueError"
    },
    {
      "id": 1717706985,
      "predicate": "secureValueErrorFiles",
      "params": [
        {
          "name": "type",
          "type": "SecureValueType"
        },
        {
          "name": "file_hash",
          "type": "Vector<bytes>"
        },
        {
          "name": "text",
          "type": "string"
        }
      ],
      "type": "SecureValueError"
    },
    {
      "id": 2258466191,
      "predicate": "secureValueError",
      "params": [
        {
          "name": "type",
          "type": "SecureValueType"
        },
        {
          "name": "hash",
          "type": "bytes"
        },
        {
          "name": "text",
          "type": "string"
        }
      ],
      "type": "SecureValueError"
    },
    {
      "id": 2702460784,
      "predicate": "secureValueErrorTranslationFile",
      "params": [
        {
          "name": "type",
          "type": "SecureValueType"
        },
        {
          "name": "file_hash",
          "type": "bytes"
        },
        {
          "name": "text",
          "type": "string"
        }
      ],
      "type": "SecureValueError"
    },
    {
      "id": 878931416,
      "predicate": "secureValueErrorTranslationFiles",
      "params": [
        {
          "name": "type",
          "type": "SecureValueType"
        },
        {
          "name": "file_hash",
          "type": "Vector<bytes>"
        },
        {
          "name": "text",
          "type": "string"
        }
      ],
      "type": "SecureValueError"
    },
    {
      "id": 871426631,
      "predicate": "secureCredentialsEncrypted",
      "params": [
        {
          "name": "data",
          "type": "bytes"
        },
        {
          "name": "hash",
          "type": "bytes"
        },
        {
          "name": "secret",
          "type": "bytes"
        }
      ],
      "type": "SecureCredentialsEncrypted"
    },
    {
      "id": 2905480408,
      "predicate": "account.authorizationForm",
      "params": [
        {
          "name": "flags",
          "type": "#"
        },
        {
          "name": "required_types",
          "type": "Vector<SecureRequiredType>"
        },
        {
          "name": "values",
          "type": "Vector<SecureValue>"
        },
        {
          "name": "errors",
          "type": "Vector<SecureValueError>"
        },
        {
          "name": "users",
          "type": "Vector<User>"
        },
        {
          "name": "privacy_policy_url",
          "type": "flags.0?string"
        }
      ],
      "type": "account.AuthorizationForm"
    },
    {
      "id": 2166326607,
      "predicate": "account.sentEmailCode",
      "params": [
        {
          "name": "email_pattern",
          "type": "string"
        },
        {
          "name": "length",
          "type": "int"
        }
      ],
      "type": "account.SentEmailCode"
    },
    {
      "id": 1722786150,
      "predicate": "help.deepLinkInfoEmpty",
      "params": [],
      "type": "help.DeepLinkInfo"
    },
    {
      "id": 1783556146,
      "predicate": "help.deepLinkInfo",
      "params": [
        {
          "name": "flags",
          "type": "#"
        },
        {
          "name": "update_app",
          "type": "flags.0?true"
        },
        {
          "name": "message",
          "type": "string"
        },
        {
          "name": "entities",
          "type": "flags.1?Vector<MessageEntity>"
        }
      ],
      "type": "help.DeepLinkInfo"
    },
    {
      "id": 289586518,
      "predicate": "savedPhoneContact",
      "params": [
        {
          "name": "phone",
          "type": "string"
        },
        {
          "name": "first_name",
          "type": "string"
        },
        {
          "name": "last_name",
          "type": "string"
        },
        {
          "name": "date",
          "type": "int"
        }
      ],
      "type": "SavedContact"
    },
    {
      "id": 1304052993,
      "predicate": "account.takeout",
      "params": [
        {
          "name": "id",
          "type": "long"
        }
      ],
      "type": "account.Takeout"
    },
    {
      "id": 3562713238,
      "predicate": "passwordKdfAlgoUnknown",
      "params": [],
      "type": "PasswordKdfAlgo"
    },
    {
      "id": 982592842,
      "predicate": "passwordKdfAlgoSHA256SHA256PBKDF2HMACSHA512iter100000SHA256ModPow",
      "params": [
        {
          "name": "salt1",
          "type": "bytes"
        },
        {
          "name": "salt2",
          "type": "bytes"
        },
        {
          "name": "g",
          "type": "int"
        },
        {
          "name": "p",
          "type": "bytes"
        }
      ],
      "type": "PasswordKdfAlgo"
    },
    {
      "id": 4883767,
      "predicate": "securePasswordKdfAlgoUnknown",
      "params": [],
      "type": "SecurePasswordKdfAlgo"
    },
    {
      "id": 3153255840,
      "predicate": "securePasswordKdfAlgoPBKDF2HMACSHA512iter100000",
      "params": [
        {
          "name": "salt",
          "type": "bytes"
        }
      ],
      "type": "SecurePasswordKdfAlgo"
    },
    {
      "id": 2252807570,
      "predicate": "securePasswordKdfAlgoSHA512",
      "params": [
        {
          "name": "salt",
          "type": "bytes"
        }
      ],
      "type": "SecurePasswordKdfAlgo"
    },
    {
      "id": 354925740,
      "predicate": "secureSecretSettings",
      "params": [
        {
          "name": "secure_algo",
          "type": "SecurePasswordKdfAlgo"
        },
        {
          "name": "secure_secret",
          "type": "bytes"
        },
        {
          "name": "secure_secret_id",
          "type": "long"
        }
      ],
      "type": "SecureSecretSettings"
    },
    {
      "id": 2558588504,
      "predicate": "inputCheckPasswordEmpty",
      "params": [],
      "type": "InputCheckPasswordSRP"
    },
    {
      "id": 3531600002,
      "predicate": "inputCheckPasswordSRP",
      "params": [
        {
          "name": "srp_id",
          "type": "long"
        },
        {
          "name": "A",
          "type": "bytes"
        },
        {
          "name": "M1",
          "type": "bytes"
        }
      ],
      "type": "InputCheckPasswordSRP"
    },
    {
      "id": 2191366618,
      "predicate": "secureRequiredType",
      "params": [
        {
          "name": "flags",
          "type": "#"
        },
        {
          "name": "native_names",
          "type": "flags.0?true"
        },
        {
          "name": "selfie_required",
          "type": "flags.1?true"
        },
        {
          "name": "translation_required",
          "type": "flags.2?true"
        },
        {
          "name": "type",
          "type": "SecureValueType"
        }
      ],
      "type": "SecureRequiredType"
    },
    {
      "id": 41187252,
      "predicate": "secureRequiredTypeOneOf",
      "params": [
        {
          "name": "types",
          "type": "Vector<SecureRequiredType>"
        }
      ],
      "type": "SecureRequiredType"
    },
    {
      "id": 3216634967,
      "predicate": "help.passportConfigNotModified",
      "params": [],
      "type": "help.PassportConfig"
    },
    {
      "id": 2694370991,
      "predicate": "help.passportConfig",
      "params": [
        {
          "name": "hash",
          "type": "int"
        },
        {
          "name": "countries_langs",
          "type": "DataJSON"
        }
      ],
      "type": "help.PassportConfig"
    },
    {
      "id": 488313413,
      "predicate": "inputAppEvent",
      "params": [
        {
          "name": "time",
          "type": "double"
        },
        {
          "name": "type",
          "type": "string"
        },
        {
          "name": "peer",
          "type": "long"
        },
        {
          "name": "data",
          "type": "JSONValue"
        }
      ],
      "type": "InputAppEvent"
    },
    {
      "id": 3235781593,
      "predicate": "jsonObjectValue",
      "params": [
        {
          "name": "key",
          "type": "string"
        },
        {
          "name": "value",
          "type": "JSONValue"
        }
      ],
      "type": "JSONObjectValue"
    },
    {
      "id": 1064139624,
      "predicate": "jsonNull",
      "params": [],
      "type": "JSONValue"
    },
    {
      "id": 3342098026,
      "predicate": "jsonBool",
      "params": [
        {
          "name": "value",
          "type": "Bool"
        }
      ],
      "type": "JSONValue"
    },
    {
      "id": 736157604,
      "predicate": "jsonNumber",
      "params": [
        {
          "name": "value",
          "type": "double"
        }
      ],
      "type": "JSONValue"
    },
    {
      "id": 3072226938,
      "predicate": "jsonString",
      "params": [
        {
          "name": "value",
          "type": "string"
        }
      ],
      "type": "JSONValue"
    },
    {
      "id": 4148447075,
      "predicate": "jsonArray",
      "params": [
        {
          "name": "value",
          "type": "Vector<JSONValue>"
        }
      ],
      "type": "JSONValue"
    },
    {
      "id": 2579616925,
      "predicate": "jsonObject",
      "params": [
        {
          "name": "value",
          "type": "Vector<JSONObjectValue>"
        }
      ],
      "type": "JSONValue"
    },
    {
      "id": 878078826,
      "predicate": "pageTableCell",
      "params": [
        {
          "name": "flags",
          "type": "#"
        },
        {
          "name": "header",
          "type": "flags.0?true"
        },
        {
          "name": "align_center",
          "type": "flags.3?true"
        },
        {
          "name": "align_right",
          "type": "flags.4?true"
        },
        {
          "name": "valign_middle",
          "type": "flags.5?true"
        },
        {
          "name": "valign_bottom",
          "type": "flags.6?true"
        },
        {
          "name": "text",
          "type": "flags.7?RichText"
        },
        {
          "name": "colspan",
          "type": "flags.1?int"
        },
        {
          "name": "rowspan",
          "type": "flags.2?int"
        }
      ],
      "type": "PageTableCell"
    },
    {
      "id": 3770729957,
      "predicate": "pageTableRow",
      "params": [
        {
          "name": "cells",
          "type": "Vector<PageTableCell>"
        }
      ],
      "type": "PageTableRow"
    },
    {
      "id": 1869903447,
      "predicate": "pageCaption",
      "params": [
        {
          "name": "text",
          "type": "RichText"
        },
        {
          "name": "credit",
          "type": "RichText"
        }
      ],
      "type": "PageCaption"
    },
    {
      "id": 3106911949,
      "predicate": "pageListItemText",
      "params": [
        {
          "name": "text",
          "type": "RichText"
        }
      ],
      "type": "PageListItem"
    },
    {
      "id": 635466748,
      "predicate": "pageListItemBlocks",
      "params": [
        {
          "name": "blocks",
          "type": "Vector<PageBlock>"
        }
      ],
      "type": "PageListItem"
    },
    {
      "id": 1577484359,
      "predicate": "pageListOrderedItemText",
      "params": [
        {
          "name": "num",
          "type": "string"
        },
        {
          "name": "text",
          "type": "RichText"
        }
      ],
      "type": "PageListOrderedItem"
    },
    {
      "id": 2564655414,
      "predicate": "pageListOrderedItemBlocks",
      "params": [
        {
          "name": "num",
          "type": "string"
        },
        {
          "name": "blocks",
          "type": "Vector<PageBlock>"
        }
      ],
      "type": "PageListOrderedItem"
    },
    {
      "id": 3012615176,
      "predicate": "pageRelatedArticle",
      "params": [
        {
          "name": "flags",
          "type": "#"
        },
        {
          "name": "url",
          "type": "string"
        },
        {
          "name": "webpage_id",
          "type": "long"
        },
        {
          "name": "title",
          "type": "flags.0?string"
        },
        {
          "name": "description",
          "type": "flags.1?string"
        },
        {
          "name": "photo_id",
          "type": "flags.2?long"
        },
        {
          "name": "author",
          "type": "flags.3?string"
        },
        {
          "name": "published_date",
          "type": "flags.4?int"
        }
      ],
      "type": "PageRelatedArticle"
    },
    {
      "id": 2556788493,
      "predicate": "page",
      "params": [
        {
          "name": "flags",
          "type": "#"
        },
        {
          "name": "part",
          "type": "flags.0?true"
        },
        {
          "name": "rtl",
          "type": "flags.1?true"
        },
        {
          "name": "v2",
          "type": "flags.2?true"
        },
        {
          "name": "url",
          "type": "string"
        },
        {
          "name": "blocks",
          "type": "Vector<PageBlock>"
        },
        {
          "name": "photos",
          "type": "Vector<Photo>"
        },
        {
          "name": "documents",
          "type": "Vector<Document>"
        },
        {
          "name": "views",
          "type": "flags.3?int"
        }
      ],
      "type": "Page"
    },
    {
      "id": 2349199817,
      "predicate": "help.supportName",
      "params": [
        {
          "name": "name",
          "type": "string"
        }
      ],
      "type": "help.SupportName"
    },
    {
      "id": 4088278765,
      "predicate": "help.userInfoEmpty",
      "params": [],
      "type": "help.UserInfo"
    },
    {
      "id": 32192344,
      "predicate": "help.userInfo",
      "params": [
        {
          "name": "message",
          "type": "string"
        },
        {
          "name": "entities",
          "type": "Vector<MessageEntity>"
        },
        {
          "name": "author",
          "type": "string"
        },
        {
          "name": "date",
          "type": "int"
        }
      ],
      "type": "help.UserInfo"
    },
    {
      "id": 1823064809,
      "predicate": "pollAnswer",
      "params": [
        {
          "name": "text",
          "type": "string"
        },
        {
          "name": "option",
          "type": "bytes"
        }
      ],
      "type": "PollAnswer"
    },
    {
      "id": 2262925665,
      "predicate": "poll",
      "params": [
        {
          "name": "id",
          "type": "long"
        },
        {
          "name": "flags",
          "type": "#"
        },
        {
          "name": "closed",
          "type": "flags.0?true"
        },
        {
          "name": "public_voters",
          "type": "flags.1?true"
        },
        {
          "name": "multiple_choice",
          "type": "flags.2?true"
        },
        {
          "name": "quiz",
          "type": "flags.3?true"
        },
        {
          "name": "question",
          "type": "string"
        },
        {
          "name": "answers",
          "type": "Vector<PollAnswer>"
        },
        {
          "name": "close_period",
          "type": "flags.4?int"
        },
        {
          "name": "close_date",
          "type": "flags.5?int"
        }
      ],
      "type": "Poll"
    },
    {
      "id": 997055186,
      "predicate": "pollAnswerVoters",
      "params": [
        {
          "name": "flags",
          "type": "#"
        },
        {
          "name": "chosen",
          "type": "flags.0?true"
        },
        {
          "name": "correct",
          "type": "flags.1?true"
        },
        {
          "name": "option",
          "type": "bytes"
        },
        {
          "name": "voters",
          "type": "int"
        }
      ],
      "type": "PollAnswerVoters"
    },
    {
      "id": 3135029667,
      "predicate": "pollResults",
      "params": [
        {
          "name": "flags",
          "type": "#"
        },
        {
          "name": "min",
          "type": "flags.0?true"
        },
        {
          "name": "results",
          "type": "flags.1?Vector<PollAnswerVoters>"
        },
        {
          "name": "total_voters",
          "type": "flags.2?int"
        },
        {
          "name": "recent_voters",
          "type": "flags.3?Vector<int>"
        },
        {
          "name": "solution",
          "type": "flags.4?string"
        },
        {
          "name": "solution_entities",
          "type": "flags.4?Vector<MessageEntity>"
        }
      ],
      "type": "PollResults"
    },
    {
      "id": 4030849616,
      "predicate": "chatOnlines",
      "params": [
        {
          "name": "onlines",
          "type": "int"
        }
      ],
      "type": "ChatOnlines"
    },
    {
      "id": 1202287072,
      "predicate": "statsURL",
      "params": [
        {
          "name": "url",
          "type": "string"
        }
      ],
      "type": "StatsURL"
    },
    {
      "id": 1605510357,
      "predicate": "chatAdminRights",
      "params": [
        {
          "name": "flags",
          "type": "#"
        },
        {
          "name": "change_info",
          "type": "flags.0?true"
        },
        {
          "name": "post_messages",
          "type": "flags.1?true"
        },
        {
          "name": "edit_messages",
          "type": "flags.2?true"
        },
        {
          "name": "delete_messages",
          "type": "flags.3?true"
        },
        {
          "name": "ban_users",
          "type": "flags.4?true"
        },
        {
          "name": "invite_users",
          "type": "flags.5?true"
        },
        {
          "name": "pin_messages",
          "type": "flags.7?true"
        },
        {
          "name": "add_admins",
          "type": "flags.9?true"
        },
        {
          "name": "anonymous",
          "type": "flags.10?true"
        },
        {
          "name": "manage_call",
          "type": "flags.11?true"
        },
        {
          "name": "other",
          "type": "flags.12?true"
        }
      ],
      "type": "ChatAdminRights"
    },
    {
      "id": 2668758040,
      "predicate": "chatBannedRights",
      "params": [
        {
          "name": "flags",
          "type": "#"
        },
        {
          "name": "view_messages",
          "type": "flags.0?true"
        },
        {
          "name": "send_messages",
          "type": "flags.1?true"
        },
        {
          "name": "send_media",
          "type": "flags.2?true"
        },
        {
          "name": "send_stickers",
          "type": "flags.3?true"
        },
        {
          "name": "send_gifs",
          "type": "flags.4?true"
        },
        {
          "name": "send_games",
          "type": "flags.5?true"
        },
        {
          "name": "send_inline",
          "type": "flags.6?true"
        },
        {
          "name": "embed_links",
          "type": "flags.7?true"
        },
        {
          "name": "send_polls",
          "type": "flags.8?true"
        },
        {
          "name": "change_info",
          "type": "flags.10?true"
        },
        {
          "name": "invite_users",
          "type": "flags.15?true"
        },
        {
          "name": "pin_messages",
          "type": "flags.17?true"
        },
        {
          "name": "until_date",
          "type": "int"
        }
      ],
      "type": "ChatBannedRights"
    },
    {
      "id": 3861952889,
      "predicate": "inputWallPaper",
      "params": [
        {
          "name": "id",
          "type": "long"
        },
        {
          "name": "access_hash",
          "type": "long"
        }
      ],
      "type": "InputWallPaper"
    },
    {
      "id": 1913199744,
      "predicate": "inputWallPaperSlug",
      "params": [
        {
          "name": "slug",
          "type": "string"
        }
      ],
      "type": "InputWallPaper"
    },
    {
      "id": 2524595758,
      "predicate": "inputWallPaperNoFile",
      "params": [
        {
          "name": "id",
          "type": "long"
        }
      ],
      "type": "InputWallPaper"
    },
    {
      "id": 471437699,
      "predicate": "account.wallPapersNotModified",
      "params": [],
      "type": "account.WallPapers"
    },
    {
      "id": 1881892265,
      "predicate": "account.wallPapers",
      "params": [
        {
          "name": "hash",
          "type": "int"
        },
        {
          "name": "wallpapers",
          "type": "Vector<WallPaper>"
        }
      ],
      "type": "account.WallPapers"
    },
    {
      "id": 3737042563,
      "predicate": "codeSettings",
      "params": [
        {
          "name": "flags",
          "type": "#"
        },
        {
          "name": "allow_flashcall",
          "type": "flags.0?true"
        },
        {
          "name": "current_number",
          "type": "flags.1?true"
        },
        {
          "name": "allow_app_hash",
          "type": "flags.4?true"
        }
      ],
      "type": "CodeSettings"
    },
    {
      "id": 499236004,
      "predicate": "wallPaperSettings",
      "params": [
        {
          "name": "flags",
          "type": "#"
        },
        {
          "name": "blur",
          "type": "flags.1?true"
        },
        {
          "name": "motion",
          "type": "flags.2?true"
        },
        {
          "name": "background_color",
          "type": "flags.0?int"
        },
        {
          "name": "second_background_color",
          "type": "flags.4?int"
        },
        {
          "name": "third_background_color",
          "type": "flags.5?int"
        },
        {
          "name": "fourth_background_color",
          "type": "flags.6?int"
        },
        {
          "name": "intensity",
          "type": "flags.3?int"
        },
        {
          "name": "rotation",
          "type": "flags.4?int"
        }
      ],
      "type": "WallPaperSettings"
    },
    {
      "id": 3762434803,
      "predicate": "autoDownloadSettings",
      "params": [
        {
          "name": "flags",
          "type": "#"
        },
        {
          "name": "disabled",
          "type": "flags.0?true"
        },
        {
          "name": "video_preload_large",
          "type": "flags.1?true"
        },
        {
          "name": "audio_preload_next",
          "type": "flags.2?true"
        },
        {
          "name": "phonecalls_less_data",
          "type": "flags.3?true"
        },
        {
          "name": "photo_size_max",
          "type": "int"
        },
        {
          "name": "video_size_max",
          "type": "int"
        },
        {
          "name": "file_size_max",
          "type": "int"
        },
        {
          "name": "video_upload_maxbitrate",
          "type": "int"
        }
      ],
      "type": "AutoDownloadSettings"
    },
    {
      "id": 1674235686,
      "predicate": "account.autoDownloadSettings",
      "params": [
        {
          "name": "low",
          "type": "AutoDownloadSettings"
        },
        {
          "name": "medium",
          "type": "AutoDownloadSettings"
        },
        {
          "name": "high",
          "type": "AutoDownloadSettings"
        }
      ],
      "type": "account.AutoDownloadSettings"
    },
    {
      "id": 3585325561,
      "predicate": "emojiKeyword",
      "params": [
        {
          "name": "keyword",
          "type": "string"
        },
        {
          "name": "emoticons",
          "type": "Vector<string>"
        }
      ],
      "type": "EmojiKeyword"
    },
    {
      "id": 594408994,
      "predicate": "emojiKeywordDeleted",
      "params": [
        {
          "name": "keyword",
          "type": "string"
        },
        {
          "name": "emoticons",
          "type": "Vector<string>"
        }
      ],
      "type": "EmojiKeyword"
    },
    {
      "id": 1556570557,
      "predicate": "emojiKeywordsDifference",
      "params": [
        {
          "name": "lang_code",
          "type": "string"
        },
        {
          "name": "from_version",
          "type": "int"
        },
        {
          "name": "version",
          "type": "int"
        },
        {
          "name": "keywords",
          "type": "Vector<EmojiKeyword>"
        }
      ],
      "type": "EmojiKeywordsDifference"
    },
    {
      "id": 2775937949,
      "predicate": "emojiURL",
      "params": [
        {
          "name": "url",
          "type": "string"
        }
      ],
      "type": "EmojiURL"
    },
    {
      "id": 3019592545,
      "predicate": "emojiLanguage",
      "params": [
        {
          "name": "lang_code",
          "type": "string"
        }
      ],
      "type": "EmojiLanguage"
    },
    {
      "id": 4283715173,
      "predicate": "folder",
      "params": [
        {
          "name": "flags",
          "type": "#"
        },
        {
          "name": "autofill_new_broadcasts",
          "type": "flags.0?true"
        },
        {
          "name": "autofill_public_groups",
          "type": "flags.1?true"
        },
        {
          "name": "autofill_new_correspondents",
          "type": "flags.2?true"
        },
        {
          "name": "id",
          "type": "int"
        },
        {
          "name": "title",
          "type": "string"
        },
        {
          "name": "photo",
          "type": "flags.3?ChatPhoto"
        }
      ],
      "type": "Folder"
    },
    {
      "id": 4224893590,
      "predicate": "inputFolderPeer",
      "params": [
        {
          "name": "peer",
          "type": "InputPeer"
        },
        {
          "name": "folder_id",
          "type": "int"
        }
      ],
      "type": "InputFolderPeer"
    },
    {
      "id": 3921323624,
      "predicate": "folderPeer",
      "params": [
        {
          "name": "peer",
          "type": "Peer"
        },
        {
          "name": "folder_id",
          "type": "int"
        }
      ],
      "type": "FolderPeer"
    },
    {
      "id": 3896830975,
      "predicate": "messages.searchCounter",
      "params": [
        {
          "name": "flags",
          "type": "#"
        },
        {
          "name": "inexact",
          "type": "flags.1?true"
        },
        {
          "name": "filter",
          "type": "MessagesFilter"
        },
        {
          "name": "count",
          "type": "int"
        }
      ],
      "type": "messages.SearchCounter"
    },
    {
      "id": 2463316494,
      "predicate": "urlAuthResultRequest",
      "params": [
        {
          "name": "flags",
          "type": "#"
        },
        {
          "name": "request_write_access",
          "type": "flags.0?true"
        },
        {
          "name": "bot",
          "type": "User"
        },
        {
          "name": "domain",
          "type": "string"
        }
      ],
      "type": "UrlAuthResult"
    },
    {
      "id": 2408320590,
      "predicate": "urlAuthResultAccepted",
      "params": [
        {
          "name": "url",
          "type": "string"
        }
      ],
      "type": "UrlAuthResult"
    },
    {
      "id": 2849430303,
      "predicate": "urlAuthResultDefault",
      "params": [],
      "type": "UrlAuthResult"
    },
    {
      "id": 3216354699,
      "predicate": "channelLocationEmpty",
      "params": [],
      "type": "ChannelLocation"
    },
    {
      "id": 547062491,
      "predicate": "channelLocation",
      "params": [
        {
          "name": "geo_point",
          "type": "GeoPoint"
        },
        {
          "name": "address",
          "type": "string"
        }
      ],
      "type": "ChannelLocation"
    },
    {
      "id": 3393592157,
      "predicate": "peerLocated",
      "params": [
        {
          "name": "peer",
          "type": "Peer"
        },
        {
          "name": "expires",
          "type": "int"
        },
        {
          "name": "distance",
          "type": "int"
        }
      ],
      "type": "PeerLocated"
    },
    {
      "id": 4176226379,
      "predicate": "peerSelfLocated",
      "params": [
        {
          "name": "expires",
          "type": "int"
        }
      ],
      "type": "PeerLocated"
    },
    {
      "id": 3497176244,
      "predicate": "restrictionReason",
      "params": [
        {
          "name": "platform",
          "type": "string"
        },
        {
          "name": "reason",
          "type": "string"
        },
        {
          "name": "text",
          "type": "string"
        }
      ],
      "type": "RestrictionReason"
    },
    {
      "id": 1012306921,
      "predicate": "inputTheme",
      "params": [
        {
          "name": "id",
          "type": "long"
        },
        {
          "name": "access_hash",
          "type": "long"
        }
      ],
      "type": "InputTheme"
    },
    {
      "id": 4119399921,
      "predicate": "inputThemeSlug",
      "params": [
        {
          "name": "slug",
          "type": "string"
        }
      ],
      "type": "InputTheme"
    },
    {
      "id": 42930452,
      "predicate": "theme",
      "params": [
        {
          "name": "flags",
          "type": "#"
        },
        {
          "name": "creator",
          "type": "flags.0?true"
        },
        {
          "name": "default",
          "type": "flags.1?true"
        },
        {
          "name": "id",
          "type": "long"
        },
        {
          "name": "access_hash",
          "type": "long"
        },
        {
          "name": "slug",
          "type": "string"
        },
        {
          "name": "title",
          "type": "string"
        },
        {
          "name": "document",
          "type": "flags.2?Document"
        },
        {
          "name": "settings",
          "type": "flags.3?ThemeSettings"
        },
        {
          "name": "installs_count",
          "type": "int"
        }
      ],
      "type": "Theme"
    },
    {
      "id": 4095653410,
      "predicate": "account.themesNotModified",
      "params": [],
      "type": "account.Themes"
    },
    {
      "id": 2137482273,
      "predicate": "account.themes",
      "params": [
        {
          "name": "hash",
          "type": "int"
        },
        {
          "name": "themes",
          "type": "Vector<Theme>"
        }
      ],
      "type": "account.Themes"
    },
    {
      "id": 1654593920,
      "predicate": "auth.loginToken",
      "params": [
        {
          "name": "expires",
          "type": "int"
        },
        {
          "name": "token",
          "type": "bytes"
        }
      ],
      "type": "auth.LoginToken"
    },
    {
      "id": 110008598,
      "predicate": "auth.loginTokenMigrateTo",
      "params": [
        {
          "name": "dc_id",
          "type": "int"
        },
        {
          "name": "token",
          "type": "bytes"
        }
      ],
      "type": "auth.LoginToken"
    },
    {
      "id": 957176926,
      "predicate": "auth.loginTokenSuccess",
      "params": [
        {
          "name": "authorization",
          "type": "auth.Authorization"
        }
      ],
      "type": "auth.LoginToken"
    },
    {
      "id": 1474462241,
      "predicate": "account.contentSettings",
      "params": [
        {
          "name": "flags",
          "type": "#"
        },
        {
          "name": "sensitive_enabled",
          "type": "flags.0?true"
        },
        {
          "name": "sensitive_can_change",
          "type": "flags.1?true"
        }
      ],
      "type": "account.ContentSettings"
    },
    {
      "id": 2837970629,
      "predicate": "messages.inactiveChats",
      "params": [
        {
          "name": "dates",
          "type": "Vector<int>"
        },
        {
          "name": "chats",
          "type": "Vector<Chat>"
        },
        {
          "name": "users",
          "type": "Vector<User>"
        }
      ],
      "type": "messages.InactiveChats"
    },
    {
      "id": 3282117730,
      "predicate": "baseThemeClassic",
      "params": [],
      "type": "BaseTheme"
    },
    {
      "id": 4225242760,
      "predicate": "baseThemeDay",
      "params": [],
      "type": "BaseTheme"
    },
    {
      "id": 3081969320,
      "predicate": "baseThemeNight",
      "params": [],
      "type": "BaseTheme"
    },
    {
      "id": 1834973166,
      "predicate": "baseThemeTinted",
      "params": [],
      "type": "BaseTheme"
    },
    {
      "id": 1527845466,
      "predicate": "baseThemeArctic",
      "params": [],
      "type": "BaseTheme"
    },
    {
      "id": 3176168657,
      "predicate": "inputThemeSettings",
      "params": [
        {
          "name": "flags",
          "type": "#"
        },
        {
          "name": "base_theme",
          "type": "BaseTheme"
        },
        {
          "name": "accent_color",
          "type": "int"
        },
        {
          "name": "message_top_color",
          "type": "flags.0?int"
        },
        {
          "name": "message_bottom_color",
          "type": "flags.0?int"
        },
        {
          "name": "wallpaper",
          "type": "flags.1?InputWallPaper"
        },
        {
          "name": "wallpaper_settings",
          "type": "flags.1?WallPaperSettings"
        }
      ],
      "type": "InputThemeSettings"
    },
    {
      "id": 2618595402,
      "predicate": "themeSettings",
      "params": [
        {
          "name": "flags",
          "type": "#"
        },
        {
          "name": "base_theme",
          "type": "BaseTheme"
        },
        {
          "name": "accent_color",
          "type": "int"
        },
        {
          "name": "message_top_color",
          "type": "flags.0?int"
        },
        {
          "name": "message_bottom_color",
          "type": "flags.0?int"
        },
        {
          "name": "wallpaper",
          "type": "flags.1?WallPaper"
        }
      ],
      "type": "ThemeSettings"
    },
    {
      "id": 1421174295,
      "predicate": "webPageAttributeTheme",
      "params": [
        {
          "name": "flags",
          "type": "#"
        },
        {
          "name": "documents",
          "type": "flags.0?Vector<Document>"
        },
        {
          "name": "settings",
          "type": "flags.1?ThemeSettings"
        }
      ],
      "type": "WebPageAttribute"
    },
    {
      "id": 2727236953,
      "predicate": "messageUserVote",
      "params": [
        {
          "name": "user_id",
          "type": "int"
        },
        {
          "name": "option",
          "type": "bytes"
        },
        {
          "name": "date",
          "type": "int"
        }
      ],
      "type": "MessageUserVote"
    },
    {
      "id": 909603888,
      "predicate": "messageUserVoteInputOption",
      "params": [
        {
          "name": "user_id",
          "type": "int"
        },
        {
          "name": "date",
          "type": "int"
        }
      ],
      "type": "MessageUserVote"
    },
    {
      "id": 244310238,
      "predicate": "messageUserVoteMultiple",
      "params": [
        {
          "name": "user_id",
          "type": "int"
        },
        {
          "name": "options",
          "type": "Vector<bytes>"
        },
        {
          "name": "date",
          "type": "int"
        }
      ],
      "type": "MessageUserVote"
    },
    {
      "id": 136574537,
      "predicate": "messages.votesList",
      "params": [
        {
          "name": "flags",
          "type": "#"
        },
        {
          "name": "count",
          "type": "int"
        },
        {
          "name": "votes",
          "type": "Vector<MessageUserVote>"
        },
        {
          "name": "users",
          "type": "Vector<User>"
        },
        {
          "name": "next_offset",
          "type": "flags.0?string"
        }
      ],
      "type": "messages.VotesList"
    },
    {
      "id": 4117234314,
      "predicate": "bankCardOpenUrl",
      "params": [
        {
          "name": "url",
          "type": "string"
        },
        {
          "name": "name",
          "type": "string"
        }
      ],
      "type": "BankCardOpenUrl"
    },
    {
      "id": 1042605427,
      "predicate": "payments.bankCardData",
      "params": [
        {
          "name": "title",
          "type": "string"
        },
        {
          "name": "open_urls",
          "type": "Vector<BankCardOpenUrl>"
        }
      ],
      "type": "payments.BankCardData"
    },
    {
      "id": 1949890536,
      "predicate": "dialogFilter",
      "params": [
        {
          "name": "flags",
          "type": "#"
        },
        {
          "name": "contacts",
          "type": "flags.0?true"
        },
        {
          "name": "non_contacts",
          "type": "flags.1?true"
        },
        {
          "name": "groups",
          "type": "flags.2?true"
        },
        {
          "name": "broadcasts",
          "type": "flags.3?true"
        },
        {
          "name": "bots",
          "type": "flags.4?true"
        },
        {
          "name": "exclude_muted",
          "type": "flags.11?true"
        },
        {
          "name": "exclude_read",
          "type": "flags.12?true"
        },
        {
          "name": "exclude_archived",
          "type": "flags.13?true"
        },
        {
          "name": "id",
          "type": "int"
        },
        {
          "name": "title",
          "type": "string"
        },
        {
          "name": "emoticon",
          "type": "flags.25?string"
        },
        {
          "name": "pinned_peers",
          "type": "Vector<InputPeer>"
        },
        {
          "name": "include_peers",
          "type": "Vector<InputPeer>"
        },
        {
          "name": "exclude_peers",
          "type": "Vector<InputPeer>"
        }
      ],
      "type": "DialogFilter"
    },
    {
      "id": 2004110666,
      "predicate": "dialogFilterSuggested",
      "params": [
        {
          "name": "filter",
          "type": "DialogFilter"
        },
        {
          "name": "description",
          "type": "string"
        }
      ],
      "type": "DialogFilterSuggested"
    },
    {
      "id": 3057118639,
      "predicate": "statsDateRangeDays",
      "params": [
        {
          "name": "min_date",
          "type": "int"
        },
        {
          "name": "max_date",
          "type": "int"
        }
      ],
      "type": "StatsDateRangeDays"
    },
    {
      "id": 3410210014,
      "predicate": "statsAbsValueAndPrev",
      "params": [
        {
          "name": "current",
          "type": "double"
        },
        {
          "name": "previous",
          "type": "double"
        }
      ],
      "type": "StatsAbsValueAndPrev"
    },
    {
      "id": 3419287520,
      "predicate": "statsPercentValue",
      "params": [
        {
          "name": "part",
          "type": "double"
        },
        {
          "name": "total",
          "type": "double"
        }
      ],
      "type": "StatsPercentValue"
    },
    {
      "id": 1244130093,
      "predicate": "statsGraphAsync",
      "params": [
        {
          "name": "token",
          "type": "string"
        }
      ],
      "type": "StatsGraph"
    },
    {
      "id": 3202127906,
      "predicate": "statsGraphError",
      "params": [
        {
          "name": "error",
          "type": "string"
        }
      ],
      "type": "StatsGraph"
    },
    {
      "id": 2393138358,
      "predicate": "statsGraph",
      "params": [
        {
          "name": "flags",
          "type": "#"
        },
        {
          "name": "json",
          "type": "DataJSON"
        },
        {
          "name": "zoom_token",
          "type": "flags.0?string"
        }
      ],
      "type": "StatsGraph"
    },
    {
      "id": 2907687357,
      "predicate": "messageInteractionCounters",
      "params": [
        {
          "name": "msg_id",
          "type": "int"
        },
        {
          "name": "views",
          "type": "int"
        },
        {
          "name": "forwards",
          "type": "int"
        }
      ],
      "type": "MessageInteractionCounters"
    },
    {
      "id": 3187114900,
      "predicate": "stats.broadcastStats",
      "params": [
        {
          "name": "period",
          "type": "StatsDateRangeDays"
        },
        {
          "name": "followers",
          "type": "StatsAbsValueAndPrev"
        },
        {
          "name": "views_per_post",
          "type": "StatsAbsValueAndPrev"
        },
        {
          "name": "shares_per_post",
          "type": "StatsAbsValueAndPrev"
        },
        {
          "name": "enabled_notifications",
          "type": "StatsPercentValue"
        },
        {
          "name": "growth_graph",
          "type": "StatsGraph"
        },
        {
          "name": "followers_graph",
          "type": "StatsGraph"
        },
        {
          "name": "mute_graph",
          "type": "StatsGraph"
        },
        {
          "name": "top_hours_graph",
          "type": "StatsGraph"
        },
        {
          "name": "interactions_graph",
          "type": "StatsGraph"
        },
        {
          "name": "iv_interactions_graph",
          "type": "StatsGraph"
        },
        {
          "name": "views_by_source_graph",
          "type": "StatsGraph"
        },
        {
          "name": "new_followers_by_source_graph",
          "type": "StatsGraph"
        },
        {
          "name": "languages_graph",
          "type": "StatsGraph"
        },
        {
          "name": "recent_message_interactions",
          "type": "Vector<MessageInteractionCounters>"
        }
      ],
      "type": "stats.BroadcastStats"
    },
    {
      "id": 2566302837,
      "predicate": "help.promoDataEmpty",
      "params": [
        {
          "name": "expires",
          "type": "int"
        }
      ],
      "type": "help.PromoData"
    },
    {
      "id": 2352576831,
      "predicate": "help.promoData",
      "params": [
        {
          "name": "flags",
          "type": "#"
        },
        {
          "name": "proxy",
          "type": "flags.0?true"
        },
        {
          "name": "expires",
          "type": "int"
        },
        {
          "name": "peer",
          "type": "Peer"
        },
        {
          "name": "chats",
          "type": "Vector<Chat>"
        },
        {
          "name": "users",
          "type": "Vector<User>"
        },
        {
          "name": "psa_type",
          "type": "flags.1?string"
        },
        {
          "name": "psa_message",
          "type": "flags.2?string"
        }
      ],
      "type": "help.PromoData"
    },
    {
      "id": 3727929492,
      "predicate": "videoSize",
      "params": [
        {
          "name": "flags",
          "type": "#"
        },
        {
          "name": "type",
          "type": "string"
        },
        {
          "name": "w",
          "type": "int"
        },
        {
          "name": "h",
          "type": "int"
        },
        {
          "name": "size",
          "type": "int"
        },
        {
          "name": "video_start_ts",
          "type": "flags.0?double"
        }
      ],
      "type": "VideoSize"
    },
    {
      "id": 418631927,
      "predicate": "statsGroupTopPoster",
      "params": [
        {
          "name": "user_id",
          "type": "int"
        },
        {
          "name": "messages",
          "type": "int"
        },
        {
          "name": "avg_chars",
          "type": "int"
        }
      ],
      "type": "StatsGroupTopPoster"
    },
    {
      "id": 1611985938,
      "predicate": "statsGroupTopAdmin",
      "params": [
        {
          "name": "user_id",
          "type": "int"
        },
        {
          "name": "deleted",
          "type": "int"
        },
        {
          "name": "kicked",
          "type": "int"
        },
        {
          "name": "banned",
          "type": "int"
        }
      ],
      "type": "StatsGroupTopAdmin"
    },
    {
      "id": 831924812,
      "predicate": "statsGroupTopInviter",
      "params": [
        {
          "name": "user_id",
          "type": "int"
        },
        {
          "name": "invitations",
          "type": "int"
        }
      ],
      "type": "StatsGroupTopInviter"
    },
    {
      "id": 4018141462,
      "predicate": "stats.megagroupStats",
      "params": [
        {
          "name": "period",
          "type": "StatsDateRangeDays"
        },
        {
          "name": "members",
          "type": "StatsAbsValueAndPrev"
        },
        {
          "name": "messages",
          "type": "StatsAbsValueAndPrev"
        },
        {
          "name": "viewers",
          "type": "StatsAbsValueAndPrev"
        },
        {
          "name": "posters",
          "type": "StatsAbsValueAndPrev"
        },
        {
          "name": "growth_graph",
          "type": "StatsGraph"
        },
        {
          "name": "members_graph",
          "type": "StatsGraph"
        },
        {
          "name": "new_members_by_source_graph",
          "type": "StatsGraph"
        },
        {
          "name": "languages_graph",
          "type": "StatsGraph"
        },
        {
          "name": "messages_graph",
          "type": "StatsGraph"
        },
        {
          "name": "actions_graph",
          "type": "StatsGraph"
        },
        {
          "name": "top_hours_graph",
          "type": "StatsGraph"
        },
        {
          "name": "weekdays_graph",
          "type": "StatsGraph"
        },
        {
          "name": "top_posters",
          "type": "Vector<StatsGroupTopPoster>"
        },
        {
          "name": "top_admins",
          "type": "Vector<StatsGroupTopAdmin>"
        },
        {
          "name": "top_inviters",
          "type": "Vector<StatsGroupTopInviter>"
        },
        {
          "name": "users",
          "type": "Vector<User>"
        }
      ],
      "type": "stats.MegagroupStats"
    },
    {
      "id": 3198350372,
      "predicate": "globalPrivacySettings",
      "params": [
        {
          "name": "flags",
          "type": "#"
        },
        {
          "name": "archive_and_mute_new_noncontact_peers",
          "type": "flags.0?Bool"
        }
      ],
      "type": "GlobalPrivacySettings"
    },
    {
      "id": 1107543535,
      "predicate": "help.countryCode",
      "params": [
        {
          "name": "flags",
          "type": "#"
        },
        {
          "name": "country_code",
          "type": "string"
        },
        {
          "name": "prefixes",
          "type": "flags.0?Vector<string>"
        },
        {
          "name": "patterns",
          "type": "flags.1?Vector<string>"
        }
      ],
      "type": "help.CountryCode"
    },
    {
      "id": 3280440867,
      "predicate": "help.country",
      "params": [
        {
          "name": "flags",
          "type": "#"
        },
        {
          "name": "hidden",
          "type": "flags.0?true"
        },
        {
          "name": "iso2",
          "type": "string"
        },
        {
          "name": "default_name",
          "type": "string"
        },
        {
          "name": "name",
          "type": "flags.1?string"
        },
        {
          "name": "country_codes",
          "type": "Vector<help.CountryCode>"
        }
      ],
      "type": "help.Country"
    },
    {
      "id": 2479628082,
      "predicate": "help.countriesListNotModified",
      "params": [],
      "type": "help.CountriesList"
    },
    {
      "id": 2278585758,
      "predicate": "help.countriesList",
      "params": [
        {
          "name": "countries",
          "type": "Vector<help.Country>"
        },
        {
          "name": "hash",
          "type": "int"
        }
      ],
      "type": "help.CountriesList"
    },
    {
      "id": 1163625789,
      "predicate": "messageViews",
      "params": [
        {
          "name": "flags",
          "type": "#"
        },
        {
          "name": "views",
          "type": "flags.0?int"
        },
        {
          "name": "forwards",
          "type": "flags.1?int"
        },
        {
          "name": "replies",
          "type": "flags.2?MessageReplies"
        }
      ],
      "type": "MessageViews"
    },
    {
      "id": 3066361155,
      "predicate": "messages.messageViews",
      "params": [
        {
          "name": "views",
          "type": "Vector<MessageViews>"
        },
        {
          "name": "chats",
          "type": "Vector<Chat>"
        },
        {
          "name": "users",
          "type": "Vector<User>"
        }
      ],
      "type": "messages.MessageViews"
    },
    {
      "id": 4124938141,
      "predicate": "messages.discussionMessage",
      "params": [
        {
          "name": "flags",
          "type": "#"
        },
        {
          "name": "messages",
          "type": "Vector<Message>"
        },
        {
          "name": "max_id",
          "type": "flags.0?int"
        },
        {
          "name": "read_inbox_max_id",
          "type": "flags.1?int"
        },
        {
          "name": "read_outbox_max_id",
          "type": "flags.2?int"
        },
        {
          "name": "chats",
          "type": "Vector<Chat>"
        },
        {
          "name": "users",
          "type": "Vector<User>"
        }
      ],
      "type": "messages.DiscussionMessage"
    },
    {
      "id": 2799007587,
      "predicate": "messageReplyHeader",
      "params": [
        {
          "name": "flags",
          "type": "#"
        },
        {
          "name": "reply_to_msg_id",
          "type": "int"
        },
        {
          "name": "reply_to_peer_id",
          "type": "flags.0?Peer"
        },
        {
          "name": "reply_to_top_id",
          "type": "flags.1?int"
        }
      ],
      "type": "MessageReplyHeader"
    },
    {
      "id": 1093204652,
      "predicate": "messageReplies",
      "params": [
        {
          "name": "flags",
          "type": "#"
        },
        {
          "name": "comments",
          "type": "flags.0?true"
        },
        {
          "name": "replies",
          "type": "int"
        },
        {
          "name": "replies_pts",
          "type": "int"
        },
        {
          "name": "recent_repliers",
          "type": "flags.1?Vector<Peer>"
        },
        {
          "name": "channel_id",
          "type": "flags.0?int"
        },
        {
          "name": "max_id",
          "type": "flags.2?int"
        },
        {
          "name": "read_max_id",
          "type": "flags.3?int"
        }
      ],
      "type": "MessageReplies"
    },
    {
      "id": 3908927508,
      "predicate": "peerBlocked",
      "params": [
        {
          "name": "peer_id",
          "type": "Peer"
        },
        {
          "name": "date",
          "type": "int"
        }
      ],
      "type": "PeerBlocked"
    },
    {
      "id": 2308567701,
      "predicate": "stats.messageStats",
      "params": [
        {
          "name": "views_graph",
          "type": "StatsGraph"
        }
      ],
      "type": "stats.MessageStats"
    },
    {
      "id": 2004925620,
      "predicate": "groupCallDiscarded",
      "params": [
        {
          "name": "id",
          "type": "long"
        },
        {
          "name": "access_hash",
          "type": "long"
        },
        {
          "name": "duration",
          "type": "int"
        }
      ],
      "type": "GroupCall"
    },
    {
      "id": 3583468812,
      "predicate": "groupCall",
      "params": [
        {
          "name": "flags",
          "type": "#"
        },
        {
          "name": "join_muted",
          "type": "flags.1?true"
        },
        {
          "name": "can_change_join_muted",
          "type": "flags.2?true"
        },
        {
          "name": "join_date_asc",
          "type": "flags.6?true"
        },
        {
          "name": "schedule_start_subscribed",
          "type": "flags.8?true"
        },
        {
          "name": "can_start_video",
          "type": "flags.9?true"
        },
        {
          "name": "id",
          "type": "long"
        },
        {
          "name": "access_hash",
          "type": "long"
        },
        {
          "name": "participants_count",
          "type": "int"
        },
        {
          "name": "title",
          "type": "flags.3?string"
        },
        {
          "name": "stream_dc_id",
          "type": "flags.4?int"
        },
        {
          "name": "record_start_date",
          "type": "flags.5?int"
        },
        {
          "name": "schedule_date",
          "type": "flags.7?int"
        },
        {
          "name": "unmuted_video_count",
          "type": "flags.10?int"
        },
        {
          "name": "unmuted_video_limit",
          "type": "int"
        },
        {
          "name": "version",
          "type": "int"
        }
      ],
      "type": "GroupCall"
    },
    {
      "id": 3635053583,
      "predicate": "inputGroupCall",
      "params": [
        {
          "name": "id",
          "type": "long"
        },
        {
          "name": "access_hash",
          "type": "long"
        }
      ],
      "type": "InputGroupCall"
    },
    {
      "id": 3953538814,
      "predicate": "groupCallParticipant",
      "params": [
        {
          "name": "flags",
          "type": "#"
        },
        {
          "name": "muted",
          "type": "flags.0?true"
        },
        {
          "name": "left",
          "type": "flags.1?true"
        },
        {
          "name": "can_self_unmute",
          "type": "flags.2?true"
        },
        {
          "name": "just_joined",
          "type": "flags.4?true"
        },
        {
          "name": "versioned",
          "type": "flags.5?true"
        },
        {
          "name": "min",
          "type": "flags.8?true"
        },
        {
          "name": "muted_by_you",
          "type": "flags.9?true"
        },
        {
          "name": "volume_by_admin",
          "type": "flags.10?true"
        },
        {
          "name": "self",
          "type": "flags.12?true"
        },
        {
          "name": "video_joined",
          "type": "flags.15?true"
        },
        {
          "name": "peer",
          "type": "Peer"
        },
        {
          "name": "date",
          "type": "int"
        },
        {
          "name": "active_date",
          "type": "flags.3?int"
        },
        {
          "name": "source",
          "type": "int"
        },
        {
          "name": "volume",
          "type": "flags.7?int"
        },
        {
          "name": "about",
          "type": "flags.11?string"
        },
        {
          "name": "raise_hand_rating",
          "type": "flags.13?long"
        },
        {
          "name": "video",
          "type": "flags.6?GroupCallParticipantVideo"
        },
        {
          "name": "presentation",
          "type": "flags.14?GroupCallParticipantVideo"
        }
      ],
      "type": "GroupCallParticipant"
    },
    {
      "id": 2658302637,
      "predicate": "phone.groupCall",
      "params": [
        {
          "name": "call",
          "type": "GroupCall"
        },
        {
          "name": "participants",
          "type": "Vector<GroupCallParticipant>"
        },
        {
          "name": "participants_next_offset",
          "type": "string"
        },
        {
          "name": "chats",
          "type": "Vector<Chat>"
        },
        {
          "name": "users",
          "type": "Vector<User>"
        }
      ],
      "type": "phone.GroupCall"
    },
    {
      "id": 4101460406,
      "predicate": "phone.groupParticipants",
      "params": [
        {
          "name": "count",
          "type": "int"
        },
        {
          "name": "participants",
          "type": "Vector<GroupCallParticipant>"
        },
        {
          "name": "next_offset",
          "type": "string"
        },
        {
          "name": "chats",
          "type": "Vector<Chat>"
        },
        {
          "name": "users",
          "type": "Vector<User>"
        },
        {
          "name": "version",
          "type": "int"
        }
      ],
      "type": "phone.GroupParticipants"
    },
    {
      "id": 813821341,
      "predicate": "inlineQueryPeerTypeSameBotPM",
      "params": [],
      "type": "InlineQueryPeerType"
    },
    {
      "id": 2201751468,
      "predicate": "inlineQueryPeerTypePM",
      "params": [],
      "type": "InlineQueryPeerType"
    },
    {
      "id": 3613836554,
      "predicate": "inlineQueryPeerTypeChat",
      "params": [],
      "type": "InlineQueryPeerType"
    },
    {
      "id": 1589952067,
      "predicate": "inlineQueryPeerTypeMegagroup",
      "params": [],
      "type": "InlineQueryPeerType"
    },
    {
      "id": 1664413338,
      "predicate": "inlineQueryPeerTypeBroadcast",
      "params": [],
      "type": "InlineQueryPeerType"
    },
    {
      "id": 375566091,
      "predicate": "messages.historyImport",
      "params": [
        {
          "name": "id",
          "type": "long"
        }
      ],
      "type": "messages.HistoryImport"
    },
    {
      "id": 1578088377,
      "predicate": "messages.historyImportParsed",
      "params": [
        {
          "name": "flags",
          "type": "#"
        },
        {
          "name": "pm",
          "type": "flags.0?true"
        },
        {
          "name": "group",
          "type": "flags.1?true"
        },
        {
          "name": "title",
          "type": "flags.2?string"
        }
      ],
      "type": "messages.HistoryImportParsed"
    },
    {
      "id": 4019011180,
      "predicate": "messages.affectedFoundMessages",
      "params": [
        {
          "name": "pts",
          "type": "int"
        },
        {
          "name": "pts_count",
          "type": "int"
        },
        {
          "name": "offset",
          "type": "int"
        },
        {
          "name": "messages",
          "type": "Vector<int>"
        }
      ],
      "type": "messages.AffectedFoundMessages"
    },
    {
      "id": 507405952,
      "predicate": "chatInviteImporter",
      "params": [
        {
          "name": "user_id",
          "type": "int"
        },
        {
          "name": "date",
          "type": "int"
        }
      ],
      "type": "ChatInviteImporter"
    },
    {
      "id": 3183881676,
      "predicate": "messages.exportedChatInvites",
      "params": [
        {
          "name": "count",
          "type": "int"
        },
        {
          "name": "invites",
          "type": "Vector<ExportedChatInvite>"
        },
        {
          "name": "users",
          "type": "Vector<User>"
        }
      ],
      "type": "messages.ExportedChatInvites"
    },
    {
      "id": 410107472,
      "predicate": "messages.exportedChatInvite",
      "params": [
        {
          "name": "invite",
          "type": "ExportedChatInvite"
        },
        {
          "name": "users",
          "type": "Vector<User>"
        }
      ],
      "type": "messages.ExportedChatInvite"
    },
    {
      "id": 572915951,
      "predicate": "messages.exportedChatInviteReplaced",
      "params": [
        {
          "name": "invite",
          "type": "ExportedChatInvite"
        },
        {
          "name": "new_invite",
          "type": "ExportedChatInvite"
        },
        {
          "name": "users",
          "type": "Vector<User>"
        }
      ],
      "type": "messages.ExportedChatInvite"
    },
    {
      "id": 2176233482,
      "predicate": "messages.chatInviteImporters",
      "params": [
        {
          "name": "count",
          "type": "int"
        },
        {
          "name": "importers",
          "type": "Vector<ChatInviteImporter>"
        },
        {
          "name": "users",
          "type": "Vector<User>"
        }
      ],
      "type": "messages.ChatInviteImporters"
    },
    {
      "id": 3755094799,
      "predicate": "chatAdminWithInvites",
      "params": [
        {
          "name": "admin_id",
          "type": "int"
        },
        {
          "name": "invites_count",
          "type": "int"
        },
        {
          "name": "revoked_invites_count",
          "type": "int"
        }
      ],
      "type": "ChatAdminWithInvites"
    },
    {
      "id": 3063640791,
      "predicate": "messages.chatAdminsWithInvites",
      "params": [
        {
          "name": "admins",
          "type": "Vector<ChatAdminWithInvites>"
        },
        {
          "name": "users",
          "type": "Vector<User>"
        }
      ],
      "type": "messages.ChatAdminsWithInvites"
    },
    {
      "id": 2723014423,
      "predicate": "messages.checkedHistoryImportPeer",
      "params": [
        {
          "name": "confirm_text",
          "type": "string"
        }
      ],
      "type": "messages.CheckedHistoryImportPeer"
    },
    {
      "id": 2951045695,
      "predicate": "phone.joinAsPeers",
      "params": [
        {
          "name": "peers",
          "type": "Vector<Peer>"
        },
        {
          "name": "chats",
          "type": "Vector<Chat>"
        },
        {
          "name": "users",
          "type": "Vector<User>"
        }
      ],
      "type": "phone.JoinAsPeers"
    },
    {
      "id": 541839704,
      "predicate": "phone.exportedGroupCallInvite",
      "params": [
        {
          "name": "link",
          "type": "string"
        }
      ],
      "type": "phone.ExportedGroupCallInvite"
    },
    {
      "id": 3702593719,
      "predicate": "groupCallParticipantVideoSourceGroup",
      "params": [
        {
          "name": "semantics",
          "type": "string"
        },
        {
          "name": "sources",
          "type": "Vector<int>"
        }
      ],
      "type": "GroupCallParticipantVideoSourceGroup"
    },
    {
      "id": 1735736008,
      "predicate": "groupCallParticipantVideo",
      "params": [
        {
          "name": "flags",
          "type": "#"
        },
        {
          "name": "paused",
          "type": "flags.0?true"
        },
        {
          "name": "endpoint",
          "type": "string"
        },
        {
          "name": "source_groups",
          "type": "Vector<GroupCallParticipantVideoSourceGroup>"
        },
        {
          "name": "audio_source",
          "type": "flags.1?int"
        }
      ],
      "type": "GroupCallParticipantVideo"
    },
    {
      "id": 2248056895,
      "predicate": "stickers.suggestedShortName",
      "params": [
        {
          "name": "short_name",
          "type": "string"
        }
      ],
      "type": "stickers.SuggestedShortName"
    },
    {
      "id": 795652779,
      "predicate": "botCommandScopeDefault",
      "params": [],
      "type": "BotCommandScope"
    },
    {
      "id": 1011811544,
      "predicate": "botCommandScopeUsers",
      "params": [],
      "type": "BotCommandScope"
    },
    {
      "id": 1877059713,
      "predicate": "botCommandScopeChats",
      "params": [],
      "type": "BotCommandScope"
    },
    {
      "id": 3114950762,
      "predicate": "botCommandScopeChatAdmins",
      "params": [],
      "type": "BotCommandScope"
    },
    {
      "id": 3684534653,
      "predicate": "botCommandScopePeer",
      "params": [
        {
          "name": "peer",
          "type": "InputPeer"
        }
      ],
      "type": "BotCommandScope"
    },
    {
      "id": 1071145937,
      "predicate": "botCommandScopePeerAdmins",
      "params": [
        {
          "name": "peer",
          "type": "InputPeer"
        }
      ],
      "type": "BotCommandScope"
    },
    {
      "id": 169026035,
      "predicate": "botCommandScopePeerUser",
      "params": [
        {
          "name": "peer",
          "type": "InputPeer"
        },
        {
          "name": "user_id",
          "type": "InputUser"
        }
      ],
      "type": "BotCommandScope"
    },
    {
      "id": 3816265825,
      "predicate": "account.resetPasswordFailedWait",
      "params": [
        {
          "name": "retry_date",
          "type": "int"
        }
      ],
      "type": "account.ResetPasswordResult"
    },
    {
      "id": 3924819069,
      "predicate": "account.resetPasswordRequestedWait",
      "params": [
        {
          "name": "until_date",
          "type": "int"
        }
      ],
      "type": "account.ResetPasswordResult"
    },
    {
      "id": 3911636542,
      "predicate": "account.resetPasswordOk",
      "params": [],
      "type": "account.ResetPasswordResult"
    }
  ],
  "methods": [
    {
      "id": 3416209197,
      "method": "invokeAfterMsg",
      "params": [
        {
          "name": "msg_id",
          "type": "long"
        },
        {
          "name": "query",
          "type": "!X"
        }
      ],
      "type": "X"
    },
    {
      "id": 1036301552,
      "method": "invokeAfterMsgs",
      "params": [
        {
          "name": "msg_ids",
          "type": "Vector<long>"
        },
        {
          "name": "query",
          "type": "!X"
        }
      ],
      "type": "X"
    },
    {
      "id": 3251461801,
      "method": "initConnection",
      "params": [
        {
          "name": "flags",
          "type": "#"
        },
        {
          "name": "api_id",
          "type": "int"
        },
        {
          "name": "device_model",
          "type": "string"
        },
        {
          "name": "system_version",
          "type": "string"
        },
        {
          "name": "app_version",
          "type": "string"
        },
        {
          "name": "system_lang_code",
          "type": "string"
        },
        {
          "name": "lang_pack",
          "type": "string"
        },
        {
          "name": "lang_code",
          "type": "string"
        },
        {
          "name": "proxy",
          "type": "flags.0?InputClientProxy"
        },
        {
          "name": "params",
          "type": "flags.1?JSONValue"
        },
        {
          "name": "query",
          "type": "!X"
        }
      ],
      "type": "X"
    },
    {
      "id": 3667594509,
      "method": "invokeWithLayer",
      "params": [
        {
          "name": "layer",
          "type": "int"
        },
        {
          "name": "query",
          "type": "!X"
        }
      ],
      "type": "X"
    },
    {
      "id": 3214170551,
      "method": "invokeWithoutUpdates",
      "params": [
        {
          "name": "query",
          "type": "!X"
        }
      ],
      "type": "X"
    },
    {
      "id": 911373810,
      "method": "invokeWithMessagesRange",
      "params": [
        {
          "name": "range",
          "type": "MessageRange"
        },
        {
          "name": "query",
          "type": "!X"
        }
      ],
      "type": "X"
    },
    {
      "id": 2896821550,
      "method": "invokeWithTakeout",
      "params": [
        {
          "name": "takeout_id",
          "type": "long"
        },
        {
          "name": "query",
          "type": "!X"
        }
      ],
      "type": "X"
    },
    {
      "id": 2792825935,
      "method": "auth.sendCode",
      "params": [
        {
          "name": "phone_number",
          "type": "string"
        },
        {
          "name": "api_id",
          "type": "int"
        },
        {
          "name": "api_hash",
          "type": "string"
        },
        {
          "name": "settings",
          "type": "CodeSettings"
        }
      ],
      "type": "auth.SentCode"
    },
    {
      "id": 2163139623,
      "method": "auth.signUp",
      "params": [
        {
          "name": "phone_number",
          "type": "string"
        },
        {
          "name": "phone_code_hash",
          "type": "string"
        },
        {
          "name": "first_name",
          "type": "string"
        },
        {
          "name": "last_name",
          "type": "string"
        }
      ],
      "type": "auth.Authorization"
    },
    {
      "id": 3168081281,
      "method": "auth.signIn",
      "params": [
        {
          "name": "phone_number",
          "type": "string"
        },
        {
          "name": "phone_code_hash",
          "type": "string"
        },
        {
          "name": "phone_code",
          "type": "string"
        }
      ],
      "type": "auth.Authorization"
    },
    {
      "id": 1461180992,
      "method": "auth.logOut",
      "params": [],
      "type": "Bool"
    },
    {
      "id": 2678787354,
      "method": "auth.resetAuthorizations",
      "params": [],
      "type": "Bool"
    },
    {
      "id": 3854565325,
      "method": "auth.exportAuthorization",
      "params": [
        {
          "name": "dc_id",
          "type": "int"
        }
      ],
      "type": "auth.ExportedAuthorization"
    },
    {
      "id": 3824129555,
      "method": "auth.importAuthorization",
      "params": [
        {
          "name": "id",
          "type": "int"
        },
        {
          "name": "bytes",
          "type": "bytes"
        }
      ],
      "type": "auth.Authorization"
    },
    {
      "id": 3453233669,
      "method": "auth.bindTempAuthKey",
      "params": [
        {
          "name": "perm_auth_key_id",
          "type": "long"
        },
        {
          "name": "nonce",
          "type": "long"
        },
        {
          "name": "expires_at",
          "type": "int"
        },
        {
          "name": "encrypted_message",
          "type": "bytes"
        }
      ],
      "type": "Bool"
    },
    {
      "id": 1738800940,
      "method": "auth.importBotAuthorization",
      "params": [
        {
          "name": "flags",
          "type": "int"
        },
        {
          "name": "api_id",
          "type": "int"
        },
        {
          "name": "api_hash",
          "type": "string"
        },
        {
          "name": "bot_auth_token",
          "type": "string"
        }
      ],
      "type": "auth.Authorization"
    },
    {
      "id": 3515567382,
      "method": "auth.checkPassword",
      "params": [
        {
          "name": "password",
          "type": "InputCheckPasswordSRP"
        }
      ],
      "type": "auth.Authorization"
    },
    {
      "id": 3633822822,
      "method": "auth.requestPasswordRecovery",
      "params": [],
      "type": "auth.PasswordRecovery"
    },
    {
      "id": 923364464,
      "method": "auth.recoverPassword",
      "params": [
        {
          "name": "flags",
          "type": "#"
        },
        {
          "name": "code",
          "type": "string"
        },
        {
          "name": "new_settings",
          "type": "flags.0?account.PasswordInputSettings"
        }
      ],
      "type": "auth.Authorization"
    },
    {
      "id": 1056025023,
      "method": "auth.resendCode",
      "params": [
        {
          "name": "phone_number",
          "type": "string"
        },
        {
          "name": "phone_code_hash",
          "type": "string"
        }
      ],
      "type": "auth.SentCode"
    },
    {
      "id": 520357240,
      "method": "auth.cancelCode",
      "params": [
        {
          "name": "phone_number",
          "type": "string"
        },
        {
          "name": "phone_code_hash",
          "type": "string"
        }
      ],
      "type": "Bool"
    },
    {
      "id": 2387124616,
      "method": "auth.dropTempAuthKeys",
      "params": [
        {
          "name": "except_auth_keys",
          "type": "Vector<long>"
        }
      ],
      "type": "Bool"
    },
    {
      "id": 2981369111,
      "method": "auth.exportLoginToken",
      "params": [
        {
          "name": "api_id",
          "type": "int"
        },
        {
          "name": "api_hash",
          "type": "string"
        },
        {
          "name": "except_ids",
          "type": "Vector<int>"
        }
      ],
      "type": "auth.LoginToken"
    },
    {
      "id": 2511101156,
      "method": "auth.importLoginToken",
      "params": [
        {
          "name": "token",
          "type": "bytes"
        }
      ],
      "type": "auth.LoginToken"
    },
    {
      "id": 3902057805,
      "method": "auth.acceptLoginToken",
      "params": [
        {
          "name": "token",
          "type": "bytes"
        }
      ],
      "type": "Authorization"
    },
    {
      "id": 221691769,
      "method": "auth.checkRecoveryPassword",
      "params": [
        {
          "name": "code",
          "type": "string"
        }
      ],
      "type": "Bool"
    },
    {
      "id": 1754754159,
      "method": "account.registerDevice",
      "params": [
        {
          "name": "flags",
          "type": "#"
        },
        {
          "name": "no_muted",
          "type": "flags.0?true"
        },
        {
          "name": "token_type",
          "type": "int"
        },
        {
          "name": "token",
          "type": "string"
        },
        {
          "name": "app_sandbox",
          "type": "Bool"
        },
        {
          "name": "secret",
          "type": "bytes"
        },
        {
          "name": "other_uids",
          "type": "Vector<int>"
        }
      ],
      "type": "Bool"
    },
    {
      "id": 813089983,
      "method": "account.unregisterDevice",
      "params": [
        {
          "name": "token_type",
          "type": "int"
        },
        {
          "name": "token",
          "type": "string"
        },
        {
          "name": "other_uids",
          "type": "Vector<int>"
        }
      ],
      "type": "Bool"
    },
    {
      "id": 2227067795,
      "method": "account.updateNotifySettings",
      "params": [
        {
          "name": "peer",
          "type": "InputNotifyPeer"
        },
        {
          "name": "settings",
          "type": "InputPeerNotifySettings"
        }
      ],
      "type": "Bool"
    },
    {
      "id": 313765169,
      "method": "account.getNotifySettings",
      "params": [
        {
          "name": "peer",
          "type": "InputNotifyPeer"
        }
      ],
      "type": "PeerNotifySettings"
    },
    {
      "id": 3682473799,
      "method": "account.resetNotifySettings",
      "params": [],
      "type": "Bool"
    },
    {
      "id": 2018596725,
      "method": "account.updateProfile",
      "params": [
        {
          "name": "flags",
          "type": "#"
        },
        {
          "name": "first_name",
          "type": "flags.0?string"
        },
        {
          "name": "last_name",
          "type": "flags.1?string"
        },
        {
          "name": "about",
          "type": "flags.2?string"
        }
      ],
      "type": "User"
    },
    {
      "id": 1713919532,
      "method": "account.updateStatus",
      "params": [
        {
          "name": "offline",
          "type": "Bool"
        }
      ],
      "type": "Bool"
    },
    {
      "id": 2864387939,
      "method": "account.getWallPapers",
      "params": [
        {
          "name": "hash",
          "type": "int"
        }
      ],
      "type": "account.WallPapers"
    },
    {
      "id": 3317316998,
      "method": "account.reportPeer",
      "params": [
        {
          "name": "peer",
          "type": "InputPeer"
        },
        {
          "name": "reason",
          "type": "ReportReason"
        },
        {
          "name": "message",
          "type": "string"
        }
      ],
      "type": "Bool"
    },
    {
      "id": 655677548,
      "method": "account.checkUsername",
      "params": [
        {
          "name": "username",
          "type": "string"
        }
      ],
      "type": "Bool"
    },
    {
      "id": 1040964988,
      "method": "account.updateUsername",
      "params": [
        {
          "name": "username",
          "type": "string"
        }
      ],
      "type": "User"
    },
    {
      "id": 3671837008,
      "method": "account.getPrivacy",
      "params": [
        {
          "name": "key",
          "type": "InputPrivacyKey"
        }
      ],
      "type": "account.PrivacyRules"
    },
    {
      "id": 3388480744,
      "method": "account.setPrivacy",
      "params": [
        {
          "name": "key",
          "type": "InputPrivacyKey"
        },
        {
          "name": "rules",
          "type": "Vector<InputPrivacyRule>"
        }
      ],
      "type": "account.PrivacyRules"
    },
    {
      "id": 1099779595,
      "method": "account.deleteAccount",
      "params": [
        {
          "name": "reason",
          "type": "string"
        }
      ],
      "type": "Bool"
    },
    {
      "id": 150761757,
      "method": "account.getAccountTTL",
      "params": [],
      "type": "AccountDaysTTL"
    },
    {
      "id": 608323678,
      "method": "account.setAccountTTL",
      "params": [
        {
          "name": "ttl",
          "type": "AccountDaysTTL"
        }
      ],
      "type": "Bool"
    },
    {
      "id": 2186758885,
      "method": "account.sendChangePhoneCode",
      "params": [
        {
          "name": "phone_number",
          "type": "string"
        },
        {
          "name": "settings",
          "type": "CodeSettings"
        }
      ],
      "type": "auth.SentCode"
    },
    {
      "id": 1891839707,
      "method": "account.changePhone",
      "params": [
        {
          "name": "phone_number",
          "type": "string"
        },
        {
          "name": "phone_code_hash",
          "type": "string"
        },
        {
          "name": "phone_code",
          "type": "string"
        }
      ],
      "type": "User"
    },
    {
      "id": 954152242,
      "method": "account.updateDeviceLocked",
      "params": [
        {
          "name": "period",
          "type": "int"
        }
      ],
      "type": "Bool"
    },
    {
      "id": 3810574680,
      "method": "account.getAuthorizations",
      "params": [],
      "type": "account.Authorizations"
    },
    {
      "id": 3749180348,
      "method": "account.resetAuthorization",
      "params": [
        {
          "name": "hash",
          "type": "long"
        }
      ],
      "type": "Bool"
    },
    {
      "id": 1418342645,
      "method": "account.getPassword",
      "params": [],
      "type": "account.Password"
    },
    {
      "id": 2631199481,
      "method": "account.getPasswordSettings",
      "params": [
        {
          "name": "password",
          "type": "InputCheckPasswordSRP"
        }
      ],
      "type": "account.PasswordSettings"
    },
    {
      "id": 2778402863,
      "method": "account.updatePasswordSettings",
      "params": [
        {
          "name": "password",
          "type": "InputCheckPasswordSRP"
        },
        {
          "name": "new_settings",
          "type": "account.PasswordInputSettings"
        }
      ],
      "type": "Bool"
    },
    {
      "id": 457157256,
      "method": "account.sendConfirmPhoneCode",
      "params": [
        {
          "name": "hash",
          "type": "string"
        },
        {
          "name": "settings",
          "type": "CodeSettings"
        }
      ],
      "type": "auth.SentCode"
    },
    {
      "id": 1596029123,
      "method": "account.confirmPhone",
      "params": [
        {
          "name": "phone_code_hash",
          "type": "string"
        },
        {
          "name": "phone_code",
          "type": "string"
        }
      ],
      "type": "Bool"
    },
    {
      "id": 1151208273,
      "method": "account.getTmpPassword",
      "params": [
        {
          "name": "password",
          "type": "InputCheckPasswordSRP"
        },
        {
          "name": "period",
          "type": "int"
        }
      ],
      "type": "account.TmpPassword"
    },
    {
      "id": 405695855,
      "method": "account.getWebAuthorizations",
      "params": [],
      "type": "account.WebAuthorizations"
    },
    {
      "id": 755087855,
      "method": "account.resetWebAuthorization",
      "params": [
        {
          "name": "hash",
          "type": "long"
        }
      ],
      "type": "Bool"
    },
    {
      "id": 1747789204,
      "method": "account.resetWebAuthorizations",
      "params": [],
      "type": "Bool"
    },
    {
      "id": 2995305597,
      "method": "account.getAllSecureValues",
      "params": [],
      "type": "Vector<SecureValue>"
    },
    {
      "id": 1936088002,
      "method": "account.getSecureValue",
      "params": [
        {
          "name": "types",
          "type": "Vector<SecureValueType>"
        }
      ],
      "type": "Vector<SecureValue>"
    },
    {
      "id": 2308956957,
      "method": "account.saveSecureValue",
      "params": [
        {
          "name": "value",
          "type": "InputSecureValue"
        },
        {
          "name": "secure_secret_id",
          "type": "long"
        }
      ],
      "type": "SecureValue"
    },
    {
      "id": 3095444555,
      "method": "account.deleteSecureValue",
      "params": [
        {
          "name": "types",
          "type": "Vector<SecureValueType>"
        }
      ],
      "type": "Bool"
    },
    {
      "id": 3094063329,
      "method": "account.getAuthorizationForm",
      "params": [
        {
          "name": "bot_id",
          "type": "int"
        },
        {
          "name": "scope",
          "type": "string"
        },
        {
          "name": "public_key",
          "type": "string"
        }
      ],
      "type": "account.AuthorizationForm"
    },
    {
      "id": 3875699860,
      "method": "account.acceptAuthorization",
      "params": [
        {
          "name": "bot_id",
          "type": "int"
        },
        {
          "name": "scope",
          "type": "string"
        },
        {
          "name": "public_key",
          "type": "string"
        },
        {
          "name": "value_hashes",
          "type": "Vector<SecureValueHash>"
        },
        {
          "name": "credentials",
          "type": "SecureCredentialsEncrypted"
        }
      ],
      "type": "Bool"
    },
    {
      "id": 2778945273,
      "method": "account.sendVerifyPhoneCode",
      "params": [
        {
          "name": "phone_number",
          "type": "string"
        },
        {
          "name": "settings",
          "type": "CodeSettings"
        }
      ],
      "type": "auth.SentCode"
    },
    {
      "id": 1305716726,
      "method": "account.verifyPhone",
      "params": [
        {
          "name": "phone_number",
          "type": "string"
        },
        {
          "name": "phone_code_hash",
          "type": "string"
        },
        {
          "name": "phone_code",
          "type": "string"
        }
      ],
      "type": "Bool"
    },
    {
      "id": 1880182943,
      "method": "account.sendVerifyEmailCode",
      "params": [
        {
          "name": "email",
          "type": "string"
        }
      ],
      "type": "account.SentEmailCode"
    },
    {
      "id": 3971627483,
      "method": "account.verifyEmail",
      "params": [
        {
          "name": "email",
          "type": "string"
        },
        {
          "name": "code",
          "type": "string"
        }
      ],
      "type": "Bool"
    },
    {
      "id": 4032514052,
      "method": "account.initTakeoutSession",
      "params": [
        {
          "name": "flags",
          "type": "#"
        },
        {
          "name": "contacts",
          "type": "flags.0?true"
        },
        {
          "name": "message_users",
          "type": "flags.1?true"
        },
        {
          "name": "message_chats",
          "type": "flags.2?true"
        },
        {
          "name": "message_megagroups",
          "type": "flags.3?true"
        },
        {
          "name": "message_channels",
          "type": "flags.4?true"
        },
        {
          "name": "files",
          "type": "flags.5?true"
        },
        {
          "name": "file_max_size",
          "type": "flags.5?int"
        }
      ],
      "type": "account.Takeout"
    },
    {
      "id": 489050862,
      "method": "account.finishTakeoutSession",
      "params": [
        {
          "name": "flags",
          "type": "#"
        },
        {
          "name": "success",
          "type": "flags.0?true"
        }
      ],
      "type": "Bool"
    },
    {
      "id": 2413762848,
      "method": "account.confirmPasswordEmail",
      "params": [
        {
          "name": "code",
          "type": "string"
        }
      ],
      "type": "Bool"
    },
    {
      "id": 2055154197,
      "method": "account.resendPasswordEmail",
      "params": [],
      "type": "Bool"
    },
    {
      "id": 3251361206,
      "method": "account.cancelPasswordEmail",
      "params": [],
      "type": "Bool"
    },
    {
      "id": 2668087080,
      "method": "account.getContactSignUpNotification",
      "params": [],
      "type": "Bool"
    },
    {
      "id": 3488890721,
      "method": "account.setContactSignUpNotification",
      "params": [
        {
          "name": "silent",
          "type": "Bool"
        }
      ],
      "type": "Bool"
    },
    {
      "id": 1398240377,
      "method": "account.getNotifyExceptions",
      "params": [
        {
          "name": "flags",
          "type": "#"
        },
        {
          "name": "compare_sound",
          "type": "flags.1?true"
        },
        {
          "name": "peer",
          "type": "flags.0?InputNotifyPeer"
        }
      ],
      "type": "Updates"
    },
    {
      "id": 4237155306,
      "method": "account.getWallPaper",
      "params": [
        {
          "name": "wallpaper",
          "type": "InputWallPaper"
        }
      ],
      "type": "WallPaper"
    },
    {
      "id": 3716494945,
      "method": "account.uploadWallPaper",
      "params": [
        {
          "name": "file",
          "type": "InputFile"
        },
        {
          "name": "mime_type",
          "type": "string"
        },
        {
          "name": "settings",
          "type": "WallPaperSettings"
        }
      ],
      "type": "WallPaper"
    },
    {
      "id": 1817860919,
      "method": "account.saveWallPaper",
      "params": [
        {
          "name": "wallpaper",
          "type": "InputWallPaper"
        },
        {
          "name": "unsave",
          "type": "Bool"
        },
        {
          "name": "settings",
          "type": "WallPaperSettings"
        }
      ],
      "type": "Bool"
    },
    {
      "id": 4276967273,
      "method": "account.installWallPaper",
      "params": [
        {
          "name": "wallpaper",
          "type": "InputWallPaper"
        },
        {
          "name": "settings",
          "type": "WallPaperSettings"
        }
      ],
      "type": "Bool"
    },
    {
      "id": 3141244932,
      "method": "account.resetWallPapers",
      "params": [],
      "type": "Bool"
    },
    {
      "id": 1457130303,
      "method": "account.getAutoDownloadSettings",
      "params": [],
      "type": "account.AutoDownloadSettings"
    },
    {
      "id": 1995661875,
      "method": "account.saveAutoDownloadSettings",
      "params": [
        {
          "name": "flags",
          "type": "#"
        },
        {
          "name": "low",
          "type": "flags.0?true"
        },
        {
          "name": "high",
          "type": "flags.1?true"
        },
        {
          "name": "settings",
          "type": "AutoDownloadSettings"
        }
      ],
      "type": "Bool"
    },
    {
      "id": 473805619,
      "method": "account.uploadTheme",
      "params": [
        {
          "name": "flags",
          "type": "#"
        },
        {
          "name": "file",
          "type": "InputFile"
        },
        {
          "name": "thumb",
          "type": "flags.0?InputFile"
        },
        {
          "name": "file_name",
          "type": "string"
        },
        {
          "name": "mime_type",
          "type": "string"
        }
      ],
      "type": "Document"
    },
    {
      "id": 2217919007,
      "method": "account.createTheme",
      "params": [
        {
          "name": "flags",
          "type": "#"
        },
        {
          "name": "slug",
          "type": "string"
        },
        {
          "name": "title",
          "type": "string"
        },
        {
          "name": "document",
          "type": "flags.2?InputDocument"
        },
        {
          "name": "settings",
          "type": "flags.3?InputThemeSettings"
        }
      ],
      "type": "Theme"
    },
    {
      "id": 1555261397,
      "method": "account.updateTheme",
      "params": [
        {
          "name": "flags",
          "type": "#"
        },
        {
          "name": "format",
          "type": "string"
        },
        {
          "name": "theme",
          "type": "InputTheme"
        },
        {
          "name": "slug",
          "type": "flags.0?string"
        },
        {
          "name": "title",
          "type": "flags.1?string"
        },
        {
          "name": "document",
          "type": "flags.2?InputDocument"
        },
        {
          "name": "settings",
          "type": "flags.3?InputThemeSettings"
        }
      ],
      "type": "Theme"
    },
    {
      "id": 4065792108,
      "method": "account.saveTheme",
      "params": [
        {
          "name": "theme",
          "type": "InputTheme"
        },
        {
          "name": "unsave",
          "type": "Bool"
        }
      ],
      "type": "Bool"
    },
    {
      "id": 2061776695,
      "method": "account.installTheme",
      "params": [
        {
          "name": "flags",
          "type": "#"
        },
        {
          "name": "dark",
          "type": "flags.0?true"
        },
        {
          "name": "format",
          "type": "flags.1?string"
        },
        {
          "name": "theme",
          "type": "flags.1?InputTheme"
        }
      ],
      "type": "Bool"
    },
    {
      "id": 2375906347,
      "method": "account.getTheme",
      "params": [
        {
          "name": "format",
          "type": "string"
        },
        {
          "name": "theme",
          "type": "InputTheme"
        },
        {
          "name": "document_id",
          "type": "long"
        }
      ],
      "type": "Theme"
    },
    {
      "id": 676939512,
      "method": "account.getThemes",
      "params": [
        {
          "name": "format",
          "type": "string"
        },
        {
          "name": "hash",
          "type": "int"
        }
      ],
      "type": "account.Themes"
    },
    {
      "id": 3044323691,
      "method": "account.setContentSettings",
      "params": [
        {
          "name": "flags",
          "type": "#"
        },
        {
          "name": "sensitive_enabled",
          "type": "flags.0?true"
        }
      ],
      "type": "Bool"
    },
    {
      "id": 2342210990,
      "method": "account.getContentSettings",
      "params": [],
      "type": "account.ContentSettings"
    },
    {
      "id": 1705865692,
      "method": "account.getMultiWallPapers",
      "params": [
        {
          "name": "wallpapers",
          "type": "Vector<InputWallPaper>"
        }
      ],
      "type": "Vector<WallPaper>"
    },
    {
      "id": 3945483510,
      "method": "account.getGlobalPrivacySettings",
      "params": [],
      "type": "GlobalPrivacySettings"
    },
    {
      "id": 517647042,
      "method": "account.setGlobalPrivacySettings",
      "params": [
        {
          "name": "settings",
          "type": "GlobalPrivacySettings"
        }
      ],
      "type": "GlobalPrivacySettings"
    },
    {
      "id": 4203529973,
      "method": "account.reportProfilePhoto",
      "params": [
        {
          "name": "peer",
          "type": "InputPeer"
        },
        {
          "name": "photo_id",
          "type": "InputPhoto"
        },
        {
          "name": "reason",
          "type": "ReportReason"
        },
        {
          "name": "message",
          "type": "string"
        }
      ],
      "type": "Bool"
    },
    {
      "id": 2466827803,
      "method": "account.resetPassword",
      "params": [],
      "type": "account.ResetPasswordResult"
    },
    {
      "id": 1284770294,
      "method": "account.declinePasswordReset",
      "params": [],
      "type": "Bool"
    },
    {
      "id": 227648840,
      "method": "users.getUsers",
      "params": [
        {
          "name": "id",
          "type": "Vector<InputUser>"
        }
      ],
      "type": "Vector<User>"
    },
    {
      "id": 3392185777,
      "method": "users.getFullUser",
      "params": [
        {
          "name": "id",
          "type": "InputUser"
        }
      ],
      "type": "UserFull"
    },
    {
      "id": 2429064373,
      "method": "users.setSecureValueErrors",
      "params": [
        {
          "name": "id",
          "type": "InputUser"
        },
        {
          "name": "errors",
          "type": "Vector<SecureValueError>"
        }
      ],
      "type": "Bool"
    },
    {
      "id": 749357634,
      "method": "contacts.getContactIDs",
      "params": [
        {
          "name": "hash",
          "type": "int"
        }
      ],
      "type": "Vector<int>"
    },
    {
      "id": 3299038190,
      "method": "contacts.getStatuses",
      "params": [],
      "type": "Vector<ContactStatus>"
    },
    {
      "id": 3223553183,
      "method": "contacts.getContacts",
      "params": [
        {
          "name": "hash",
          "type": "int"
        }
      ],
      "type": "contacts.Contacts"
    },
    {
      "id": 746589157,
      "method": "contacts.importContacts",
      "params": [
        {
          "name": "contacts",
          "type": "Vector<InputContact>"
        }
      ],
      "type": "contacts.ImportedContacts"
    },
    {
      "id": 157945344,
      "method": "contacts.deleteContacts",
      "params": [
        {
          "name": "id",
          "type": "Vector<InputUser>"
        }
      ],
      "type": "Updates"
    },
    {
      "id": 269745566,
      "method": "contacts.deleteByPhones",
      "params": [
        {
          "name": "phones",
          "type": "Vector<string>"
        }
      ],
      "type": "Bool"
    },
    {
      "id": 1758204945,
      "method": "contacts.block",
      "params": [
        {
          "name": "id",
          "type": "InputPeer"
        }
      ],
      "type": "Bool"
    },
    {
      "id": 3198573904,
      "method": "contacts.unblock",
      "params": [
        {
          "name": "id",
          "type": "InputPeer"
        }
      ],
      "type": "Bool"
    },
    {
      "id": 4118557967,
      "method": "contacts.getBlocked",
      "params": [
        {
          "name": "offset",
          "type": "int"
        },
        {
          "name": "limit",
          "type": "int"
        }
      ],
      "type": "contacts.Blocked"
    },
    {
      "id": 301470424,
      "method": "contacts.search",
      "params": [
        {
          "name": "q",
          "type": "string"
        },
        {
          "name": "limit",
          "type": "int"
        }
      ],
      "type": "contacts.Found"
    },
    {
      "id": 4181511075,
      "method": "contacts.resolveUsername",
      "params": [
        {
          "name": "username",
          "type": "string"
        }
      ],
      "type": "contacts.ResolvedPeer"
    },
    {
      "id": 3566742965,
      "method": "contacts.getTopPeers",
      "params": [
        {
          "name": "flags",
          "type": "#"
        },
        {
          "name": "correspondents",
          "type": "flags.0?true"
        },
        {
          "name": "bots_pm",
          "type": "flags.1?true"
        },
        {
          "name": "bots_inline",
          "type": "flags.2?true"
        },
        {
          "name": "phone_calls",
          "type": "flags.3?true"
        },
        {
          "name": "forward_users",
          "type": "flags.4?true"
        },
        {
          "name": "forward_chats",
          "type": "flags.5?true"
        },
        {
          "name": "groups",
          "type": "flags.10?true"
        },
        {
          "name": "channels",
          "type": "flags.15?true"
        },
        {
          "name": "offset",
          "type": "int"
        },
        {
          "name": "limit",
          "type": "int"
        },
        {
          "name": "hash",
          "type": "int"
        }
      ],
      "type": "contacts.TopPeers"
    },
    {
      "id": 451113900,
      "method": "contacts.resetTopPeerRating",
      "params": [
        {
          "name": "category",
          "type": "TopPeerCategory"
        },
        {
          "name": "peer",
          "type": "InputPeer"
        }
      ],
      "type": "Bool"
    },
    {
      "id": 2274703345,
      "method": "contacts.resetSaved",
      "params": [],
      "type": "Bool"
    },
    {
      "id": 2196890527,
      "method": "contacts.getSaved",
      "params": [],
      "type": "Vector<SavedContact>"
    },
    {
      "id": 2232729050,
      "method": "contacts.toggleTopPeers",
      "params": [
        {
          "name": "enabled",
          "type": "Bool"
        }
      ],
      "type": "Bool"
    },
    {
      "id": 3908330448,
      "method": "contacts.addContact",
      "params": [
        {
          "name": "flags",
          "type": "#"
        },
        {
          "name": "add_phone_privacy_exception",
          "type": "flags.0?true"
        },
        {
          "name": "id",
          "type": "InputUser"
        },
        {
          "name": "first_name",
          "type": "string"
        },
        {
          "name": "last_name",
          "type": "string"
        },
        {
          "name": "phone",
          "type": "string"
        }
      ],
      "type": "Updates"
    },
    {
      "id": 4164002319,
      "method": "contacts.acceptContact",
      "params": [
        {
          "name": "id",
          "type": "InputUser"
        }
      ],
      "type": "Updates"
    },
    {
      "id": 3544759364,
      "method": "contacts.getLocated",
      "params": [
        {
          "name": "flags",
          "type": "#"
        },
        {
          "name": "background",
          "type": "flags.1?true"
        },
        {
          "name": "geo_point",
          "type": "InputGeoPoint"
        },
        {
          "name": "self_expires",
          "type": "flags.0?int"
        }
      ],
      "type": "Updates"
    },
    {
      "id": 698914348,
      "method": "contacts.blockFromReplies",
      "params": [
        {
          "name": "flags",
          "type": "#"
        },
        {
          "name": "delete_message",
          "type": "flags.0?true"
        },
        {
          "name": "delete_history",
          "type": "flags.1?true"
        },
        {
          "name": "report_spam",
          "type": "flags.2?true"
        },
        {
          "name": "msg_id",
          "type": "int"
        }
      ],
      "type": "Updates"
    },
    {
      "id": 1673946374,
      "method": "messages.getMessages",
      "params": [
        {
          "name": "id",
          "type": "Vector<InputMessage>"
        }
      ],
      "type": "messages.Messages"
    },
    {
      "id": 2699967347,
      "method": "messages.getDialogs",
      "params": [
        {
          "name": "flags",
          "type": "#"
        },
        {
          "name": "exclude_pinned",
          "type": "flags.0?true"
        },
        {
          "name": "folder_id",
          "type": "flags.1?int"
        },
        {
          "name": "offset_date",
          "type": "int"
        },
        {
          "name": "offset_id",
          "type": "int"
        },
        {
          "name": "offset_peer",
          "type": "InputPeer"
        },
        {
          "name": "limit",
          "type": "int"
        },
        {
          "name": "hash",
          "type": "int"
        }
      ],
      "type": "messages.Dialogs"
    },
    {
      "id": 3703276128,
      "method": "messages.getHistory",
      "params": [
        {
          "name": "peer",
          "type": "InputPeer"
        },
        {
          "name": "offset_id",
          "type": "int"
        },
        {
          "name": "offset_date",
          "type": "int"
        },
        {
          "name": "add_offset",
          "type": "int"
        },
        {
          "name": "limit",
          "type": "int"
        },
        {
          "name": "max_id",
          "type": "int"
        },
        {
          "name": "min_id",
          "type": "int"
        },
        {
          "name": "hash",
          "type": "int"
        }
      ],
      "type": "messages.Messages"
    },
    {
      "id": 204812012,
      "method": "messages.search",
      "params": [
        {
          "name": "flags",
          "type": "#"
        },
        {
          "name": "peer",
          "type": "InputPeer"
        },
        {
          "name": "q",
          "type": "string"
        },
        {
          "name": "from_id",
          "type": "flags.0?InputPeer"
        },
        {
          "name": "top_msg_id",
          "type": "flags.1?int"
        },
        {
          "name": "filter",
          "type": "MessagesFilter"
        },
        {
          "name": "min_date",
          "type": "int"
        },
        {
          "name": "max_date",
          "type": "int"
        },
        {
          "name": "offset_id",
          "type": "int"
        },
        {
          "name": "add_offset",
          "type": "int"
        },
        {
          "name": "limit",
          "type": "int"
        },
        {
          "name": "max_id",
          "type": "int"
        },
        {
          "name": "min_id",
          "type": "int"
        },
        {
          "name": "hash",
          "type": "int"
        }
      ],
      "type": "messages.Messages"
    },
    {
      "id": 238054714,
      "method": "messages.readHistory",
      "params": [
        {
          "name": "peer",
          "type": "InputPeer"
        },
        {
          "name": "max_id",
          "type": "int"
        }
      ],
      "type": "messages.AffectedMessages"
    },
    {
      "id": 469850889,
      "method": "messages.deleteHistory",
      "params": [
        {
          "name": "flags",
          "type": "#"
        },
        {
          "name": "just_clear",
          "type": "flags.0?true"
        },
        {
          "name": "revoke",
          "type": "flags.1?true"
        },
        {
          "name": "peer",
          "type": "InputPeer"
        },
        {
          "name": "max_id",
          "type": "int"
        }
      ],
      "type": "messages.AffectedHistory"
    },
    {
      "id": 3851326930,
      "method": "messages.deleteMessages",
      "params": [
        {
          "name": "flags",
          "type": "#"
        },
        {
          "name": "revoke",
          "type": "flags.0?true"
        },
        {
          "name": "id",
          "type": "Vector<int>"
        }
      ],
      "type": "messages.AffectedMessages"
    },
    {
      "id": 94983360,
      "method": "messages.receivedMessages",
      "params": [
        {
          "name": "max_id",
          "type": "int"
        }
      ],
      "type": "Vector<ReceivedNotifyMessage>"
    },
    {
      "id": 1486110434,
      "method": "messages.setTyping",
      "params": [
        {
          "name": "flags",
          "type": "#"
        },
        {
          "name": "peer",
          "type": "InputPeer"
        },
        {
          "name": "top_msg_id",
          "type": "flags.0?int"
        },
        {
          "name": "action",
          "type": "SendMessageAction"
        }
      ],
      "type": "Bool"
    },
    {
      "id": 1376532592,
      "method": "messages.sendMessage",
      "params": [
        {
          "name": "flags",
          "type": "#"
        },
        {
          "name": "no_webpage",
          "type": "flags.1?true"
        },
        {
          "name": "silent",
          "type": "flags.5?true"
        },
        {
          "name": "background",
          "type": "flags.6?true"
        },
        {
          "name": "clear_draft",
          "type": "flags.7?true"
        },
        {
          "name": "peer",
          "type": "InputPeer"
        },
        {
          "name": "reply_to_msg_id",
          "type": "flags.0?int"
        },
        {
          "name": "message",
          "type": "string"
        },
        {
          "name": "random_id",
          "type": "long"
        },
        {
          "name": "reply_markup",
          "type": "flags.2?ReplyMarkup"
        },
        {
          "name": "entities",
          "type": "flags.3?Vector<MessageEntity>"
        },
        {
          "name": "schedule_date",
          "type": "flags.10?int"
        }
      ],
      "type": "Updates"
    },
    {
      "id": 881978281,
      "method": "messages.sendMedia",
      "params": [
        {
          "name": "flags",
          "type": "#"
        },
        {
          "name": "silent",
          "type": "flags.5?true"
        },
        {
          "name": "background",
          "type": "flags.6?true"
        },
        {
          "name": "clear_draft",
          "type": "flags.7?true"
        },
        {
          "name": "peer",
          "type": "InputPeer"
        },
        {
          "name": "reply_to_msg_id",
          "type": "flags.0?int"
        },
        {
          "name": "media",
          "type": "InputMedia"
        },
        {
          "name": "message",
          "type": "string"
        },
        {
          "name": "random_id",
          "type": "long"
        },
        {
          "name": "reply_markup",
          "type": "flags.2?ReplyMarkup"
        },
        {
          "name": "entities",
          "type": "flags.3?Vector<MessageEntity>"
        },
        {
          "name": "schedule_date",
          "type": "flags.10?int"
        }
      ],
      "type": "Updates"
    },
    {
      "id": 3657360910,
      "method": "messages.forwardMessages",
      "params": [
        {
          "name": "flags",
          "type": "#"
        },
        {
          "name": "silent",
          "type": "flags.5?true"
        },
        {
          "name": "background",
          "type": "flags.6?true"
        },
        {
          "name": "with_my_score",
          "type": "flags.8?true"
        },
        {
          "name": "from_peer",
          "type": "InputPeer"
        },
        {
          "name": "id",
          "type": "Vector<int>"
        },
        {
          "name": "random_id",
          "type": "Vector<long>"
        },
        {
          "name": "to_peer",
          "type": "InputPeer"
        },
        {
          "name": "schedule_date",
          "type": "flags.10?int"
        }
      ],
      "type": "Updates"
    },
    {
      "id": 3474297563,
      "method": "messages.reportSpam",
      "params": [
        {
          "name": "peer",
          "type": "InputPeer"
        }
      ],
      "type": "Bool"
    },
    {
      "id": 913498268,
      "method": "messages.getPeerSettings",
      "params": [
        {
          "name": "peer",
          "type": "InputPeer"
        }
      ],
      "type": "PeerSettings"
    },
    {
      "id": 2303961934,
      "method": "messages.report",
      "params": [
        {
          "name": "peer",
          "type": "InputPeer"
        },
        {
          "name": "id",
          "type": "Vector<int>"
        },
        {
          "name": "reason",
          "type": "ReportReason"
        },
        {
          "name": "message",
          "type": "string"
        }
      ],
      "type": "Bool"
    },
    {
      "id": 1013621127,
      "method": "messages.getChats",
      "params": [
        {
          "name": "id",
          "type": "Vector<int>"
        }
      ],
      "type": "messages.Chats"
    },
    {
      "id": 998448230,
      "method": "messages.getFullChat",
      "params": [
        {
          "name": "chat_id",
          "type": "int"
        }
      ],
      "type": "messages.ChatFull"
    },
    {
      "id": 3695519829,
      "method": "messages.editChatTitle",
      "params": [
        {
          "name": "chat_id",
          "type": "int"
        },
        {
          "name": "title",
          "type": "string"
        }
      ],
      "type": "Updates"
    },
    {
      "id": 3394009560,
      "method": "messages.editChatPhoto",
      "params": [
        {
          "name": "chat_id",
          "type": "int"
        },
        {
          "name": "photo",
          "type": "InputChatPhoto"
        }
      ],
      "type": "Updates"
    },
    {
      "id": 4188056073,
      "method": "messages.addChatUser",
      "params": [
        {
          "name": "chat_id",
          "type": "int"
        },
        {
          "name": "user_id",
          "type": "InputUser"
        },
        {
          "name": "fwd_limit",
          "type": "int"
        }
      ],
      "type": "Updates"
    },
    {
      "id": 3308537242,
      "method": "messages.deleteChatUser",
      "params": [
        {
          "name": "flags",
          "type": "#"
        },
        {
          "name": "revoke_history",
          "type": "flags.0?true"
        },
        {
          "name": "chat_id",
          "type": "int"
        },
        {
          "name": "user_id",
          "type": "InputUser"
        }
      ],
      "type": "Updates"
    },
    {
      "id": 164303470,
      "method": "messages.createChat",
      "params": [
        {
          "name": "users",
          "type": "Vector<InputUser>"
        },
        {
          "name": "title",
          "type": "string"
        }
      ],
      "type": "Updates"
    },
    {
      "id": 651135312,
      "method": "messages.getDhConfig",
      "params": [
        {
          "name": "version",
          "type": "int"
        },
        {
          "name": "random_length",
          "type": "int"
        }
      ],
      "type": "messages.DhConfig"
    },
    {
      "id": 4132286275,
      "method": "messages.requestEncryption",
      "params": [
        {
          "name": "user_id",
          "type": "InputUser"
        },
        {
          "name": "random_id",
          "type": "int"
        },
        {
          "name": "g_a",
          "type": "bytes"
        }
      ],
      "type": "EncryptedChat"
    },
    {
      "id": 1035731989,
      "method": "messages.acceptEncryption",
      "params": [
        {
          "name": "peer",
          "type": "InputEncryptedChat"
        },
        {
          "name": "g_b",
          "type": "bytes"
        },
        {
          "name": "key_fingerprint",
          "type": "long"
        }
      ],
      "type": "EncryptedChat"
    },
    {
      "id": 4086541984,
      "method": "messages.discardEncryption",
      "params": [
        {
          "name": "flags",
          "type": "#"
        },
        {
          "name": "delete_history",
          "type": "flags.0?true"
        },
        {
          "name": "chat_id",
          "type": "int"
        }
      ],
      "type": "Bool"
    },
    {
      "id": 2031374829,
      "method": "messages.setEncryptedTyping",
      "params": [
        {
          "name": "peer",
          "type": "InputEncryptedChat"
        },
        {
          "name": "typing",
          "type": "Bool"
        }
      ],
      "type": "Bool"
    },
    {
      "id": 2135648522,
      "method": "messages.readEncryptedHistory",
      "params": [
        {
          "name": "peer",
          "type": "InputEncryptedChat"
        },
        {
          "name": "max_date",
          "type": "int"
        }
      ],
      "type": "Bool"
    },
    {
      "id": 1157265941,
      "method": "messages.sendEncrypted",
      "params": [
        {
          "name": "flags",
          "type": "#"
        },
        {
          "name": "silent",
          "type": "flags.0?true"
        },
        {
          "name": "peer",
          "type": "InputEncryptedChat"
        },
        {
          "name": "random_id",
          "type": "long"
        },
        {
          "name": "data",
          "type": "bytes"
        }
      ],
      "type": "messages.SentEncryptedMessage"
    },
    {
      "id": 1431914525,
      "method": "messages.sendEncryptedFile",
      "params": [
        {
          "name": "flags",
          "type": "#"
        },
        {
          "name": "silent",
          "type": "flags.0?true"
        },
        {
          "name": "peer",
          "type": "InputEncryptedChat"
        },
        {
          "name": "random_id",
          "type": "long"
        },
        {
          "name": "data",
          "type": "bytes"
        },
        {
          "name": "file",
          "type": "InputEncryptedFile"
        }
      ],
      "type": "messages.SentEncryptedMessage"
    },
    {
      "id": 852769188,
      "method": "messages.sendEncryptedService",
      "params": [
        {
          "name": "peer",
          "type": "InputEncryptedChat"
        },
        {
          "name": "random_id",
          "type": "long"
        },
        {
          "name": "data",
          "type": "bytes"
        }
      ],
      "type": "messages.SentEncryptedMessage"
    },
    {
      "id": 1436924774,
      "method": "messages.receivedQueue",
      "params": [
        {
          "name": "max_qts",
          "type": "int"
        }
      ],
      "type": "Vector<long>"
    },
    {
      "id": 1259113487,
      "method": "messages.reportEncryptedSpam",
      "params": [
        {
          "name": "peer",
          "type": "InputEncryptedChat"
        }
      ],
      "type": "Bool"
    },
    {
      "id": 916930423,
      "method": "messages.readMessageContents",
      "params": [
        {
          "name": "id",
          "type": "Vector<int>"
        }
      ],
      "type": "messages.AffectedMessages"
    },
    {
      "id": 71126828,
      "method": "messages.getStickers",
      "params": [
        {
          "name": "emoticon",
          "type": "string"
        },
        {
          "name": "hash",
          "type": "int"
        }
      ],
      "type": "messages.Stickers"
    },
    {
      "id": 479598769,
      "method": "messages.getAllStickers",
      "params": [
        {
          "name": "hash",
          "type": "int"
        }
      ],
      "type": "messages.AllStickers"
    },
    {
      "id": 2338894028,
      "method": "messages.getWebPagePreview",
      "params": [
        {
          "name": "flags",
          "type": "#"
        },
        {
          "name": "message",
          "type": "string"
        },
        {
          "name": "entities",
          "type": "flags.3?Vector<MessageEntity>"
        }
      ],
      "type": "MessageMedia"
    },
    {
      "id": 347716823,
      "method": "messages.exportChatInvite",
      "params": [
        {
          "name": "flags",
          "type": "#"
        },
        {
          "name": "legacy_revoke_permanent",
          "type": "flags.2?true"
        },
        {
          "name": "peer",
          "type": "InputPeer"
        },
        {
          "name": "expire_date",
          "type": "flags.0?int"
        },
        {
          "name": "usage_limit",
          "type": "flags.1?int"
        }
      ],
      "type": "ExportedChatInvite"
    },
    {
      "id": 1051570619,
      "method": "messages.checkChatInvite",
      "params": [
        {
          "name": "hash",
          "type": "string"
        }
      ],
      "type": "ChatInvite"
    },
    {
      "id": 1817183516,
      "method": "messages.importChatInvite",
      "params": [
        {
          "name": "hash",
          "type": "string"
        }
      ],
      "type": "Updates"
    },
    {
      "id": 639215886,
      "method": "messages.getStickerSet",
      "params": [
        {
          "name": "stickerset",
          "type": "InputStickerSet"
        }
      ],
      "type": "messages.StickerSet"
    },
    {
      "id": 3348096096,
      "method": "messages.installStickerSet",
      "params": [
        {
          "name": "stickerset",
          "type": "InputStickerSet"
        },
        {
          "name": "archived",
          "type": "Bool"
        }
      ],
      "type": "messages.StickerSetInstallResult"
    },
    {
      "id": 4184757726,
      "method": "messages.uninstallStickerSet",
      "params": [
        {
          "name": "stickerset",
          "type": "InputStickerSet"
        }
      ],
      "type": "Bool"
    },
    {
      "id": 3873403768,
      "method": "messages.startBot",
      "params": [
        {
          "name": "bot",
          "type": "InputUser"
        },
        {
          "name": "peer",
          "type": "InputPeer"
        },
        {
          "name": "random_id",
          "type": "long"
        },
        {
          "name": "start_param",
          "type": "string"
        }
      ],
      "type": "Updates"
    },
    {
      "id": 1468322785,
      "method": "messages.getMessagesViews",
      "params": [
        {
          "name": "peer",
          "type": "InputPeer"
        },
        {
          "name": "id",
          "type": "Vector<int>"
        },
        {
          "name": "increment",
          "type": "Bool"
        }
      ],
      "type": "messages.MessageViews"
    },
    {
      "id": 2850463534,
      "method": "messages.editChatAdmin",
      "params": [
        {
          "name": "chat_id",
          "type": "int"
        },
        {
          "name": "user_id",
          "type": "InputUser"
        },
        {
          "name": "is_admin",
          "type": "Bool"
        }
      ],
      "type": "Bool"
    },
    {
      "id": 363051235,
      "method": "messages.migrateChat",
      "params": [
        {
          "name": "chat_id",
          "type": "int"
        }
      ],
      "type": "Updates"
    },
    {
      "id": 1271290010,
      "method": "messages.searchGlobal",
      "params": [
        {
          "name": "flags",
          "type": "#"
        },
        {
          "name": "folder_id",
          "type": "flags.0?int"
        },
        {
          "name": "q",
          "type": "string"
        },
        {
          "name": "filter",
          "type": "MessagesFilter"
        },
        {
          "name": "min_date",
          "type": "int"
        },
        {
          "name": "max_date",
          "type": "int"
        },
        {
          "name": "offset_rate",
          "type": "int"
        },
        {
          "name": "offset_peer",
          "type": "InputPeer"
        },
        {
          "name": "offset_id",
          "type": "int"
        },
        {
          "name": "limit",
          "type": "int"
        }
      ],
      "type": "messages.Messages"
    },
    {
      "id": 2016638777,
      "method": "messages.reorderStickerSets",
      "params": [
        {
          "name": "flags",
          "type": "#"
        },
        {
          "name": "masks",
          "type": "flags.0?true"
        },
        {
          "name": "order",
          "type": "Vector<long>"
        }
      ],
      "type": "Bool"
    },
    {
      "id": 864953444,
      "method": "messages.getDocumentByHash",
      "params": [
        {
          "name": "sha256",
          "type": "bytes"
        },
        {
          "name": "size",
          "type": "int"
        },
        {
          "name": "mime_type",
          "type": "string"
        }
      ],
      "type": "Document"
    },
    {
      "id": 2210348370,
      "method": "messages.getSavedGifs",
      "params": [
        {
          "name": "hash",
          "type": "int"
        }
      ],
      "type": "messages.SavedGifs"
    },
    {
      "id": 846868683,
      "method": "messages.saveGif",
      "params": [
        {
          "name": "id",
          "type": "InputDocument"
        },
        {
          "name": "unsave",
          "type": "Bool"
        }
      ],
      "type": "Bool"
    },
    {
      "id": 1364105629,
      "method": "messages.getInlineBotResults",
      "params": [
        {
          "name": "flags",
          "type": "#"
        },
        {
          "name": "bot",
          "type": "InputUser"
        },
        {
          "name": "peer",
          "type": "InputPeer"
        },
        {
          "name": "geo_point",
          "type": "flags.0?InputGeoPoint"
        },
        {
          "name": "query",
          "type": "string"
        },
        {
          "name": "offset",
          "type": "string"
        }
      ],
      "type": "messages.BotResults"
    },
    {
      "id": 3948847622,
      "method": "messages.setInlineBotResults",
      "params": [
        {
          "name": "flags",
          "type": "#"
        },
        {
          "name": "gallery",
          "type": "flags.0?true"
        },
        {
          "name": "private",
          "type": "flags.1?true"
        },
        {
          "name": "query_id",
          "type": "long"
        },
        {
          "name": "results",
          "type": "Vector<InputBotInlineResult>"
        },
        {
          "name": "cache_time",
          "type": "int"
        },
        {
          "name": "next_offset",
          "type": "flags.2?string"
        },
        {
          "name": "switch_pm",
          "type": "flags.3?InlineBotSwitchPM"
        }
      ],
      "type": "Bool"
    },
    {
      "id": 570955184,
      "method": "messages.sendInlineBotResult",
      "params": [
        {
          "name": "flags",
          "type": "#"
        },
        {
          "name": "silent",
          "type": "flags.5?true"
        },
        {
          "name": "background",
          "type": "flags.6?true"
        },
        {
          "name": "clear_draft",
          "type": "flags.7?true"
        },
        {
          "name": "hide_via",
          "type": "flags.11?true"
        },
        {
          "name": "peer",
          "type": "InputPeer"
        },
        {
          "name": "reply_to_msg_id",
          "type": "flags.0?int"
        },
        {
          "name": "random_id",
          "type": "long"
        },
        {
          "name": "query_id",
          "type": "long"
        },
        {
          "name": "id",
          "type": "string"
        },
        {
          "name": "schedule_date",
          "type": "flags.10?int"
        }
      ],
      "type": "Updates"
    },
    {
      "id": 4255550774,
      "method": "messages.getMessageEditData",
      "params": [
        {
          "name": "peer",
          "type": "InputPeer"
        },
        {
          "name": "id",
          "type": "int"
        }
      ],
      "type": "messages.MessageEditData"
    },
    {
      "id": 1224152952,
      "method": "messages.editMessage",
      "params": [
        {
          "name": "flags",
          "type": "#"
        },
        {
          "name": "no_webpage",
          "type": "flags.1?true"
        },
        {
          "name": "peer",
          "type": "InputPeer"
        },
        {
          "name": "id",
          "type": "int"
        },
        {
          "name": "message",
          "type": "flags.11?string"
        },
        {
          "name": "media",
          "type": "flags.14?InputMedia"
        },
        {
          "name": "reply_markup",
          "type": "flags.2?ReplyMarkup"
        },
        {
          "name": "entities",
          "type": "flags.3?Vector<MessageEntity>"
        },
        {
          "name": "schedule_date",
          "type": "flags.15?int"
        }
      ],
      "type": "Updates"
    },
    {
      "id": 2203418042,
      "method": "messages.editInlineBotMessage",
      "params": [
        {
          "name": "flags",
          "type": "#"
        },
        {
          "name": "no_webpage",
          "type": "flags.1?true"
        },
        {
          "name": "id",
          "type": "InputBotInlineMessageID"
        },
        {
          "name": "message",
          "type": "flags.11?string"
        },
        {
          "name": "media",
          "type": "flags.14?InputMedia"
        },
        {
          "name": "reply_markup",
          "type": "flags.2?ReplyMarkup"
        },
        {
          "name": "entities",
          "type": "flags.3?Vector<MessageEntity>"
        }
      ],
      "type": "Bool"
    },
    {
      "id": 2470627847,
      "method": "messages.getBotCallbackAnswer",
      "params": [
        {
          "name": "flags",
          "type": "#"
        },
        {
          "name": "game",
          "type": "flags.1?true"
        },
        {
          "name": "peer",
          "type": "InputPeer"
        },
        {
          "name": "msg_id",
          "type": "int"
        },
        {
          "name": "data",
          "type": "flags.0?bytes"
        },
        {
          "name": "password",
          "type": "flags.2?InputCheckPasswordSRP"
        }
      ],
      "type": "messages.BotCallbackAnswer"
    },
    {
      "id": 3582923530,
      "method": "messages.setBotCallbackAnswer",
      "params": [
        {
          "name": "flags",
          "type": "#"
        },
        {
          "name": "alert",
          "type": "flags.1?true"
        },
        {
          "name": "query_id",
          "type": "long"
        },
        {
          "name": "message",
          "type": "flags.0?string"
        },
        {
          "name": "url",
          "type": "flags.2?string"
        },
        {
          "name": "cache_time",
          "type": "int"
        }
      ],
      "type": "Bool"
    },
    {
      "id": 3832593661,
      "method": "messages.getPeerDialogs",
      "params": [
        {
          "name": "peers",
          "type": "Vector<InputDialogPeer>"
        }
      ],
      "type": "messages.PeerDialogs"
    },
    {
      "id": 3157909835,
      "method": "messages.saveDraft",
      "params": [
        {
          "name": "flags",
          "type": "#"
        },
        {
          "name": "no_webpage",
          "type": "flags.1?true"
        },
        {
          "name": "reply_to_msg_id",
          "type": "flags.0?int"
        },
        {
          "name": "peer",
          "type": "InputPeer"
        },
        {
          "name": "message",
          "type": "string"
        },
        {
          "name": "entities",
          "type": "flags.3?Vector<MessageEntity>"
        }
      ],
      "type": "Bool"
    },
    {
      "id": 1782549861,
      "method": "messages.getAllDrafts",
      "params": [],
      "type": "Updates"
    },
    {
      "id": 766298703,
      "method": "messages.getFeaturedStickers",
      "params": [
        {
          "name": "hash",
          "type": "int"
        }
      ],
      "type": "messages.FeaturedStickers"
    },
    {
      "id": 1527873830,
      "method": "messages.readFeaturedStickers",
      "params": [
        {
          "name": "id",
          "type": "Vector<long>"
        }
      ],
      "type": "Bool"
    },
    {
      "id": 1587647177,
      "method": "messages.getRecentStickers",
      "params": [
        {
          "name": "flags",
          "type": "#"
        },
        {
          "name": "attached",
          "type": "flags.0?true"
        },
        {
          "name": "hash",
          "type": "int"
        }
      ],
      "type": "messages.RecentStickers"
    },
    {
      "id": 958863608,
      "method": "messages.saveRecentSticker",
      "params": [
        {
          "name": "flags",
          "type": "#"
        },
        {
          "name": "attached",
          "type": "flags.0?true"
        },
        {
          "name": "id",
          "type": "InputDocument"
        },
        {
          "name": "unsave",
          "type": "Bool"
        }
      ],
      "type": "Bool"
    },
    {
      "id": 2308530221,
      "method": "messages.clearRecentStickers",
      "params": [
        {
          "name": "flags",
          "type": "#"
        },
        {
          "name": "attached",
          "type": "flags.0?true"
        }
      ],
      "type": "Bool"
    },
    {
      "id": 1475442322,
      "method": "messages.getArchivedStickers",
      "params": [
        {
          "name": "flags",
          "type": "#"
        },
        {
          "name": "masks",
          "type": "flags.0?true"
        },
        {
          "name": "offset_id",
          "type": "long"
        },
        {
          "name": "limit",
          "type": "int"
        }
      ],
      "type": "messages.ArchivedStickers"
    },
    {
      "id": 1706608543,
      "method": "messages.getMaskStickers",
      "params": [
        {
          "name": "hash",
          "type": "int"
        }
      ],
      "type": "messages.AllStickers"
    },
    {
      "id": 3428542412,
      "method": "messages.getAttachedStickers",
      "params": [
        {
          "name": "media",
          "type": "InputStickeredMedia"
        }
      ],
      "type": "Vector<StickerSetCovered>"
    },
    {
      "id": 2398678208,
      "method": "messages.setGameScore",
      "params": [
        {
          "name": "flags",
          "type": "#"
        },
        {
          "name": "edit_message",
          "type": "flags.0?true"
        },
        {
          "name": "force",
          "type": "flags.1?true"
        },
        {
          "name": "peer",
          "type": "InputPeer"
        },
        {
          "name": "id",
          "type": "int"
        },
        {
          "name": "user_id",
          "type": "InputUser"
        },
        {
          "name": "score",
          "type": "int"
        }
      ],
      "type": "Updates"
    },
    {
      "id": 363700068,
      "method": "messages.setInlineGameScore",
      "params": [
        {
          "name": "flags",
          "type": "#"
        },
        {
          "name": "edit_message",
          "type": "flags.0?true"
        },
        {
          "name": "force",
          "type": "flags.1?true"
        },
        {
          "name": "id",
          "type": "InputBotInlineMessageID"
        },
        {
          "name": "user_id",
          "type": "InputUser"
        },
        {
          "name": "score",
          "type": "int"
        }
      ],
      "type": "Bool"
    },
    {
      "id": 3894568093,
      "method": "messages.getGameHighScores",
      "params": [
        {
          "name": "peer",
          "type": "InputPeer"
        },
        {
          "name": "id",
          "type": "int"
        },
        {
          "name": "user_id",
          "type": "InputUser"
        }
      ],
      "type": "messages.HighScores"
    },
    {
      "id": 258170395,
      "method": "messages.getInlineGameHighScores",
      "params": [
        {
          "name": "id",
          "type": "InputBotInlineMessageID"
        },
        {
          "name": "user_id",
          "type": "InputUser"
        }
      ],
      "type": "messages.HighScores"
    },
    {
      "id": 218777796,
      "method": "messages.getCommonChats",
      "params": [
        {
          "name": "user_id",
          "type": "InputUser"
        },
        {
          "name": "max_id",
          "type": "int"
        },
        {
          "name": "limit",
          "type": "int"
        }
      ],
      "type": "messages.Chats"
    },
    {
      "id": 3953659888,
      "method": "messages.getAllChats",
      "params": [
        {
          "name": "except_ids",
          "type": "Vector<int>"
        }
      ],
      "type": "messages.Chats"
    },
    {
      "id": 852135825,
      "method": "messages.getWebPage",
      "params": [
        {
          "name": "url",
          "type": "string"
        },
        {
          "name": "hash",
          "type": "int"
        }
      ],
      "type": "WebPage"
    },
    {
      "id": 2805064279,
      "method": "messages.toggleDialogPin",
      "params": [
        {
          "name": "flags",
          "type": "#"
        },
        {
          "name": "pinned",
          "type": "flags.0?true"
        },
        {
          "name": "peer",
          "type": "InputDialogPeer"
        }
      ],
      "type": "Bool"
    },
    {
      "id": 991616823,
      "method": "messages.reorderPinnedDialogs",
      "params": [
        {
          "name": "flags",
          "type": "#"
        },
        {
          "name": "force",
          "type": "flags.0?true"
        },
        {
          "name": "folder_id",
          "type": "int"
        },
        {
          "name": "order",
          "type": "Vector<InputDialogPeer>"
        }
      ],
      "type": "Bool"
    },
    {
      "id": 3602468338,
      "method": "messages.getPinnedDialogs",
      "params": [
        {
          "name": "folder_id",
          "type": "int"
        }
      ],
      "type": "messages.PeerDialogs"
    },
    {
      "id": 3858133754,
      "method": "messages.setBotShippingResults",
      "params": [
        {
          "name": "flags",
          "type": "#"
        },
        {
          "name": "query_id",
          "type": "long"
        },
        {
          "name": "error",
          "type": "flags.0?string"
        },
        {
          "name": "shipping_options",
          "type": "flags.1?Vector<ShippingOption>"
        }
      ],
      "type": "Bool"
    },
    {
      "id": 163765653,
      "method": "messages.setBotPrecheckoutResults",
      "params": [
        {
          "name": "flags",
          "type": "#"
        },
        {
          "name": "success",
          "type": "flags.1?true"
        },
        {
          "name": "query_id",
          "type": "long"
        },
        {
          "name": "error",
          "type": "flags.0?string"
        }
      ],
      "type": "Bool"
    },
    {
      "id": 1369162417,
      "method": "messages.uploadMedia",
      "params": [
        {
          "name": "peer",
          "type": "InputPeer"
        },
        {
          "name": "media",
          "type": "InputMedia"
        }
      ],
      "type": "MessageMedia"
    },
    {
      "id": 3380473888,
      "method": "messages.sendScreenshotNotification",
      "params": [
        {
          "name": "peer",
          "type": "InputPeer"
        },
        {
          "name": "reply_to_msg_id",
          "type": "int"
        },
        {
          "name": "random_id",
          "type": "long"
        }
      ],
      "type": "Updates"
    },
    {
      "id": 567151374,
      "method": "messages.getFavedStickers",
      "params": [
        {
          "name": "hash",
          "type": "int"
        }
      ],
      "type": "messages.FavedStickers"
    },
    {
      "id": 3120547163,
      "method": "messages.faveSticker",
      "params": [
        {
          "name": "id",
          "type": "InputDocument"
        },
        {
          "name": "unfave",
          "type": "Bool"
        }
      ],
      "type": "Bool"
    },
    {
      "id": 1180140658,
      "method": "messages.getUnreadMentions",
      "params": [
        {
          "name": "peer",
          "type": "InputPeer"
        },
        {
          "name": "offset_id",
          "type": "int"
        },
        {
          "name": "add_offset",
          "type": "int"
        },
        {
          "name": "limit",
          "type": "int"
        },
        {
          "name": "max_id",
          "type": "int"
        },
        {
          "name": "min_id",
          "type": "int"
        }
      ],
      "type": "messages.Messages"
    },
    {
      "id": 251759059,
      "method": "messages.readMentions",
      "params": [
        {
          "name": "peer",
          "type": "InputPeer"
        }
      ],
      "type": "messages.AffectedHistory"
    },
    {
      "id": 3150207753,
      "method": "messages.getRecentLocations",
      "params": [
        {
          "name": "peer",
          "type": "InputPeer"
        },
        {
          "name": "limit",
          "type": "int"
        },
        {
          "name": "hash",
          "type": "int"
        }
      ],
      "type": "messages.Messages"
    },
    {
      "id": 3422621899,
      "method": "messages.sendMultiMedia",
      "params": [
        {
          "name": "flags",
          "type": "#"
        },
        {
          "name": "silent",
          "type": "flags.5?true"
        },
        {
          "name": "background",
          "type": "flags.6?true"
        },
        {
          "name": "clear_draft",
          "type": "flags.7?true"
        },
        {
          "name": "peer",
          "type": "InputPeer"
        },
        {
          "name": "reply_to_msg_id",
          "type": "flags.0?int"
        },
        {
          "name": "multi_media",
          "type": "Vector<InputSingleMedia>"
        },
        {
          "name": "schedule_date",
          "type": "flags.10?int"
        }
      ],
      "type": "Updates"
    },
    {
      "id": 1347929239,
      "method": "messages.uploadEncryptedFile",
      "params": [
        {
          "name": "peer",
          "type": "InputEncryptedChat"
        },
        {
          "name": "file",
          "type": "InputEncryptedFile"
        }
      ],
      "type": "EncryptedFile"
    },
    {
      "id": 3266826379,
      "method": "messages.searchStickerSets",
      "params": [
        {
          "name": "flags",
          "type": "#"
        },
        {
          "name": "exclude_featured",
          "type": "flags.0?true"
        },
        {
          "name": "q",
          "type": "string"
        },
        {
          "name": "hash",
          "type": "int"
        }
      ],
      "type": "messages.FoundStickerSets"
    },
    {
      "id": 486505992,
      "method": "messages.getSplitRanges",
      "params": [],
      "type": "Vector<MessageRange>"
    },
    {
      "id": 3263617423,
      "method": "messages.markDialogUnread",
      "params": [
        {
          "name": "flags",
          "type": "#"
        },
        {
          "name": "unread",
          "type": "flags.0?true"
        },
        {
          "name": "peer",
          "type": "InputDialogPeer"
        }
      ],
      "type": "Bool"
    },
    {
      "id": 585256482,
      "method": "messages.getDialogUnreadMarks",
      "params": [],
      "type": "Vector<DialogPeer>"
    },
    {
      "id": 2119757468,
      "method": "messages.clearAllDrafts",
      "params": [],
      "type": "Bool"
    },
    {
      "id": 3534419948,
      "method": "messages.updatePinnedMessage",
      "params": [
        {
          "name": "flags",
          "type": "#"
        },
        {
          "name": "silent",
          "type": "flags.0?true"
        },
        {
          "name": "unpin",
          "type": "flags.1?true"
        },
        {
          "name": "pm_oneside",
          "type": "flags.2?true"
        },
        {
          "name": "peer",
          "type": "InputPeer"
        },
        {
          "name": "id",
          "type": "int"
        }
      ],
      "type": "Updates"
    },
    {
      "id": 283795844,
      "method": "messages.sendVote",
      "params": [
        {
          "name": "peer",
          "type": "InputPeer"
        },
        {
          "name": "msg_id",
          "type": "int"
        },
        {
          "name": "options",
          "type": "Vector<bytes>"
        }
      ],
      "type": "Updates"
    },
    {
      "id": 1941660731,
      "method": "messages.getPollResults",
      "params": [
        {
          "name": "peer",
          "type": "InputPeer"
        },
        {
          "name": "msg_id",
          "type": "int"
        }
      ],
      "type": "Updates"
    },
    {
      "id": 1848369232,
      "method": "messages.getOnlines",
      "params": [
        {
          "name": "peer",
          "type": "InputPeer"
        }
      ],
      "type": "ChatOnlines"
    },
    {
      "id": 2167155430,
      "method": "messages.getStatsURL",
      "params": [
        {
          "name": "flags",
          "type": "#"
        },
        {
          "name": "dark",
          "type": "flags.0?true"
        },
        {
          "name": "peer",
          "type": "InputPeer"
        },
        {
          "name": "params",
          "type": "string"
        }
      ],
      "type": "StatsURL"
    },
    {
      "id": 3740665751,
      "method": "messages.editChatAbout",
      "params": [
        {
          "name": "peer",
          "type": "InputPeer"
        },
        {
          "name": "about",
          "type": "string"
        }
      ],
      "type": "Bool"
    },
    {
      "id": 2777049921,
      "method": "messages.editChatDefaultBannedRights",
      "params": [
        {
          "name": "peer",
          "type": "InputPeer"
        },
        {
          "name": "banned_rights",
          "type": "ChatBannedRights"
        }
      ],
      "type": "Updates"
    },
    {
      "id": 899735650,
      "method": "messages.getEmojiKeywords",
      "params": [
        {
          "name": "lang_code",
          "type": "string"
        }
      ],
      "type": "EmojiKeywordsDifference"
    },
    {
      "id": 352892591,
      "method": "messages.getEmojiKeywordsDifference",
      "params": [
        {
          "name": "lang_code",
          "type": "string"
        },
        {
          "name": "from_version",
          "type": "int"
        }
      ],
      "type": "EmojiKeywordsDifference"
    },
    {
      "id": 1318675378,
      "method": "messages.getEmojiKeywordsLanguages",
      "params": [
        {
          "name": "lang_codes",
          "type": "Vector<string>"
        }
      ],
      "type": "Vector<EmojiLanguage>"
    },
    {
      "id": 3585149990,
      "method": "messages.getEmojiURL",
      "params": [
        {
          "name": "lang_code",
          "type": "string"
        }
      ],
      "type": "EmojiURL"
    },
    {
      "id": 1932455680,
      "method": "messages.getSearchCounters",
      "params": [
        {
          "name": "peer",
          "type": "InputPeer"
        },
        {
          "name": "filters",
          "type": "Vector<MessagesFilter>"
        }
      ],
      "type": "Vector<messages.SearchCounter>"
    },
    {
      "id": 428848198,
      "method": "messages.requestUrlAuth",
      "params": [
        {
          "name": "flags",
          "type": "#"
        },
        {
          "name": "peer",
          "type": "flags.1?InputPeer"
        },
        {
          "name": "msg_id",
          "type": "flags.1?int"
        },
        {
          "name": "button_id",
          "type": "flags.1?int"
        },
        {
          "name": "url",
          "type": "flags.2?string"
        }
      ],
      "type": "UrlAuthResult"
    },
    {
      "id": 2972479781,
      "method": "messages.acceptUrlAuth",
      "params": [
        {
          "name": "flags",
          "type": "#"
        },
        {
          "name": "write_allowed",
          "type": "flags.0?true"
        },
        {
          "name": "peer",
          "type": "flags.1?InputPeer"
        },
        {
          "name": "msg_id",
          "type": "flags.1?int"
        },
        {
          "name": "button_id",
          "type": "flags.1?int"
        },
        {
          "name": "url",
          "type": "flags.2?string"
        }
      ],
      "type": "UrlAuthResult"
    },
    {
      "id": 1336717624,
      "method": "messages.hidePeerSettingsBar",
      "params": [
        {
          "name": "peer",
          "type": "InputPeer"
        }
      ],
      "type": "Bool"
    },
    {
      "id": 3804391515,
      "method": "messages.getScheduledHistory",
      "params": [
        {
          "name": "peer",
          "type": "InputPeer"
        },
        {
          "name": "hash",
          "type": "int"
        }
      ],
      "type": "messages.Messages"
    },
    {
      "id": 3183150180,
      "method": "messages.getScheduledMessages",
      "params": [
        {
          "name": "peer",
          "type": "InputPeer"
        },
        {
          "name": "id",
          "type": "Vector<int>"
        }
      ],
      "type": "messages.Messages"
    },
    {
      "id": 3174597898,
      "method": "messages.sendScheduledMessages",
      "params": [
        {
          "name": "peer",
          "type": "InputPeer"
        },
        {
          "name": "id",
          "type": "Vector<int>"
        }
      ],
      "type": "Updates"
    },
    {
      "id": 1504586518,
      "method": "messages.deleteScheduledMessages",
      "params": [
        {
          "name": "peer",
          "type": "InputPeer"
        },
        {
          "name": "id",
          "type": "Vector<int>"
        }
      ],
      "type": "Updates"
    },
    {
      "id": 3094231054,
      "method": "messages.getPollVotes",
      "params": [
        {
          "name": "flags",
          "type": "#"
        },
        {
          "name": "peer",
          "type": "InputPeer"
        },
        {
          "name": "id",
          "type": "int"
        },
        {
          "name": "option",
          "type": "flags.0?bytes"
        },
        {
          "name": "offset",
          "type": "flags.1?string"
        },
        {
          "name": "limit",
          "type": "int"
        }
      ],
      "type": "messages.VotesList"
    },
    {
      "id": 3037016042,
      "method": "messages.toggleStickerSets",
      "params": [
        {
          "name": "flags",
          "type": "#"
        },
        {
          "name": "uninstall",
          "type": "flags.0?true"
        },
        {
          "name": "archive",
          "type": "flags.1?true"
        },
        {
          "name": "unarchive",
          "type": "flags.2?true"
        },
        {
          "name": "stickersets",
          "type": "Vector<InputStickerSet>"
        }
      ],
      "type": "Bool"
    },
    {
      "id": 4053719405,
      "method": "messages.getDialogFilters",
      "params": [],
      "type": "Vector<DialogFilter>"
    },
    {
      "id": 2728186924,
      "method": "messages.getSuggestedDialogFilters",
      "params": [],
      "type": "Vector<DialogFilterSuggested>"
    },
    {
      "id": 450142282,
      "method": "messages.updateDialogFilter",
      "params": [
        {
          "name": "flags",
          "type": "#"
        },
        {
          "name": "id",
          "type": "int"
        },
        {
          "name": "filter",
          "type": "flags.0?DialogFilter"
        }
      ],
      "type": "Bool"
    },
    {
      "id": 3311649252,
      "method": "messages.updateDialogFiltersOrder",
      "params": [
        {
          "name": "order",
          "type": "Vector<int>"
        }
      ],
      "type": "Bool"
    },
    {
      "id": 1608974939,
      "method": "messages.getOldFeaturedStickers",
      "params": [
        {
          "name": "offset",
          "type": "int"
        },
        {
          "name": "limit",
          "type": "int"
        },
        {
          "name": "hash",
          "type": "int"
        }
      ],
      "type": "messages.FeaturedStickers"
    },
    {
      "id": 615875002,
      "method": "messages.getReplies",
      "params": [
        {
          "name": "peer",
          "type": "InputPeer"
        },
        {
          "name": "msg_id",
          "type": "int"
        },
        {
          "name": "offset_id",
          "type": "int"
        },
        {
          "name": "offset_date",
          "type": "int"
        },
        {
          "name": "add_offset",
          "type": "int"
        },
        {
          "name": "limit",
          "type": "int"
        },
        {
          "name": "max_id",
          "type": "int"
        },
        {
          "name": "min_id",
          "type": "int"
        },
        {
          "name": "hash",
          "type": "int"
        }
      ],
      "type": "messages.Messages"
    },
    {
      "id": 1147761405,
      "method": "messages.getDiscussionMessage",
      "params": [
        {
          "name": "peer",
          "type": "InputPeer"
        },
        {
          "name": "msg_id",
          "type": "int"
        }
      ],
      "type": "messages.DiscussionMessage"
    },
    {
      "id": 4147227124,
      "method": "messages.readDiscussion",
      "params": [
        {
          "name": "peer",
          "type": "InputPeer"
        },
        {
          "name": "msg_id",
          "type": "int"
        },
        {
          "name": "read_max_id",
          "type": "int"
        }
      ],
      "type": "Bool"
    },
    {
      "id": 4029004939,
      "method": "messages.unpinAllMessages",
      "params": [
        {
          "name": "peer",
          "type": "InputPeer"
        }
      ],
      "type": "messages.AffectedHistory"
    },
    {
      "id": 2200206609,
      "method": "messages.deleteChat",
      "params": [
        {
          "name": "chat_id",
          "type": "int"
        }
      ],
      "type": "Bool"
    },
    {
      "id": 4190888969,
      "method": "messages.deletePhoneCallHistory",
      "params": [
        {
          "name": "flags",
          "type": "#"
        },
        {
          "name": "revoke",
          "type": "flags.0?true"
        }
      ],
      "type": "messages.AffectedFoundMessages"
    },
    {
      "id": 1140726259,
      "method": "messages.checkHistoryImport",
      "params": [
        {
          "name": "import_head",
          "type": "string"
        }
      ],
      "type": "messages.HistoryImportParsed"
    },
    {
      "id": 873008187,
      "method": "messages.initHistoryImport",
      "params": [
        {
          "name": "peer",
          "type": "InputPeer"
        },
        {
          "name": "file",
          "type": "InputFile"
        },
        {
          "name": "media_count",
          "type": "int"
        }
      ],
      "type": "messages.HistoryImport"
    },
    {
      "id": 713433234,
      "method": "messages.uploadImportedMedia",
      "params": [
        {
          "name": "peer",
          "type": "InputPeer"
        },
        {
          "name": "import_id",
          "type": "long"
        },
        {
          "name": "file_name",
          "type": "string"
        },
        {
          "name": "media",
          "type": "InputMedia"
        }
      ],
      "type": "MessageMedia"
    },
    {
      "id": 3023958852,
      "method": "messages.startHistoryImport",
      "params": [
        {
          "name": "peer",
          "type": "InputPeer"
        },
        {
          "name": "import_id",
          "type": "long"
        }
      ],
      "type": "Bool"
    },
    {
      "id": 2729812982,
      "method": "messages.getExportedChatInvites",
      "params": [
        {
          "name": "flags",
          "type": "#"
        },
        {
          "name": "revoked",
          "type": "flags.3?true"
        },
        {
          "name": "peer",
          "type": "InputPeer"
        },
        {
          "name": "admin_id",
          "type": "InputUser"
        },
        {
          "name": "offset_date",
          "type": "flags.2?int"
        },
        {
          "name": "offset_link",
          "type": "flags.2?string"
        },
        {
          "name": "limit",
          "type": "int"
        }
      ],
      "type": "messages.ExportedChatInvites"
    },
    {
      "id": 1937010524,
      "method": "messages.getExportedChatInvite",
      "params": [
        {
          "name": "peer",
          "type": "InputPeer"
        },
        {
          "name": "link",
          "type": "string"
        }
      ],
      "type": "messages.ExportedChatInvite"
    },
    {
      "id": 48562110,
      "method": "messages.editExportedChatInvite",
      "params": [
        {
          "name": "flags",
          "type": "#"
        },
        {
          "name": "revoked",
          "type": "flags.2?true"
        },
        {
          "name": "peer",
          "type": "InputPeer"
        },
        {
          "name": "link",
          "type": "string"
        },
        {
          "name": "expire_date",
          "type": "flags.0?int"
        },
        {
          "name": "usage_limit",
          "type": "flags.1?int"
        }
      ],
      "type": "messages.ExportedChatInvite"
    },
    {
      "id": 1452833749,
      "method": "messages.deleteRevokedExportedChatInvites",
      "params": [
        {
          "name": "peer",
          "type": "InputPeer"
        },
        {
          "name": "admin_id",
          "type": "InputUser"
        }
      ],
      "type": "Bool"
    },
    {
      "id": 3563365419,
      "method": "messages.deleteExportedChatInvite",
      "params": [
        {
          "name": "peer",
          "type": "InputPeer"
        },
        {
          "name": "link",
          "type": "string"
        }
      ],
      "type": "Bool"
    },
    {
      "id": 958457583,
      "method": "messages.getAdminsWithInvites",
      "params": [
        {
          "name": "peer",
          "type": "InputPeer"
        }
      ],
      "type": "messages.ChatAdminsWithInvites"
    },
    {
      "id": 654013065,
      "method": "messages.getChatInviteImporters",
      "params": [
        {
          "name": "peer",
          "type": "InputPeer"
        },
        {
          "name": "link",
          "type": "string"
        },
        {
          "name": "offset_date",
          "type": "int"
        },
        {
          "name": "offset_user",
          "type": "InputUser"
        },
        {
          "name": "limit",
          "type": "int"
        }
      ],
      "type": "messages.ChatInviteImporters"
    },
    {
      "id": 3087949796,
      "method": "messages.setHistoryTTL",
      "params": [
        {
          "name": "peer",
          "type": "InputPeer"
        },
        {
          "name": "period",
          "type": "int"
        }
      ],
      "type": "Updates"
    },
    {
      "id": 1573261059,
      "method": "messages.checkHistoryImportPeer",
      "params": [
        {
          "name": "peer",
          "type": "InputPeer"
        }
      ],
      "type": "messages.CheckedHistoryImportPeer"
    },
    {
      "id": 3990128682,
      "method": "updates.getState",
      "params": [],
      "type": "updates.State"
    },
    {
      "id": 630429265,
      "method": "updates.getDifference",
      "params": [
        {
          "name": "flags",
          "type": "#"
        },
        {
          "name": "pts",
          "type": "int"
        },
        {
          "name": "pts_total_limit",
          "type": "flags.0?int"
        },
        {
          "name": "date",
          "type": "int"
        },
        {
          "name": "qts",
          "type": "int"
        }
      ],
      "type": "updates.Difference"
    },
    {
      "id": 51854712,
      "method": "updates.getChannelDifference",
      "params": [
        {
          "name": "flags",
          "type": "#"
        },
        {
          "name": "force",
          "type": "flags.0?true"
        },
        {
          "name": "channel",
          "type": "InputChannel"
        },
        {
          "name": "filter",
          "type": "ChannelMessagesFilter"
        },
        {
          "name": "pts",
          "type": "int"
        },
        {
          "name": "limit",
          "type": "int"
        }
      ],
      "type": "updates.ChannelDifference"
    },
    {
      "id": 1926525996,
      "method": "photos.updateProfilePhoto",
      "params": [
        {
          "name": "id",
          "type": "InputPhoto"
        }
      ],
      "type": "photos.Photo"
    },
    {
      "id": 2314407785,
      "method": "photos.uploadProfilePhoto",
      "params": [
        {
          "name": "flags",
          "type": "#"
        },
        {
          "name": "file",
          "type": "flags.0?InputFile"
        },
        {
          "name": "video",
          "type": "flags.1?InputFile"
        },
        {
          "name": "video_start_ts",
          "type": "flags.2?double"
        }
      ],
      "type": "photos.Photo"
    },
    {
      "id": 2278522671,
      "method": "photos.deletePhotos",
      "params": [
        {
          "name": "id",
          "type": "Vector<InputPhoto>"
        }
      ],
      "type": "Vector<long>"
    },
    {
      "id": 2446144168,
      "method": "photos.getUserPhotos",
      "params": [
        {
          "name": "user_id",
          "type": "InputUser"
        },
        {
          "name": "offset",
          "type": "int"
        },
        {
          "name": "max_id",
          "type": "long"
        },
        {
          "name": "limit",
          "type": "int"
        }
      ],
      "type": "photos.Photos"
    },
    {
      "id": 3003426337,
      "method": "upload.saveFilePart",
      "params": [
        {
          "name": "file_id",
          "type": "long"
        },
        {
          "name": "file_part",
          "type": "int"
        },
        {
          "name": "bytes",
          "type": "bytes"
        }
      ],
      "type": "Bool"
    },
    {
      "id": 2975505148,
      "method": "upload.getFile",
      "params": [
        {
          "name": "flags",
          "type": "#"
        },
        {
          "name": "precise",
          "type": "flags.0?true"
        },
        {
          "name": "cdn_supported",
          "type": "flags.1?true"
        },
        {
          "name": "location",
          "type": "InputFileLocation"
        },
        {
          "name": "offset",
          "type": "int"
        },
        {
          "name": "limit",
          "type": "int"
        }
      ],
      "type": "upload.File"
    },
    {
      "id": 3732629309,
      "method": "upload.saveBigFilePart",
      "params": [
        {
          "name": "file_id",
          "type": "long"
        },
        {
          "name": "file_part",
          "type": "int"
        },
        {
          "name": "file_total_parts",
          "type": "int"
        },
        {
          "name": "bytes",
          "type": "bytes"
        }
      ],
      "type": "Bool"
    },
    {
      "id": 619086221,
      "method": "upload.getWebFile",
      "params": [
        {
          "name": "location",
          "type": "InputWebFileLocation"
        },
        {
          "name": "offset",
          "type": "int"
        },
        {
          "name": "limit",
          "type": "int"
        }
      ],
      "type": "upload.WebFile"
    },
    {
      "id": 536919235,
      "method": "upload.getCdnFile",
      "params": [
        {
          "name": "file_token",
          "type": "bytes"
        },
        {
          "name": "offset",
          "type": "int"
        },
        {
          "name": "limit",
          "type": "int"
        }
      ],
      "type": "upload.CdnFile"
    },
    {
      "id": 2603046056,
      "method": "upload.reuploadCdnFile",
      "params": [
        {
          "name": "file_token",
          "type": "bytes"
        },
        {
          "name": "request_token",
          "type": "bytes"
        }
      ],
      "type": "Vector<FileHash>"
    },
    {
      "id": 1302676017,
      "method": "upload.getCdnFileHashes",
      "params": [
        {
          "name": "file_token",
          "type": "bytes"
        },
        {
          "name": "offset",
          "type": "int"
        }
      ],
      "type": "Vector<FileHash>"
    },
    {
      "id": 3338819889,
      "method": "upload.getFileHashes",
      "params": [
        {
          "name": "location",
          "type": "InputFileLocation"
        },
        {
          "name": "offset",
          "type": "int"
        }
      ],
      "type": "Vector<FileHash>"
    },
    {
      "id": 3304659051,
      "method": "help.getConfig",
      "params": [],
      "type": "Config"
    },
    {
      "id": 531836966,
      "method": "help.getNearestDc",
      "params": [],
      "type": "NearestDc"
    },
    {
      "id": 1378703997,
      "method": "help.getAppUpdate",
      "params": [
        {
          "name": "source",
          "type": "string"
        }
      ],
      "type": "help.AppUpdate"
    },
    {
      "id": 1295590211,
      "method": "help.getInviteText",
      "params": [],
      "type": "help.InviteText"
    },
    {
      "id": 2631862477,
      "method": "help.getSupport",
      "params": [],
      "type": "help.Support"
    },
    {
      "id": 2417028975,
      "method": "help.getAppChangelog",
      "params": [
        {
          "name": "prev_app_version",
          "type": "string"
        }
      ],
      "type": "Updates"
    },
    {
      "id": 3961704397,
      "method": "help.setBotUpdatesStatus",
      "params": [
        {
          "name": "pending_updates_count",
          "type": "int"
        },
        {
          "name": "message",
          "type": "string"
        }
      ],
      "type": "Bool"
    },
    {
      "id": 1375900482,
      "method": "help.getCdnConfig",
      "params": [],
      "type": "CdnConfig"
    },
    {
      "id": 1036054804,
      "method": "help.getRecentMeUrls",
      "params": [
        {
          "name": "referer",
          "type": "string"
        }
      ],
      "type": "help.RecentMeUrls"
    },
    {
      "id": 749019089,
      "method": "help.getTermsOfServiceUpdate",
      "params": [],
      "type": "help.TermsOfServiceUpdate"
    },
    {
      "id": 4000511898,
      "method": "help.acceptTermsOfService",
      "params": [
        {
          "name": "id",
          "type": "DataJSON"
        }
      ],
      "type": "Bool"
    },
    {
      "id": 1072547679,
      "method": "help.getDeepLinkInfo",
      "params": [
        {
          "name": "path",
          "type": "string"
        }
      ],
      "type": "help.DeepLinkInfo"
    },
    {
      "id": 2559656208,
      "method": "help.getAppConfig",
      "params": [],
      "type": "JSONValue"
    },
    {
      "id": 1862465352,
      "method": "help.saveAppLog",
      "params": [
        {
          "name": "events",
          "type": "Vector<InputAppEvent>"
        }
      ],
      "type": "Bool"
    },
    {
      "id": 3328290056,
      "method": "help.getPassportConfig",
      "params": [
        {
          "name": "hash",
          "type": "int"
        }
      ],
      "type": "help.PassportConfig"
    },
    {
      "id": 3546343212,
      "method": "help.getSupportName",
      "params": [],
      "type": "help.SupportName"
    },
    {
      "id": 59377875,
      "method": "help.getUserInfo",
      "params": [
        {
          "name": "user_id",
          "type": "InputUser"
        }
      ],
      "type": "help.UserInfo"
    },
    {
      "id": 1723407216,
      "method": "help.editUserInfo",
      "params": [
        {
          "name": "user_id",
          "type": "InputUser"
        },
        {
          "name": "message",
          "type": "string"
        },
        {
          "name": "entities",
          "type": "Vector<MessageEntity>"
        }
      ],
      "type": "help.UserInfo"
    },
    {
      "id": 3231151137,
      "method": "help.getPromoData",
      "params": [],
      "type": "help.PromoData"
    },
    {
      "id": 505748629,
      "method": "help.hidePromoData",
      "params": [
        {
          "name": "peer",
          "type": "InputPeer"
        }
      ],
      "type": "Bool"
    },
    {
      "id": 4111317665,
      "method": "help.dismissSuggestion",
      "params": [
        {
          "name": "peer",
          "type": "InputPeer"
        },
        {
          "name": "suggestion",
          "type": "string"
        }
      ],
      "type": "Bool"
    },
    {
      "id": 1935116200,
      "method": "help.getCountriesList",
      "params": [
        {
          "name": "lang_code",
          "type": "string"
        },
        {
          "name": "hash",
          "type": "int"
        }
      ],
      "type": "help.CountriesList"
    },
    {
      "id": 3423619383,
      "method": "channels.readHistory",
      "params": [
        {
          "name": "channel",
          "type": "InputChannel"
        },
        {
          "name": "max_id",
          "type": "int"
        }
      ],
      "type": "Bool"
    },
    {
      "id": 2227305806,
      "method": "channels.deleteMessages",
      "params": [
        {
          "name": "channel",
          "type": "InputChannel"
        },
        {
          "name": "id",
          "type": "Vector<int>"
        }
      ],
      "type": "messages.AffectedMessages"
    },
    {
      "id": 3507345179,
      "method": "channels.deleteUserHistory",
      "params": [
        {
          "name": "channel",
          "type": "InputChannel"
        },
        {
          "name": "user_id",
          "type": "InputUser"
        }
      ],
      "type": "messages.AffectedHistory"
    },
    {
      "id": 4261967888,
      "method": "channels.reportSpam",
      "params": [
        {
          "name": "channel",
          "type": "InputChannel"
        },
        {
          "name": "user_id",
          "type": "InputUser"
        },
        {
          "name": "id",
          "type": "Vector<int>"
        }
      ],
      "type": "Bool"
    },
    {
      "id": 2911672867,
      "method": "channels.getMessages",
      "params": [
        {
          "name": "channel",
          "type": "InputChannel"
        },
        {
          "name": "id",
          "type": "Vector<InputMessage>"
        }
      ],
      "type": "messages.Messages"
    },
    {
      "id": 306054633,
      "method": "channels.getParticipants",
      "params": [
        {
          "name": "channel",
          "type": "InputChannel"
        },
        {
          "name": "filter",
          "type": "ChannelParticipantsFilter"
        },
        {
          "name": "offset",
          "type": "int"
        },
        {
          "name": "limit",
          "type": "int"
        },
        {
          "name": "hash",
          "type": "int"
        }
      ],
      "type": "channels.ChannelParticipants"
    },
    {
      "id": 2695589062,
      "method": "channels.getParticipant",
      "params": [
        {
          "name": "channel",
          "type": "InputChannel"
        },
        {
          "name": "participant",
          "type": "InputPeer"
        }
      ],
      "type": "channels.ChannelParticipant"
    },
    {
      "id": 176122811,
      "method": "channels.getChannels",
      "params": [
        {
          "name": "id",
          "type": "Vector<InputChannel>"
        }
      ],
      "type": "messages.Chats"
    },
    {
      "id": 141781513,
      "method": "channels.getFullChannel",
      "params": [
        {
          "name": "channel",
          "type": "InputChannel"
        }
      ],
      "type": "messages.ChatFull"
    },
    {
      "id": 1029681423,
      "method": "channels.createChannel",
      "params": [
        {
          "name": "flags",
          "type": "#"
        },
        {
          "name": "broadcast",
          "type": "flags.0?true"
        },
        {
          "name": "megagroup",
          "type": "flags.1?true"
        },
        {
          "name": "for_import",
          "type": "flags.3?true"
        },
        {
          "name": "title",
          "type": "string"
        },
        {
          "name": "about",
          "type": "string"
        },
        {
          "name": "geo_point",
          "type": "flags.2?InputGeoPoint"
        },
        {
          "name": "address",
          "type": "flags.2?string"
        }
      ],
      "type": "Updates"
    },
    {
      "id": 3543959810,
      "method": "channels.editAdmin",
      "params": [
        {
          "name": "channel",
          "type": "InputChannel"
        },
        {
          "name": "user_id",
          "type": "InputUser"
        },
        {
          "name": "admin_rights",
          "type": "ChatAdminRights"
        },
        {
          "name": "rank",
          "type": "string"
        }
      ],
      "type": "Updates"
    },
    {
      "id": 1450044624,
      "method": "channels.editTitle",
      "params": [
        {
          "name": "channel",
          "type": "InputChannel"
        },
        {
          "name": "title",
          "type": "string"
        }
      ],
      "type": "Updates"
    },
    {
      "id": 4046346185,
      "method": "channels.editPhoto",
      "params": [
        {
          "name": "channel",
          "type": "InputChannel"
        },
        {
          "name": "photo",
          "type": "InputChatPhoto"
        }
      ],
      "type": "Updates"
    },
    {
      "id": 283557164,
      "method": "channels.checkUsername",
      "params": [
        {
          "name": "channel",
          "type": "InputChannel"
        },
        {
          "name": "username",
          "type": "string"
        }
      ],
      "type": "Bool"
    },
    {
      "id": 890549214,
      "method": "channels.updateUsername",
      "params": [
        {
          "name": "channel",
          "type": "InputChannel"
        },
        {
          "name": "username",
          "type": "string"
        }
      ],
      "type": "Bool"
    },
    {
      "id": 615851205,
      "method": "channels.joinChannel",
      "params": [
        {
          "name": "channel",
          "type": "InputChannel"
        }
      ],
      "type": "Updates"
    },
    {
      "id": 4164332181,
      "method": "channels.leaveChannel",
      "params": [
        {
          "name": "channel",
          "type": "InputChannel"
        }
      ],
      "type": "Updates"
    },
    {
      "id": 429865580,
      "method": "channels.inviteToChannel",
      "params": [
        {
          "name": "channel",
          "type": "InputChannel"
        },
        {
          "name": "users",
          "type": "Vector<InputUser>"
        }
      ],
      "type": "Updates"
    },
    {
      "id": 3222347747,
      "method": "channels.deleteChannel",
      "params": [
        {
          "name": "channel",
          "type": "InputChannel"
        }
      ],
      "type": "Updates"
    },
    {
      "id": 3862932971,
      "method": "channels.exportMessageLink",
      "params": [
        {
          "name": "flags",
          "type": "#"
        },
        {
          "name": "grouped",
          "type": "flags.0?true"
        },
        {
          "name": "thread",
          "type": "flags.1?true"
        },
        {
          "name": "channel",
          "type": "InputChannel"
        },
        {
          "name": "id",
          "type": "int"
        }
      ],
      "type": "ExportedMessageLink"
    },
    {
      "id": 527021574,
      "method": "channels.toggleSignatures",
      "params": [
        {
          "name": "channel",
          "type": "InputChannel"
        },
        {
          "name": "enabled",
          "type": "Bool"
        }
      ],
      "type": "Updates"
    },
    {
      "id": 4172297903,
      "method": "channels.getAdminedPublicChannels",
      "params": [
        {
          "name": "flags",
          "type": "#"
        },
        {
          "name": "by_location",
          "type": "flags.0?true"
        },
        {
          "name": "check_limit",
          "type": "flags.1?true"
        }
      ],
      "type": "messages.Chats"
    },
    {
      "id": 2531708289,
      "method": "channels.editBanned",
      "params": [
        {
          "name": "channel",
          "type": "InputChannel"
        },
        {
          "name": "participant",
          "type": "InputPeer"
        },
        {
          "name": "banned_rights",
          "type": "ChatBannedRights"
        }
      ],
      "type": "Updates"
    },
    {
      "id": 870184064,
      "method": "channels.getAdminLog",
      "params": [
        {
          "name": "flags",
          "type": "#"
        },
        {
          "name": "channel",
          "type": "InputChannel"
        },
        {
          "name": "q",
          "type": "string"
        },
        {
          "name": "events_filter",
          "type": "flags.0?ChannelAdminLogEventsFilter"
        },
        {
          "name": "admins",
          "type": "flags.1?Vector<InputUser>"
        },
        {
          "name": "max_id",
          "type": "long"
        },
        {
          "name": "min_id",
          "type": "long"
        },
        {
          "name": "limit",
          "type": "int"
        }
      ],
      "type": "channels.AdminLogResults"
    },
    {
      "id": 3935085817,
      "method": "channels.setStickers",
      "params": [
        {
          "name": "channel",
          "type": "InputChannel"
        },
        {
          "name": "stickerset",
          "type": "InputStickerSet"
        }
      ],
      "type": "Bool"
    },
    {
      "id": 3937786936,
      "method": "channels.readMessageContents",
      "params": [
        {
          "name": "channel",
          "type": "InputChannel"
        },
        {
          "name": "id",
          "type": "Vector<int>"
        }
      ],
      "type": "Bool"
    },
    {
      "id": 2939592002,
      "method": "channels.deleteHistory",
      "params": [
        {
          "name": "channel",
          "type": "InputChannel"
        },
        {
          "name": "max_id",
          "type": "int"
        }
      ],
      "type": "Bool"
    },
    {
      "id": 3938171212,
      "method": "channels.togglePreHistoryHidden",
      "params": [
        {
          "name": "channel",
          "type": "InputChannel"
        },
        {
          "name": "enabled",
          "type": "Bool"
        }
      ],
      "type": "Updates"
    },
    {
      "id": 2202135744,
      "method": "channels.getLeftChannels",
      "params": [
        {
          "name": "offset",
          "type": "int"
        }
      ],
      "type": "messages.Chats"
    },
    {
      "id": 4124758904,
      "method": "channels.getGroupsForDiscussion",
      "params": [],
      "type": "messages.Chats"
    },
    {
      "id": 1079520178,
      "method": "channels.setDiscussionGroup",
      "params": [
        {
          "name": "broadcast",
          "type": "InputChannel"
        },
        {
          "name": "group",
          "type": "InputChannel"
        }
      ],
      "type": "Bool"
    },
    {
      "id": 2402864415,
      "method": "channels.editCreator",
      "params": [
        {
          "name": "channel",
          "type": "InputChannel"
        },
        {
          "name": "user_id",
          "type": "InputUser"
        },
        {
          "name": "password",
          "type": "InputCheckPasswordSRP"
        }
      ],
      "type": "Updates"
    },
    {
      "id": 1491484525,
      "method": "channels.editLocation",
      "params": [
        {
          "name": "channel",
          "type": "InputChannel"
        },
        {
          "name": "geo_point",
          "type": "InputGeoPoint"
        },
        {
          "name": "address",
          "type": "string"
        }
      ],
      "type": "Bool"
    },
    {
      "id": 3990134512,
      "method": "channels.toggleSlowMode",
      "params": [
        {
          "name": "channel",
          "type": "InputChannel"
        },
        {
          "name": "seconds",
          "type": "int"
        }
      ],
      "type": "Updates"
    },
    {
      "id": 300429806,
      "method": "channels.getInactiveChannels",
      "params": [],
      "type": "messages.InactiveChats"
    },
    {
      "id": 187239529,
      "method": "channels.convertToGigagroup",
      "params": [
        {
          "name": "channel",
          "type": "InputChannel"
        }
      ],
      "type": "Updates"
    },
    {
      "id": 2854709741,
      "method": "bots.sendCustomRequest",
      "params": [
        {
          "name": "custom_method",
          "type": "string"
        },
        {
          "name": "params",
          "type": "DataJSON"
        }
      ],
      "type": "DataJSON"
    },
    {
      "id": 3860938573,
      "method": "bots.answerWebhookJSONQuery",
      "params": [
        {
          "name": "query_id",
          "type": "long"
        },
        {
          "name": "data",
          "type": "DataJSON"
        }
      ],
      "type": "Bool"
    },
    {
      "id": 85399130,
      "method": "bots.setBotCommands",
      "params": [
        {
          "name": "scope",
          "type": "BotCommandScope"
        },
        {
          "name": "lang_code",
          "type": "string"
        },
        {
          "name": "commands",
          "type": "Vector<BotCommand>"
        }
      ],
      "type": "Bool"
    },
    {
      "id": 1032708345,
      "method": "bots.resetBotCommands",
      "params": [
        {
          "name": "scope",
          "type": "BotCommandScope"
        },
        {
          "name": "lang_code",
          "type": "string"
        }
      ],
      "type": "Bool"
    },
    {
      "id": 3813412310,
      "method": "bots.getBotCommands",
      "params": [
        {
          "name": "scope",
          "type": "BotCommandScope"
        },
        {
          "name": "lang_code",
          "type": "string"
        }
      ],
      "type": "Vector<BotCommand>"
    },
    {
      "id": 2318613645,
      "method": "payments.getPaymentForm",
      "params": [
        {
          "name": "flags",
          "type": "#"
        },
        {
          "name": "peer",
          "type": "InputPeer"
        },
        {
          "name": "msg_id",
          "type": "int"
        },
        {
          "name": "theme_params",
          "type": "flags.0?DataJSON"
        }
      ],
      "type": "payments.PaymentForm"
    },
    {
      "id": 611897804,
      "method": "payments.getPaymentReceipt",
      "params": [
        {
          "name": "peer",
          "type": "InputPeer"
        },
        {
          "name": "msg_id",
          "type": "int"
        }
      ],
      "type": "payments.PaymentReceipt"
    },
    {
      "id": 3675271536,
      "method": "payments.validateRequestedInfo",
      "params": [
        {
          "name": "flags",
          "type": "#"
        },
        {
          "name": "save",
          "type": "flags.0?true"
        },
        {
          "name": "peer",
          "type": "InputPeer"
        },
        {
          "name": "msg_id",
          "type": "int"
        },
        {
          "name": "info",
          "type": "PaymentRequestedInfo"
        }
      ],
      "type": "payments.ValidatedRequestedInfo"
    },
    {
      "id": 818134173,
      "method": "payments.sendPaymentForm",
      "params": [
        {
          "name": "flags",
          "type": "#"
        },
        {
          "name": "form_id",
          "type": "long"
        },
        {
          "name": "peer",
          "type": "InputPeer"
        },
        {
          "name": "msg_id",
          "type": "int"
        },
        {
          "name": "requested_info_id",
          "type": "flags.0?string"
        },
        {
          "name": "shipping_option_id",
          "type": "flags.1?string"
        },
        {
          "name": "credentials",
          "type": "InputPaymentCredentials"
        },
        {
          "name": "tip_amount",
          "type": "flags.2?long"
        }
      ],
      "type": "payments.PaymentResult"
    },
    {
      "id": 578650699,
      "method": "payments.getSavedInfo",
      "params": [],
      "type": "payments.SavedInfo"
    },
    {
      "id": 3627905217,
      "method": "payments.clearSavedInfo",
      "params": [
        {
          "name": "flags",
          "type": "#"
        },
        {
          "name": "credentials",
          "type": "flags.0?true"
        },
        {
          "name": "info",
          "type": "flags.1?true"
        }
      ],
      "type": "Bool"
    },
    {
      "id": 779736953,
      "method": "payments.getBankCardData",
      "params": [
        {
          "name": "number",
          "type": "string"
        }
      ],
      "type": "payments.BankCardData"
    },
    {
      "id": 2418125671,
      "method": "stickers.createStickerSet",
      "params": [
        {
          "name": "flags",
          "type": "#"
        },
        {
          "name": "masks",
          "type": "flags.0?true"
        },
        {
          "name": "animated",
          "type": "flags.1?true"
        },
        {
          "name": "user_id",
          "type": "InputUser"
        },
        {
          "name": "title",
          "type": "string"
        },
        {
          "name": "short_name",
          "type": "string"
        },
        {
          "name": "thumb",
          "type": "flags.2?InputDocument"
        },
        {
          "name": "stickers",
          "type": "Vector<InputStickerSetItem>"
        },
        {
          "name": "software",
          "type": "flags.3?string"
        }
      ],
      "type": "messages.StickerSet"
    },
    {
      "id": 4151709521,
      "method": "stickers.removeStickerFromSet",
      "params": [
        {
          "name": "sticker",
          "type": "InputDocument"
        }
      ],
      "type": "messages.StickerSet"
    },
    {
      "id": 4290172106,
      "method": "stickers.changeStickerPosition",
      "params": [
        {
          "name": "sticker",
          "type": "InputDocument"
        },
        {
          "name": "position",
          "type": "int"
        }
      ],
      "type": "messages.StickerSet"
    },
    {
      "id": 2253651646,
      "method": "stickers.addStickerToSet",
      "params": [
        {
          "name": "stickerset",
          "type": "InputStickerSet"
        },
        {
          "name": "sticker",
          "type": "InputStickerSetItem"
        }
      ],
      "type": "messages.StickerSet"
    },
    {
      "id": 2587250224,
      "method": "stickers.setStickerSetThumb",
      "params": [
        {
          "name": "stickerset",
          "type": "InputStickerSet"
        },
        {
          "name": "thumb",
          "type": "InputDocument"
        }
      ],
      "type": "messages.StickerSet"
    },
    {
      "id": 676017721,
      "method": "stickers.checkShortName",
      "params": [
        {
          "name": "short_name",
          "type": "string"
        }
      ],
      "type": "Bool"
    },
    {
      "id": 1303364867,
      "method": "stickers.suggestShortName",
      "params": [
        {
          "name": "title",
          "type": "string"
        }
      ],
      "type": "stickers.SuggestedShortName"
    },
    {
      "id": 1430593449,
      "method": "phone.getCallConfig",
      "params": [],
      "type": "DataJSON"
    },
    {
      "id": 1124046573,
      "method": "phone.requestCall",
      "params": [
        {
          "name": "flags",
          "type": "#"
        },
        {
          "name": "video",
          "type": "flags.0?true"
        },
        {
          "name": "user_id",
          "type": "InputUser"
        },
        {
          "name": "random_id",
          "type": "int"
        },
        {
          "name": "g_a_hash",
          "type": "bytes"
        },
        {
          "name": "protocol",
          "type": "PhoneCallProtocol"
        }
      ],
      "type": "phone.PhoneCall"
    },
    {
      "id": 1003664544,
      "method": "phone.acceptCall",
      "params": [
        {
          "name": "peer",
          "type": "InputPhoneCall"
        },
        {
          "name": "g_b",
          "type": "bytes"
        },
        {
          "name": "protocol",
          "type": "PhoneCallProtocol"
        }
      ],
      "type": "phone.PhoneCall"
    },
    {
      "id": 788404002,
      "method": "phone.confirmCall",
      "params": [
        {
          "name": "peer",
          "type": "InputPhoneCall"
        },
        {
          "name": "g_a",
          "type": "bytes"
        },
        {
          "name": "key_fingerprint",
          "type": "long"
        },
        {
          "name": "protocol",
          "type": "PhoneCallProtocol"
        }
      ],
      "type": "phone.PhoneCall"
    },
    {
      "id": 399855457,
      "method": "phone.receivedCall",
      "params": [
        {
          "name": "peer",
          "type": "InputPhoneCall"
        }
      ],
      "type": "Bool"
    },
    {
      "id": 2999697856,
      "method": "phone.discardCall",
      "params": [
        {
          "name": "flags",
          "type": "#"
        },
        {
          "name": "video",
          "type": "flags.0?true"
        },
        {
          "name": "peer",
          "type": "InputPhoneCall"
        },
        {
          "name": "duration",
          "type": "int"
        },
        {
          "name": "reason",
          "type": "PhoneCallDiscardReason"
        },
        {
          "name": "connection_id",
          "type": "long"
        }
      ],
      "type": "Updates"
    },
    {
      "id": 1508562471,
      "method": "phone.setCallRating",
      "params": [
        {
          "name": "flags",
          "type": "#"
        },
        {
          "name": "user_initiative",
          "type": "flags.0?true"
        },
        {
          "name": "peer",
          "type": "InputPhoneCall"
        },
        {
          "name": "rating",
          "type": "int"
        },
        {
          "name": "comment",
          "type": "string"
        }
      ],
      "type": "Updates"
    },
    {
      "id": 662363518,
      "method": "phone.saveCallDebug",
      "params": [
        {
          "name": "peer",
          "type": "InputPhoneCall"
        },
        {
          "name": "debug",
          "type": "DataJSON"
        }
      ],
      "type": "Bool"
    },
    {
      "id": 4286223235,
      "method": "phone.sendSignalingData",
      "params": [
        {
          "name": "peer",
          "type": "InputPhoneCall"
        },
        {
          "name": "data",
          "type": "bytes"
        }
      ],
      "type": "Bool"
    },
    {
      "id": 1221445336,
      "method": "phone.createGroupCall",
      "params": [
        {
          "name": "flags",
          "type": "#"
        },
        {
          "name": "peer",
          "type": "InputPeer"
        },
        {
          "name": "random_id",
          "type": "int"
        },
        {
          "name": "title",
          "type": "flags.0?string"
        },
        {
          "name": "schedule_date",
          "type": "flags.1?int"
        }
      ],
      "type": "Updates"
    },
    {
      "id": 2972909435,
      "method": "phone.joinGroupCall",
      "params": [
        {
          "name": "flags",
          "type": "#"
        },
        {
          "name": "muted",
          "type": "flags.0?true"
        },
        {
          "name": "video_stopped",
          "type": "flags.2?true"
        },
        {
          "name": "call",
          "type": "InputGroupCall"
        },
        {
          "name": "join_as",
          "type": "InputPeer"
        },
        {
          "name": "invite_hash",
          "type": "flags.1?string"
        },
        {
          "name": "params",
          "type": "DataJSON"
        }
      ],
      "type": "Updates"
    },
    {
      "id": 1342404601,
      "method": "phone.leaveGroupCall",
      "params": [
        {
          "name": "call",
          "type": "InputGroupCall"
        },
        {
          "name": "source",
          "type": "int"
        }
      ],
      "type": "Updates"
    },
    {
      "id": 2067345760,
      "method": "phone.inviteToGroupCall",
      "params": [
        {
          "name": "call",
          "type": "InputGroupCall"
        },
        {
          "name": "users",
          "type": "Vector<InputUser>"
        }
      ],
      "type": "Updates"
    },
    {
      "id": 2054648117,
      "method": "phone.discardGroupCall",
      "params": [
        {
          "name": "call",
          "type": "InputGroupCall"
        }
      ],
      "type": "Updates"
    },
    {
      "id": 1958458429,
      "method": "phone.toggleGroupCallSettings",
      "params": [
        {
          "name": "flags",
          "type": "#"
        },
        {
          "name": "reset_invite_hash",
          "type": "flags.1?true"
        },
        {
          "name": "call",
          "type": "InputGroupCall"
        },
        {
          "name": "join_muted",
          "type": "flags.0?Bool"
        }
      ],
      "type": "Updates"
    },
    {
      "id": 209498135,
      "method": "phone.getGroupCall",
      "params": [
        {
          "name": "call",
          "type": "InputGroupCall"
        }
      ],
      "type": "phone.GroupCall"
    },
    {
      "id": 3310934187,
      "method": "phone.getGroupParticipants",
      "params": [
        {
          "name": "call",
          "type": "InputGroupCall"
        },
        {
          "name": "ids",
          "type": "Vector<InputPeer>"
        },
        {
          "name": "sources",
          "type": "Vector<int>"
        },
        {
          "name": "offset",
          "type": "string"
        },
        {
          "name": "limit",
          "type": "int"
        }
      ],
      "type": "phone.GroupParticipants"
    },
    {
      "id": 3046963575,
      "method": "phone.checkGroupCall",
      "params": [
        {
          "name": "call",
          "type": "InputGroupCall"
        },
        {
          "name": "sources",
          "type": "Vector<int>"
        }
      ],
      "type": "Vector<int>"
    },
    {
      "id": 3224004311,
      "method": "phone.toggleGroupCallRecord",
      "params": [
        {
          "name": "flags",
          "type": "#"
        },
        {
          "name": "start",
          "type": "flags.0?true"
        },
        {
          "name": "call",
          "type": "InputGroupCall"
        },
        {
          "name": "title",
          "type": "flags.1?string"
        }
      ],
      "type": "Updates"
    },
    {
      "id": 2770811583,
      "method": "phone.editGroupCallParticipant",
      "params": [
        {
          "name": "flags",
          "type": "#"
        },
        {
          "name": "call",
          "type": "InputGroupCall"
        },
        {
          "name": "participant",
          "type": "InputPeer"
        },
        {
          "name": "muted",
          "type": "flags.0?Bool"
        },
        {
          "name": "volume",
          "type": "flags.1?int"
        },
        {
          "name": "raise_hand",
          "type": "flags.2?Bool"
        },
        {
          "name": "video_stopped",
          "type": "flags.3?Bool"
        },
        {
          "name": "video_paused",
          "type": "flags.4?Bool"
        },
        {
          "name": "presentation_paused",
          "type": "flags.5?Bool"
        }
      ],
      "type": "Updates"
    },
    {
      "id": 480685066,
      "method": "phone.editGroupCallTitle",
      "params": [
        {
          "name": "call",
          "type": "InputGroupCall"
        },
        {
          "name": "title",
          "type": "string"
        }
      ],
      "type": "Updates"
    },
    {
      "id": 4017889594,
      "method": "phone.getGroupCallJoinAs",
      "params": [
        {
          "name": "peer",
          "type": "InputPeer"
        }
      ],
      "type": "phone.JoinAsPeers"
    },
    {
      "id": 3869926527,
      "method": "phone.exportGroupCallInvite",
      "params": [
        {
          "name": "flags",
          "type": "#"
        },
        {
          "name": "can_self_unmute",
          "type": "flags.0?true"
        },
        {
          "name": "call",
          "type": "InputGroupCall"
        }
      ],
      "type": "phone.ExportedGroupCallInvite"
    },
    {
      "id": 563885286,
      "method": "phone.toggleGroupCallStartSubscription",
      "params": [
        {
          "name": "call",
          "type": "InputGroupCall"
        },
        {
          "name": "subscribed",
          "type": "Bool"
        }
      ],
      "type": "Updates"
    },
    {
      "id": 1451287362,
      "method": "phone.startScheduledGroupCall",
      "params": [
        {
          "name": "call",
          "type": "InputGroupCall"
        }
      ],
      "type": "Updates"
    },
    {
      "id": 1465786252,
      "method": "phone.saveDefaultGroupCallJoinAs",
      "params": [
        {
          "name": "peer",
          "type": "InputPeer"
        },
        {
          "name": "join_as",
          "type": "InputPeer"
        }
      ],
      "type": "Bool"
    },
    {
      "id": 3421137860,
      "method": "phone.joinGroupCallPresentation",
      "params": [
        {
          "name": "call",
          "type": "InputGroupCall"
        },
        {
          "name": "params",
          "type": "DataJSON"
        }
      ],
      "type": "Updates"
    },
    {
      "id": 475058500,
      "method": "phone.leaveGroupCallPresentation",
      "params": [
        {
          "name": "call",
          "type": "InputGroupCall"
        }
      ],
      "type": "Updates"
    },
    {
      "id": 4075959050,
      "method": "langpack.getLangPack",
      "params": [
        {
          "name": "lang_pack",
          "type": "string"
        },
        {
          "name": "lang_code",
          "type": "string"
        }
      ],
      "type": "LangPackDifference"
    },
    {
      "id": 4025104387,
      "method": "langpack.getStrings",
      "params": [
        {
          "name": "lang_pack",
          "type": "string"
        },
        {
          "name": "lang_code",
          "type": "string"
        },
        {
          "name": "keys",
          "type": "Vector<string>"
        }
      ],
      "type": "Vector<LangPackString>"
    },
    {
      "id": 3449309861,
      "method": "langpack.getDifference",
      "params": [
        {
          "name": "lang_pack",
          "type": "string"
        },
        {
          "name": "lang_code",
          "type": "string"
        },
        {
          "name": "from_version",
          "type": "int"
        }
      ],
      "type": "LangPackDifference"
    },
    {
      "id": 1120311183,
      "method": "langpack.getLanguages",
      "params": [
        {
          "name": "lang_pack",
          "type": "string"
        }
      ],
      "type": "Vector<LangPackLanguage>"
    },
    {
      "id": 1784243458,
      "method": "langpack.getLanguage",
      "params": [
        {
          "name": "lang_pack",
          "type": "string"
        },
        {
          "name": "lang_code",
          "type": "string"
        }
      ],
      "type": "LangPackLanguage"
    },
    {
      "id": 1749536939,
      "method": "folders.editPeerFolders",
      "params": [
        {
          "name": "folder_peers",
          "type": "Vector<InputFolderPeer>"
        }
      ],
      "type": "Updates"
    },
    {
      "id": 472471681,
      "method": "folders.deleteFolder",
      "params": [
        {
          "name": "folder_id",
          "type": "int"
        }
      ],
      "type": "Updates"
    },
    {
      "id": 2873246746,
      "method": "stats.getBroadcastStats",
      "params": [
        {
          "name": "flags",
          "type": "#"
        },
        {
          "name": "dark",
          "type": "flags.0?true"
        },
        {
          "name": "channel",
          "type": "InputChannel"
        }
      ],
      "type": "stats.BroadcastStats"
    },
    {
      "id": 1646092192,
      "method": "stats.loadAsyncGraph",
      "params": [
        {
          "name": "flags",
          "type": "#"
        },
        {
          "name": "token",
          "type": "string"
        },
        {
          "name": "x",
          "type": "flags.0?long"
        }
      ],
      "type": "StatsGraph"
    },
    {
      "id": 3705636359,
      "method": "stats.getMegagroupStats",
      "params": [
        {
          "name": "flags",
          "type": "#"
        },
        {
          "name": "dark",
          "type": "flags.0?true"
        },
        {
          "name": "channel",
          "type": "InputChannel"
        }
      ],
      "type": "stats.MegagroupStats"
    },
    {
      "id": 1445996571,
      "method": "stats.getMessagePublicForwards",
      "params": [
        {
          "name": "channel",
          "type": "InputChannel"
        },
        {
          "name": "msg_id",
          "type": "int"
        },
        {
          "name": "offset_rate",
          "type": "int"
        },
        {
          "name": "offset_peer",
          "type": "InputPeer"
        },
        {
          "name": "offset_id",
          "type": "int"
        },
        {
          "name": "limit",
          "type": "int"
        }
      ],
      "type": "messages.Messages"
    },
    {
      "id": 3068175349,
      "method": "stats.getMessageStats",
      "params": [
        {
          "name": "flags",
          "type": "#"
        },
        {
          "name": "dark",
          "type": "flags.0?true"
        },
        {
          "name": "channel",
          "type": "InputChannel"
        },
        {
          "name": "msg_id",
          "type": "int"
        }
      ],
      "type": "stats.MessageStats"
    }
  ]
}