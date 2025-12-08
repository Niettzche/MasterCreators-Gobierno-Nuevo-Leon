"""
Script to download cluster logos from the CLAC 2022 website.

This script fetches the logo images for each cluster listed on the
``Red de Clusters`` page of the CLAC 2022 web site and saves them
locally using a sensible name derived from the cluster’s brand.  The
mapping of cluster names to their corresponding image URLs was
constructed by inspecting the HTML source of the page.  When the
script is executed it creates a directory named ``logos`` in the
current working directory (if it doesn’t already exist) and downloads
each image into that directory.

Usage:
    python download_logos.py

Requirements:
    - Python 3.6+
    - requests (install via pip if not already available)

Note:
    The CLAC 2022 site blocks generic HTTP clients from fetching the
    ``red-de-clusters`` page directly, but it does allow direct
    downloading of the image assets.  To download the images the
    script sends a simple ``User‑Agent`` header so that the server
    treats the request as coming from a browser.
"""

import os
import sys
from typing import Dict

try:
    import requests  # type: ignore
except ImportError:
    print(
        "This script requires the 'requests' library. Install it via\n"
        "pip install requests and then run the script again."
    )
    sys.exit(1)


def download_logo_files(logo_map: Dict[str, str], download_dir: str = "logos") -> None:
    """Download each logo given in ``logo_map`` into ``download_dir``.

    Args:
        logo_map: Mapping from a short cluster identifier (used for
            file naming) to the absolute URL of the image on the web
            site.
        download_dir: Local directory where the downloaded images
            should be stored.  If the directory does not exist it
            will be created.

    The function prints a message for each download attempt and
    reports basic status information.  If an image cannot be
    downloaded the exception is printed but the script continues
    attempting the remaining downloads.
    """
    # Ensure the output directory exists.
    if not os.path.isdir(download_dir):
        os.makedirs(download_dir, exist_ok=True)

    # Set a generic User‑Agent header so the server treats our
    # requests like those from a web browser.
    headers = {
        "User-Agent": (
            "Mozilla/5.0 (X11; Linux x86_64; rv:109.0) "
            "Gecko/20100101 Firefox/115.0"
        )
    }

    for cluster_id, url in logo_map.items():
        filename = f"{cluster_id}.jpg"
        output_path = os.path.join(download_dir, filename)
        print(f"Downloading {cluster_id} from {url} …")
        try:
            response = requests.get(url, headers=headers, timeout=15)
            response.raise_for_status()
        except Exception as exc:
            print(f"  Failed to download {cluster_id}: {exc}")
            continue

        # Write the image bytes to disk
        with open(output_path, "wb") as f:
            f.write(response.content)
        print(f"  Saved to {output_path} (size: {len(response.content)} bytes)")


def main() -> None:
    """Main entry point for the script."""
    # Mapping of cluster identifiers to their logo URLs.  These names
    # correspond to the brands commonly used by the clusters (for
    # example 'csoftmty' for the ICT cluster).  If the CLAC 2022
    # website changes its structure or filenames in the future, this
    # dictionary may need to be updated accordingly.
    logo_map: Dict[str, str] = {
        # Automotriz cluster (CLAUT)
        "claut": "https://clac2022.com/wp-content/uploads/2022/06/claut-1.jpg",
        # Agroalimentario cluster
        "agroalim": "https://clac2022.com/wp-content/uploads/2022/06/agrolim.jpg",
        # Biotecnología cluster (Biocluster)
        "biocluster": "https://clac2022.com/wp-content/uploads/2022/06/biocluster.jpg",
        # Aeroespacial cluster (Monterrey Aerocluster)
        "aerocluster": "https://clac2022.com/wp-content/uploads/2022/06/aero.jpg",
        # Electrodomésticos cluster (CLELAC)
        "clelac": "https://clac2022.com/wp-content/uploads/2022/06/clelac.jpg",
        # TIC cluster (CSOFTMTY)
        "csoftmty": "https://clac2022.com/wp-content/uploads/2022/06/csfot.jpg",
        # Energético cluster
        "energetico": "https://clac2022.com/wp-content/uploads/2022/06/ejergetico.jpg",
        # Medios Creativos y Nuevos Medios (MIMEC)
        "mimec": "https://clac2022.com/wp-content/uploads/2022/06/mimec.jpg",
        # Nanotecnología cluster
        "nano": "https://clac2022.com/wp-content/uploads/2022/06/nano.jpg",
        # Servicios Médicos Especializados (Salud)
        "salud": "https://clac2022.com/wp-content/uploads/2022/06/salud.jpg",
        # Turismo cluster
        "turismo": "https://clac2022.com/wp-content/uploads/2022/06/turismo.jpg",
        # Herramentales cluster
        "herramentales": "https://clac2022.com/wp-content/uploads/2022/06/herramentales.jpg",
        # Vivienda cluster
        "vivienda": "https://clac2022.com/wp-content/uploads/2022/06/cluster-vivienda.jpg",
    }

    download_logo_files(logo_map)


if __name__ == "__main__":
    main()
