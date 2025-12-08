"""
company_scraper.py
===================

This script provides a simple example of how to scrape basic
information from the home pages of a list of companies grouped by
cluster.  For each company, it requests the company's website and
extracts the contents of the `<title>` tag and the `<meta
name="description">` tag using BeautifulSoup.  The results are
stored in a JSON file.  If a website is unreachable or does not
contain the expected tags, the script records an empty string for
that field and continues.

Before running the script, populate the ``company_websites``
dictionary with the appropriate URL for each company.  The keys
should match the cluster names used in the JSON above and each
value should be a mapping from company name to its homepage URL.

Usage::

    python company_scraper.py

The output file ``scraped_data.json`` will be written in the same
directory as the script.
"""

import json
import time
from pathlib import Path
from typing import Dict, List, Tuple

import requests
from bs4 import BeautifulSoup


def fetch_site_info(url: str) -> Tuple[str, str]:
    """Fetch the title and meta description for a given URL.

    Args:
        url: The website URL to scrape.

    Returns:
        A tuple of (title, description).  Empty strings are returned if
        the content cannot be retrieved or parsed.
    """
    if not url:
        return "", ""
    try:
        resp = requests.get(url, timeout=15)
        resp.raise_for_status()
    except Exception:
        # Could not fetch the page; return empty fields
        return "", ""

    soup = BeautifulSoup(resp.text, "html.parser")
    title_tag = soup.find("title")
    meta_desc = soup.find("meta", attrs={"name": "description"})
    title_text = title_tag.get_text(strip=True) if title_tag else ""
    desc_text = meta_desc["content"].strip() if meta_desc and meta_desc.get("content") else ""
    return title_text, desc_text


def scrape_companies(company_websites: Dict[str, Dict[str, str]]) -> Dict[str, List[Dict[str, str]]]:
    """Scrape titles and descriptions for companies grouped by cluster.

    Args:
        company_websites: A mapping where each key is a cluster name and
            each value is a mapping from company name to the company's
            website URL.

    Returns:
        A dictionary mapping each cluster to a list of dictionaries.  Each
        dictionary in the list contains the company name, the URL, and
        the scraped title and description.
    """
    result: Dict[str, List[Dict[str, str]]] = {}
    for cluster, companies in company_websites.items():
        result[cluster] = []
        for company, url in companies.items():
            title, desc = fetch_site_info(url)
            result[cluster].append({
                "company": company,
                "url": url,
                "title": title,
                "description": desc,
            })
            # Be polite to servers by sleeping briefly between requests
            time.sleep(1)
    return result


def main() -> None:
    # Define a limited set of example company websites for scraping.
    # Update or expand this dictionary with the correct URLs for your
    # specific use case.  If a company does not have a known website,
    # you can leave the value empty; the scraper will skip it.
    company_websites: Dict[str, Dict[str, str]] = {
        "Cluster Automotriz": {
            "Caterpillar": "https://www.caterpillar.com/",
            "Daimler": "https://www.daimlertruck.com/",
            "Nemak": "https://www.nemak.com/",
        },
        "Cluster Agroalimentario": {
            "Heineken": "https://www.heinekenmexico.com/",
            "HEB": "https://www.heb.com.mx/",
            "Sigma Alimentos": "https://www.sigma-alimentos.com/",
        },
        "Cluster Biotecnología": {
            "CINVESTAV Monterrey": "https://www.cinvestav.mx/",
            "Novogen": "https://www.novogen-group.com/",
            "UANL": "https://www.uanl.mx/",
        },
        "Cluster Aeroespacial": {
            "Terma": "https://www.terma.com/",
            "Frisa Aerospace": "https://www.frisa.com/",
            "Ducommun": "https://www.ducommun.com/",
        },
        "Cluster de Electrodomésticos": {
            "Whirlpool": "https://www.whirlpoolcorp.com/",
            "Carrier": "https://www.carrier.com/",
            "Danfoss": "https://www.danfoss.com/",
        },
        "Cluster TIC": {
            "Softtek": "https://www.softtek.com/",
            "Neoris": "https://www.neoris.com/",
            "Sony": "https://www.sony.com/",
        },
        "Cluster Energético": {
            "Cemex": "https://www.cemex.com/",
            "Ternium": "https://www.ternium.com/",
            "Schneider Electric": "https://www.se.com/",
        },
        "MIMEC (Medios Creativos)": {
            "Fósforo Cinema": "https://fosforo.tv/",
            "Imagyx": "https://www.imagyx.com/",
            "I2T2": "https://www.i2t2.gob.mx/",
        },
        "Cluster de Nanotecnología": {
            "Cemex": "https://www.cemex.com/",
            "Nemak": "https://www.nemak.com/",
            "Vitro": "https://www.vitro.com/",
        },
        "Cluster de Servicios Médicos": {
            "Hospital Muguerza": "https://www.christusmuguerza.com/",
            "Thermo Fisher Scientific": "https://www.thermofisher.com/",
            "Baxter México": "https://www.baxter.mx/",
        },
        "Cluster de Turismo": {
            "Ibo Adventures": "https://www.iboaventura.com/",  # example URL
            "Óptima Hoteles": "https://www.optimahoteles.com/",  # example URL
            "Monterrey Convention and Visitors Bureau (OCV)": "https://www.ocvmty.com/",
        },
        "Cluster de Herramentales": {
            "FAMA": "",  # Unknown URL; left blank
        },
        "Cluster Vivienda": {}
    }

    scraped = scrape_companies(company_websites)
    output_path = Path(__file__).with_name("scraped_data.json")
    with output_path.open("w", encoding="utf-8") as f:
        json.dump(scraped, f, indent=2, ensure_ascii=False)
    print(f"Scraping complete. Results saved to {output_path}")


if __name__ == "__main__":
    main()