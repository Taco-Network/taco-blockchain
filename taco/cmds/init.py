import click


@click.command("init", short_help="Create or migrate the configuration")
@click.option(
    "--create-certs",
    "-c",
    default=None,
    help="Create new SSL certificates based on CA in [directory]",
    type=click.Path(),
)
@click.pass_context
def init_cmd(ctx: click.Context, create_certs: str):
    """
    Create a new configuration or migrate from previous versions to current

    \b
    Follow these steps to create new certificates for a remote harvester:
    - Make a copy of your Farming Machine CA directory: ~/.taco/[version]/config/ssl/ca
    - Shut down all taco daemon processes with `taco stop all -d`
    - Run `taco init -c [directory]` on your remote harvester,
      where [directory] is the the copy of your Farming Machine CA directory
    - Get more details on remote harvester on Taco wiki:
      https://github.com/superdutyf3/taco-blockchain/wiki/Farming-on-many-machines
    """
    from pathlib import Path
    from .init_funcs import init

    init(Path(create_certs) if create_certs is not None else None, ctx.obj["root_path"])


if __name__ == "__main__":
    from .init_funcs import taco_init
    from taco.util.default_root import DEFAULT_ROOT_PATH

    taco_init(DEFAULT_ROOT_PATH)
