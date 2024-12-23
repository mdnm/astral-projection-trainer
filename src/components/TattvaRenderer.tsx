import { Tattva } from "../data/tattvas";

export function tattvaToSvg({ type, subType, fillColor, subFillColor, className }: {
  type: Tattva; fillColor: string; subType?: Tattva; subFillColor?: string; className?: string;
}) {
  if ((type && !subType) || (type === subType)) {
    if (type === 'prithvi') {
      return (
        <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg" className={className}>
          <rect width="100" height="100" fill={fillColor} />
        </svg>
      );
    } else if (type === 'apas') {
      return (
        <svg viewBox="0 0 100 41" xmlns="http://www.w3.org/2000/svg" className={className}>
          <path d="M0 0C0 0 19.1723 20.9103 50.3378 20.9103C81.5034 20.9103 100 0 100 0C100 0 100.002 40.1274 50.3378 40.1274C0.674026 40.1274 0 0 0 0Z" fill={fillColor} />
        </svg>
      );
    } else if (type === 'tejas') {
      return (
        <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg" className={className}>
          <polygon points="50,0 100,100 0,100" fill={fillColor} />
        </svg>
      );
    } else if (type === 'vayu') {
      return (
        <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg" className={className}>
          <circle cx="50" cy="50" r="50" fill={fillColor} />
        </svg>
      );
    } else if (type === 'akash') {
      return (
        <svg viewBox="0 0 64 100" xmlns="http://www.w3.org/2000/svg" className={className}>
          <ellipse cx="31.8182" cy="50" rx="31.8182" ry="50" transform="matrix(-1 0 0 1 64 0)" fill={fillColor} />
        </svg>
      );
    }
  } else if (type && subType) {
    if (type === 'prithvi') {
      if (subType === 'apas') {
        return (
          <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg" className={className}>
            <rect width="100" height="100" fill={fillColor} />
            <path d="M18.8496 37.5C18.8496 37.5 30.7943 50.5274 50.2109 50.5274C69.6275 50.5274 81.1512 37.5 81.1512 37.5C81.1512 37.5 81.1522 62.5 50.2109 62.5C19.2695 62.5 18.8496 37.5 18.8496 37.5Z" fill={subFillColor} />
          </svg>
        );
      } else if (subType === 'tejas') {
        return (
          <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg" className={className}>
            <rect width="100" height="100" fill={fillColor} />
            <polygon points="50,20 90,75 10,75" fill={subFillColor} />
          </svg>
        );
      } else if (subType === 'vayu') {
        return (
          <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg" className={className}>
            <rect width="100" height="100" fill={fillColor} />
            <circle cx="50" cy="50" r="25" fill={subFillColor} />
          </svg>
        );
      } else if (subType === 'akash') {
        return (
          <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg" className={className}>
            <rect width="100" height="100" fill={fillColor} />
            <ellipse cx="20" cy="33" rx="20" ry="33" transform="matrix(-1 0 0 1 70 15)" fill={subFillColor} />
          </svg>
        );
      }
    } else if (type === 'apas') {
      if (subType === 'prithvi') {
        return (
          <svg viewBox="0 0 100 40" xmlns="http://www.w3.org/2000/svg" className={className}>
            <path d="M0 0C0 0 19.1723 20.8439 50.3378 20.8439C81.5034 20.8439 100 0 100 0C100 0 100.002 40 50.3378 40C0.674026 40 0 0 0 0Z" fill={fillColor} />
            <rect x="43.709" y="24.0312" width="12.5806" height="12.5806" fill={subFillColor} />
          </svg>
        );
      } else if (subType === 'tejas') {
        return (
          <svg viewBox="0 0 100 40" xmlns="http://www.w3.org/2000/svg" className={className}>
            <path d="M0 0C0 0 19.1723 20.8439 50.3378 20.8439C81.5034 20.8439 100 0 100 0C100 0 100.002 40 50.3378 40C0.674026 40 0 0 0 0Z" fill={fillColor} />
            <path d="M49.9163 22.9297L56.175 35.7346H43.6577L49.9163 22.9297Z" fill={subFillColor} />
          </svg>
        );
      } else if (subType === 'vayu') {
        return (
          <svg viewBox="0 0 100 40" xmlns="http://www.w3.org/2000/svg" className={className}>
            <path d="M0 0C0 0 19.1723 20.8439 50.3378 20.8439C81.5034 20.8439 100 0 100 0C100 0 100.002 40 50.3378 40C0.674026 40 0 0 0 0Z" fill={fillColor} />
            <circle cx="50.0801" cy="30.4044" r="5.56452" fill={subFillColor} />
          </svg>
        );
      } else if (subType === 'akash') {
        return (
          <svg viewBox="0 0 100 40" xmlns="http://www.w3.org/2000/svg" className={className}>
            <path d="M0 0C0 0 19.1723 20.8439 50.3378 20.8439C81.5034 20.8439 100 0 100 0C100 0 100.002 40 50.3378 40C0.674026 40 0 0 0 0Z" fill={fillColor} />
            <ellipse cx="4.67742" cy="7.25806" rx="4.67742" ry="7.25806" transform="matrix(-1 0 0 1 54.668 23.3984)" fill={subFillColor} />
          </svg>
        )
      }
    } else if (type === 'tejas') {
      if (subType === 'prithvi') {
        return (
          <svg viewBox="0 0 82 100" xmlns="http://www.w3.org/2000/svg" className={className}>
            <path d="M40.8392 0L76.2069 75H5.47141L40.8392 0Z" fill={fillColor} />
            <rect x="27.4121" y="44.3359" width="26.8531" height="26.8531" fill={subFillColor} />
          </svg>
        )
      } else if (subType === 'apas') {
        return (
          <svg viewBox="0 0 82 100" xmlns="http://www.w3.org/2000/svg" className={className}>
            <path d="M40.8392 0L76.2069 75H5.47141L40.8392 0Z" fill={fillColor} />
            <path d="M20 53.2852C20 53.2852 28.0443 62.0308 41.1208 62.0308C54.1972 62.0308 61.958 53.2852 61.958 53.2852C61.958 53.2852 61.9587 70.0684 41.1208 70.0684C20.2828 70.0684 20 53.2852 20 53.2852Z" fill={subFillColor} />
          </svg>
        )
      } else if (subType === 'vayu') {
        return (
          <svg viewBox="0 0 82 100" xmlns="http://www.w3.org/2000/svg" className={className}>
            <path d="M40.8392 0L76.2069 75H5.47141L40.8392 0Z" fill={fillColor} />
            <circle cx="40.9088" cy="53.9166" r="18.1119" fill={subFillColor} />
          </svg>
        )
      } else if (subType === 'akash') {
        return (
          <svg viewBox="0 0 82 100" xmlns="http://www.w3.org/2000/svg" className={className}>
            <path d="M40.8392 0L76.2069 75H5.47141L40.8392 0Z" fill={fillColor} />
            <ellipse cx="13.4965" cy="20.9091" rx="13.4965" ry="20.9091" transform="matrix(-1 0 0 1 54.4053 27.9727)" fill="black" />
          </svg>
        )
      }
    } else if (type === 'vayu') {
      if (subType === 'prithvi') {
        return (
          <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg" className={className}>
            <circle cx="50" cy="50" r="50" fill={fillColor} />
            <rect x="32.959" y="32.7734" width="34.2697" height="34.2697" fill={subFillColor} />
          </svg>
        )
      } else if (subType === 'apas') {
        return (
          <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg" className={className}>
            <circle cx="50" cy="50" r="50" fill={fillColor} />
            <path d="M21.3486 38.3906C21.3486 38.3906 32.3709 50.3934 50.2882 50.3934C68.2055 50.3934 78.8393 38.3906 78.8393 38.3906C78.8393 38.3906 78.8402 61.4243 50.2882 61.4243C21.7361 61.4243 21.3486 38.3906 21.3486 38.3906Z" fill={subFillColor} />
          </svg>
        )
      } else if (subType === 'tejas') {
        return (
          <svg width="534" height="534" viewBox="0 0 534 534" xmlns="http://www.w3.org/2000/svg" className={className}>
            <circle cx="267" cy="267" r="267" fill={fillColor} />
            <path d="M267 99L385.645 351H148.355L267 99Z" fill={subFillColor} />
          </svg>
        )
      } else if (subType === 'akash') {
        return (
          <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg" className={className}>
            <circle cx="50" cy="50" r="50" fill={fillColor} />
            <ellipse cx="19.9438" cy="30.8989" rx="19.9438" ry="30.8989" transform="matrix(-1 0 0 1 70.0371 19.1016)" fill={subFillColor} />
          </svg>
        )
      }
    } else if (type === 'akash') {
      if (subType === 'prithvi') {
        return (
          <svg viewBox="0 0 65 100" xmlns="http://www.w3.org/2000/svg" className={className}>
            <ellipse cx="32.2884" cy="50" rx="32.2884" ry="50" transform="matrix(-1 0 0 1 64.5771 0)" fill={fillColor} />
            <rect x="18.3389" y="36.0508" width="27.8997" height="27.8997" fill={subFillColor} />
          </svg>
        )
      } else if (subType === 'apas') {
        return (
          <svg viewBox="0 0 65 100" xmlns="http://www.w3.org/2000/svg" className={className}>
            <ellipse cx="32.2884" cy="50" rx="32.2884" ry="50" transform="matrix(-1 0 0 1 64.5771 0)" fill={fillColor} />
            <path d="M9.4043 45.1406C9.4043 45.1406 18.1791 54.6968 32.4429 54.6968C46.7068 54.6968 55.1723 45.1406 55.1723 45.1406C55.1723 45.1406 55.1731 63.4792 32.4429 63.4792C9.71279 63.4792 9.4043 45.1406 9.4043 45.1406Z" fill={subFillColor} />
          </svg>
        )
      } else if (subType === 'tejas') {
        return (
          <svg viewBox="0 0 65 100" xmlns="http://www.w3.org/2000/svg" className={className}>
            <ellipse cx="32.2884" cy="50" rx="32.2884" ry="50" transform="matrix(-1 0 0 1 64.5771 0)" fill={fillColor} />
            <path d="M32.2883 32.2891L49.9346 69.6715H14.642L32.2883 32.2891Z" fill={subFillColor} />
          </svg>
        )
      } else if (subType === 'vayu') {
        return (
          <svg viewBox="0 0 65 100" xmlns="http://www.w3.org/2000/svg" className={className}>
            <ellipse cx="32.2884" cy="50" rx="32.2884" ry="50" transform="matrix(-1 0 0 1 64.5771 0)" fill={fillColor} />
            <circle cx="32.2883" cy="50.0002" r="20.0627" fill={subFillColor} />
          </svg>
        )
      }
    }
  }
}